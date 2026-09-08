import "server-only";
import { applicationCapabilityIds, type ApplicationCapabilityId } from "@lab334/contracts";
import { businessUnits, organizations } from "@lab334/contracts/server";

export { businessUnits, organizations };

export function getOrganization(id: string) {
  return organizations.find((organization) => organization.id === id);
}

export function getBusinessUnit(id: string) {
  return businessUnits.find((businessUnit) => businessUnit.id === id);
}

export function isApplicationCapability(value: string): value is ApplicationCapabilityId {
  return (applicationCapabilityIds as readonly string[]).includes(value);
}
