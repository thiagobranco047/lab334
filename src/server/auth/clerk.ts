import "server-only";
import { auth } from "@clerk/nextjs/server";
import { notFound, redirect } from "next/navigation";
import type { CapabilityId } from "@/domain/client-os/access";
import { authorizeOrganization, resolveAuthorizedCapabilities, type ServerIdentity } from "@/server/client-os/policy";
import { authorizeBusinessUnit } from "@/server/client-os/policy";
import { listBusinessUnitGrants } from "@/server/client-os/grants";
import type { BusinessUnitPermission } from "@/domain/client-os/access";
import { getOrganizationMapping } from "@/server/client-os/organization-mapping";

export async function getServerIdentity(): Promise<ServerIdentity> {
  const session = await auth();
  const permissions = new Set<string>();
  if (session.has?.({ permission: "org:client_os:read" })) permissions.add("org:client_os:read");
  return { userId: session.userId, activeClerkOrganizationId: session.orgId ?? null, permissions };
}

export async function requireAuthenticatedUser() {
  const identity = await getServerIdentity();
  if (!identity.userId) redirect("/entrar");
  return identity;
}

export async function requireOrganizationAccess(organizationId: string) {
  const identity = await requireAuthenticatedUser();
  const mapping = getOrganizationMapping();
  const decision = authorizeOrganization(identity, organizationId, mapping);
  if (!decision.allowed) notFound();
  return { ...decision, authorizedCapabilities: resolveAuthorizedCapabilities(identity, organizationId, mapping, await listBusinessUnitGrants()) };
}

export async function requireOrganizationCapability(organizationId: string, capability: CapabilityId) {
  const access = await requireOrganizationAccess(organizationId);
  if (!access.authorizedCapabilities.includes(capability)) notFound();
  return access;
}

export async function listAuthorizedOrganizations() {
  const identity = await requireAuthenticatedUser();
  const mapping = getOrganizationMapping();
  return Object.keys(mapping).filter((organizationId) => authorizeOrganization(identity, organizationId, mapping).allowed);
}

export async function requireBusinessUnitAccess(organizationId: string, businessUnitId: string, permission: BusinessUnitPermission, capability?: CapabilityId) {
  const identity = await requireAuthenticatedUser();
  const decision = authorizeBusinessUnit(identity, organizationId, businessUnitId, getOrganizationMapping(), await listBusinessUnitGrants(), permission, capability);
  if (!decision.allowed) notFound();
  return decision;
}
