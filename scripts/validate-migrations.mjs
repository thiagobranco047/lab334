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
  if (!sql.trim() || !sql.includes("business_unit_grants")) throw new Error(`Invalid migration content: ${sqlFiles[index]}`);
}
console.log(`${sqlFiles.length} migration(s) validated`);
