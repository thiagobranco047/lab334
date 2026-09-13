import { sql } from "drizzle-orm";
import { check, index, pgEnum, pgTable, text, timestamp, unique, uuid } from "drizzle-orm/pg-core";

export const businessUnitGrantStatus = pgEnum("business_unit_grant_status", ["active", "revoked"]);
export const shareLinkStatus = pgEnum("share_link_status", ["active", "revoked"]);
export const shareLinkResourceType = pgEnum("share_link_resource_type", ["playbook", "calendario", "relatorio"]);

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

export const shareLinks = pgTable("share_links", {
  id: uuid("id").defaultRandom().primaryKey(),
  tokenHash: text("token_hash").notNull(),
  organizationId: text("organization_id").notNull(),
  businessUnitId: text("business_unit_id").notNull(),
  resourceType: shareLinkResourceType("resource_type").notNull(),
  resourceId: text("resource_id").notNull(),
  status: shareLinkStatus("status").default("active").notNull(),
  expiresAt: timestamp("expires_at", { withTimezone: true }),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  createdBy: text("created_by").notNull(),
  revokedAt: timestamp("revoked_at", { withTimezone: true }),
  revokedBy: text("revoked_by"),
}, (table) => [
  unique("share_links_token_hash_unique").on(table.tokenHash),
  index("share_links_active_token_hash_idx").on(table.tokenHash).where(sql`${table.status} = 'active'`),
  index("share_links_scope_resource_idx").on(table.organizationId, table.businessUnitId, table.resourceType, table.resourceId),
  check("share_links_token_hash_format", sql`${table.tokenHash} ~ '^[0-9a-f]{64}$'`),
  check("share_links_revocation_audit", sql`(${table.status} = 'active' AND ${table.revokedAt} IS NULL AND ${table.revokedBy} IS NULL) OR (${table.status} = 'revoked' AND ${table.revokedAt} IS NOT NULL AND ${table.revokedBy} IS NOT NULL)`),
]);

export type ShareLinkRow = typeof shareLinks.$inferSelect;
