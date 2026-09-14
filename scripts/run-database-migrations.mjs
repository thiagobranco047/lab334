import { spawnSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { requireDatabaseUrl } from "./database-environment.mjs";

try {
  requireDatabaseUrl(process.env, "DATABASE_MIGRATION_URL");
} catch (error) {
  console.error(error instanceof Error ? error.message : "DATABASE_MIGRATION_URL is invalid");
  process.exitCode = 1;
  process.exit();
}

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const drizzleCli = path.resolve(scriptDirectory, "../node_modules/drizzle-kit/bin.cjs");
const result = spawnSync(process.execPath, [drizzleCli, "migrate"], { env: process.env, stdio: "inherit" });

if (result.error) {
  console.error("database migration command failed to start");
  process.exitCode = 1;
} else {
  process.exitCode = result.status ?? 1;
}
