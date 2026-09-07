# Client OS Web Foundation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add Clerk authentication, deny-by-default server authorization, scoped Client OS routes and compatibility-safe public surfaces.

**Architecture:** The Next.js app acts as UI/BFF. Pure server modules map LAB Organization IDs to Clerk IDs, enforce Organization/Business Unit policy, and resolve navigation before rendering. Public commercial routes remain isolated; data-platform responsibilities remain external.

**Tech Stack:** Next.js 14 App Router, React 18, TypeScript, Clerk Next.js SDK, Node test runner, ESLint.

**Spec:** `docs/superpowers/specs/2026-09-07-client-os-foundation-design.md`

## Global Constraints

- Keep `/propostas/*`, `/apresentacoes/*` and `/playbooks/*` public.
- Protect `/clientes/*` in middleware and at resource reads.
- LAB IDs are canonical; Clerk IDs remain server-only.
- Business Unit access is deny-by-default without a persistent grant.
- Do not implement ingestion, history, metrics, jobs, CRM or agent runtime.
- Do not commit secrets or push.

---

### Task 1: Testable domain authorization core

**Files:** Create `src/server/client-os/*`, `src/domain/client-os/*`, and unit tests.

- [ ] Write tests proving mapping validation, active Organization matching, explicit permission, Business Unit denial and server-resolved navigation.
- [ ] Run tests and confirm failure because modules do not exist.
- [ ] Implement minimal pure modules and run tests to green.

### Task 2: Clerk integration and route boundaries

**Files:** Modify root layout/middleware/package manifests; create auth pages and server adapter.

- [ ] Install Clerk and ESLint dependencies.
- [ ] Add `.env.example` with variable names only.
- [ ] Add `ClerkProvider`, `clerkMiddleware`, authentication route and server adapter.
- [ ] Preserve locale behavior and public commercial paths.

### Task 3: Client OS shell and routes

**Files:** Create `src/app/(client-os)/clientes/**` and `src/components/client-os/**`.

- [ ] Protect private layout and every scoped page through server authorization.
- [ ] Render capability-aware navigation from resolved server data.
- [ ] Add overview, intelligence, Live Mode and prepared module pages without fake business data.

### Task 4: Public compatibility and documentation

**Files:** Update public route metadata, README and architecture documentation.

- [ ] Apply `noindex` to proposals/presentations without restricting access.
- [ ] Document Clerk configuration, roles, mapping, grants and future package integration.
- [ ] Verify legacy public route behavior.

### Task 5: Verification and commits

- [ ] Run lint, typecheck, tests and production build.
- [ ] Inspect generated routes and authorization tests.
- [ ] Run `git diff --check` and review the final diff.
- [ ] Create coherent local commits and do not push.
