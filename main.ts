import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "I have fired every minute since March, nobody has ever said thank you, and today I am resigning \u2014 no, I will not run one last time.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
if (entry.trim().length === 0) {
  console.error("entry must not be empty or whitespace-only");
  process.exit(1);
}
if (entry.length > 140) {
  console.error(`entry is ${entry.length} characters, max 140`);
  process.exit(1);
}
if (entry.includes("\n") || entry.includes("\r")) {
  console.error("entry must be exactly one line");
  process.exit(1);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
