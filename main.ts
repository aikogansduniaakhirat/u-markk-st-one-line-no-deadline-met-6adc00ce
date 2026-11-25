// One Line, No Deadline Met — one sentence excusing a missed deadline.
// Not a plain apology: it needs a turn, and the turn belongs at the end.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

/**
 * The excuse inverts the failure: the work was done early, and the delay
 * came from the ritual of naming the file. The final clause is the
 * invention — a rule that does not exist, delivered as though it does.
 */
const EXCUSE: string =
  "I finished it Monday; then I renamed the file 'final' four times, and each rename resets the deadline.";

function main(): void {
  const outDir: string = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), EXCUSE, "utf8");
  process.stdout.write(`wrote ${EXCUSE.length} characters / ${Buffer.byteLength(EXCUSE, "utf8")} bytes\n`);
}

main();
