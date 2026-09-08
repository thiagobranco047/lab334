import { sql } from "drizzle-orm";
import { check, index, pgEnum, pgTable, text, timestamp, unique, uuid } from "drizzle-orm/pg-core";

export const businessUnitGrantStatus = pgEnum("business_unit_grant_status", ["active", "revoked"]);

export const businessUnitGrants = pgTable("business_unit_grants", {
  id: uuid("id").defaultRandom().primaryKey(),
  principalId: text("principal_id").notNull(),
  organizationId: text("organization_id").notNull(),
  businessUnitId: text("business_unit_id").notNull(),
  permissions: text("permissions").array().notNull(),
  capabilities: text("capabilities").array().notNull(),
  status: businessUnitGrantStatus("status").default("active").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
  createdBy: text("created_by").notNull(),
  revokedAt: timestamp("revoked_at", { withTimezone: true }),
  revokedBy: text("revoked_by"),
}, (table) => [
  unique("business_unit_grants_principal_scope_unique").on(table.principalId, table.organizationId, table.businessUnitId),
  index("business_unit_grants_active_principal_org_idx").on(table.principalId, table.organizationId).where(sql`${table.status} = 'active'`),
  index("business_unit_grants_active_scope_idx").on(table.organizationId, table.businessUnitId).where(sql`${table.status} = 'active'`),
  check("business_unit_grants_permissions_nonempty", sql`cardinality(${table.permissions}) > 0`),
  check("business_unit_grants_permissions_allowed", sql`${table.permissions} <@ ARRAY['read', 'draft', 'execute']::text[]`),
  check("business_unit_grants_revocation_audit", sql`(${table.status} = 'active' AND ${table.revokedAt} IS NULL AND ${table.revokedBy} IS NULL) OR (${table.status} = 'revoked' AND ${table.revokedAt} IS NOT NULL AND ${table.revokedBy} IS NOT NULL)`),
]);

export type BusinessUnitGrantRow = typeof businessUnitGrants.$inferSelect;
