import type { BusinessUnitGrant, CapabilityId } from "@/domain/client-os/access";
import type { OrganizationMapping } from "./organization-mapping";
import { authorizeOrganization, type ServerIdentity } from "./policy";
import type { BusinessUnitGrantRepository } from "./grant-repository";
import { createAuthorizationSignal, logAuthorizationSignal, type AuthorizationSignalSink } from "./authorization-signal";

export type ClientOsAuthorization =
  | { organizationAllowed: false; grantsResolved: false; authorizedBusinessUnitIds: []; authorizedCapabilities: []; grants: [] }
  | { organizationAllowed: true; organizationId: string; grantsResolved: boolean; authorizedBusinessUnitIds: string[]; authorizedCapabilities: CapabilityId[]; grants: BusinessUnitGrant[] };

export async function resolveClientOsAuthorization(identity: ServerIdentity, organizationId: string, mapping: OrganizationMapping, repository: BusinessUnitGrantRepository, signal: AuthorizationSignalSink = logAuthorizationSignal): Promise<ClientOsAuthorization> {
  const organization = authorizeOrganization(identity, organizationId, mapping);
  if (!organization.allowed || !identity.userId) return { organizationAllowed: false, grantsResolved: false, authorizedBusinessUnitIds: [], authorizedCapabilities: [], grants: [] };
  const result = await repository.listActiveByPrincipalAndOrganization(identity.userId, organizationId);
  if (!result.ok) {
    signal(createAuthorizationSignal(result.error.code, result.error.operation, organizationId));
    return { organizationAllowed: true, organizationId, grantsResolved: false, authorizedBusinessUnitIds: [], authorizedCapabilities: [], grants: [] };
  }
  const grants = result.grants.filter((grant) => grant.userId === identity.userId && grant.organizationId === organizationId);
  const readable = grants.filter((grant) => grant.permissions.includes("read"));
  return {
    organizationAllowed: true,
    organizationId,
    grantsResolved: true,
    authorizedBusinessUnitIds: [...new Set(readable.map((grant) => grant.businessUnitId))].sort(),
    authorizedCapabilities: [...new Set(readable.flatMap((grant) => grant.capabilities))].sort(),
    grants,
  };
}
