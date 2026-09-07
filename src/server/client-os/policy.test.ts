import { describe, expect, it } from "vitest";
import { authorizeBusinessUnit, authorizeOrganization, resolveAuthorizedCapabilities } from "./policy";

const identity = {
  userId: "user_1",
  activeClerkOrganizationId: "org_clerk_azimute",
  permissions: new Set(["org:client_os:read"]),
};

describe("Client OS authorization policy", () => {
  it("denies organization access when the active Clerk organization does not match", () => {
    expect(authorizeOrganization(identity, "grupo-azimute", { "grupo-azimute": "org_other" })).toEqual({ allowed: false });
  });

  it("denies organization access without the explicit permission", () => {
    expect(authorizeOrganization({ ...identity, permissions: new Set() }, "grupo-azimute", { "grupo-azimute": "org_clerk_azimute" })).toEqual({ allowed: false });
  });

  it("allows the mapped organization without returning its Clerk id", () => {
    expect(authorizeOrganization(identity, "grupo-azimute", { "grupo-azimute": "org_clerk_azimute" })).toEqual({ allowed: true, organizationId: "grupo-azimute" });
  });

  it("denies a business unit when no persistent grant exists", () => {
    expect(authorizeBusinessUnit(identity, "grupo-azimute", "azimute-san", { "grupo-azimute": "org_clerk_azimute" }, [])).toEqual({ allowed: false });
  });

  it("requires matching organization, business unit, permission and capability", () => {
    const grants = [{ userId: "user_1", organizationId: "grupo-azimute", businessUnitId: "azimute-san", permissions: ["read"], capabilities: ["playbooks.read"] }] as const;
    expect(authorizeBusinessUnit(identity, "grupo-azimute", "azimute-san", { "grupo-azimute": "org_clerk_azimute" }, grants, "read", "playbooks.read")).toEqual({ allowed: true, organizationId: "grupo-azimute", businessUnitId: "azimute-san", capabilities: ["playbooks.read"] });
    expect(authorizeBusinessUnit(identity, "grupo-azimute", "san", { "grupo-azimute": "org_clerk_azimute" }, grants, "read", "playbooks.read")).toEqual({ allowed: false });
  });

  it("resolves organization navigation capabilities only from explicit readable BU grants", () => {
    const grants = [{ userId: "user_1", organizationId: "grupo-azimute", businessUnitId: "azimute-san", permissions: ["read"], capabilities: ["playbooks.read"] }] as const;
    expect(resolveAuthorizedCapabilities(identity, "grupo-azimute", { "grupo-azimute": "org_clerk_azimute" }, grants)).toEqual(["playbooks.read"]);
    expect(resolveAuthorizedCapabilities(identity, "joinsul", { joinsul: "org_other" }, grants)).toEqual([]);
  });
});
