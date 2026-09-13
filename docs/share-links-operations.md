# Share link operations

## Lifecycle

A share link is an independent, revocable authorization for one Business Unit resource. Multiple links may target the same playbook and each expires or is revoked independently. Only `token_hash` is unique.

Creation returns the raw URL once. The database stores only its SHA-256 hash, and administration lists metadata without tokens or hashes. There is no reveal or recovery operation. If an operator loses a URL, create a new link and revoke the old metadata record when appropriate.

Revocation updates `status`, `revoked_at`, and `revoked_by`; it does not physically delete the audit record. While the same playbook remains public under `/playbooks/*`, revoking `/share/playbook/{token}` does not restrict that existing public URL.

## Authorization and isolation

Administration requires Clerk Organization access and an explicit Business Unit grant containing `execute` plus `share_links.manage`. Server actions re-check this scope before creating or revoking. A share URL authorizes only its exact resource and does not create a Client OS session or authorize `/clientes/*`.

Malformed, unknown, revoked, expired, wrong-type, and wrong-scope tokens share the same visitor-facing unavailable response. Database configuration, availability, query, and invalid-data failures deny access and emit server-only categorized signals without raw tokens.

## Database operations

Apply migrations explicitly; never from application startup or every deployment:

```powershell
npm run db:check
npm run db:migrate
```

Use `DATABASE_URL` only on the server. Unit tests require no database. The optional integration test uses `TEST_DATABASE_URL` and skips when absent; it never falls back to production credentials.

No Neon/Vercel resource is provisioned by this increment. Rehearse migrations in an isolated Preview/test database before Production. Recover mistakes with a reviewed forward migration or a Neon restore point; do not edit an applied migration or delete audit rows.
