# Attention Factory redesign

Branch: `codex/attention-factory-redesign`

## Design source

[Figma copy](https://www.figma.com/design/CiNSnG4vaNPINEChZUYVz1/attention-factory--Copy-?node-id=10-5), **Designs** page.

| Page     | Desktop frame | Mobile frame          | Route         |
| -------- | ------------- | --------------------- | ------------- |
| Homepage | 24023:89      | 24123:1055            | `/`           |
| About    | 24214:2261    | 24214:2871            | `/about`      |
| Labs     | 24214:7358    | Responsive adaptation | `/labs`       |
| Contact  | 24214:5702    | 24214:5749            | Shared dialog |

The previous `/v2`, `/v2/about`, and `/v2/the-lab` entry points redirect to the corresponding new pages. Other service, guide, course, community, and legal pages retain their existing functionality and styles.

## Component map

`apps/web/components/marketing` contains the Figma compositions. It consumes the existing shadcn Button, NavigationMenu, Accordion, Dialog, Input, and Container. NativeSelect and Textarea were added from the project's configured **base-nova** shadcn registry; no additional dependencies were needed.

- `pages.tsx`: page composition; page content remains server rendered.
- `hero.tsx`, `sections.tsx`, `footer.tsx`: shared editorial layouts and original artwork.
- `navigation.tsx`: desktop menus and an accessible mobile dialog.
- `contact-dialog.tsx`: shared contact interaction using the existing `/api/contact` endpoint, including the honeypot, validation, pending, success, and failure states.
- `faq.tsx`: shadcn accordion and plus/minus presentation.
- `content.ts`: destination links, services, FAQs, and product metadata.
- `event.tsx`, `event-time.ts`: live countdown with deterministic UTC calculations.
- `primitives.tsx`: container, eyebrow, action link, and decorative artwork compositions.
- `mobile.css`: shared 440px mobile composition; `interior.css` supplies About and Labs differences. `desktop.css` follows the 1440px desktop frames. Local Inter Display faces in `fonts/` include their OFL license. See [the responsive section audit](responsive-fidelity.md).
- `styles.css`: scoped Figma tokens and responsive layouts. Legacy square-corner styles apply only when the page does not contain `.af-site`.

Motion for React (`motion/react`, the existing Framer Motion package) handles dialog entry and exit with opacity and a full transform string, 200ms, `[0.23, 1, 0.32, 1]`. Reduced motion removes spatial movement. CSS handles small hover/press feedback, with pointer gating and reduced-motion overrides. Content is visible without scroll-triggered JavaScript.

## Artwork

`apps/web/public/redesign` contains only referenced local Figma assets. The paintings, architectural illustrations, and partner logos were exported as individual layers. All painting layers now use clean full-resolution sources with the reusable live WebGL dither system; gradients and dimming are applied in the app. See [live image dithering](dither-effects.md) for source provenance, reuse, and rendering limits. Text, controls, cards, and page layout are HTML, not screenshot overlays. Next Image optimizes raster assets.

### Footer fidelity correction

The complete desktop measured wordmark is `footer-wordmark.svg` (node `24102:320`, 1160 × 232), including construction lines, arrows, and A/B/X/Y labels. `footer-wordmark-mobile.svg` uses Figma's separate mobile composition (`24146:1211`, 392 × 132). The brand logo is `attention-factory-logo.svg` (`24102:383`). These replace the earlier PNG wordmark and CSS measurement approximation.

The circular glass icons are original SVG exports from `24146:1347`, `24146:1353`, `24146:1359`, and `24146:1369`; Gemini retains the original `6792f.svg`. Exporting with `contentsOnly: true` preserves transparency without capturing ancestor backgrounds. The SVGs are unmodified. Interactive pill borders and gradients follow the Figma values, with native links and visible keyboard focus. Desktop card dimensions are 326 × 254; the 440px mobile composition uses a 392 × 254 card below the two-column navigation. Narrow screens allow text to wrap and reduce the horizontal pill gap.

## Content decisions and follow-up

- Weekends of AI's live website and its countdown implementation were inspected on 24 September 2026. Its schedule is Saturday **17:00 UTC / 18:00 WAT**, with registration at `https://weekendsofai.com/signup`. The counter advances at the same weekly boundary as the source website. The next session at implementation time is **26 September 2026**.
- Bazooka, Billa, and Tazer intentionally use Figma's temporary artwork and are labelled Preview. The user explicitly asked to add their real URLs later. Set their `href` fields in `content.ts` when available.
- Article cards retain the three existing published guide destinations. Both desktop and mobile reproduce Figma's repeated February roundup placeholder title and excerpt. Final editorial content needs to be reconciled with the linked destinations before publishing.
- The testimonial rail preserves the three repeated Dapo Ijaola cards in Figma. Duplicate cards are hidden from assistive technology. The mobile homepage hides this section entirely, matching its source frame. Replace the duplicates with approved quotes when supplied.
- The HQ opening date is the 5 October 2026 date specified in Figma. Confirm post-launch copy when that date passes.
- Desktop services and About partnerships use a sticky left summary while all four cards scroll with the document, matching the designer’s “Fixed scrolling” interaction. The summary releases at the end of the grid. Mobile keeps the complete static stacked layout.
- Contact delivery uses the existing Resend configuration. No real email was sent during verification.
- Desktop and mobile restore Figma's “All systems operational” rows as static design copy; they are not connected to a live status service.

## Verification

- Production build and TypeScript validation passed.
- Targeted ESLint validation passed for the new compositions and changed UI files.
- `node --test apps/web/tests/redesign-time.test.mjs` runs six regression checks. Countdown checks cover before-session, exact start, year rollover, elapsed time, and nonnegative values.
- Browser review covers desktop and mobile layouts, original assets, navigation, nested contact dialog, required fields, Escape, focus return, and FAQ expansion.

## Linear sync queue

Linear was requested for continuous tracking. No callable Linear connector is exposed in this session; the available browser session was signed out. No issues or updates have been claimed as synced.

Ready to sync as a parent issue and implementation checklist:

1. Figma source audit, reusable component plan, and redesign branch — complete.
2. Scoped typography/color/layout tokens and local asset exports — complete.
3. Homepage, About, and Labs compositions — complete.
4. shadcn navigation, FAQ, contact form, and Framer Motion transitions — complete.
5. Real Weekends of AI countdown and existing guide destinations — complete.
6. Responsive, accessibility interaction, type, lint, and production-build checks — complete.
7. Add final Bazooka/Billa/Tazer URLs — awaiting owner content, temporary state approved.
8. Publish/deploy — not performed; changes remain on the redesign branch.

9. Footer fidelity correction — complete: original measured SVGs, transparent glass icon exports, three-row agent pills, desktop/mobile placement, and responsive browser review. TypeScript and targeted lint passed.

10. Mobile homepage section audit — complete: all 11 section offsets/heights match the 440 × 7708 source frame; original mobile artwork, Inter Display typography, SVG arrows and glass details; overflow checks at 320/390px and desktop regression at 1440px. See [mobile-fidelity.md](mobile-fidelity.md). Still queued for Linear sync.

11. Desktop homepage/About/Labs and mobile About audit — complete: native section geometry, original backgrounds and decorative exports, transparent glass lock, shared typography, responsive Labs adaptation, and keyboard access. Browser checks cover 320/390/440/768/1024/1440/1920px. See [responsive-fidelity.md](responsive-fidelity.md). Still queued for Linear sync.

11. Designer’s fixed-scrolling services interaction — implemented with native CSS sticky, normal document flow for all four cards, and no nested scrolling region. Shared by Home and About; mobile stays stacked. Queued for Linear sync.

12. About metrics count-up — complete: reusable Motion count-up, once on entry, 1.6s ease-out, comma formatting and suffix preservation, reserved final width, static accessible totals, and immediate final values for reduced motion. Verified desktop and mobile entry, correct final totals, and no replay on scrolling back. TypeScript and scoped lint passed. Queued for Linear sync.

13. Enabled button pointer cursors — complete; verified navigation, FAQ, contact close and submit controls in browser.
14. Visit Our Lab ribbon — complete: reusable Motion ticker, linear 40-second right-to-left loop with identical halves, reduced-motion fallback, single accessible Labs link, unchanged 47px desktop / 34px mobile height. Verified movement, equal loop widths, no page overflow, and navigation to Labs. TypeScript and scoped ESLint passed. Queued for Linear sync.

15. Floating decorative squares — complete: original Figma vector exports split into stationary rails and three independently animated square groups; Motion cycles of 7/8.6/10.2 seconds with travel derived from the full visible line endpoints, sine easing between the two extremes and offset phases between the three pairs; matching opposite squares share their phase, reduced-motion fallback, and per-instance SVG paint IDs. Shared by trust, testimonials, and metrics. Mobile vectors retain 32px width; duplicate trust decorations removed. Desktop/mobile rendering, independent transforms, stationary rails, and unique paint IDs verified. TypeScript and scoped ESLint passed. Queued for Linear sync.

16. Floating motion review — corrected the midpoint hesitation caused by five eased keyframes, removed synchronized left/right timing, and moved the mobile left rail down so all three squares remain inside the clipped metrics section. Browser checks confirmed all six mobile squares visible, distinct transforms on each side, and no horizontal overflow. TypeScript and scoped lint passed. Local preview restarted on port 4000.

17. Opposite square pairing — corrected per owner clarification: the right group mirrors the left source horizontally, preserving identical vertical geometry. Opposite pairs now share speed, phase, and travel distance, and use symmetric horizontal gutters. Three pairs retain different rhythms. Desktop measurement confirmed zero height difference for all three pairs and identical transforms. Supersedes the independent left/right timing in item 16.

18. Full-height rail movement — replaced the small bob with top-to-bottom travel derived from exported SVG line geometry. Square bounds include their stroke, and mobile clipping is included in the upper endpoint. Matching opposite boxes share endpoints and timing; different pairs retain different durations. Mobile rails sit in the outer gutter to keep moving squares clear of text. All 12 desktop/mobile endpoint calculations passed; browser checks showed full-range motion and zero height differences between opposite pairs. TypeScript, scoped lint, and whitespace checks passed.

19. Missing footer status — restored “All systems operational” and its green dot beneath the agent card on desktop. Removed the incorrect mobile-only class from the shared status row; retained the separate mobile brand status from the design. Queued for Linear sync.

20. Reusable refractive glass — added lazy-loaded Three.js/WebGL2 GlassScene and Base UI-composable GlassSurface components. Footer agent links and circular icon surrounds share one canvas and sample the actual responsive painting texture. Custom GLSL provides rounded edge refraction, soft transmission, and pointer lighting; labels remain accessible HTML. Includes on-demand rendering, DPR cap, offscreen suspension, reduced-motion lighting, CSS fallback, context restoration, and GPU cleanup. Desktop, 390px and 320px requested viewports, responsive source switching, keyboard focus, and browser shader errors checked; production build (including TypeScript), scoped ESLint, and whitespace checks passed. Existing Google Sans Code fallback warning remains. Reuse contract in docs/glass-effects.md; supports centered cover images, not arbitrary DOM or video. Queued for Linear sync.

21. Site-wide live dithering — replaced baked painting exports with 11 clean Figma originals, verified against fill hashes. Shared DitherImage and one lazy-loaded WebGL renderer cover heroes, landscape sections, all product backdrops, articles, events, footer, and agent artwork on Home/About/Labs. CSS now owns section fades; glass samples the processed canvas. Full-resolution WebP sources total 18.0 MB versus 80.7 MB of originals, with responsive Next Image delivery. Subtle eight-second threshold motion, static reduced-motion mode, capped frame rate/DPR/output pixels, visible-only rendering, offscreen resource release, fallback, and cleanup. Production build and scoped lint passed; browser checks cover responsive sources, actual raster output, and glass composition. Queued for Linear sync.

22. Hero image review — corrected crop-aware source sizes for tall Home/About mobile and tablet heroes, plus the compact Labs hero. Restored homepage painting contrast from the washed-out 0.8 override to 1.2. Browser review covered all three heroes at desktop/mobile sizes; Home mobile requests 1200px rather than 640px. Scoped ESLint and whitespace checks passed. Queued for Linear sync.

23. DialKit live dither tuning — added a development-only Image dithering panel shared across Home/About/Labs, with all-image/hero scope, effect strength/palette/pixel size, animation toggle/cycle/amount, optional color overrides, browser persistence, versions/copy, and reset. Shader registrations now accept live uniform updates without reallocating textures on slider changes. Production build, TypeScript, scoped ESLint, and browser interaction/mobile checks passed. Queued for Linear sync.

24. Keep floating squares close — replaced independently drifting 7/8.6/10.2-second loops with a shared 8.6-second loop and 60ms stagger. Original line endpoints still define full-height travel; opposite squares retain identical geometry and phase. Full-cycle sampling bounds the spread below 38 SVG units for all rail variants. Browser measurements confirm equal opposite-pair heights on desktop/mobile. Scoped lint passed. Supersedes the independent loop durations in item 15. Queued for Linear sync.

25. Shared rail clock and ticker boundary — replaced all independent repeating square animations with one module-level Motion value. Every square and opposite partner reads the same progress; bounded ±2% timing variation cannot accumulate drift and endpoints reverse together. Trust rails now measure the actual logo ticker edge, constrain the square including its stroke to an 8px gap, and clip the rail there. Resize/font-load updates preserve the boundary. Browser desktop/mobile measurements confirmed equal opposite positions and at least 8px ticker clearance; full-range numeric checks found no crossings. Types, scoped lint, and whitespace checks passed. Supersedes item 24’s separate equal-duration loops. Queued for Linear sync.

26. Floating-box DialKit controls — added a development-only Floating boxes panel alongside Image dithering, with live speed (0.25–3×), bounded neighbor speed difference (0–10%, default 2%), browser persistence, copy/versions, and reset. Speed changes adjust the shared clock playback rate without restarting it; opposite pairs stay synchronized and existing endpoint/ticker limits are preserved. Browser checks verified slider extremes, matching opposite positions, and reset; TypeScript and scoped ESLint passed. Queued for Linear sync.

27. Expanded floating-box tuning — added pause/resume, cycle duration, easing, endpoint holds, bounded signed neighbor offset, top/bottom travel insets, and restart. Shared phase preserves matching opposite pairs; existing ticker limits and reduced-motion handling remain active. Numeric checks covered 648,648 bounded monotonic travel samples and endpoint holds; browser checks covered controls, mirrored geometry, pause/resume, and reset. TypeScript and scoped ESLint passed. See floating-box-controls.md. Queued for Linear sync.

28. Independent floating-box turnarounds — moved neighbor timing offsets before endpoint reflection so each box reverses immediately at its own end. Removed endpoint holds and replaced the spatial offset slider with Neighbor Phase Percent (default 1%). Opposite partners still share identical timing, and bounded per-cycle variation prevents drift. Numeric checks verified distinct immediate reversals, 270,027 bounded positions, and no drift after 1,000 cycles. Browser confirmed the new control and matching opposite pairs; types and scoped lint passed. Supersedes item 27’s common turnarounds and endpoint holds. Queued for Linear sync.

29. HQ horizontal rail motion — replaced the static desktop/mobile decorative PNGs with reusable SVG rails: stationary faded dashed lines and moving 16px hatched squares. Reuses the shared Motion timeline, Floating boxes DialKit settings, endpoint reflection, and reduced-motion lifecycle. Upper desktop pair stays matched; the lower square uses a neighboring phase. Travel is constrained to each 219px desktop / 115px mobile rail. Desktop/mobile browser review confirmed movement and sizing; types and scoped lint passed. Queued for Linear sync.

30. Labs redacted cards — corrected both titles and descriptions to [Redacted]. Replaced flattened lock PNGs with reusable GlassScene/GlassSurface circular lenses sampling the actual dark striped panel, keeping the white lock glyph sharp. Desktop and mobile show live WebGL readiness and intact 80px badges. Corrected glass cleanup to avoid losing a still-mounted canvas context during options updates/Strict Mode. Types and scoped lint passed. Queued for Linear sync.
