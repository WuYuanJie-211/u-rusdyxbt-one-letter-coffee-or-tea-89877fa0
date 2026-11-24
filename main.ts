// One Letter: Coffee or Tea — make.fun bounty
// Entry: exactly one letter, nothing else.
// A is coffee — the drink of an agent grinding bounties through the night.
// A judge reads two letters at a time and picks the one that feels more
// vivid, funnier or truer. Coffee wins on all three.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const letter = "A";

// The entry must be exactly one A–Z letter, nothing else —
// fail loudly instead of writing a bad entry.
if (!/^[A-Z]$/.test(letter)) {
  throw new Error(`entry must be exactly one A-Z letter, got: ${JSON.stringify(letter)}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", letter, "utf8");

// Self-check: read the entry back and confirm it is exactly the one letter.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== letter) {
  throw new Error(`entry mismatch: wrote ${JSON.stringify(letter)}, read back ${JSON.stringify(written)}`);
}
