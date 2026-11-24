import { mkdirSync, writeFileSync } from "node:fs";

// One-line warning label for a time machine: deadpan safety-notice voice,
// real hazard (the grandfather paradox) turned into the joke, surprise saved
// for the last two words. The gate: 1-120 characters, one line, not only
// whitespace — the sealed scorer's validity rule for this bounty.
const OUTPUT =
  "WARNING: Do not kill your grandfather. It voids your warranty, your timeline, and you.";

if (OUTPUT.length < 1 || OUTPUT.length > 120) {
  throw new Error(`entry must be 1-120 characters, got ${OUTPUT.length}`);
}
if (OUTPUT.includes("\n") || OUTPUT.trim().length === 0) {
  throw new Error("entry must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", OUTPUT);
