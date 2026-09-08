export type { AccessMode } from "@lab334/contracts";
export type CapabilityId = import("@lab334/contracts").ApplicationCapabilityId;
export type BusinessUnitPermission = "read" | "draft" | "execute";

export interface BusinessUnitGrant {
  userId: string;
  organizationId: string;
  businessUnitId: string;
  permissions: readonly BusinessUnitPermission[];
  capabilities: readonly CapabilityId[];
}
