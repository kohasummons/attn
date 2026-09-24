# Mobile homepage fidelity audit

Reviewed 24 September 2026 on `codex/attention-factory-redesign`.

Source: [Figma mobile homepage, 24123:1055](https://www.figma.com/design/CiNSnG4vaNPINEChZUYVz1/attention-factory--Copy-?node-id=24123-1055), Designs page `10:5`. This records the homepage mobile composition. The subsequent [responsive audit](responsive-fidelity.md) covers About mobile, Labs responsiveness, and all three desktop pages.

## Section measurements

Measured live browser content width: **440px**. Figma canvas: **440 × 7708px**. All values below are CSS pixels; source and implementation match each listed start position and height with the first FAQ expanded.

| Section           | Source node |  Top | Height | Reviewed details                                                                                 |
| ----------------- | ----------- | ---: | -----: | ------------------------------------------------------------------------------------------------ |
| Hero              | 24123:294   |    0 |    593 | 153 × 20 logo, glass menu, badge, 32/35 typography, italic face, painting crop/fade, button ring |
| Trust             | 24123:1029  |  593 |    278 | Heading, original three-logo strip, dashed frame and side decorations                            |
| Courses           | 24123:1146  |  871 |    632 | Mobile content order, original painting and gradients, headline, support copy, CTA               |
| Projects          | 24142:437   | 1503 |    993 | Product artwork scale, metric starbursts, action arrows, descriptions, repeating orange ribbon   |
| HQ                | 24144:561   | 2496 |    569 | Source heading/copy, CTA, architectural artwork scale/position, decorative measurement line      |
| Services          | 24146:759   | 3065 |   1147 | Intro copy, four 48px source icons, stacked cards, descriptions, links                           |
| FAQ               | 24146:856   | 4212 |    550 | First item expanded, text sizes, dashed side rails, orange plus/cross                            |
| Articles          | 24146:1028  | 4762 |   1154 | Three 328px cards, original dithered paintings, source copy, spacing and corners                 |
| Event             | 24146:1110  | 5916 |    553 | Original painting, CTA, gradient/stroked timer digits, mobile time labels                        |
| Measured wordmark | 24146:1154  | 6469 |    132 | Original 392 × 132 SVG including construction marks and labels                                   |
| Footer            | 24146:1248  | 6601 |   1107 | Brand, status rows, two-column links, original glass SVGs, 392 × 254 agent card                  |

The testimonial rail is absent from the mobile source and is hidden on the mobile homepage. The measured wordmark is inside the semantic footer in HTML; the two separate visual sections above total 1239px.

## Implementation and assets

Shared React compositions and shadcn controls remain reusable. `mobile.css` now shares the source mobile layout, typography, and decorative positioning below 600px across the three pages; `interior.css` supplies page-specific differences. Inter Display regular, medium, semibold, and light italic are local font files with the upstream OFL license. The existing Motion dialog behavior and reduced-motion support remain in place.

Paintings and their original gradients were exported as decorative backgrounds without text or controls. Architectural illustrations, shader-treated article artwork, product textures, trust marks, and service icons are separate source exports. The measured wordmark, glass icons, badge, and action arrows use original SVG exports without rewritten path data. No complete page or section screenshot replaces live text or interactive controls. Temporary export clones were removed from Figma.

## Verification

- Compared each section's browser rendering with its Figma screenshot and layer measurements at 440px content width; total page height is 7708px.
- Checked 320px and 390px content widths for page overflow and text/control clipping. Headings and content reflow naturally below the source width; countdown typography scales to retain all four units.
- Checked desktop at 1440px: no horizontal overflow, desktop copy visible, mobile copy hidden, original desktop hero typography retained.
- Mobile menu opens, Escape closes it, and focus returns to its trigger. FAQ items expand/collapse. Footer Contact Us opens the existing form and Escape dismisses it. No contact message was sent.
- Production build, TypeScript validation, targeted marketing ESLint, and all six countdown regression checks passed.

This records matched section geometry and visual review, not a claim that every rasterized pixel is identical across browser engines, operating systems, dynamic timer values, or viewport widths.

## Content and dynamic exceptions

The user requested the live Weekends of AI schedule. Its timer therefore runs toward Saturday 17:00 UTC / 18:00 WAT instead of freezing Figma's sample digits. The real date/time remains in its accessible timer label. Registration still uses the live signup destination.

The mobile source's static “Opens in 12 Days” badge, original copy/typos, repeated “AI Roundup For February” placeholders, and two “All systems operational” rows are reproduced for design fidelity. The badge is not a computed countdown and the status labels are not live health checks. Article links retain existing published guide destinations; editorial titles should be reconciled with those destinations before publishing.

No deployment was performed. Linear has no callable connector in this session; this audit is recorded locally and queued for sync in `redesign.md`.
