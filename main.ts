// One Emoji, One Dream Vacation — make.fun entry.
//
// The dream in one picture: dawn on a beach, the sun lifting out of
// the sea while the sand is still empty and the day is all ahead.
// A single postcard emoji — 🌅 — says the whole trip.
//
// Writes the single emoji to /output/entry.txt (or to
// $MAKEFUN_OUTPUT_DIR/entry.txt when that variable is set).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry = "🌅";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, entry, "utf8");

console.log(`Entry written to ${outPath}`);
