import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

describe("database command configuration", () => {
  it.each(["db:ping", "db:migration:ping", "db:migrate"])("loads optional local environment for %s", (scriptName) => {
    const packageJson = JSON.parse(fs.readFileSync(path.resolve("package.json"), "utf8")) as { scripts: Record<string, string> };

    expect(packageJson.scripts[scriptName]).toContain("node --env-file-if-exists=.env.local");
  });
});
