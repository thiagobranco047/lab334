import { readFile, readdir } from "node:fs/promises";
import path from "node:path";

const root = path.resolve("drizzle");
const journal = JSON.parse(await readFile(path.join(root, "meta", "_journal.json"), "utf8"));
const sqlFiles = (await readdir(root)).filter((file) => /^\d{4}_.+\.sql$/.test(file)).sort();
const tags = journal.entries.map((entry) => entry.tag);
if (new Set(tags).size !== tags.length) throw new Error("Duplicate migration journal tag");
if (sqlFiles.length !== tags.length) throw new Error("Migration SQL/journal count mismatch");
for (const [index, tag] of tags.entries()) {
  const expectedPrefix = String(index).padStart(4, "0");
  if (!tag.startsWith(`${expectedPrefix}_`) || sqlFiles[index] !== `${tag}.sql`) throw new Error(`Invalid migration ordering at ${tag}`);
  const sql = await readFile(path.join(root, sqlFiles[index]), "utf8");
  if (!sql.trim()) throw new Error(`Invalid migration content: ${sqlFiles[index]}`);
}

const shareLinkMigration = await readFile(path.join(root, "0002_orange_blazing_skull.sql"), "utf8");
for (const fragment of [
  'CREATE TYPE "public"."share_link_resource_type"',
  'CREATE TYPE "public"."share_link_status"',
  'CREATE TABLE "share_links"',
  'CONSTRAINT "share_links_token_hash_unique" UNIQUE("token_hash")',
  'CONSTRAINT "share_links_token_hash_format"',
  'CONSTRAINT "share_links_revocation_audit"',
]) {
  if (!shareLinkMigration.includes(fragment)) throw new Error(`Share link migration is missing: ${fragment}`);
}
if (/UNIQUE\s*\(\s*"organization_id"/i.test(shareLinkMigration) || /share_links_resource_unique/i.test(shareLinkMigration)) {
  throw new Error("Share link migration must allow multiple links for the same resource");
}
console.log(`${sqlFiles.length} migration(s) validated`);
