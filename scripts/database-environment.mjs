const ALLOWED_DATABASE_VARIABLES = new Set(["DATABASE_URL", "DATABASE_MIGRATION_URL", "TEST_DATABASE_URL"]);

export function requireDatabaseUrl(environment, variableName) {
  if (!ALLOWED_DATABASE_VARIABLES.has(variableName)) {
    throw new Error("Unsupported database environment variable");
  }

  const value = environment[variableName]?.trim();
  if (!value) {
    throw new Error(`${variableName} is not configured with a valid PostgreSQL URL`);
  }

  try {
    const parsed = new URL(value);
    if (parsed.protocol !== "postgres:" && parsed.protocol !== "postgresql:") throw new Error("invalid protocol");
  } catch {
    throw new Error(`${variableName} is not configured with a valid PostgreSQL URL`);
  }

  return value;
}
