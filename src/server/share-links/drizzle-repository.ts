import "server-only";
import { and, eq, inArray } from "drizzle-orm";
import { getBusinessUnit } from "@/server/contracts/catalog";
import { getDatabase } from "@/server/db/client";
import { DatabaseConfigurationError } from "@/server/db/errors";
import { shareLinks, type ShareLinkRow } from "@/server/db/schema";
import { ShareLinkRepositoryError, type CreateShareLinkRecord, type ShareLinkMetadata, type ShareLinkRepository, type ShareLinkRepositoryErrorCode, type ShareLinkResult } from "./repository";

export interface ShareLinkExecutors {
  create(input: CreateShareLinkRecord): Promise<unknown[]>;
  list(organizationId: string, businessUnitIds: readonly string[]): Promise<unknown[]>;
  find(tokenHash: string): Promise<unknown[]>;
  revoke(id: string, organizationId: string, businessUnitId: string, revokedBy: string, revokedAt: Date): Promise<unknown[]>;
}

const resourceTypes = new Set(["playbook", "calendario", "relatorio"]);
const hashPattern = /^[0-9a-f]{64}$/;
const isDate = (value: unknown): value is Date => value instanceof Date && !Number.isNaN(value.valueOf());

function metadata(value: unknown): ShareLinkMetadata {
  if (!value || typeof value !== "object") throw new Error("row is not an object");
  const row = value as ShareLinkRow;
  const unit = typeof row.businessUnitId === "string" ? getBusinessUnit(row.businessUnitId) : undefined;
  if (typeof row.id !== "string" || !hashPattern.test(row.tokenHash) || typeof row.organizationId !== "string" || !unit || unit.organizationId !== row.organizationId || !resourceTypes.has(row.resourceType) || typeof row.resourceId !== "string" || !row.resourceId || !["active", "revoked"].includes(row.status) || (row.expiresAt !== null && !isDate(row.expiresAt)) || !isDate(row.createdAt) || typeof row.createdBy !== "string" || (row.status === "active" && (row.revokedAt !== null || row.revokedBy !== null)) || (row.status === "revoked" && (!isDate(row.revokedAt) || typeof row.revokedBy !== "string"))) throw new Error("invalid share link row");
  return { id: row.id, organizationId: row.organizationId, businessUnitId: row.businessUnitId, resourceType: row.resourceType, resourceId: row.resourceId, status: row.status, expiresAt: row.expiresAt, createdAt: row.createdAt, createdBy: row.createdBy, revokedAt: row.revokedAt, revokedBy: row.revokedBy };
}

function classify(error: unknown): ShareLinkRepositoryErrorCode {
  if (error instanceof DatabaseConfigurationError || (error && typeof error === "object" && "code" in error && error.code === "NOT_CONFIGURED")) return "NOT_CONFIGURED";
  const codes = new Set(["ECONNREFUSED", "ECONNRESET", "ETIMEDOUT", "ENOTFOUND", "EAI_AGAIN", "UND_ERR_CONNECT_TIMEOUT", "UND_ERR_HEADERS_TIMEOUT", "UND_ERR_SOCKET"]);
  const transientHttp = /(?:HTTP status|status(?: code)?)\s*[:(]?\s*(408|429|5\d\d)\b/i;
  const pending: unknown[] = [error];
  const visited = new Set<unknown>();
  while (pending.length) {
    const current = pending.shift();
    if (!current || typeof current !== "object" || visited.has(current)) continue;
    visited.add(current);
    if ("code" in current && codes.has(String(current.code))) return "UNAVAILABLE";
    if ("message" in current && typeof current.message === "string" && transientHttp.test(current.message)) return "UNAVAILABLE";
    if ("sourceError" in current) pending.push(current.sourceError);
    if ("cause" in current) pending.push(current.cause);
  }
  return "QUERY_FAILED";
}

const productionExecutors: ShareLinkExecutors = {
  create: (input) => getDatabase().insert(shareLinks).values(input).returning(),
  list: (organizationId, businessUnitIds) => businessUnitIds.length ? getDatabase().select().from(shareLinks).where(and(eq(shareLinks.organizationId, organizationId), inArray(shareLinks.businessUnitId, [...businessUnitIds]))) : Promise.resolve([]),
  find: (tokenHash) => getDatabase().select().from(shareLinks).where(eq(shareLinks.tokenHash, tokenHash)).limit(1),
  revoke: (id, organizationId, businessUnitId, revokedBy, revokedAt) => getDatabase().update(shareLinks).set({ status: "revoked", revokedAt, revokedBy }).where(and(eq(shareLinks.id, id), eq(shareLinks.organizationId, organizationId), eq(shareLinks.businessUnitId, businessUnitId), eq(shareLinks.status, "active"))).returning(),
};

export function createDrizzleShareLinkRepository(executors: ShareLinkExecutors = productionExecutors, now: () => Date = () => new Date()): ShareLinkRepository {
  const execute = async <T>(operation: string, query: () => Promise<unknown[]>, map: (rows: unknown[]) => T): Promise<ShareLinkResult<T>> => {
    let rows: unknown[];
    try { rows = await query(); } catch (error) { return { ok: false, error: new ShareLinkRepositoryError(classify(error), operation, error) }; }
    try { return { ok: true, value: map(rows) }; } catch (error) { return { ok: false, error: new ShareLinkRepositoryError("INVALID_DATA", operation, error) }; }
  };
  return {
    create: (input) => execute("create", () => executors.create(input), (rows) => { if (rows.length !== 1) throw new Error("create did not return one row"); return metadata(rows[0]); }),
    listByOrganizationAndBusinessUnits: (organizationId, businessUnitIds) => execute("list", () => executors.list(organizationId, businessUnitIds), (rows) => rows.map(metadata)),
    findByTokenHash: async (tokenHash) => {
      const result = await execute("find", () => executors.find(tokenHash), (rows) => rows);
      if (!result.ok) return result;
      try {
        if (!result.value.length) return { ok: true, value: { state: "not_found" } };
        if (result.value.length !== 1) throw new Error("token hash is not unique");
        const link = metadata(result.value[0]);
        if (link.status === "revoked") return { ok: true, value: { state: "revoked" } };
        if (link.expiresAt && link.expiresAt <= now()) return { ok: true, value: { state: "expired" } };
        return { ok: true, value: { state: "active", link } };
      } catch (error) { return { ok: false, error: new ShareLinkRepositoryError("INVALID_DATA", "find", error) }; }
    },
    revoke: (id, organizationId, businessUnitId, revokedBy, revokedAt) => execute("revoke", () => executors.revoke(id, organizationId, businessUnitId, revokedBy, revokedAt), (rows) => { if (rows.length > 1) throw new Error("revoke returned multiple rows"); return rows.length ? metadata(rows[0]) : null; }),
  };
}
