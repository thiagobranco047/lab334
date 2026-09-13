import "server-only";

export type ShareResourceType = "playbook" | "calendario" | "relatorio";
export type ShareLinkStatus = "active" | "revoked";
export type ShareLinkRepositoryErrorCode = "NOT_CONFIGURED" | "UNAVAILABLE" | "QUERY_FAILED" | "INVALID_DATA";

export interface ShareLinkMetadata {
  id: string;
  organizationId: string;
  businessUnitId: string;
  resourceType: ShareResourceType;
  resourceId: string;
  status: ShareLinkStatus;
  expiresAt: Date | null;
  createdAt: Date;
  createdBy: string;
  revokedAt: Date | null;
  revokedBy: string | null;
}

export interface CreateShareLinkRecord {
  tokenHash: string;
  organizationId: string;
  businessUnitId: string;
  resourceType: ShareResourceType;
  resourceId: string;
  expiresAt: Date | null;
  createdBy: string;
}

export class ShareLinkRepositoryError extends Error {
  constructor(public readonly code: ShareLinkRepositoryErrorCode, public readonly operation: string, public readonly safeCause?: unknown) {
    super(`Share link repository failed: ${code}`);
    this.name = "ShareLinkRepositoryError";
  }
}

export type ShareLinkResult<T> = { ok: true; value: T } | { ok: false; error: ShareLinkRepositoryError };
export type ShareLinkLookupState = "not_found" | "revoked" | "expired";
export type ShareLinkLookupResult = ShareLinkResult<{ state: "active"; link: ShareLinkMetadata } | { state: ShareLinkLookupState }>;

export interface ShareLinkRepository {
  create(input: CreateShareLinkRecord): Promise<ShareLinkResult<ShareLinkMetadata>>;
  listByOrganizationAndBusinessUnits(organizationId: string, businessUnitIds: readonly string[]): Promise<ShareLinkResult<ShareLinkMetadata[]>>;
  findByTokenHash(tokenHash: string): Promise<ShareLinkLookupResult>;
  revoke(id: string, organizationId: string, businessUnitId: string, revokedBy: string, revokedAt: Date): Promise<ShareLinkResult<ShareLinkMetadata | null>>;
}
