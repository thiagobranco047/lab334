import { describe, expect, it, vi } from "vitest";
import { createShareLinkService } from "./service";
import type { ShareLinkMetadata, ShareLinkRepository } from "./repository";

const metadata: ShareLinkMetadata = { id: "id_1", organizationId: "grupo-azimute", businessUnitId: "azimute-san", resourceType: "playbook", resourceId: "azimute-san", status: "active", expiresAt: null, createdAt: new Date(), createdBy: "user_1", revokedAt: null, revokedBy: null };

describe("share link service", () => {
  it("passes only a hash to persistence and returns the raw URL once", async () => {
    const create = vi.fn().mockResolvedValue({ ok: true, value: metadata });
    const repository = { create, listByOrganizationAndBusinessUnits: vi.fn(), findByTokenHash: vi.fn(), revoke: vi.fn() } as ShareLinkRepository;
    const result = await createShareLinkService(repository).createPlaybookShareLink({ organizationId: "grupo-azimute", businessUnitId: "azimute-san", resourceId: "azimute-san", expiresAt: null, actorId: "user_1" });
    expect(result.ok).toBe(true);
    expect(create.mock.calls[0][0]).toMatchObject({ tokenHash: expect.stringMatching(/^[0-9a-f]{64}$/) });
    expect(create.mock.calls[0][0]).not.toHaveProperty("rawToken");
    if (result.ok) expect(result.urlPath).toBe(`/share/playbook/${result.rawToken}`);
  });

  it("lists metadata without token material", async () => {
    const repository = { create: vi.fn(), listByOrganizationAndBusinessUnits: vi.fn().mockResolvedValue({ ok: true, value: [metadata] }), findByTokenHash: vi.fn(), revoke: vi.fn() } as ShareLinkRepository;
    const result = await createShareLinkService(repository).listShareLinks("grupo-azimute", ["azimute-san"]);
    expect(result.links.every((item) => !("rawToken" in item) && !("tokenHash" in item))).toBe(true);
  });
});
