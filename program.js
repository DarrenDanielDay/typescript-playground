// @ts-check
import path from "path";
import fs from "fs/promises";
import child_process from "child_process";

const tsFile = process.argv.at(-1) ?? "";
const cwd = process.cwd();
const relativePath = path.relative(path.resolve(cwd, "src"), tsFile);
const parsed = path.parse(relativePath);
if (relativePath.startsWith("..") || !/^\.[mc]?ts$/.test(parsed.ext)) {
  throw new Error(`Current file is not a valid TypeScript source file: ${tsFile}`);
}
const ext = parsed.ext.replace("t", "j");
const jsFile = path.resolve(cwd, "dist", parsed.dir, `${parsed.name}${ext}`);
const stdinHandle = await fs.open(path.resolve(cwd, "./stdin.txt"));
const stdinFileReadStream = stdinHandle.createReadStream({ encoding: "utf-8" });
child_process.fork(jsFile, {
  stdio: [stdinFileReadStream, process.stdout, process.stderr, "ipc"],
});
