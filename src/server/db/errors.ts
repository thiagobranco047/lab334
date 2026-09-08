export class DatabaseConfigurationError extends Error {
  readonly code = "NOT_CONFIGURED" as const;
  constructor(message = "DATABASE_URL is not configured") {
    super(message);
    this.name = "DatabaseConfigurationError";
  }
}
