import { spawnSync } from "node:child_process";
import path from "node:path";
import { describe, expect, it } from "vitest";

describe("database environment guard", () => {
  it("accepts PostgreSQL connection URLs", async () => {
    const { requireDatabaseUrl } = await import("./database-environment.mjs");

    expect(requireDatabaseUrl({ DATABASE_URL: "postgres://user:pass@host/db" }, "DATABASE_URL")).toBe("postgres://user:pass@host/db");
    expect(requireDatabaseUrl({ DATABASE_URL: " postgresql://user:pass@host/db " }, "DATABASE_URL")).toBe("postgresql://user:pass@host/db");
  });

  it.each([undefined, "", "   ", "not-a-url", "https://secret.example/database"])('rejects invalid value %j without exposing it', async (value) => {
    const { requireDatabaseUrl } = await import("./database-environment.mjs");
    const environment = value === undefined ? {} : { DATABASE_URL: value };

    expect(() => requireDatabaseUrl(environment, "DATABASE_URL")).toThrow("DATABASE_URL is not configured with a valid PostgreSQL URL");
  });

  it("refuses migrations when the direct URL is absent", () => {
    const result = spawnSync(process.execPath, [path.resolve("scripts/run-database-migrations.mjs")], {
      env: { PATH: process.env.PATH, NODE_ENV: "test", DATABASE_URL: "postgresql://runtime:secret@runtime.example/neondb" },
      encoding: "utf8",
    });

    expect(result.status).not.toBe(0);
    expect(result.stderr).toContain("DATABASE_MIGRATION_URL is not configured with a valid PostgreSQL URL");
    expect(result.stderr).not.toContain("runtime:secret");
  });
});
