# Attention Factory — Brand & UI System

The single source of truth for how attentionfactory.io looks and sounds.
Read this before building any page. If a decision isn't covered here, add it here first.

Live reference: **`/v2/brand`** — renders every token and pattern below.

---

## 1. Foundations

### Typeface

One family: **Goga** (loaded via `--font-goga`, weights 100–900). Inter is the fallback.
Geist Mono (`--font-geist-mono`) is available for micro-labels only.

Use **three weights, site-wide**:

| Weight | Class | Where |
|---|---|---|
| 400 Regular | `font-normal` | body copy, sublines |
| 500 Medium | `font-medium` | every heading |
| 600 Semibold | `font-semibold` | names, small emphasis only |

Never use 700+. Never mix more than two weights in a single section.

### Type scale

Headings are fluid. Pick the tier, don't invent a clamp.

| Tier | Class | Use |
|---|---|---|
| Display | `text-[clamp(40px,10vw,100px)]` | homepage hero only |
| H1 | `text-[clamp(36px,6vw,64px)]` | page heroes |
| H2 | `text-[clamp(28px,5vw,48px)]` | section headings |
| H3 | `text-[clamp(22px,2.5vw,28px)]` | card titles, sub-sections |
| Lead | `text-[clamp(15px,1.8vw,19px)]` | hero sublines, section intros |
| Body | `text-[16px]` | paragraphs |
| Small | `text-[14px]` | secondary detail |
| Micro | `text-[10px]` / `text-[11px]` | eyebrows, mono labels |

**Headings always carry `tracking-[-0.04em]` and `leading-[1.05]`.** That tight negative tracking is the most recognisable thing about our type. Body copy uses `tracking-[-0.02em]` and `leading-[1.4]–[1.55]`.

### Color

Restraint is the rule. A page is black or it is white. Orange is punctuation, never decoration.

| Token | Hex | Use |
|---|---|---|
| Black | `#000000` | primary dark sections |
| Ink | `#121313` | hero/near-black surfaces |
| Panel | `#0a0a0a` | cards on black |
| Off-white | `#fdfdfd` | text on dark |
| Paper | `#f9f9f9` | light section background |
| Line (light) | `#e4e3de` | borders on light |
| Line (dark) | `rgba(255,255,255,0.10)` | borders on dark |
| Muted (dark bg) | `#6a7282` | second-line headings, muted copy |
| Muted (light bg) | `#8a8a86` | secondary text on light |
| **Accent** | **`#ff4100`** | CTAs and nothing else |

**Accent rule: `#ff4100` appears at most once per viewport.** If two orange things are on screen together, one is wrong.

### Layout

- Content container: **`max-w-[1166px]` with `px-6`** — use the `<Container>` component.
- Full-bleed band: `max-w-[1738px]` with `border-x border-[#e4e3de]`.
- Section padding: `py-24 md:py-36` for major sections, `py-20 md:py-28` for minor.
- Grid gap: `gap-2` for tight mosaics, `gap-4`/`gap-6` for card grids.
- **Corners are square.** No `rounded-*` except pills (dots, avatars, icon buttons).
- **Separation is done with borders and background switches, never shadows.** No `shadow-*` anywhere.

---

## 2. Voice

We write like someone who has actually shipped the thing, talking to a peer who is short on time.

### Rules

1. **Short declarative sentences. Headlines end in a period.**
   "Your team is already using AI. Badly."
2. **Name the failure before the fix.**
   "Most companies buy the tools and skip the training, so nothing changes."
3. **Anchor to time.** Weeks, days, Monday — never "rapidly" or "at speed".
   "Apps, agents, and automations shipped in weeks, not months."
   "Live sessions that turn AI curiosity into skills you can use Monday."
4. **Anti-hype, explicitly.**
   "Our read on where AI is actually going, minus the hype."
   "AI transformation, coaching, and strategy that stick past the pilot."
5. **Concrete nouns over abstract ones.** Apps, agents, automations, courses, sessions — not "solutions", "offerings", "journeys".
6. **Never these words:** leverage, empower, unlock, seamless, cutting-edge, revolutionize, game-changing, robust, holistic, synergy, "in today's fast-paced world".
7. **Say what it isn't.** The "No X. No Y. Just Z." construction is ours to use.
8. **Second person.** "your team", "you". Not "clients" or "users".
9. **The tagline is lowercase:** `be inevitable with ai`.

### Headline formulas that fit our voice

- Outcome + timebox — *"From idea to working automation. In eight weeks."*
- Blunt diagnosis — *"Your team is already using AI. Badly."*
- Two-beat stance — *"Plan first. Then build."*
- Two-line stack, second line muted (`#6a7282`) — *"Multipliying your results" / "From zero to scale"*

### CTA labels

Verb + object, no filler. "Train your team", "Find your archetype", "Talk to us".
Never "Learn more", "Get started", "Click here", "Submit".

---

## 3. Components

Use these. Do not re-implement them inline.

| Component | Path | Notes |
|---|---|---|
| `Container` | `components/ui/container.tsx` | every section's inner wrapper |
| `ArrowButton` | `components/ui/arrow-button.tsx` | `dark` = orange fill, `light` = outlined, `ghost` |
| `EyebrowLabel` | `components/ui/eyebrow-label.tsx` | section kicker above an H2 |
| `SiteHeader` / `SiteFooter` | `components/sections/` | on every page |

**`ArrowButton` renders a `<button>` and cannot navigate.** For a link that looks like a button, use `<Link>` with the same classes, or extend `ArrowButton` with an `as`/`asChild` prop.

### Two card patterns

**Dark tile** (services grid) — `bg-black`, `border border-white/10`, eyebrow top-left in uppercase micro, arrow top-right, title and subline anchored bottom, flower image revealed on hover.

**Light quote card** (testimonials) — `bg-white`, square portrait flush to the top-left corner, small semibold quote, name and role in uppercase mono at the bottom.

---

## 4. Page recipes

Every marketing page is assembled from this spine. Skip sections, never reorder them.

### Service page

1. Hero — outcome + timebox H1, problem-fork subline, one CTA
2. Proof bar — logos, no copy
3. The problem — one headline, one paragraph
4. How it works — 3 steps, each labelled with a week range
5. What you walk away with — 3 named artifacts, quantified, with `MATURITY:`-style caps labels
6. Where you are now — 4-rung maturity ladder
7. Is this right for you — fit criteria + one testimonial + closing CTA

### Courses page

Hero (boring H1, specific subline) → inline proof stats → two-axis filter chips → one featured course → grid of fixed-schema cards → membership block → newsletter.

Card slots, in order: portrait · title · verb-first outcome under 8 words · instructor · duration · access line · two tag chips. Never show an empty slot.

### Insights / research hub

Hero → Featured (4–6 equal-weight cards, no giant hero card) → Trending (3, mixed formats) → a serialized artifact (numbered issue) → topic clusters → closing format CTAs.

Card slots: image · format label · **read time** · headline. Read time on every card, no exceptions. Put the year in the headline, not in a date field.

### About

Claim about the world (not about us) → origin told as a moment, ~120 words → exactly 3 principles as full-sentence headlines → "No X. No Y. Just Z." → the two founders as full-width rows, not a grid with holes → three numbers → testimonials by name + title.

---

## 5. Rules of thumb

- One idea per section. If a section answers two questions, it's two sections.
- Alternate light and dark. Never three same-colored sections in a row.
- Three items in a row, not four or five. Six only in a 3×2 mosaic.
- No stock photography of people in meetings. No stars, no ratings, no badges.
- No decorative icons next to headings.
- Every number must be real. If we haven't measured it, don't print it.
- Every link goes somewhere. A dead `href="#"` is a bug.
