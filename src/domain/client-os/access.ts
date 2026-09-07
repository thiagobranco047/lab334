export type AccessMode = "public" | "authenticated" | "restricted" | "share_link";
export type CapabilityId = "intelligence.read" | "playbooks.read" | "files.read" | "reports.read" | "calendars.read";
export type BusinessUnitPermission = "read" | "draft" | "execute";

export interface BusinessUnitGrant {
  userId: string;
  organizationId: string;
  businessUnitId: string;
  permissions: readonly BusinessUnitPermission[];
  capabilities: readonly CapabilityId[];
}
