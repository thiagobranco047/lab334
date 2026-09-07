import type { BusinessUnitGrant, BusinessUnitPermission, CapabilityId } from "@/domain/client-os/access";
import type { OrganizationMapping } from "./organization-mapping";

export interface ServerIdentity {
  userId: string | null;
  activeClerkOrganizationId: string | null;
  permissions: ReadonlySet<string>;
}

export function authorizeOrganization(identity: ServerIdentity, organizationId: string, mapping: OrganizationMapping) {
  const mappedClerkId = mapping[organizationId];
  if (!identity.userId || !mappedClerkId || identity.activeClerkOrganizationId !== mappedClerkId || !identity.permissions.has("org:client_os:read")) return { allowed: false as const };
  return { allowed: true as const, organizationId };
}

export function authorizeBusinessUnit(
  identity: ServerIdentity,
  organizationId: string,
  businessUnitId: string,
  mapping: OrganizationMapping,
  grants: readonly BusinessUnitGrant[],
  permission: BusinessUnitPermission = "read",
  capability?: CapabilityId,
) {
  if (!authorizeOrganization(identity, organizationId, mapping).allowed || !identity.userId) return { allowed: false as const };
  const grant = grants.find((candidate) => candidate.userId === identity.userId && candidate.organizationId === organizationId && candidate.businessUnitId === businessUnitId);
  if (!grant || !grant.permissions.includes(permission) || (capability && !grant.capabilities.includes(capability))) return { allowed: false as const };
  return { allowed: true as const, organizationId, businessUnitId, capabilities: [...grant.capabilities] };
}

export function resolveAuthorizedCapabilities(identity: ServerIdentity, organizationId: string, mapping: OrganizationMapping, grants: readonly BusinessUnitGrant[]): CapabilityId[] {
  if (!authorizeOrganization(identity, organizationId, mapping).allowed || !identity.userId) return [];
  return [...new Set(grants.filter((grant) => grant.userId === identity.userId && grant.organizationId === organizationId && grant.permissions.includes("read")).flatMap((grant) => grant.capabilities))];
}
