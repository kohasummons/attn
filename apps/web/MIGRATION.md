# Homepage migration — 16 September 2026

The former `/v2` site now owns the root URLs. The old homepage is preserved at
`/v1`, with `noindex, follow` metadata and a banner linking to the new homepage.

## Compatibility

- Every former `/v2` page redirects permanently to its corresponding root URL.
  Query strings and browser fragments are preserved.
- All 67 assets formerly in `public/v2` have moved into descriptive folders in
  `public/images`: backgrounds, brand, brands, impact, logos, team, testimonials.
- Exact asset rewrites in `route-migration.mjs` serve old image URLs from the
  relocated files. Keep these mappings for published embeds and cached pages.
- `/guide` and `/guide/:slug` redirect directly to `/playbooks` and its articles.
- `/launch`, `/superrad`, `/superrad/upgrade`, `/team`, `/university`, `/free-audit`,
  legal pages, API endpoints, and all ten older service pages keep their routes.
  Superrad's shared logo references now use the relocated assets.
- Old `/#services` links now land on the new homepage's services section.
- New service pages coexist with the legacy static service pages and image
  endpoints. Explicit page metadata preserves the promoted pages' main-site
  social image instead of inheriting legacy service previews.

## Verification

Before editing, captured all 70 existing page responses and hashes of all 67
assets. The checked-in migration fixture records the original page headings and
asset hashes.

From the repository root, build and run a local production server:

```sh
pnpm --filter web build
pnpm --filter web start --hostname 127.0.0.1 --port 4000
```

In another terminal:

```sh
node apps/web/scripts/verify-route-migration.mjs
```

An optional first argument selects a different server URL. The script performs
271 checks covering page status and headings, 51 old page URLs and their query
strings, both URLs for each relocated asset (including byte hashes), canonical
and social metadata, archive indexing, the sitemap, missing routes, old guide
and legal redirects, image optimization, and local form validation/bot handling.
It does not send email or create real signups. If intentionally changing page
headings or image contents later, update the relevant baseline fixture.

Results:

- Production build and TypeScript validation passed.
- All 271 migration checks passed against the final production build.
- Crawled 147 unique local link/asset targets; no new broken targets.
- External link destinations matched their pre-migration values.
- Protected route source files matched their baseline hashes; Superrad's sole
  change is its shared logo paths and associated comment.
- Browser checked desktop/mobile homepage rendering, navigation, playbook
  search and guide navigation, the archive, and a legacy contact link carrying
  both a query string and a fragment.
- `git diff --check` passed.

## Existing issues outside this migration

- `/bootcamp-flyer.jpg`, referenced by the AI certifications guide, was already
  missing. The guide reference is unchanged; the original image is needed.
- Strict lint remains blocked by 17 pre-existing warnings in four unchanged
  files: the launch page, university page, AI certifications guide component,
  and HeyGen translation guide component. No lint errors were reported.
- Actual email delivery, external signups, and checkout were not exercised.

Release validation was repeated after the homepage design updates: the production build passed, all 271 migration checks passed, and ESLint reported no errors (the same 17 existing warnings). The feature branch is intended for Vercel preview review before merging into main.
