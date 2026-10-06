import assert from "node:assert/strict";
import { Buffer } from "node:buffer";
import { readFileSync } from "node:fs";
import test from "node:test";
import ts from "typescript";

const source = readFileSync(
  new URL("../components/marketing/hq-launch-time.ts", import.meta.url),
  "utf8",
);
const compiled = ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.ESNext },
}).outputText;
const { hqLaunchBadgeText } = await import(
  `data:text/javascript;base64,${Buffer.from(compiled).toString("base64")}`
);

test("the number drops at Lagos midnight", () => {
  assert.equal(
    hqLaunchBadgeText(Date.parse("2026-09-24T22:59:59Z")),
    "Attention HQ Opens in 11 Days",
  );
  assert.equal(
    hqLaunchBadgeText(Date.parse("2026-09-24T23:00:00Z")),
    "Attention HQ Opens in 10 Days",
  );
});

test("the final day is singular and the date never goes negative", () => {
  assert.equal(
    hqLaunchBadgeText(Date.parse("2026-10-04T23:00:00Z") - 1),
    "Attention HQ Opens in 1 Day",
  );
  assert.equal(
    hqLaunchBadgeText(Date.parse("2026-10-04T23:00:00Z")),
    "AttentionHQ is live",
  );
  assert.equal(
    hqLaunchBadgeText(Date.parse("2026-10-06T12:00:00Z")),
    "AttentionHQ is live",
  );
});
