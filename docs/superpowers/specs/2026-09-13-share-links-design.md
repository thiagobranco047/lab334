# Share Links Design

**Date:** 2026-09-13  
**Status:** Approved for implementation planning

## Objective

Add revocable, resource-scoped public sharing to the LAB Client OS without requiring the recipient to sign in and without granting access to any other Client OS surface. The first functional resource type is `playbook`. Calendar and report sharing remain explicit future extensions until real resources exist.

This increment is additive. Existing `/playbooks/*`, `/propostas/*`, and `/apresentacoes/*` URLs and behavior remain public and unchanged. No redirect, dataset move, or Clerk/grant dependency may be introduced for those routes.

## Important compatibility limitation

While a playbook remains public at `/playbooks/*`, revoking its share link revokes only the `/share/playbook/{token}` URL. It does not make the underlying public playbook private. The administration UI must state this clearly. A later migration to authenticated-only canonical resources requires functional equivalence and separate explicit approval.

## Canonical contracts

`lab334-agents` remains the canonical source for domain contracts. Add `share_links.manage` to the application capability catalog and release a new SemVer version of `@lab334/contracts` through the existing deterministic validation, provenance, SHA-256, and vendored artifact process.

The `lab334` application consumes the new package version. It must not define an independent editable capability catalog.

## Authorization to administer links

Creating, listing, or revoking a share link is a private server-side operation:

```text
Clerk identity
→ LAB Organization mapping
→ explicit Business Unit grant
→ permission: execute
→ capability: share_links.manage
→ resource belongs to the same Organization and Business Unit
```

Organization membership, an Organization URL, a Business Unit slug, or a visible UI control never authorizes the operation. Internal LAB users receive no bypass. Pages and components do not access Drizzle directly.

The first increment supports only Business Unit-scoped playbooks whose ownership can be resolved unambiguously. Organization-level playbooks, including the current `grupo-azimute` institutional playbook, remain available through their existing public route and are not automatically assigned to a Business Unit.

## Token model

Generate at least 256 bits of cryptographically secure randomness and encode the raw token using a URL-safe representation. Return the raw token only in the successful creation response so the operator can copy the resulting URL. Never persist or log the raw token.

Persist a SHA-256 hash of the token. Because the raw token has high entropy, a deterministic hash supports indexed lookup without making token enumeration practical. Resource slugs may be used only as internal locators after a token has authorized the exact resource; they are never authorization credentials.

## Persistence

Add explicit, versioned Drizzle SQL migrations for a `share_links` table with:

- UUID primary key;
- unique `token_hash`;
- canonical `organization_id` and `business_unit_id`;
- `resource_type`, initially constrained to `playbook`, `calendario`, or `relatorio`;
- `resource_id`, a server-resolved stable locator within the declared scope;
- status `active` or `revoked`;
- nullable `expires_at` for immediate optional expiration support;
- `created_at` and `created_by`;
- nullable `revoked_at` and `revoked_by` with a consistency constraint.

Revocation is an audited update. Physical deletion is not the normal lifecycle operation. Migrations are never run automatically during application startup or every deployment.

The repository exposes typed outcomes that distinguish successful empty results, not found, expired, revoked, missing configuration, unavailable persistence, query failure, and invalid data. `INVALID_DATA` invalidates the complete result. No repository error becomes an empty or permissive result.

## Resource boundary

Introduce a server-only share-resource adapter. It resolves a persisted `(resource_type, resource_id, organization_id, business_unit_id)` tuple and validates that the resource belongs to the declared scope before returning a public-safe view model.

The initial playbook adapter may read the existing playbook dataset but must not expose unrelated playbooks, private Organization data, Business Unit context, grant data, Clerk identifiers, or Client OS navigation. Unsupported resource types fail closed.

This adapter boundary allows future calendar and report providers without coupling the token repository to datasets or UI rendering.

## Public resolution

Implement the first functional route:

```text
/share/playbook/{token}
```

Resolution flow:

```text
raw URL token
→ SHA-256
→ active persisted link
→ expiration check
→ exact resource type and scope validation
→ public-safe resource adapter
→ isolated presentation
```

The route does not require Clerk and does not create or upgrade a session. Invalid, unknown, revoked, expired, wrong-type, and wrong-scope tokens produce an indistinguishable unavailable/not-found response. Persistence failures deny access and emit a structured server-only operational signal; they must not reveal infrastructure details to the visitor.

The share presentation must not render Client OS navigation or link into `/clientes/*`. Add `noindex` as discoverability guidance only; it is not a security mechanism.

Do not create `/share/calendario/{token}` or `/share/relatorio/{token}` pages until real resource adapters exist. Their resource types remain reserved by the persistence contract.

## Private administration UI

Add a protected surface at:

```text
/clientes/{organization}/settings/share-links
```

The server resolves authorized Business Units and eligible playbooks before rendering. The UI allows an authorized operator to:

- choose only a Business Unit covered by an `execute` + `share_links.manage` grant;
- choose only a real playbook belonging to that scope;
- optionally choose an expiration when creating a link;
- copy the newly created URL, whose raw token is shown only in that creation result;
- list link metadata without tokens or token hashes;
- see active, revoked, and expired state;
- revoke an active link.

Creation and revocation use server actions or equivalent server-only handlers and repeat authorization immediately before mutation. Inputs are validated server-side. The initial interface follows the existing Client OS visual language; a novel visual system is outside scope.

The interface must warn that revoking a pilot share URL does not restrict a playbook that is still public at `/playbooks/*`.

## Failure and security behavior

All paths are deny-by-default:

- missing or malformed token: unavailable;
- unknown, revoked, or expired link: unavailable;
- wrong resource type or scope: unavailable;
- missing admin grant or capability: denied;
- missing database configuration: denied plus operational signal;
- unavailable database: denied plus operational signal;
- query failure: denied plus operational signal;
- invalid persisted data: entire result denied plus operational signal.

Logs may include correlation IDs, operation names, error categories, and internal link IDs when known. They must not include raw tokens, connection strings, Clerk secrets, or private resource content.

## Tests and verification

Tests cover:

- secure token shape and deterministic hashing;
- raw token never passed to persistence;
- exact one-time raw token return on creation;
- create, list, and revoke authorization, including internal-user non-bypass;
- cross-Organization and cross-Business Unit isolation;
- resource ownership validation;
- active, revoked, expired, malformed, unknown, and wrong-type resolution;
- every persistence failure remaining fail-closed and operationally distinct;
- invalid rows rejecting the complete result;
- public share pages containing no Client OS navigation or private identifiers;
- public compatibility for `/playbooks/*`, `/propostas/*`, and `/apresentacoes/*`;
- explicit migration validation, package integrity, typecheck, lint, and production build.

An optional integration test uses only `TEST_DATABASE_URL` and skips when it is absent. It never falls back to `DATABASE_URL`.

## Intentional exclusions

This increment does not:

- provision Neon or Vercel infrastructure;
- migrate or privatize existing public materials;
- create calendar or report data;
- create organization-scoped sharing without an explicit authorization model;
- implement analytics, view counters, password-protected links, recipient identity, email delivery, Data Platform, CRM, Google APIs, metrics, or Intelligence ingestion;
- push commits or deploy production.

## Delivery boundaries

Changes are split into reviewable commits across `lab334-agents` and `lab334`: canonical capability/package release; schema and migrations; server-only repository and token service; resource adapter and public resolution; protected administration UI; tests and documentation. Existing unrelated worktree changes are preserved and excluded from these commits.
