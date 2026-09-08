import { neon } from "@neondatabase/serverless";

const connectionString = process.env.DATABASE_URL?.trim();
if (!connectionString) {
  console.error("DATABASE_URL is not configured");
  process.exitCode = 1;
} else {
  try {
    const sql = neon(connectionString);
    await sql`select 1 as connection_ok`;
    console.log("database connection ok");
  } catch {
    console.error("database connection failed");
    process.exitCode = 1;
  }
}
