import { randomUUID } from "node:crypto";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { migrate } from "drizzle-orm/neon-http/migrator";
import { eq } from "drizzle-orm";
import { describe, expect, it } from "vitest";
import { businessUnitGrants } from "@/server/db/schema";
import { createDrizzleGrantRepository } from "./drizzle-grant-repository";

const testUrl = process.env.TEST_DATABASE_URL;

describe.skipIf(!testUrl)("Business Unit grant repository integration", () => {
  it("applies migrations and reads only an active isolated grant", async () => {
    if (!testUrl) throw new Error("TEST_DATABASE_URL is required for this test");
    const db = drizzle(neon(testUrl));
    await migrate(db, { migrationsFolder: "drizzle" });
    const principalId = `integration_${randomUUID()}`;
    await db.insert(businessUnitGrants).values({ principalId, organizationId: "grupo-azimute", businessUnitId: "azimute-san", permissions: ["read"], capabilities: ["playbooks.read"], createdBy: principalId });
    try {
      const repository = createDrizzleGrantRepository(async (principal, organization) => db.select().from(businessUnitGrants).where(eq(businessUnitGrants.principalId, principal)));
      const result = await repository.listActiveByPrincipalAndOrganization(principalId, "grupo-azimute");
      expect(result).toMatchObject({ ok: true, grants: [{ businessUnitId: "azimute-san" }] });
    } finally {
      await db.delete(businessUnitGrants).where(eq(businessUnitGrants.principalId, principalId));
    }
  });
});
