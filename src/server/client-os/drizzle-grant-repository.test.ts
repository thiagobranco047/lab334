import { describe, expect, it, vi } from "vitest";
import { createDrizzleGrantRepository } from "./drizzle-grant-repository";

const activeRow = {
  id: "8db2dc47-4f00-472c-a78a-33d83a3f5901",
  principalId: "user_1",
  organizationId: "grupo-azimute",
  businessUnitId: "azimute-san",
  permissions: ["read"],
  capabilities: ["playbooks.read"],
  status: "active",
  createdAt: new Date("2026-09-08T12:00:00Z"),
  updatedAt: new Date("2026-09-08T12:00:00Z"),
  createdBy: "user_admin",
  revokedAt: null,
  revokedBy: null,
};

describe("Drizzle Business Unit grant repository", () => {
  it("distinguishes a valid empty query", async () => {
    const repository = createDrizzleGrantRepository(async () => []);
    await expect(repository.listActiveByPrincipalAndOrganization("user_1", "grupo-azimute")).resolves.toEqual({ ok: true, grants: [] });
  });

  it("returns a complete valid active grant", async () => {
    const repository = createDrizzleGrantRepository(async () => [activeRow]);
    const result = await repository.listActiveByPrincipalAndOrganization("user_1", "grupo-azimute");
    expect(result).toMatchObject({ ok: true, grants: [{ userId: "user_1", organizationId: "grupo-azimute", businessUnitId: "azimute-san", permissions: ["read"], capabilities: ["playbooks.read"] }] });
  });

  it.each([
    [Object.assign(new Error("not configured"), { code: "NOT_CONFIGURED" }), "NOT_CONFIGURED"],
    [Object.assign(new Error("connect failed"), { code: "ECONNREFUSED" }), "UNAVAILABLE"],
    [new Error("syntax error"), "QUERY_FAILED"],
  ])("maps infrastructure failures without returning empty grants", async (failure, code) => {
    const repository = createDrizzleGrantRepository(async () => { throw failure; });
    const result = await repository.listActiveByPrincipalAndOrganization("user_1", "grupo-azimute");
    expect(result).toMatchObject({ ok: false, error: { code } });
  });

  it("rejects all rows when any row is invalid", async () => {
    const repository = createDrizzleGrantRepository(async () => [activeRow, { ...activeRow, id: "other", capabilities: ["invented.read"] }]);
    const result = await repository.listActiveByPrincipalAndOrganization("user_1", "grupo-azimute");
    expect(result).toMatchObject({ ok: false, error: { code: "INVALID_DATA" } });
    expect(result).not.toHaveProperty("grants");
  });

  it("never accepts a revoked row as active data", async () => {
    const repository = createDrizzleGrantRepository(async () => [{ ...activeRow, status: "revoked", revokedAt: new Date(), revokedBy: "user_admin" }]);
    await expect(repository.listActiveByPrincipalAndOrganization("user_1", "grupo-azimute")).resolves.toMatchObject({ ok: false, error: { code: "INVALID_DATA" } });
  });
});
