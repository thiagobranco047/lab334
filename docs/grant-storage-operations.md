# Business Unit grant storage operations

## Environment setup

`DATABASE_URL` is the server-only runtime and migration connection string. `TEST_DATABASE_URL` is optional and is used only by integration tests. Never expose either with a `NEXT_PUBLIC_` prefix and never commit a value.

For local development, create a non-production Neon branch/database and place its pooled connection string in `.env.local`. For Vercel, connect the Neon Marketplace integration or add `DATABASE_URL` as an encrypted project variable separately for Preview and Production. Use distinct Neon branches/databases for those environments.

Absence or invalidity of the database configuration never enables a grant. It produces `NOT_CONFIGURED` and authorization denies access.

## Explicit migrations

```powershell
npm run db:generate
npm run db:check
npm run db:migrate
```

`db:generate` creates a versioned SQL migration from the Drizzle schema. Review and commit both SQL and `drizzle/meta`. `db:check` validates schema metadata without connecting. `db:migrate` requires an explicitly configured `DATABASE_URL`; it is an operator action and must not run on application startup or automatically for every Vercel deploy.

Before production, apply to Preview, inspect the table and indexes, and run authorization integration tests. Confirm the target connection without printing credentials by checking only host/database metadata in the Neon dashboard.

Validate the configured connection without printing its URL:

```powershell
npm run db:ping
```

The command returns only `database connection ok` or a generic failure. It never prints the connection string.

Operational repository outcomes are intentionally distinct:

| Outcome | Authorization behavior | Signal |
| --- | --- | --- |
| Successful query with zero rows | Deny restricted access | No infrastructure error |
| `NOT_CONFIGURED` | Deny | Configuration signal |
| `UNAVAILABLE` | Deny | Availability signal |
| `QUERY_FAILED` | Deny | Query signal |
| `INVALID_DATA` | Deny the complete result | Data-integrity signal |

## Recovery

Applied migrations are immutable. Correct mistakes with a new forward migration. Before a destructive correction, create or confirm a Neon branch/restore point, rehearse the corrective migration in Preview, validate application authorization, then apply it to Production.

The initial migration only creates the grant enum/table/indexes and may be manually rolled back in an unused environment by dropping `business_unit_grants` and then `business_unit_grant_status`. Do not use that rollback after real grants exist; restore from a branch/restore point or use a reviewed forward migration.

Revocation is an audited update to `status = revoked` with `revoked_at`, `revoked_by`, and `updated_at`. Physical deletion is not the normal revocation workflow.

## Tests

Unit tests inject repository executors and require no database. Optional integration tests use `TEST_DATABASE_URL` exclusively and skip when it is absent. They never fall back to `DATABASE_URL`.
