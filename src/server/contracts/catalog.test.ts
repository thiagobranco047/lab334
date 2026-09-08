import { describe, expect, it, vi } from "vitest";
import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import path from "node:path";
vi.mock("server-only", () => ({}));
import { getBusinessUnit, getOrganization, isApplicationCapability } from "./catalog";

describe("vendored LAB contracts", () => {
  it("matches the committed SHA-256", () => {
    const archive = path.resolve("vendor/contracts/lab334-contracts-0.1.5.tgz");
    const expected = readFileSync(`${archive}.sha256`, "utf8").trim().split(/\s+/)[0];
    expect(createHash("sha256").update(readFileSync(archive)).digest("hex")).toBe(expected);
  });

  it("resolves canonical Organization and Business Unit ids", () => {
    expect(getOrganization("grupo-azimute")?.id).toBe("grupo-azimute");
    expect(getBusinessUnit("azimute-san")?.organizationId).toBe("grupo-azimute");
  });

  it("recognizes only canonical application capabilities", () => {
    expect(isApplicationCapability("playbooks.read")).toBe(true);
    expect(isApplicationCapability("made-up.read")).toBe(false);
  });
});
