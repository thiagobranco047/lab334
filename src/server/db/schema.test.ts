import { afterEach, describe, expect, it } from "vitest";
import { getTableConfig } from "drizzle-orm/pg-core";
import { businessUnitGrants } from "./schema";
import { getDatabase } from "./client";
import { DatabaseConfigurationError } from "./errors";

describe("Business Unit grant schema", () => {
  afterEach(() => delete process.env.DATABASE_URL);

  it("defines audited persistent grants and lookup constraints", () => {
    const config = getTableConfig(businessUnitGrants);
    expect(config.columns.map((column) => column.name)).toEqual(expect.arrayContaining(["id", "principal_id", "organization_id", "business_unit_id", "permissions", "capabilities", "status", "created_at", "updated_at", "created_by", "revoked_at", "revoked_by"]));
    expect(config.indexes.map((index) => index.config.name)).toEqual(expect.arrayContaining(["business_unit_grants_active_principal_org_idx", "business_unit_grants_active_scope_idx"]));
    expect(config.uniqueConstraints.map((constraint) => constraint.name)).toContain("business_unit_grants_principal_scope_unique");
  });

  it("distinguishes missing server configuration", () => {
    expect(() => getDatabase()).toThrow(DatabaseConfigurationError);
    expect(() => getDatabase()).toThrow(/DATABASE_URL is not configured/);
  });
});
