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

`apps/web/public/redesign` contains only referenced local Figma assets. The paintings, architectural illustrations, and partner logos were exported as individual layers. The paintings bake in Figma's original dither effect, avoiding a WebGPU or experimental HTML-in-Canvas requirement. Text, controls, cards, and page layout are HTML, not screenshot overlays. Next Image optimizes raster assets.

### Footer fidelity correction

The complete desktop measured wordmark is `footer-wordmark.svg` (node `24102:320`, 1160 × 232), including construction lines, arrows, and A/B/X/Y labels. `footer-wordmark-mobile.svg` uses Figma's separate mobile composition (`24146:1211`, 392 × 132). The brand logo is `attention-factory-logo.svg` (`24102:383`). These replace the earlier PNG wordmark and CSS measurement approximation.

The circular glass icons are original SVG exports from `24146:1347`, `24146:1353`, `24146:1359`, and `24146:1369`; Gemini retains the original `6792f.svg`. Exporting with `contentsOnly: true` preserves transparency without capturing ancestor backgrounds. The SVGs are unmodified. Interactive pill borders and gradients follow the Figma values, with native links and visible keyboard focus. Desktop card dimensions are 326 × 254; the 440px mobile composition uses a 392 × 254 card below the two-column navigation. Narrow screens allow text to wrap and reduce the horizontal pill gap.

## Content decisions and follow-up

- Weekends of AI's live website and its countdown implementation were inspected on 24 September 2026. Its schedule is Saturday **17:00 UTC / 18:00 WAT**, with registration at `https://weekendsofai.com/signup`. The counter advances at the same weekly boundary as the source website. The next session at implementation time is **26 September 2026**.
- Bazooka, Billa, and Tazer intentionally use Figma's temporary artwork and are labelled Preview. The user explicitly asked to add their real URLs later. Set their `href` fields in `content.ts` when available.
- Article cards retain the three existing published guide destinations. Both desktop and mobile reproduce Figma's repeated February roundup placeholder title and excerpt. Final editorial content needs to be reconciled with the linked destinations before publishing.
- The testimonial rail preserves the three repeated Dapo Ijaola cards in Figma. Duplicate cards are hidden from assistive technology. The mobile homepage hides this section entirely, matching its source frame. Replace the duplicates with approved quotes when supplied.
- The HQ opening date is the 5 October 2026 date specified in Figma. Confirm post-launch copy when that date passes.
- Desktop services use a focusable scrolling region matching the source's two-row viewport. All four categories remain reachable by pointer and keyboard; mobile shows the complete stacked list.
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
