import "server-only";
import type { Playbook } from "@/data/playbooks";
import type { ShareLinkMetadata, ShareLinkRepository } from "./repository";
import { listEligiblePlaybooks, resolveSharedPlaybook } from "./playbook-resource";
import { signalShareLinkFailure } from "./signal";
import { generateShareToken, hashShareToken } from "./token";

export type CreateShareLinkCommand = { organizationId: string; businessUnitId: string; resourceId: string; expiresAt: Date | null; actorId: string };
export type RevokeShareLinkCommand = { id: string; organizationId: string; businessUnitId: string; actorId: string };

export function createShareLinkService(repository: ShareLinkRepository, origin = "") {
  return {
    eligiblePlaybooks: listEligiblePlaybooks,
    async createPlaybookShareLink(command: CreateShareLinkCommand) {
      if (!resolveSharedPlaybook(command.organizationId, command.businessUnitId, command.resourceId)) return { ok: false as const, reason: "INVALID_RESOURCE" as const };
      if (command.expiresAt && command.expiresAt <= new Date()) return { ok: false as const, reason: "INVALID_EXPIRATION" as const };
      const rawToken = generateShareToken();
      const result = await repository.create({ tokenHash: hashShareToken(rawToken), organizationId: command.organizationId, businessUnitId: command.businessUnitId, resourceType: "playbook", resourceId: command.resourceId, expiresAt: command.expiresAt, createdBy: command.actorId });
      if (!result.ok) { signalShareLinkFailure(result.error); return { ok: false as const, reason: "PERSISTENCE" as const }; }
      return { ok: true as const, metadata: result.value, rawToken, urlPath: `${origin}/share/playbook/${rawToken}` };
    },
    async listShareLinks(organizationId: string, businessUnitIds: readonly string[]) {
      const result = await repository.listByOrganizationAndBusinessUnits(organizationId, businessUnitIds);
      if (!result.ok) { signalShareLinkFailure(result.error); return { ok: false as const, links: [] as ShareLinkMetadata[] }; }
      return { ok: true as const, links: result.value };
    },
    async revokeShareLink(command: RevokeShareLinkCommand) {
      const result = await repository.revoke(command.id, command.organizationId, command.businessUnitId, command.actorId, new Date());
      if (!result.ok) { signalShareLinkFailure(result.error); return { ok: false as const }; }
      return { ok: Boolean(result.value) } as const;
    },
    async resolvePublicPlaybook(rawToken: string): Promise<{ state: "available"; playbook: Playbook } | { state: "unavailable"; infrastructureFailure?: true }> {
      let tokenHash: string;
      try { tokenHash = hashShareToken(rawToken); } catch { return { state: "unavailable" }; }
      const result = await repository.findByTokenHash(tokenHash);
      if (!result.ok) { signalShareLinkFailure(result.error); return { state: "unavailable", infrastructureFailure: true }; }
      if (result.value.state !== "active" || result.value.link.resourceType !== "playbook") return { state: "unavailable" };
      const link = result.value.link;
      const playbook = resolveSharedPlaybook(link.organizationId, link.businessUnitId, link.resourceId);
      return playbook ? { state: "available", playbook } : { state: "unavailable" };
    },
  };
}
