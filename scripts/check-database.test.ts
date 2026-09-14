import { spawnSync } from "node:child_process";
import path from "node:path";
import { describe, expect, it } from "vitest";

describe("database connection check", () => {
  it.each(["DATABASE_URL", "DATABASE_MIGRATION_URL"])("fails safely without %s", (variableName) => {
    const result = spawnSync(process.execPath, [path.resolve("scripts/check-database.mjs"), variableName], { env: { PATH: process.env.PATH, NODE_ENV: "test" }, encoding: "utf8" });
    expect(result.status).not.toBe(0);
    expect(result.stderr).toContain(`${variableName} is not configured with a valid PostgreSQL URL`);
  });

  it("rejects malformed configuration without exposing it", () => {
    const secret = "https://operator:do-not-print@example.com/neondb";
    const result = spawnSync(process.execPath, [path.resolve("scripts/check-database.mjs"), "DATABASE_MIGRATION_URL"], {
      env: { PATH: process.env.PATH, NODE_ENV: "test", DATABASE_MIGRATION_URL: secret },
      encoding: "utf8",
    });

    expect(result.status).not.toBe(0);
    expect(result.stderr).toContain("DATABASE_MIGRATION_URL is not configured with a valid PostgreSQL URL");
    expect(result.stderr).not.toContain("do-not-print");
  });

  it("rejects unsupported variable selectors", () => {
    const result = spawnSync(process.execPath, [path.resolve("scripts/check-database.mjs"), "UNSAFE_DATABASE_URL"], {
      env: { PATH: process.env.PATH, NODE_ENV: "test", UNSAFE_DATABASE_URL: "postgresql://user:secret@example.com/neondb" },
      encoding: "utf8",
    });

    expect(result.status).not.toBe(0);
    expect(result.stderr).toContain("Unsupported database environment variable");
    expect(result.stderr).not.toContain("secret");
  });
});
