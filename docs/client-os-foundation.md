# Client OS foundation

## Responsibility boundary

`lab334` is the web application and BFF for UI, Clerk authentication, server-side authorization, scope resolution and capability-aware navigation. `lab334-agents` remains the canonical source for the `Organization → Business Unit` domain contracts. Ingestion, history, metrics, jobs and agent runtime belong to a future LAB Data Platform.

The application consumes `@lab334/contracts@0.1.2` from the checksummed generated archive in `vendor/contracts/`. This archive is not editable source. Update it only by running the canonical generator in `lab334-agents`, copying `.tgz` and `.sha256` byte-for-byte, running `npm install`, and then `npm run contracts:verify`.

## Clerk configuration

Create the Clerk application, enable Organizations and create the custom Organization permission `org:client_os:read`. Assign that permission through explicit Clerk roles. Configure only the variable names documented in `.env.example`; real credentials must remain in the deployment environment.

`LAB_CLERK_ORGANIZATION_MAP` is a server environment variable with comma-separated pairs:

```text
grupo-azimute=org_xxxxxxxxx,joinsul=org_yyyyyyyyy
```

The left side is the canonical LAB Organization ID. The right side is the Clerk Organization ID and must never be used as a business identifier or sent to Client Components.

## Authorization flow

Every `/clientes/*` request crosses Clerk middleware and is checked again in its Server Component before a resource is read:

```text
authenticated user
→ active Clerk Organization
→ LAB Organization mapping
→ org:client_os:read
→ explicit persistent Business Unit grant
→ permission
→ capability
→ resource
```

The active URL slug does not grant access. Clerk Organization membership does not imply access to every Business Unit. Internal LAB users follow the same policy. Missing mappings, permission, active membership or grants deny access.

The current Business Unit grant repository intentionally returns no grants. This makes the first stage safe by default while the persistent source is not available. Session metadata is not used as a grant database. Navigation receives only capabilities already resolved on the server.

## Access modes and routes

Canonical modes are `public`, `authenticated`, `restricted`, and the future `share_link`.

- Public: `/propostas/*`, `/apresentacoes/*`, `/playbooks/*`. Existing URLs remain compatible. Proposals and presentations emit `noindex`; this is discoverability guidance, not security.
- Private: `/clientes/*`. Authentication and server authorization are required.
- `/clientes/{organization}/playbooks` is an empty protected integration surface. It does not import, copy or move the public playbook content.

Public routes must only use their existing public datasets. They do not call the Client OS server authorization or private resource layer.

## Intentional limits

This stage contains no fictional metrics, CRM, score, ingestion, integrations, persistent Business Unit-grant store or data platform. The next increment should define a versioned domain-contract package generated from `lab334-agents`, then connect a persistent authorization store that can resolve Business Unit grants and capabilities server-side.
