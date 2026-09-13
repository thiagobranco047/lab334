import "server-only";
import { getAllPlaybooks, getPlaybookBySlug, type Playbook } from "@/data/playbooks";
import { getBusinessUnit } from "@/server/contracts/catalog";

export interface EligiblePlaybook { resourceId: string; businessUnitId: string; name: string }

export function listEligiblePlaybooks(organizationId: string, businessUnitIds: readonly string[]): EligiblePlaybook[] {
  const allowed = new Set(businessUnitIds);
  return getAllPlaybooks().flatMap((playbook) => {
    const unit = getBusinessUnit(playbook.slug);
    return playbook.enabled && unit?.organizationId === organizationId && allowed.has(unit.id)
      ? [{ resourceId: playbook.slug, businessUnitId: unit.id, name: playbook.name }]
      : [];
  });
}

export function resolveSharedPlaybook(organizationId: string, businessUnitId: string, resourceId: string): Playbook | undefined {
  const unit = getBusinessUnit(businessUnitId);
  const playbook = getPlaybookBySlug(resourceId);
  if (!unit || unit.organizationId !== organizationId || resourceId !== businessUnitId || !playbook?.enabled) return undefined;
  return playbook;
}
