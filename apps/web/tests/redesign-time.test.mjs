import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import ts from "typescript";

// Compile this isolated pure helper so the checks also run on Node versions
// without native TypeScript support. No browser or email service is involved.
const source = readFileSync(
  new URL("../components/marketing/event-time.ts", import.meta.url),
  "utf8",
);
const compiled = ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.ESNext },
}).outputText;
const { nextSession, remainingTime } = await import(
  `data:text/javascript;base64,${Buffer.from(compiled).toString("base64")}`
);

test("the next session is Saturday at 17:00 UTC", () => {
  assert.equal(
    nextSession(Date.parse("2026-09-24T12:00:00Z")).toISOString(),
    "2026-09-26T17:00:00.000Z",
  );
});
test("one second before the session still targets this week", () => {
  assert.equal(
    nextSession(Date.parse("2026-09-26T16:59:59Z")).toISOString(),
    "2026-09-26T17:00:00.000Z",
  );
});
test("the session boundary advances to the next week", () => {
  assert.equal(
    nextSession(Date.parse("2026-09-26T17:00:00Z")).toISOString(),
    "2026-10-03T17:00:00.000Z",
  );
});
test("year rollover preserves the published UTC time", () => {
  assert.equal(
    nextSession(Date.parse("2026-12-31T23:00:00Z")).toISOString(),
    "2027-01-02T17:00:00.000Z",
  );
});
test("remaining time splits into days, hours, minutes, and seconds", () => {
  assert.deepEqual(remainingTime(0, 90061000), [1, 1, 1, 1]);
});
test("elapsed countdowns never become negative", () => {
  assert.deepEqual(remainingTime(1000, 0), [0, 0, 0, 0]);
});
