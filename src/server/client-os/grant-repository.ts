import type { BusinessUnitGrant } from "@/domain/client-os/access";

export type GrantRepositoryErrorCode = "NOT_CONFIGURED" | "UNAVAILABLE" | "QUERY_FAILED" | "INVALID_DATA";

export class GrantRepositoryError extends Error {
  constructor(public readonly code: GrantRepositoryErrorCode, public readonly operation: string, public readonly safeCause?: unknown) {
    super(`Business Unit grant repository failed: ${code}`);
    this.name = "GrantRepositoryError";
  }
}

export type GrantQueryResult = { ok: true; grants: BusinessUnitGrant[] } | { ok: false; error: GrantRepositoryError };

export interface BusinessUnitGrantRepository {
  listActiveByPrincipalAndOrganization(principalId: string, organizationId: string): Promise<GrantQueryResult>;
}
