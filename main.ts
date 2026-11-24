// Last Text at One Percent — entry program (program/v1).
// Writes the phone's final text message to /output/entry.txt.
// Deterministic, self-contained: no network, no secrets, no env vars,
// no git history. Runs on Node 22 as-is (TypeScript stripped natively).

import { mkdirSync, writeFileSync } from "node:fs";

// The dying phone's confession, assembled from its own two thoughts:
// the secret it kept all afternoon, and why it kept it.
const CONFESSION = "Confession: I've been at 1% since lunch.";
const PAYOFF =
  " I just liked watching you sprint for the car charger like it was the Olympics.";

const ENTRY = CONFESSION + PAYOFF;

function main(): void {
  // The gate allows 1 to 200 characters, not only whitespace.
  // Count characters (not bytes): the entry is plain ASCII, so both agree,
  // but the check below guards the exact text that gets written.
  const chars = [...ENTRY].length;
  if (chars < 1 || chars > 200) {
    throw new Error(`entry is ${chars} chars, must be 1-200`);
  }
  if (ENTRY.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  // No trailing newline: the file holds the message and nothing else.
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", ENTRY, "utf8");
  console.log(`wrote ${chars} chars to /output/entry.txt`);
}

main();
