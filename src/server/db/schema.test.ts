import { afterEach, describe, expect, it } from "vitest";
import { getTableConfig } from "drizzle-orm/pg-core";
import { businessUnitGrants, shareLinks } from "./schema";
import { getDatabase } from "./client";
import { DatabaseConfigurationError } from "./errors";

describe("Business Unit grant schema", () => {
  afterEach(() => delete process.env.DATABASE_URL);

  it("defines audited persistent grants and lookup constraints", () => {
    const config = getTableConfig(businessUnitGrants);
    expect(config.columns.map((column) => column.name)).toEqual(expect.arrayContaining(["id", "principal_id", "organization_id", "business_unit_id", "permissions", "capabilities", "status", "created_at", "updated_at", "created_by", "revoked_at", "revoked_by"]));
    expect(config.indexes.map((index) => index.config.name)).toEqual(expect.arrayContaining(["business_unit_grants_active_principal_org_idx", "business_unit_grants_active_scope_idx"]));
    expect(config.uniqueConstraints.map((constraint) => constraint.name)).toContain("business_unit_grants_principal_scope_unique");
    expect(config.checks.map((constraint) => constraint.name)).toContain("business_unit_grants_permissions_allowed");
  });

  it("distinguishes missing server configuration", () => {
    expect(() => getDatabase()).toThrow(DatabaseConfigurationError);
    expect(() => getDatabase()).toThrow(/DATABASE_URL is not configured/);
  });
});

describe("Share link schema", () => {
  it("stores audited links with token-only uniqueness", () => {
    const config = getTableConfig(shareLinks);
    expect(config.columns.map((column) => column.name)).toEqual(expect.arrayContaining([
      "id", "token_hash", "organization_id", "business_unit_id", "resource_type", "resource_id",
      "status", "expires_at", "created_at", "created_by", "revoked_at", "revoked_by",
    ]));
    expect(config.uniqueConstraints.map((constraint) => constraint.name)).toEqual(["share_links_token_hash_unique"]);
    expect(config.uniqueConstraints.map((constraint) => constraint.name)).not.toContain("share_links_resource_unique");
    expect(config.indexes.map((index) => index.config.name)).toEqual(expect.arrayContaining([
      "share_links_active_token_hash_idx", "share_links_scope_resource_idx",
    ]));
    expect(config.checks.map((constraint) => constraint.name)).toEqual(expect.arrayContaining([
      "share_links_token_hash_format", "share_links_revocation_audit",
    ]));
    expect(config.columns.find((column) => column.name === "expires_at")?.notNull).toBe(false);
  });
});
