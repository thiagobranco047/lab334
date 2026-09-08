import { spawnSync } from "node:child_process";
import path from "node:path";
import { describe, expect, it } from "vitest";

describe("database connection check", () => {
  it("fails safely without DATABASE_URL", () => {
    const result = spawnSync(process.execPath, [path.resolve("scripts/check-database.mjs")], { env: { PATH: process.env.PATH, NODE_ENV: "test" }, encoding: "utf8" });
    expect(result.status).not.toBe(0);
    expect(result.stderr).toContain("DATABASE_URL is not configured");
  });
});
