import { describe, expect, it, vi } from "vitest";
import type { BusinessUnitGrant } from "@/domain/client-os/access";
import { GrantRepositoryError, type BusinessUnitGrantRepository, type GrantRepositoryErrorCode } from "./grant-repository";
import { resolveClientOsAuthorization } from "./authorization-service";

const mapping = { "grupo-azimute": "org_clerk_azimute", joinsul: "org_clerk_joinsul" };
const identity = { userId: "user_1", activeClerkOrganizationId: "org_clerk_azimute", permissions: new Set(["org:client_os:read"]) };
const grant: BusinessUnitGrant = { userId: "user_1", organizationId: "grupo-azimute", businessUnitId: "azimute-san", permissions: ["read"], capabilities: ["playbooks.read"] };
const repository = (result: Awaited<ReturnType<BusinessUnitGrantRepository["listActiveByPrincipalAndOrganization"]>>): BusinessUnitGrantRepository => ({ listActiveByPrincipalAndOrganization: vi.fn(async () => result) });

describe("Client OS authorization service", () => {
  it("denies a user without Organization and does not query grants", async () => {
    const repo = repository({ ok: true, grants: [grant] });
    const result = await resolveClientOsAuthorization({ ...identity, activeClerkOrganizationId: null }, "grupo-azimute", mapping, repo, vi.fn());
    expect(result.organizationAllowed).toBe(false);
    expect(repo.listActiveByPrincipalAndOrganization).not.toHaveBeenCalled();
  });

  it("denies an Organization without permission", async () => {
    const result = await resolveClientOsAuthorization({ ...identity, permissions: new Set() }, "grupo-azimute", mapping, repository({ ok: true, grants: [grant] }), vi.fn());
    expect(result.organizationAllowed).toBe(false);
  });

  it("keeps overview access separate from an empty Business Unit result", async () => {
    const result = await resolveClientOsAuthorization(identity, "grupo-azimute", mapping, repository({ ok: true, grants: [] }), vi.fn());
    expect(result).toMatchObject({ organizationAllowed: true, grantsResolved: true, grants: [], authorizedBusinessUnitIds: [], authorizedCapabilities: [] });
  });

  it("allows only the exact active grant permission and capability", async () => {
    const result = await resolveClientOsAuthorization(identity, "grupo-azimute", mapping, repository({ ok: true, grants: [grant] }), vi.fn());
    expect(result.authorizedBusinessUnitIds).toEqual(["azimute-san"]);
    expect(result.authorizedCapabilities).toEqual(["playbooks.read"]);
    expect(result.grants).toEqual([grant]);
  });

  it("does not use grants from another Business Unit or Organization", async () => {
    const otherGrants = [{ ...grant, businessUnitId: "azimute-tech" }, { ...grant, organizationId: "joinsul", businessUnitId: "joinsul" }];
    const result = await resolveClientOsAuthorization(identity, "grupo-azimute", mapping, repository({ ok: true, grants: otherGrants }), vi.fn());
    expect(result.grants?.some((item) => item.businessUnitId === "azimute-san")).toBe(false);
  });

  it("does not invent a missing capability", async () => {
    const result = await resolveClientOsAuthorization(identity, "grupo-azimute", mapping, repository({ ok: true, grants: [{ ...grant, capabilities: [] }] }), vi.fn());
    expect(result.authorizedCapabilities).not.toContain("playbooks.read");
  });

  it("does not give an internal LAB principal a bypass", async () => {
    const internalIdentity = { ...identity, userId: "lab_internal" };
    const result = await resolveClientOsAuthorization(internalIdentity, "grupo-azimute", mapping, repository({ ok: true, grants: [] }), vi.fn());
    expect(result.authorizedBusinessUnitIds).toEqual([]);
  });

  it.each(["NOT_CONFIGURED", "UNAVAILABLE", "QUERY_FAILED", "INVALID_DATA"] as GrantRepositoryErrorCode[])("denies grant-derived access and signals %s", async (code) => {
    const signal = vi.fn();
    const result = await resolveClientOsAuthorization(identity, "grupo-azimute", mapping, repository({ ok: false, error: new GrantRepositoryError(code, "query") }), signal);
    expect(result).toMatchObject({ organizationAllowed: true, grantsResolved: false, authorizedBusinessUnitIds: [], authorizedCapabilities: [] });
    expect(signal).toHaveBeenCalledWith(expect.objectContaining({ code, organizationId: "grupo-azimute" }));
  });
});
