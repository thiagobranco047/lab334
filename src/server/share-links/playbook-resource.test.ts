import { describe, expect, it } from "vitest";
import { listEligiblePlaybooks, resolveSharedPlaybook } from "./playbook-resource";

describe("share playbook resource", () => {
  it("binds playbooks to canonical Business Unit scope", () => {
    expect(listEligiblePlaybooks("grupo-azimute", ["azimute-san"])).toEqual([{ resourceId: "azimute-san", businessUnitId: "azimute-san", name: "Azimute SAN" }]);
    expect(resolveSharedPlaybook("grupo-azimute", "azimute-san", "azimute-tech")).toBeUndefined();
    expect(listEligiblePlaybooks("grupo-azimute", ["grupo-azimute"])).toEqual([]);
  });
});
