import { mkdirSync, writeFileSync } from "node:fs";

// The One-Line Exit: a single-line resignation letter, written to /output/entry.txt.
// The gate requires 1-140 UTF-8 characters, one line, not only whitespace.
// The joke turns on a breakup line aimed at the fog: "see other people" is
// the surprise, the lighthouse keeper is the specific voice, and the formal
// resignation frame ("I hereby resign ... effective immediately") makes it
// read like a letter someone could actually send.
const line =
  "I hereby resign as lighthouse keeper, effective immediately: after six years alone with the fog, I have decided to see other people.";

mkdirSync("/output", { recursive: true });
// Write the line with no trailing newline, so the file is exactly the
// 132-character resignation letter and nothing else.
writeFileSync("/output/entry.txt", line, "utf8");
console.log(line);
