import "server-only";
import { applicationCapabilityIds } from "@lab334/contracts";
import { and, eq } from "drizzle-orm";
import type { BusinessUnitGrant, BusinessUnitPermission, CapabilityId } from "@/domain/client-os/access";
import { getDatabase } from "@/server/db/client";
import { businessUnitGrants, type BusinessUnitGrantRow } from "@/server/db/schema";
import { DatabaseConfigurationError } from "@/server/db/errors";
import { getBusinessUnit } from "@/server/contracts/catalog";
import { GrantRepositoryError, type BusinessUnitGrantRepository, type GrantQueryResult, type GrantRepositoryErrorCode } from "./grant-repository";

export type GrantRowExecutor = (principalId: string, organizationId: string) => Promise<unknown[]>;
const permissions = new Set<BusinessUnitPermission>(["read", "draft", "execute"]);
const capabilities = new Set<string>(applicationCapabilityIds);
function isDate(value: unknown): value is Date { return value instanceof Date && !Number.isNaN(value.valueOf()); }

function validateRow(value: unknown, principalId: string, organizationId: string): BusinessUnitGrant {
  if (!value || typeof value !== "object") throw new Error("row is not an object");
  const row = value as BusinessUnitGrantRow;
  const canonicalBusinessUnit = typeof row.businessUnitId === "string" ? getBusinessUnit(row.businessUnitId) : undefined;
  if (typeof row.id !== "string" || row.principalId !== principalId || row.organizationId !== organizationId || !canonicalBusinessUnit || canonicalBusinessUnit.organizationId !== organizationId || row.status !== "active" || !Array.isArray(row.permissions) || !row.permissions.length || !row.permissions.every((item) => permissions.has(item as BusinessUnitPermission)) || !Array.isArray(row.capabilities) || !row.capabilities.every((item) => capabilities.has(item)) || !isDate(row.createdAt) || !isDate(row.updatedAt) || typeof row.createdBy !== "string" || row.revokedAt !== null || row.revokedBy !== null) throw new Error("invalid active grant row");
  return { userId: row.principalId, organizationId: row.organizationId, businessUnitId: row.businessUnitId, permissions: row.permissions as BusinessUnitPermission[], capabilities: row.capabilities as CapabilityId[] };
}

function classifyError(error: unknown): GrantRepositoryErrorCode {
  if (error instanceof DatabaseConfigurationError || (error && typeof error === "object" && "code" in error && error.code === "NOT_CONFIGURED")) return "NOT_CONFIGURED";
  const unavailableCodes = new Set(["ECONNREFUSED", "ECONNRESET", "ETIMEDOUT", "ENOTFOUND", "EAI_AGAIN"]);
  const pending: unknown[] = [error];
  const visited = new Set<unknown>();
  while (pending.length) {
    const current = pending.shift();
    if (!current || typeof current !== "object" || visited.has(current)) continue;
    visited.add(current);
    if ("code" in current && unavailableCodes.has(String(current.code))) return "UNAVAILABLE";
    if ("sourceError" in current) pending.push(current.sourceError);
    if ("cause" in current) pending.push(current.cause);
  }
  return "QUERY_FAILED";
}

async function executeQuery(principalId: string, organizationId: string) {
  return getDatabase().select().from(businessUnitGrants).where(and(eq(businessUnitGrants.principalId, principalId), eq(businessUnitGrants.organizationId, organizationId), eq(businessUnitGrants.status, "active")));
}

export function createDrizzleGrantRepository(executor: GrantRowExecutor = executeQuery): BusinessUnitGrantRepository {
  return { async listActiveByPrincipalAndOrganization(principalId, organizationId): Promise<GrantQueryResult> {
    let rows: unknown[];
    try { rows = await executor(principalId, organizationId); }
    catch (error) { return { ok: false, error: new GrantRepositoryError(classifyError(error), "listActiveByPrincipalAndOrganization", error) }; }
    try { return { ok: true, grants: rows.map((row) => validateRow(row, principalId, organizationId)) }; }
    catch (error) { return { ok: false, error: new GrantRepositoryError("INVALID_DATA", "listActiveByPrincipalAndOrganization", error) }; }
  } };
}
