import "server-only";
import type { BusinessUnitGrant } from "@/domain/client-os/access";

// Persistent grants will be supplied by the future LAB Data Platform.
// An empty repository is intentional: Business Units deny by default.
export async function listBusinessUnitGrants(): Promise<readonly BusinessUnitGrant[]> {
  return [];
}
