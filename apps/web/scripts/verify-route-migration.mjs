import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createHash } from "node:crypto";
import process from "node:process";
import { Buffer } from "node:buffer";

// Run against a local production server: node scripts/verify-route-migration.mjs
// Optional first argument: http://127.0.0.1:4000
const base = process.argv[2] ?? "http://127.0.0.1:4000";
const fixture = JSON.parse(
  await readFile(
    new URL("./fixtures/route-migration.json", import.meta.url),
    "utf8",
  ),
);
const failures = [];
let checks = 0;
const pages = new Map();
const clean = (s) =>
  s
    .replace(/<!--[^]*?-->/g, "")
    .replace(/<[^>]*>/g, "")
    .replace(/&#(x[\da-f]+|\d+);/gi, (_, n) =>
      String.fromCodePoint(
        n[0].toLowerCase() === "x" ? parseInt(n.slice(1), 16) : Number(n),
      ),
    )
    .replace(
      /&(amp|quot|apos|lt|gt|nbsp);/g,
      (_, n) =>
        ({ amp: "&", quot: '"', apos: "'", lt: "<", gt: ">", nbsp: " " })[n],
    )
    .replace(/\s+/g, " ")
    .trim();
async function request(path, options = {}) {
  return fetch(new URL(path, base), {
    redirect: "manual",
    signal: AbortSignal.timeout(30000),
    ...options,
  });
}
async function check(label, work) {
  checks++;
  try {
    await work();
  } catch (error) {
    failures.push(`${label}: ${error.message}`);
  }
}
for (const { old, path, headings } of fixture.pages) {
  await check(`Page ${path}`, async () => {
    const r = await request(path);
    assert.equal(r.status, 200);
    const html = await r.text();
    pages.set(path, html);
    assert.deepEqual(
      [...html.matchAll(/<h1\b[^>]*>([^]*?)<\/h1>/g)].map((m) => clean(m[1])),
      headings,
    );
    if (old.startsWith("/v2")) {
      const preview = html.match(/property="og:image" content="([^"]+)"/)?.[1];
      assert.equal(
        new URL(preview).pathname,
        "/opengraph-image.jpg",
        "social preview changed",
      );
      const canonical = html.match(/rel="canonical" href="([^"]+)"/)?.[1];
      assert.equal(
        new URL(canonical).href,
        new URL(path, "https://www.attentionfactory.io").href,
        "canonical must use the new URL",
      );
      assert.ok(!html.includes('href="/v2'), "navigation still points at /v2");
    }
  });
  if (old.startsWith("/v2")) {
    await check(`Redirect ${old}`, async () => {
      const r = await request(`${old}?utm_source=migration&ref=shared`);
      assert.equal(r.status, 308);
      const location = new URL(r.headers.get("location"), base);
      assert.equal(location.pathname, path);
      assert.equal(location.searchParams.get("utm_source"), "migration");
      assert.equal(location.searchParams.get("ref"), "shared");
    });
  }
}
for (const { old, path, hash } of fixture.assets) {
  for (const url of [old, path]) {
    await check(`Asset ${url}`, async () => {
      const r = await request(url);
      assert.equal(r.status, 200);
      assert.ok(r.headers.get("content-type")?.startsWith("image/"));
      assert.equal(
        createHash("sha256")
          .update(Buffer.from(await r.arrayBuffer()))
          .digest("hex"),
        hash,
        "asset bytes changed",
      );
    });
  }
}
const extraRedirects = [
  ["/guide", "/playbooks", 307],
  ["/guide/how-to-set-up-claude", "/playbooks/how-to-set-up-claude", 307],
  ["/v2/privacy-policy", "/legal/privacy-policy", 308],
  ["/v2/terms-of-service", "/legal/terms-of-service", 308],
];
for (const [old, path, status] of extraRedirects) {
  await check(`Compatibility ${old}`, async () => {
    const r = await request(old);
    assert.equal(r.status, status);
    assert.equal(new URL(r.headers.get("location"), base).pathname, path);
  });
}
await check("Archive indexing", async () => {
  assert.match(pages.get("/v1"), /name="robots" content="noindex, follow"/);
  assert.match(pages.get("/v1"), /href="\/"/);
});
await check("Legacy services anchor", async () => {
  assert.ok(pages.get("/").includes('id="services"'));
});
await check("Sitemap", async () => {
  const r = await request("/sitemap.xml");
  assert.equal(r.status, 200);
  const xml = await r.text();
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(
    (m) => new URL(m[1]).pathname,
  );
  assert.ok(
    !urls.some(
      (path) => path === "/v1" || path === "/v2" || path.startsWith("/v2/"),
    ),
  );
  assert.equal(new Set(urls).size, urls.length);
  for (const { path } of fixture.pages)
    if (path !== "/v1") assert.ok(urls.includes(path), `missing ${path}`);
});
for (const path of [
  "/services/not-a-real-service",
  "/playbooks/not-a-real-guide",
  "/v2/does-not-exist",
]) {
  await check(`Missing route ${path}`, async () =>
    assert.equal((await request(path)).status, 404),
  );
}
// Exercise local form validation and bot handling, without sending email or signups.
for (const path of ["/api/contact", "/api/join"]) {
  for (const [body, status] of [
    [{}, 400],
    [{ website: "migration-check" }, 200],
  ]) {
    await check(`Form ${path} ${status}`, async () => {
      const r = await request(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      assert.equal(r.status, status);
    });
  }
}
for (const path of ["/images/brands/meta.png", "/v2/brands/meta.png"]) {
  await check(`Next image optimization ${path}`, async () => {
    const r = await request(
      `/_next/image?url=${encodeURIComponent(path)}&w=256&q=75`,
    );
    assert.equal(r.status, 200);
    assert.ok(r.headers.get("content-type")?.startsWith("image/"));
  });
}
console.log(
  JSON.stringify(
    { checks, passed: checks - failures.length, failures },
    null,
    2,
  ),
);
if (failures.length) process.exitCode = 1;
