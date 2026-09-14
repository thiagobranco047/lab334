# Neon Preview Activation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Prepare `lab334` to connect safely to the validated Neon Preview database without provisioning, exposing credentials, or allowing migrations to use an implicit connection.

**Architecture:** `DATABASE_URL` remains the server-only pooled runtime connection. `DATABASE_MIGRATION_URL` is a distinct direct connection used only by explicit migration and migration-connectivity commands. A small environment guard owns selection and validation so missing configuration fails before Drizzle starts; unit tests use synthetic URLs and never contact Neon.

**Tech Stack:** Node.js, TypeScript/JavaScript modules, Drizzle Kit, Neon serverless driver, Vitest.

**Spec:** `docs/client-os-foundation.md` plus the approved Operational Activation checkpoint for Neon Preview.

## Global Constraints

- The active Preview database is `neondb` in project `lab334-client-os`, branch `preview`, AWS South America East 1 (São Paulo).
- `DATABASE_URL` is server-only and reserved for application runtime.
- Migrations require `DATABASE_MIGRATION_URL`; they never fall back to `DATABASE_URL` or a validation placeholder.
- `db:check` remains offline and must not require credentials.
- Migrations remain explicit and are never run during build, startup, or deploy.
- Commands must never print connection strings or credentials.
- Missing or invalid configuration fails closed.
- No Neon/Vercel provisioning, deployment, migration application, or push occurs in this checkpoint.

---

### Task 1: Add an explicit migration environment guard

**Files:**
- Create: `scripts/database-environment.mjs`
- Create: `scripts/database-environment.test.ts`
- Create: `scripts/run-database-migrations.mjs`
- Modify: `drizzle.config.ts`
- Modify: `package.json`

**Interfaces:**
- Produces: `requireDatabaseUrl(environment, variableName)` returning a validated PostgreSQL URL string or throwing a sanitized configuration error.
- Produces: `npm run db:migrate`, which refuses to start Drizzle unless `DATABASE_MIGRATION_URL` is configured.
- Preserves: `npm run db:check` with a non-routable validation URL used only for offline Drizzle schema checks.

- [x] **Step 1: Write failing tests**

Test that the guard rejects missing, whitespace-only, malformed, and non-PostgreSQL values without echoing them; accepts `postgres://` and `postgresql://`; and that the migration wrapper exits before spawning Drizzle when `DATABASE_MIGRATION_URL` is absent.

- [x] **Step 2: Verify RED**

Run: `npm test -- scripts/database-environment.test.ts`

Expected: FAIL because `database-environment.mjs` does not exist.

- [x] **Step 3: Implement the minimal guard and wrapper**

Use `new URL(value)` plus an exact protocol allowlist. The wrapper imports the guard, sets the validated value for Drizzle configuration, and invokes the local Drizzle Kit executable with `migrate`. It forwards exit status but never logs environment values.

- [x] **Step 4: Separate offline configuration from migration configuration**

Make `drizzle.config.ts` select `DATABASE_MIGRATION_URL` when present and otherwise use the existing localhost validation URL solely so `db:check` and schema generation remain offline-capable. Change `db:migrate` to the guarded wrapper so this placeholder is unreachable from the migration command.

- [x] **Step 5: Verify GREEN**

Run: `npm test -- scripts/database-environment.test.ts && npm run db:check`

Expected: PASS; no network access.

### Task 2: Add separate safe connectivity checks and operator documentation

**Files:**
- Modify: `scripts/check-database.mjs`
- Modify: `scripts/check-database.test.ts`
- Modify: `package.json`
- Modify: `.env.example`
- Modify: `docs/client-os-foundation.md`

**Interfaces:**
- Produces: `npm run db:ping` for pooled runtime validation using `DATABASE_URL`.
- Produces: `npm run db:migration:ping` for direct migration validation using `DATABASE_MIGRATION_URL`.

- [x] **Step 1: Extend tests and verify RED**

Test that each check names only its expected variable on missing configuration, rejects malformed URLs before connecting, and never includes a supplied secret in stderr.

Run: `npm test -- scripts/check-database.test.ts`

Expected: FAIL because the check does not yet accept a safe variable selector.

- [x] **Step 2: Implement the shared safe check behavior**

Accept only `DATABASE_URL` or `DATABASE_MIGRATION_URL` as a command argument, reuse the environment guard, execute `select 1`, and emit only `database connection ok` or a sanitized failure category.

- [x] **Step 3: Document exact environment roles**

Add empty `DATABASE_MIGRATION_URL=` to `.env.example`. Document pooled runtime versus direct migrations, the actual Preview database name `neondb`, explicit commands, Vercel variable boundaries, and the rule that secrets are entered directly into local/Vercel environments and never into Git or chat.

- [x] **Step 4: Run full local verification**

Run: `npm test -- scripts/database-environment.test.ts scripts/check-database.test.ts && npm run db:check && npm run typecheck && npm run lint && git diff --check`

Expected: PASS without database credentials or network access.

- [x] **Step 5: Commit**

Commit all files from this checkpoint as:

```text
chore(database): prepare explicit Neon preview connections
```
