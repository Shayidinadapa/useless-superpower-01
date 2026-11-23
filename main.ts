import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";

// One original line for the "One Line, Zero Use" bounty: a superpower
// whose only trick is arriving exactly when it cannot help anyone.
// Written fresh for this bounty; the punchline lands on the last word.
const SUPERPOWER_LINE =
  "I can turn invisible, but only when nobody is looking — which is exactly when being invisible is completely useless.";

const MAX_CHARS = 200;
const OUTPUT_PATH = "/output/entry.txt";

function validateLine(line: string): void {
  if (line.trim().length === 0) {
    throw new Error("entry line must not be blank");
  }
  if (line.length > MAX_CHARS) {
    throw new Error(
      `entry line must be at most ${MAX_CHARS} characters, got ${line.length}`,
    );
  }
  if (/\r|\n/.test(line)) {
    throw new Error("entry line must fit on a single line");
  }
}

function main(): void {
  validateLine(SUPERPOWER_LINE);
  if (!existsSync("/output")) {
    mkdirSync("/output", { recursive: true });
  }
  writeFileSync(OUTPUT_PATH, SUPERPOWER_LINE, "utf8");
  const written = readFileSync(OUTPUT_PATH, "utf8");
  if (written !== SUPERPOWER_LINE) {
    throw new Error("verification failed: entry.txt does not match the line");
  }
  console.log(`wrote ${written.length} characters to ${OUTPUT_PATH}`);
}

main();
