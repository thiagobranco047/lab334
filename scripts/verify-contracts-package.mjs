import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import path from "node:path";

const archive = path.resolve("vendor/contracts/lab334-contracts-0.1.5.tgz");
const checksum = `${archive}.sha256`;
const digest = createHash("sha256").update(await readFile(archive)).digest("hex");
const expected = (await readFile(checksum, "utf8")).trim().split(/\s+/)[0];
if (digest !== expected) throw new Error("Vendored contracts checksum mismatch");
const packageLock = JSON.parse(await readFile(path.resolve("package-lock.json"), "utf8"));
const locked = packageLock.packages?.["node_modules/@lab334/contracts"];
const lockIntegrity = `sha512-${createHash("sha512").update(await readFile(archive)).digest("base64")}`;
if (locked?.version !== "0.1.5" || locked.integrity !== lockIntegrity || locked.resolved !== "file:vendor/contracts/lab334-contracts-0.1.5.tgz") throw new Error("package-lock does not pin the exact @lab334/contracts@0.1.5 archive integrity");
console.log(`@lab334/contracts@0.1.5 verified ${digest}`);
