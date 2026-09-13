import { describe, expect, it } from "vitest";
import { generateShareToken, hashShareToken } from "./token";

describe("share token", () => {
  it("generates independent URL-safe tokens with 256 bits", () => {
    const first = generateShareToken();
    const second = generateShareToken();
    expect(first).toMatch(/^[A-Za-z0-9_-]{43}$/);
    expect(Buffer.from(first, "base64url")).toHaveLength(32);
    expect(second).not.toBe(first);
  });

  it("hashes valid tokens deterministically and rejects malformed input", () => {
    const token = generateShareToken();
    expect(hashShareToken(token)).toMatch(/^[0-9a-f]{64}$/);
    expect(hashShareToken(token)).toBe(hashShareToken(token));
    expect(() => hashShareToken("slug-simples")).toThrow(/invalid share token/i);
  });
});
