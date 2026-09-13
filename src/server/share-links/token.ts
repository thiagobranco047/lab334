import "server-only";
import { createHash, randomBytes } from "node:crypto";

const TOKEN_PATTERN = /^[A-Za-z0-9_-]{43}$/;

export function generateShareToken(): string {
  return randomBytes(32).toString("base64url");
}

export function hashShareToken(rawToken: string): string {
  if (!TOKEN_PATTERN.test(rawToken) || Buffer.from(rawToken, "base64url").length !== 32) {
    throw new Error("Invalid share token");
  }
  return createHash("sha256").update(rawToken, "utf8").digest("hex");
}
