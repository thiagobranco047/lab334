# Client OS Web Foundation — Design

## Objective

Prepare `lab334` as the Client OS web application/BFF using Clerk for authentication and server-side authorization while keeping public commercial surfaces compatible and keeping `lab334-agents` canonical for domain contracts.

## Boundaries

- `lab334`: UI, BFF, Clerk, server authorization, scope resolution and capability-aware navigation.
- `lab334-agents`: canonical domain contracts.
- Future LAB Data Platform: ingestion, history, metrics engine, connectors, jobs and agent runtime.

## Access surfaces

- Public: `/propostas/*`, `/apresentacoes/*`, `/playbooks/*`.
- Private: `/clientes/*`.
- Modes: `public`, `authenticated`, `restricted`; `share_link` is reserved.
- Public routes never import or call private resource readers.

## Authentication and authorization

Clerk provides identity, sessions, Organization memberships, roles and custom permissions. LAB Organization IDs remain canonical. A server-only mapping resolves a LAB ID such as `grupo-azimute` to a Clerk `org_xxx` ID supplied through environment configuration.

Every private resource reader executes: authenticated user → LAB/Clerk mapping → active Organization membership → permission → optional Business Unit grant → capability → resource. Missing mapping, permission, capability or persistent Business Unit grant denies access.

The first increment uses Clerk custom permission `org:client_os:read` for Organization-level shell access. Business Unit access is represented by a server-side grant port whose initial implementation has no grants and therefore denies every Business Unit resource. Session metadata is not used as a grant database.

## Client OS shell

The authenticated route group supplies a LAB-designed shell and server-resolved navigation. Initial routes cover overview, Intelligence, Live Mode, protected playbooks placeholder, calendars, reports, files and settings. No metrics, scores, CRM or integrations are fabricated.

Live Mode is structurally independent: 16:9, no document scroll at 1920×1080, fullscreen friendly, dark, no hover dependency, and explicit unavailable/freshness states.

## Compatibility

Existing public routes and playbook data remain in place. The protected playbooks route does not copy or expose public content. Proposal and presentation pages receive `noindex`; this is discoverability control, not authorization.

## Contract integration

This increment adds an adapter boundary and documentation, not copied schemas. The next integration is a versioned package generated from `lab334-agents`, consumed by the BFF and future data platform. A monorepo migration is deferred.

## Validation

Tests cover mapping, policy, navigation and deny-by-default behavior. Checks: lint, typecheck, tests, production build, route inspection, `/playbooks` compatibility and `git diff --check`.
