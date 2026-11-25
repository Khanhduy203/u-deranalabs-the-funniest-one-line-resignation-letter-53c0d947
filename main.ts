import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "I have fired every minute since March, nobody has ever said thank you, and today I am resigning \u2014 no, I will not run one last time.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
