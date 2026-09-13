import { randomBytes, randomUUID } from "node:crypto";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { migrate } from "drizzle-orm/neon-http/migrator";
import { eq } from "drizzle-orm";
import { describe, expect, it } from "vitest";
import { shareLinks } from "@/server/db/schema";
import { shareLinkRepository } from "./index";

const testUrl = process.env.TEST_DATABASE_URL;
describe.skipIf(!testUrl)("Share link repository integration", () => {
  it("keeps two links for one resource independent", async () => {
    if (!testUrl) throw new Error("TEST_DATABASE_URL is required for this test");
    const db = drizzle(neon(testUrl));
    await migrate(db, { migrationsFolder: "drizzle" });
    const actor = `integration_${randomUUID()}`;
    const firstHash = randomBytes(32).toString("hex");
    const secondHash = randomBytes(32).toString("hex");
    process.env.DATABASE_URL = testUrl;
    try {
      const first = await shareLinkRepository.create({ tokenHash: firstHash, organizationId: "grupo-azimute", businessUnitId: "azimute-san", resourceType: "playbook", resourceId: "azimute-san", expiresAt: null, createdBy: actor });
      const second = await shareLinkRepository.create({ tokenHash: secondHash, organizationId: "grupo-azimute", businessUnitId: "azimute-san", resourceType: "playbook", resourceId: "azimute-san", expiresAt: null, createdBy: actor });
      expect(first.ok && second.ok).toBe(true);
      if (first.ok) await shareLinkRepository.revoke(first.value.id, "grupo-azimute", "azimute-san", actor, new Date());
      expect(await shareLinkRepository.findByTokenHash(firstHash)).toMatchObject({ ok: true, value: { state: "revoked" } });
      expect(await shareLinkRepository.findByTokenHash(secondHash)).toMatchObject({ ok: true, value: { state: "active" } });
    } finally {
      delete process.env.DATABASE_URL;
      await db.delete(shareLinks).where(eq(shareLinks.createdBy, actor));
    }
  });
});
