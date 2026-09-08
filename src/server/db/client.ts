import "server-only";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { DatabaseConfigurationError } from "./errors";
import * as schema from "./schema";

export function getDatabase() {
  const connectionString = process.env.DATABASE_URL?.trim();
  if (!connectionString) throw new DatabaseConfigurationError();
  return drizzle(neon(connectionString), { schema });
}
