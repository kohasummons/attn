# web-temp

Marketing site for Attention Factory. Turborepo; the site lives in `apps/web`.
Active work is on the **v2** branch, under `apps/web/app/v2/`.

## Before you write any UI

**Read `apps/web/BRAND.md` first.** It is the source of truth for type, color,
layout, voice, and the section-by-section recipe for each page type. Do not
invent a new visual treatment, type scale, or color when one is defined there.
If you need something the system doesn't cover, add it to BRAND.md in the same
change.

A living version of the system renders at `/v2/brand`.

## Non-negotiables

- Container is `max-w-[1166px] px-6` via `<Container>`.
- Headings: `font-medium`, `tracking-[-0.04em]`, `leading-[1.05]`.
- Square corners. Borders and background switches for separation — never shadows.
- Accent `#ff4100` appears at most once per viewport, on CTAs only.
- Reuse `Container`, `ArrowButton`, `EyebrowLabel`. Don't re-implement them inline.
- No dead links. Every `href` must resolve to a real route.
- Never write "leverage", "empower", "unlock", "seamless", "cutting-edge".

## Conventions

- All v2 routes live under `app/v2/`. Shared sections in `components/sections/`,
  primitives in `components/ui/`.
- `ArrowButton` renders a `<button>` and cannot navigate — use `<Link>` styled
  to match for anything that goes somewhere.
- External destinations: Attention University → `https://app.attentionfactory.io`,
  Weekends of AI → `https://weekendsofai.com`.

## Checks

```bash
cd apps/web && npx tsc --noEmit -p tsconfig.json
```
