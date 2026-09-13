import { describe, expect, it, vi } from "vitest";
import { createDrizzleShareLinkRepository } from "./drizzle-repository";

const now = new Date("2026-09-13T12:00:00Z");
const row = (overrides = {}) => ({ id: "9f02c14a-8083-4d6f-86ad-41cdd66e8ce1", tokenHash: "a".repeat(64), organizationId: "grupo-azimute", businessUnitId: "azimute-san", resourceType: "playbook", resourceId: "azimute-san", status: "active", expiresAt: null, createdAt: now, createdBy: "user_1", revokedAt: null, revokedBy: null, ...overrides });

describe("Drizzle share link repository", () => {
  it("lists metadata only and permits multiple links for one resource", async () => {
    const list = vi.fn().mockResolvedValue([row(), row({ id: "8a15164f-e54f-4ae9-a535-090211843e47", tokenHash: "b".repeat(64) })]);
    const repository = createDrizzleShareLinkRepository({ create: vi.fn(), list, find: vi.fn(), revoke: vi.fn() }, () => now);
    const result = await repository.listByOrganizationAndBusinessUnits("grupo-azimute", ["azimute-san"]);
    expect(result.ok && result.value).toHaveLength(2);
    expect(result.ok && result.value.every((item) => !("rawToken" in item) && !("tokenHash" in item))).toBe(true);
  });

  it.each([
    [row({ status: "revoked", revokedAt: now, revokedBy: "user_1" }), "revoked"],
    [row({ expiresAt: new Date("2026-09-13T11:59:59Z") }), "expired"],
  ])("returns semantic lookup state", async (stored, state) => {
    const repository = createDrizzleShareLinkRepository({ create: vi.fn(), list: vi.fn(), find: vi.fn().mockResolvedValue([stored]), revoke: vi.fn() }, () => now);
    await expect(repository.findByTokenHash("a".repeat(64))).resolves.toEqual({ ok: true, value: { state } });
  });

  it("distinguishes a missing link from infrastructure failure", async () => {
    const missing = createDrizzleShareLinkRepository({ create: vi.fn(), list: vi.fn(), find: vi.fn().mockResolvedValue([]), revoke: vi.fn() }, () => now);
    await expect(missing.findByTokenHash("a".repeat(64))).resolves.toEqual({ ok: true, value: { state: "not_found" } });
    const failed = createDrizzleShareLinkRepository({ create: vi.fn(), list: vi.fn().mockRejectedValue(Object.assign(new Error("timeout"), { code: "UND_ERR_CONNECT_TIMEOUT" })), find: vi.fn(), revoke: vi.fn() }, () => now);
    const result = await failed.listByOrganizationAndBusinessUnits("grupo-azimute", ["azimute-san"]);
    expect(result).toMatchObject({ ok: false, error: { code: "UNAVAILABLE" } });
  });

  it("rejects the complete list when one row is invalid", async () => {
    const repository = createDrizzleShareLinkRepository({ create: vi.fn(), list: vi.fn().mockResolvedValue([row(), row({ resourceType: "unknown" })]), find: vi.fn(), revoke: vi.fn() }, () => now);
    const result = await repository.listByOrganizationAndBusinessUnits("grupo-azimute", ["azimute-san"]);
    expect(result).toMatchObject({ ok: false, error: { code: "INVALID_DATA" } });
  });
});
