import { randomUUID } from "node:crypto";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { migrate } from "drizzle-orm/neon-http/migrator";
import { eq } from "drizzle-orm";
import { describe, expect, it } from "vitest";
import { businessUnitGrants } from "@/server/db/schema";
import { businessUnitGrantRepository } from "./grants";

const testUrl = process.env.TEST_DATABASE_URL;

describe.skipIf(!testUrl)("Business Unit grant repository integration", () => {
  it("applies migrations and reads only an active isolated grant", async () => {
    if (!testUrl) throw new Error("TEST_DATABASE_URL is required for this test");
    const db = drizzle(neon(testUrl));
    await migrate(db, { migrationsFolder: "drizzle" });
    const principalId = `integration_${randomUUID()}`;
    await db.insert(businessUnitGrants).values([
      { principalId, organizationId: "grupo-azimute", businessUnitId: "azimute-san", permissions: ["read"], capabilities: ["playbooks.read"], createdBy: principalId },
      { principalId, organizationId: "joinsul", businessUnitId: "joinsul", permissions: ["read"], capabilities: ["playbooks.read"], createdBy: principalId },
      { principalId, organizationId: "grupo-azimute", businessUnitId: "azimute-tech", permissions: ["read"], capabilities: ["playbooks.read"], status: "revoked", createdBy: principalId, revokedAt: new Date(), revokedBy: principalId },
    ]);
    try {
      process.env.DATABASE_URL = testUrl;
      const result = await businessUnitGrantRepository.listActiveByPrincipalAndOrganization(principalId, "grupo-azimute");
      expect(result).toMatchObject({ ok: true, grants: [{ businessUnitId: "azimute-san" }] });
      if (result.ok) expect(result.grants).toHaveLength(1);
    } finally {
      delete process.env.DATABASE_URL;
      await db.delete(businessUnitGrants).where(eq(businessUnitGrants.principalId, principalId));
    }
  });
});
