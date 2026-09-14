import { neon } from "@neondatabase/serverless";
import { requireDatabaseUrl } from "./database-environment.mjs";

const variableName = process.argv[2];
let connectionString;

try {
  connectionString = requireDatabaseUrl(process.env, variableName);
} catch (error) {
  console.error(error instanceof Error ? error.message : "database configuration is invalid");
  process.exitCode = 1;
}

if (connectionString) {
  try {
    const sql = neon(connectionString);
    await sql`select 1 as connection_ok`;
    console.log("database connection ok");
  } catch {
    console.error("database connection failed");
    process.exitCode = 1;
  }
}
