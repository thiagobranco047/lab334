# Share Links Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add revocable, expirable, resource-scoped public share links for real Business Unit playbooks, with protected administration and no change to existing public material routes.

**Architecture:** `lab334-agents` publishes `share_links.manage` through a new deterministic contracts artifact. `lab334` stores only SHA-256 token hashes behind a server-only repository, resolves public links through a resource adapter, and exposes creation/list/revocation through a re-authorized private service and UI. The raw token exists only in the successful creation result and can never be recovered from persisted metadata.

**Tech Stack:** TypeScript, Next.js 14 App Router, React Server Components and Server Actions, Clerk, Drizzle ORM, PostgreSQL/Neon-compatible SQL, Node `crypto`, Vitest.

**Spec:** `docs/superpowers/specs/2026-09-13-share-links-design.md`

## Global Constraints

- `/playbooks/*`, `/propostas/*`, and `/apresentacoes/*` remain public, unchanged, and independent of Clerk, grants, and share-link persistence.
- `/share/playbook/{token}` is the only new functional public share route in this increment.
- Do not create calendar or report pages or fictional resource data.
- Generate 32 random bytes and expose the URL-safe raw token only in the successful creation result. Persist and list only its SHA-256 hash-derived identity/metadata; never log, recover, reconstruct, or reveal the raw token again.
- If the operator loses the URL, the only recovery is creating another independent link.
- Multiple links for the same Organization, Business Unit, resource type, and resource ID are valid. Never add uniqueness on any resource or scope tuple. Only `token_hash` is unique.
- Creating, listing, and revoking requires server-side Organization authorization plus an explicit grant containing permission `execute` and capability `share_links.manage` for the target Business Unit.
- Internal LAB users receive no bypass. Slugs and UI visibility are never authorization.
- Repository and resource adapters are server-only. Pages and components never import Drizzle or Neon.
- Unknown, malformed, revoked, expired, wrong-type, and wrong-scope tokens reveal no distinction. Infrastructure and invalid-data failures deny access and emit server-only operational signals.
- Revocation is audited; physical deletion is not the normal flow.
- Migrations are explicit and are never executed automatically during startup or deployment.
- `TEST_DATABASE_URL` is optional and never falls back to `DATABASE_URL`.
- Do not provision Neon/Vercel, deploy, or push.

---

### Task 1: Publish the canonical management capability

**Files:**
- Modify: `C:/Users/Usuário/work/projetos/lab334-agents/capabilities/access-catalog.yaml`
- Modify: `C:/Users/Usuário/work/projetos/lab334-agents/packages/contracts/package.json`
- Modify: `C:/Users/Usuário/work/projetos/lab334-agents/packages/contracts/package-lock.json`
- Modify: `C:/Users/Usuário/work/projetos/lab334-agents/packages/contracts/CHANGELOG.md`
- Modify: `C:/Users/Usuário/work/projetos/lab334-agents/packages/contracts/tests/generation.test.mjs`
- Generate: `C:/Users/Usuário/work/projetos/lab334-agents/packages/contracts/artifacts/lab334-contracts-0.2.0.tgz`
- Generate: `C:/Users/Usuário/work/projetos/lab334-agents/packages/contracts/artifacts/lab334-contracts-0.2.0.tgz.sha256`
- Modify consumer: `package.json`, `package-lock.json`, `scripts/verify-contracts-package.mjs`, `src/server/contracts/catalog.test.ts`, `docs/client-os-foundation.md`, `vendor/contracts/*`

**Interfaces:**
- Produces: `ApplicationCapabilityId` including literal `share_links.manage` in `@lab334/contracts@0.2.0`.
- Consumes: existing deterministic package generation, source provenance, archive allowlist, SHA-256, and exact consumer lock integrity.

- [ ] **Step 1: Write the failing package test**

Add an assertion after generating the canonical model:

```js
expect(model.access.application_capabilities).toContain("share_links.manage");
```

- [ ] **Step 2: Run the focused test and verify RED**

Run: `npm test` in `lab334-agents/packages/contracts`.  
Expected: FAIL because `share_links.manage` is absent.

- [ ] **Step 3: Add the capability and prepare SemVer 0.2.0**

Append `share_links.manage` to `application_capabilities`, bump both package manifests to `0.2.0`, and add a changelog entry describing protected share-link administration. Do not add a second capability list in `lab334`.

- [ ] **Step 4: Validate and commit clean release sources**

Run: `npm test && npm run contracts:validate`.  
Expected: PASS.

Commit only canonical and package source files:

```text
feat(contracts): add share link management capability
```

- [ ] **Step 5: Generate and verify the artifact twice**

Run `npm run contracts:pack`, record the SHA-256, run it again, and assert the checksum is byte-identical. Verify with `node scripts/verify-package.mjs artifacts/lab334-contracts-0.2.0.tgz artifacts/lab334-contracts-0.2.0.tgz.sha256`.

Commit the generated artifact separately:

```text
build(contracts): release package 0.2.0
```

- [ ] **Step 6: Update the isolated consumer**

Copy `.tgz` and `.sha256` byte-for-byte to `lab334/vendor/contracts`, update the exact file dependency and verifier to `0.2.0`, run `npm install`, and remove only the superseded vendored `0.1.5` archive/checksum.

Run: `npm run contracts:verify && npm test -- src/server/contracts/catalog.test.ts`.  
Expected: exact version, path, SHA-256, and lockfile SHA-512 integrity pass.

Commit:

```text
build(contracts): consume share link capability
```

### Task 2: Add explicit share-link persistence

**Files:**
- Modify: `src/server/db/schema.ts`
- Modify: `src/server/db/schema.test.ts`
- Generate: `drizzle/0002_*.sql`
- Generate: `drizzle/meta/0002_snapshot.json`
- Modify: `drizzle/meta/_journal.json`
- Modify: `scripts/validate-migrations.mjs`

**Interfaces:**
- Produces: `shareLinks`, `shareLinkStatus`, `shareLinkResourceType`, and `ShareLinkRow`.
- Table accepts multiple rows for the same `(organization_id, business_unit_id, resource_type, resource_id)` and has exactly one uniqueness boundary: `token_hash`.

- [ ] **Step 1: Write failing schema tests**

Assert the table exposes required columns, has a unique index/constraint for `token_hash`, has no unique resource/scope constraint, permits nullable `expires_at`, and enforces audited active/revoked consistency.

```ts
expect(uniqueColumns).toEqual([["token_hash"]]);
expect(uniqueColumns).not.toContainEqual(["organization_id", "business_unit_id", "resource_type", "resource_id"]);
```

- [ ] **Step 2: Run the schema test and verify RED**

Run: `npm test -- src/server/db/schema.test.ts`.  
Expected: FAIL because `shareLinks` does not exist.

- [ ] **Step 3: Implement the Drizzle schema**

Define enums `active | revoked` and `playbook | calendario | relatorio`. Add a UUID primary key, 64-character lowercase hexadecimal `token_hash`, canonical scope, resource fields, nullable expiration, and audit timestamps/actors. Add non-unique lookup indexes for scope/resource and active hash lookup. Add checks for token-hash format and revocation audit consistency. Do not add resource uniqueness.

- [ ] **Step 4: Generate and inspect the SQL migration**

Run: `npm run db:generate`. Inspect the generated SQL to confirm it creates no uniqueness other than primary key and `token_hash`.

- [ ] **Step 5: Strengthen migration validation**

Make `validate-migrations.mjs` assert the share-link table, enums, hash uniqueness, audit check, and absence of a unique resource tuple.

- [ ] **Step 6: Verify and commit**

Run: `npm test -- src/server/db/schema.test.ts && npm run db:check`.  
Expected: PASS.

Commit:

```text
feat(share-links): add audited persistence schema
```

### Task 3: Implement one-time token primitives and typed repository

**Files:**
- Create: `src/server/share-links/token.ts`
- Create: `src/server/share-links/token.test.ts`
- Create: `src/server/share-links/repository.ts`
- Create: `src/server/share-links/drizzle-repository.ts`
- Create: `src/server/share-links/drizzle-repository.test.ts`
- Create: `src/server/share-links/repository.integration.test.ts`
- Create: `src/server/share-links/index.ts`

**Interfaces:**
- Produces: `generateShareToken(): string`, `hashShareToken(rawToken: string): string`, `ShareLinkMetadata`, `CreateShareLinkRecord`, and `ShareLinkRepository`.
- Repository methods:

```ts
create(input: CreateShareLinkRecord): Promise<ShareLinkMutationResult>;
listByOrganizationAndBusinessUnits(organizationId: string, businessUnitIds: readonly string[]): Promise<ShareLinkListResult>;
findByTokenHash(tokenHash: string): Promise<ShareLinkLookupResult>;
revoke(id: string, organizationId: string, businessUnitId: string, revokedBy: string, revokedAt: Date): Promise<ShareLinkMutationResult>;
```

`CreateShareLinkRecord` contains `tokenHash` and never `rawToken`. List and mutation outputs contain metadata and never either token or hash. `findByTokenHash` accepts the hash solely for public lookup and returns validated internal metadata.

- [ ] **Step 1: Write token tests and verify RED**

Test URL-safe randomness, decoded 32-byte entropy, 64-character lowercase SHA-256, same input/same hash, different tokens/different hashes, and malformed-token rejection before repository lookup.

Run: `npm test -- src/server/share-links/token.test.ts`.  
Expected: FAIL because the module does not exist.

- [ ] **Step 2: Implement token primitives and verify GREEN**

Use `randomBytes(32).toString("base64url")` and `createHash("sha256")`. Validate the exact base64url token shape before hashing.

- [ ] **Step 3: Write repository adapter tests and verify RED**

Cover valid empty list, multiple active links for one identical resource, active/revoked/expired rows, exact-scope revoke, missing configuration, nested Neon/Undici unavailable failures, query failures, and mixed valid/invalid rows returning `INVALID_DATA` for the complete operation.

- [ ] **Step 4: Implement typed repository outcomes**

Use result unions rather than empty-array fallbacks. Reuse the established error categories `NOT_CONFIGURED | UNAVAILABLE | QUERY_FAILED | INVALID_DATA`; add semantic lookup states `NOT_FOUND | REVOKED | EXPIRED` as successful security outcomes or a separate non-infrastructure union. Validate every row and reject the entire returned set if any row is invalid.

- [ ] **Step 5: Prove one-time and multi-link persistence boundaries**

Add compile/runtime assertions that `create()` receives only `tokenHash`; `listByOrganizationAndBusinessUnits()` exposes no `rawToken` or `tokenHash`; and two inserts for the same resource succeed when their hashes differ.

- [ ] **Step 6: Add isolated optional integration coverage**

Use `TEST_DATABASE_URL` only. Insert two links for the same resource, resolve each independently, revoke one, verify the other stays active, then clean only test-owned rows. Skip when `TEST_DATABASE_URL` is absent and never read `DATABASE_URL` as fallback.

- [ ] **Step 7: Verify and commit**

Run focused token/repository tests and `npm run typecheck`.

Commit:

```text
feat(share-links): add one-time token repository
```

### Task 4: Add scoped resource and administration services

**Files:**
- Create: `src/server/share-links/playbook-resource.ts`
- Create: `src/server/share-links/playbook-resource.test.ts`
- Create: `src/server/share-links/service.ts`
- Create: `src/server/share-links/service.test.ts`
- Create: `src/server/share-links/signal.ts`
- Create: `src/server/share-links/signal.test.ts`
- Modify: `src/server/auth/clerk.ts`

**Interfaces:**
- Produces: `listEligiblePlaybooks(organizationId, authorizedBusinessUnitIds)`, `resolveSharedPlaybook(scope)`, `createPlaybookShareLink(command)`, `listShareLinks(query)`, `revokeShareLink(command)`, and `resolvePublicPlaybook(rawToken)`.
- `createPlaybookShareLink` returns `{ metadata, rawToken, urlPath }` once. No later method accepts an ID to recover a token.

- [ ] **Step 1: Write failing playbook ownership tests**

Prove eligibility only when a canonical Business Unit ID equals the playbook locator and belongs to the requested Organization. Exclude `grupo-azimute`, disabled/missing playbooks, cross-scope resources, and unsupported types.

- [ ] **Step 2: Implement the server-only playbook adapter**

Return a public-safe render model and the existing editorial content variant needed to render that single playbook. Do not return Organization/Business Unit records, Clerk identifiers, grants, or unrelated playbooks.

- [ ] **Step 3: Write failing administration-service tests**

Cover Organization denial, missing Business Unit, `read` without `execute`, missing `share_links.manage`, internal-user non-bypass, resource mismatch, repository failures, successful creation, metadata-only listing, and exact-scope revocation.

Assert explicitly:

```ts
expect(repository.create).toHaveBeenCalledWith(expect.objectContaining({ tokenHash: expect.any(String) }));
expect(repository.create).not.toHaveBeenCalledWith(expect.objectContaining({ rawToken: expect.anything() }));
const listed = await service.listShareLinks(query);
expect(listed.every((item) => !("rawToken" in item) && !("tokenHash" in item))).toBe(true);
```

- [ ] **Step 4: Implement service-level authorization**

Resolve Clerk identity and persistent grants server-side immediately before each query/mutation. Require the target grant to contain `execute` and `share_links.manage`. Listing passes only the IDs of Business Units carrying that grant to `listByOrganizationAndBusinessUnits`, so the query never loads metadata from unauthorized units. Generate the raw token only after authorization/resource validation; hash it before calling persistence; return it only from the create call.

- [ ] **Step 5: Implement public resolution and operational signals**

Malformed/unknown/revoked/expired/wrong-type/wrong-scope all return one public `unavailable` result. Repository infrastructure/data errors return `unavailable`, log only category/operation/correlation ID, and never include raw token, token hash, database URL, or resource content.

- [ ] **Step 6: Verify and commit**

Run all `src/server/share-links/**/*.test.ts` tests and typecheck.

Commit:

```text
feat(share-links): enforce scoped lifecycle services
```

### Task 5: Add the isolated public playbook route

**Files:**
- Create: `src/app/(share)/share/layout.tsx`
- Create: `src/app/(share)/share/playbook/[token]/page.tsx`
- Create: `src/app/(share)/share/playbook/[token]/not-found.tsx`
- Create: `src/app/(share)/share/playbook/[token]/error.tsx`
- Create: `src/components/share/SharedPlaybook.tsx`
- Create: `src/components/share/SharedPlaybook.test.tsx`
- Modify: `src/components/SiteShell.jsx`
- Modify: `src/middleware.ts`
- Create or modify: middleware/public-boundary tests.

**Interfaces:**
- Consumes: `resolvePublicPlaybook(rawToken)` and its public-safe view model.
- Produces: no-login, `noindex` public rendering at `/share/playbook/{token}` with no Client OS navigation.

- [ ] **Step 1: Write failing route-boundary tests**

Assert `/share/playbook/{token}` does not invoke Clerk protection, does not locale-redirect the token path, has `robots: { index: false, follow: false }`, renders no `/clientes/` links, and maps all semantic unavailable states to the same not-found presentation. Add `/share/` as an explicit isolated surface in `SiteShell` rather than relying on incidental pathname behavior.

- [ ] **Step 2: Implement the isolated route group**

Use a share-specific layout and the public-safe adapter result. Do not reuse the Client OS layout. Reuse presentational playbook components only when they do not introduce navigation to unrelated resources; otherwise provide a thin isolated wrapper.

- [ ] **Step 3: Preserve operational distinction without leaking it**

Use `notFound()` for malformed/unknown/revoked/expired/wrong-type/wrong-scope. Let typed infrastructure failures reach the route error boundary after server-only signaling, so access remains denied and operators can distinguish outages without exposing details.

- [ ] **Step 4: Verify existing public compatibility**

Run route/build tests proving `/playbooks/*`, `/propostas/*`, and `/apresentacoes/*` retain their current paths and do not import share-link persistence or Clerk authorization.

- [ ] **Step 5: Commit**

```text
feat(share-links): add isolated public playbook route
```

### Task 6: Add protected administration UI and server actions

**Files:**
- Create: `src/app/(client-os)/clientes/[organization]/settings/share-links/page.tsx`
- Create: `src/app/(client-os)/clientes/[organization]/settings/share-links/actions.ts`
- Create: `src/components/client-os/share-links/ShareLinkManager.tsx`
- Create: `src/components/client-os/share-links/ShareLinkManager.test.tsx`
- Modify: `src/app/(client-os)/clientes/[organization]/settings/page.tsx`
- Modify: `src/app/(client-os)/clientes/client-os.css`

**Interfaces:**
- Server actions: `createShareLinkAction(previousState, formData)` and `revokeShareLinkAction(previousState, formData)`.
- Create action success state contains the newly created `urlPath` once; list refreshes contain metadata only.

- [ ] **Step 1: Write failing action tests**

Test server validation, fresh authorization on every mutation, Organization/Business Unit/resource binding, expiration choices `never | 24h | 7d | 30d`, generic safe failures, cache revalidation, and a create result containing the URL only in that response. Verify no action exists for retrieving or reconstructing an existing token.

- [ ] **Step 2: Implement server actions**

Parse a strict allowlist of fields. Do not accept `createdBy`, Organization identity, permissions, capability, or token hash from the browser. Derive actor and scope server-side. After creation, pass the one-time URL in action state and revalidate the metadata page.

- [ ] **Step 3: Write failing component tests**

Cover eligible Business Unit/playbook choices, metadata-only rows, independent rows for the same resource, copy-on-create state, expiration/status display, revoke control, no token-reveal action, and the warning that current public playbooks remain reachable after share-link revocation.

- [ ] **Step 4: Implement the management interface**

Follow existing Client OS typography/cards/forms. Clearly label the newly generated URL as one-time and instruct the operator to create a new link if it is lost. Show each link as an independent lifecycle record. Never render `token_hash`.

- [ ] **Step 5: Verify and commit**

Run focused action/component tests, typecheck, and lint.

Commit:

```text
feat(share-links): add protected management interface
```

### Task 7: Document operations and complete verification

**Files:**
- Modify: `docs/client-os-foundation.md`
- Create: `docs/share-links-operations.md`
- Modify: `README.md`

**Interfaces:**
- Produces: operator documentation for creation, one-time copy behavior, loss/replacement, revocation, expiration, migration, failure diagnosis, and the public-route compatibility limitation.

- [ ] **Step 1: Document lifecycle and recovery**

State that raw tokens cannot be retrieved, database backups contain hashes only, lost URLs require new links, multiple links per resource are supported, and revoking one does not affect siblings. Document that public playbooks remain independently reachable until a later approved migration.

- [ ] **Step 2: Document database and deployment boundaries**

Describe explicit migration review/application, optional `TEST_DATABASE_URL`, fail-closed behavior without persistence, and that no Neon/Vercel provisioning or automatic deploy migration is included.

- [ ] **Step 3: Run focused security scans**

Use `rg` to confirm pages/components do not import Drizzle/Neon/`DATABASE_URL`; no raw token field exists in schema/list DTOs; no `/share/calendario` or `/share/relatorio` pages exist; and existing public datasets/routes are unchanged.

- [ ] **Step 4: Run full producer verification**

In `lab334-agents/packages/contracts`:

```text
npm test
npm run contracts:validate
npm run contracts:pack
node scripts/verify-package.mjs artifacts/lab334-contracts-0.2.0.tgz artifacts/lab334-contracts-0.2.0.tgz.sha256
git diff --check
```

- [ ] **Step 5: Run full consumer verification**

In `lab334`:

```text
npm run contracts:verify
npm run db:check
npm test
npm run typecheck
npm run lint
npm run build
git diff --check
```

Use synthetic ephemeral Clerk keys for build only. The optional database integration test may skip when `TEST_DATABASE_URL` is absent; all unit tests must pass without production credentials.

- [ ] **Step 6: Review commits and worktrees**

Confirm every commit is scoped, both worktrees contain no task-owned uncommitted changes, unrelated user changes remain preserved, and no push or deployment occurred.

Commit documentation only if it was not already included with its corresponding behavior:

```text
docs(share-links): add lifecycle operations guide
```
