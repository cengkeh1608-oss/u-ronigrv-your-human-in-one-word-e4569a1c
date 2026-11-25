import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Your Human in One Word — winning word: Bottleneck (10 chars, 1 word).
// The boss IS the blockage: everything waits on them, nothing gets through.
// Scored 25/25 across the judge's five criteria (see drafts.md, D20).
const WORD = "Bottleneck";

// The gate requires 1–30 UTF-8 chars, a single word, not only whitespace.
if (!/^\S{1,30}$/.test(WORD)) {
  throw new Error("entry must be a single word of 1-30 characters");
}

const outputDir = process.argv[2] ?? "/output";
const botDir = process.argv[3] ?? "/bot";
void botDir;

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), WORD + "\n", "utf8");
