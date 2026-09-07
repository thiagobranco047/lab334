import { describe, expect, it } from "vitest";
import { parseOrganizationMapping } from "./organization-mapping";

describe("organization mapping", () => {
  it("parses canonical LAB ids to server-only Clerk ids", () => {
    expect(parseOrganizationMapping("grupo-azimute=org_123,joinsul=org_456")).toEqual({ "grupo-azimute": "org_123", joinsul: "org_456" });
  });
  it("rejects malformed and duplicate mappings", () => {
    expect(() => parseOrganizationMapping("grupo-azimute")).toThrow();
    expect(() => parseOrganizationMapping("a=org_1,b=org_1")).toThrow();
  });
});
