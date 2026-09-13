"use server";
import { revalidatePath } from "next/cache";
import { requireShareLinkManagement, requireShareLinkManagementScopes } from "@/server/auth/clerk";
import { shareLinkService } from "@/server/share-links";

export type CreateShareLinkState = { urlPath?: string; error?: string };
const durations: Record<string, number | null> = { never: null, "24h": 86_400_000, "7d": 604_800_000, "30d": 2_592_000_000 };

export async function createShareLinkAction(organizationId: string, _previous: CreateShareLinkState, formData: FormData): Promise<CreateShareLinkState> {
  const businessUnitId = String(formData.get("businessUnitId") ?? "");
  const resourceId = String(formData.get("resourceId") ?? "");
  const duration = String(formData.get("duration") ?? "never");
  if (!(duration in durations) || !businessUnitId || !resourceId) return { error: "Dados inválidos." };
  const access = await requireShareLinkManagement(organizationId, businessUnitId);
  const milliseconds = durations[duration];
  const expiresAt = milliseconds === null ? null : new Date(Date.now() + milliseconds);
  const result = await shareLinkService.createPlaybookShareLink({ organizationId, businessUnitId, resourceId, expiresAt, actorId: access.userId });
  if (!result.ok) return { error: "Não foi possível criar o link." };
  revalidatePath(`/clientes/${organizationId}/settings/share-links`);
  return { urlPath: result.urlPath };
}

export async function revokeShareLinkAction(organizationId: string, formData: FormData): Promise<void> {
  const id = String(formData.get("id") ?? "");
  const businessUnitId = String(formData.get("businessUnitId") ?? "");
  if (!id || !businessUnitId) return;
  const access = await requireShareLinkManagement(organizationId, businessUnitId);
  await shareLinkService.revokeShareLink({ id, organizationId, businessUnitId, actorId: access.userId });
  revalidatePath(`/clientes/${organizationId}/settings/share-links`);
}

export async function loadShareLinkAdministration(organizationId: string) {
  const access = await requireShareLinkManagementScopes(organizationId);
  const playbooks = shareLinkService.eligiblePlaybooks(organizationId, access.businessUnitIds);
  const links = await shareLinkService.listShareLinks(organizationId, access.businessUnitIds);
  return { playbooks, links: links.links.map((link) => ({ id: link.id, businessUnitId: link.businessUnitId, resourceId: link.resourceId, status: link.status, expiresAt: link.expiresAt?.toISOString() ?? null, createdAt: link.createdAt.toISOString() })) };
}
