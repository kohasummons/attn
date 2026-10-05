# Responsive fidelity audit

Reviewed 24 September 2026 on `codex/attention-factory-redesign`.

Source: [Figma Designs page](https://www.figma.com/design/CiNSnG4vaNPINEChZUYVz1/attention-factory--Copy-?node-id=10-5). Desktop frames: homepage `24023:89`, About `24214:2261`, Labs `24214:7358`. About mobile: `24214:2871`. The [homepage mobile audit](mobile-fidelity.md) remains the companion record.

## Section measurements

These tables preserve the original static-frame audit at the native content width. The subsequent designer-requested sticky services interaction expands desktop Services/Partnerships to show all four cards in document flow, so their heights and all following desktop offsets are no longer the values below. Mobile geometry is unaffected. Desktop FAQs begin collapsed; mobile begins with the first item expanded. Wordmark and footer are distinct visual sections inside one semantic footer.

### Homepage desktop — 1440 × 6722

| Section           |  Top | Height |
| ----------------- | ---: | -----: |
| Hero              |    0 |    772 |
| Trust             |  772 |    352 |
| Courses           | 1124 |    777 |
| Projects          | 1901 |    756 |
| HQ                | 2657 |    619 |
| Services          | 3276 |    518 |
| Testimonials      | 3794 |    506 |
| FAQ               | 4300 |    373 |
| Articles          | 4673 |    581 |
| Event             | 5254 |    641 |
| Measured wordmark | 5895 |    232 |
| Footer            | 6127 |    595 |

### About desktop — 1440 × 5089

| Section           |  Top | Height |
| ----------------- | ---: | -----: |
| Hero              |    0 |    772 |
| Story             |  772 |    777 |
| Partnerships      | 1549 |    518 |
| Mission           | 2067 |    777 |
| Metrics           | 2844 |    404 |
| FAQ               | 3248 |    373 |
| Event             | 3621 |    641 |
| Measured wordmark | 4262 |    232 |
| Footer            | 4494 |    595 |

### Labs desktop — 1440 × 3219

| Section           |  Top | Height |
| ----------------- | ---: | -----: |
| Hero              |    0 |    422 |
| Projects          |  422 |    956 |
| FAQ               | 1378 |    373 |
| Event             | 1751 |    641 |
| Measured wordmark | 2392 |    232 |
| Footer            | 2624 |    595 |

### About mobile — 440 × 6100

| Section           |  Top | Height |
| ----------------- | ---: | -----: |
| Hero              |    0 |    593 |
| Story             |  593 |    655 |
| Partnerships      | 1248 |   1223 |
| Mission           | 2471 |    632 |
| Metrics           | 3103 |    655 |
| FAQ               | 3758 |    550 |
| Event             | 4308 |    553 |
| Measured wordmark | 4861 |    132 |
| Footer            | 4993 |   1107 |

## What was corrected

- Shared Inter Display typography, source spacing, header dimensions, SVG arrows, and button treatment.
- Separate native desktop and mobile painting/gradient exports, story/HQ architecture and measurement decorations, and trust/metric rails. Decorative exports preserve Figma clipping bounds; text, controls, and layout remain HTML.
- About's source story, four partnership cards, mission composition, and metric strip.
- Desktop services now pin the left summary within the section while all four cards use normal page scrolling, as requested in the designer’s “Fixed scrolling” annotation.
- Labs source product layout, original placeholder artwork and labels, and transparent round glass lock. Pending products retain the approved Preview state.
- Original measured footer SVG and glass icons remain shared; desktop footer and countdown typography now follow their source compositions. Timer stroke duplicates are decorative in the accessibility tree.

Temporary Figma export frames were removed. Existing shadcn controls and Motion dialog transitions remain in use.

## Responsive and interaction checks

All three pages were checked at 320, 390, 440, 768, 1024, 1440, and 1920px content widths. No horizontal page overflow or offscreen text/link/button bounds were found. Native section measurements above are at 440/1440px; other widths reflow rather than preserving fixed page heights.

Labs has no separate mobile frame in the source. Its mobile view is a responsive adaptation using the shared mobile typography, artwork, stacked product cards, FAQ, event, and footer. It cannot be described as a 1:1 comparison against a nonexistent mobile frame.

Mobile navigation to Labs, FAQ opening/closing, nested contact dialog behavior, required-field validation, Escape, and focus return were checked. Desktop navigation opens the expected service links; the earlier nested service scroll check is superseded by the page-scrolling interaction. Contact opens on desktop. No real contact message was sent.

TypeScript validation, targeted marketing ESLint, all six countdown regression checks, and the production build passed. The build retains a non-blocking Google Sans Code fallback-font warning; the requested font loads in browser checks. Desktop contact dismissal returned focus to its trigger, and the original static-frame homepage measured 7708px on mobile and 6722px on desktop before the sticky-services update. This is a geometry and visual audit in the available browser, not an assertion of identical rasterization across every device or browser engine.

## Intentional content differences and publishing follow-up

The Weekends of AI countdown uses the live Saturday 17:00 UTC / 18:00 WAT schedule rather than Figma's frozen digits. Product links still awaiting owner URLs remain previews. Source placeholder article titles, copy typos, static opening badge, and static operational-status labels are retained for fidelity; the article destinations remain existing published guides. Reconcile editorial placeholders before publishing.

Changes remain on the redesign branch; no deployment was performed. Linear is unavailable in this session, so the work remains in the local sync queue in [redesign.md](redesign.md).

## Fixed-scrolling follow-up — 24 September 2026

Home and About now share a native sticky left summary and four cards in normal document flow. At 1440 × 900, the Home summary stayed 32px from the viewport top while the cards moved from −65px to −128px. On About, the summary released at the grid boundary: its bottom and the last card’s bottom both reached 434px as the next section entered. Home and About retain static stacked layouts at 390px, with all four cards and no horizontal overflow; the 768px About layout also has no horizontal overflow. TypeScript, scoped ESLint, and whitespace validation passed. No new animation or scroll interception is required.
