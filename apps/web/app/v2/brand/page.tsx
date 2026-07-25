import type { Metadata } from "next";

import { Container } from "@/components/ui/container";
import { ButtonLink, Eyebrow } from "@/components/ui/page-shell";

export const metadata: Metadata = {
  title: "Brand system — Attention Factory",
  description: "Living reference for type, color, layout and voice.",
  robots: { index: false, follow: false },
};

const colors = [
  { name: "Black", hex: "#000000", use: "primary dark sections" },
  { name: "Ink", hex: "#121313", use: "hero / near-black surfaces" },
  { name: "Panel", hex: "#0a0a0a", use: "cards on black" },
  { name: "Off-white", hex: "#fdfdfd", use: "text on dark" },
  { name: "Paper", hex: "#f9f9f9", use: "light section background" },
  { name: "Line light", hex: "#e4e3de", use: "borders on light" },
  { name: "Muted dark", hex: "#6a7282", use: "second-line headings" },
  { name: "Muted light", hex: "#8a8a86", use: "secondary text on light" },
  { name: "Accent", hex: "#ff4100", use: "CTAs only — once per viewport" },
];

const typeScale = [
  { tier: "Display", cls: "text-[clamp(40px,10vw,100px)]", use: "homepage hero only" },
  { tier: "H1", cls: "text-[clamp(36px,6vw,64px)]", use: "page heroes" },
  { tier: "H2", cls: "text-[clamp(28px,5vw,48px)]", use: "section headings" },
  { tier: "H3", cls: "text-[clamp(22px,2.5vw,28px)]", use: "card titles" },
  { tier: "Lead", cls: "text-[clamp(15px,1.8vw,19px)]", use: "sublines" },
  { tier: "Body", cls: "text-[16px]", use: "paragraphs" },
  { tier: "Micro", cls: "text-[11px]", use: "eyebrows, mono labels" },
];

const voiceRules: { rule: string; example: string }[] = [
  {
    rule: "Short declarative sentences. Headlines end in a period.",
    example: "Your team is already using AI. Badly.",
  },
  {
    rule: "Name the failure before the fix.",
    example:
      "Most companies buy the tools and skip the training, so nothing changes.",
  },
  {
    rule: "Anchor to time. Weeks, days, Monday — never “rapidly”.",
    example: "Apps, agents, and automations shipped in weeks, not months.",
  },
  {
    rule: "Anti-hype, explicitly.",
    example: "Our read on where AI is actually going, minus the hype.",
  },
  {
    rule: "Concrete nouns. Never “solutions”, “offerings”, “journeys”.",
    example: "Courses, community, and membership.",
  },
  {
    rule: "CTA = verb + object. Never “Learn more”.",
    example: "Train your team · Find your archetype",
  },
];

const banned = [
  "leverage",
  "empower",
  "unlock",
  "seamless",
  "cutting-edge",
  "revolutionize",
  "game-changing",
  "robust",
  "holistic",
  "synergy",
  "in today's fast-paced world",
];

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 gap-4 border-t border-[#e4e3de] py-8 md:grid-cols-[200px_1fr] md:gap-10">
      <p className="text-[13px] leading-[1.4] tracking-[-0.01em] text-[#8a8a86]">
        {label}
      </p>
      <div className="min-w-0">{children}</div>
    </div>
  );
}

export default function BrandPage() {
  return (
    <main className="bg-white text-[#121313]">
      <section className="bg-[#121313] pt-32 pb-24 text-[#fdfdfd]">
        <Container>
          <Eyebrow tone="dark">Internal reference</Eyebrow>
          <h1 className="mt-5 max-w-[900px] text-[clamp(36px,6vw,64px)] leading-[1.05] font-medium tracking-[-0.04em]">
            The system. Follow it.
          </h1>
          <p className="mt-6 max-w-[620px] text-[clamp(15px,1.8vw,19px)] leading-[1.45] tracking-[-0.02em] text-white/60">
            Every token, pattern and rule the site is built from. Written down so
            nothing drifts. The canonical copy lives in{" "}
            <code className="text-white/80">apps/web/BRAND.md</code>.
          </p>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <h2 className="text-[clamp(28px,5vw,48px)] leading-[1.05] font-medium tracking-[-0.04em]">
            <span className="block">Foundations</span>
            <span className="block text-[#6a7282]">Type, color, layout</span>
          </h2>

          <div className="mt-16">
            <Row label="Typeface">
              <p className="text-[16px] leading-[1.5]">
                Goga, three weights only.
              </p>
              <div className="mt-5 flex flex-col gap-2">
                <p className="text-[28px] font-normal tracking-[-0.04em]">
                  Regular 400 — body copy
                </p>
                <p className="text-[28px] font-medium tracking-[-0.04em]">
                  Medium 500 — every heading
                </p>
                <p className="text-[28px] font-semibold tracking-[-0.04em]">
                  Semibold 600 — names only
                </p>
              </div>
            </Row>

            <Row label="Type scale">
              <div className="flex flex-col gap-5">
                {typeScale.map((t) => (
                  <div key={t.tier}>
                    <div className="flex flex-wrap items-baseline gap-3">
                      <span className="font-mono text-[10px] tracking-[0.14em] text-[#8a8a86] uppercase">
                        {t.tier}
                      </span>
                      <span className="font-mono text-[10px] text-[#c4c4c0]">
                        {t.cls}
                      </span>
                      <span className="text-[12px] text-[#8a8a86]">{t.use}</span>
                    </div>
                    <p
                      className={`${t.cls} mt-1 leading-[1.05] font-medium tracking-[-0.04em]`}
                    >
                      Multipliying your results
                    </p>
                  </div>
                ))}
              </div>
            </Row>

            <Row label="Color">
              <div className="grid grid-cols-2 gap-px bg-[#e4e3de] sm:grid-cols-3">
                {colors.map((c) => (
                  <div key={c.hex} className="bg-white p-4">
                    <div
                      className="h-16 w-full border border-[#e4e3de]"
                      style={{ backgroundColor: c.hex }}
                    />
                    <p className="mt-3 text-[13px] font-medium">{c.name}</p>
                    <p className="font-mono text-[11px] text-[#8a8a86] uppercase">
                      {c.hex}
                    </p>
                    <p className="mt-1 text-[12px] leading-[1.35] text-[#8a8a86]">
                      {c.use}
                    </p>
                  </div>
                ))}
              </div>
            </Row>

            <Row label="Layout">
              <ul className="flex flex-col gap-2 text-[15px] leading-[1.5]">
                <li>
                  Container <code>max-w-[1166px] px-6</code> — always via{" "}
                  <code>&lt;Container&gt;</code>.
                </li>
                <li>
                  Sections <code>py-24 md:py-36</code>, minor{" "}
                  <code>py-20 md:py-28</code>.
                </li>
                <li>Square corners. Pills only for dots and avatars.</li>
                <li>
                  Borders and background switches for separation. No shadows,
                  ever.
                </li>
                <li>Alternate light and dark. Never three same tones in a row.</li>
              </ul>
            </Row>
          </div>
        </Container>
      </section>

      <section className="bg-[#f9f9f9] py-24">
        <Container>
          <h2 className="text-[clamp(28px,5vw,48px)] leading-[1.05] font-medium tracking-[-0.04em]">
            <span className="block">Voice</span>
            <span className="block text-[#6a7282]">How we sound</span>
          </h2>

          <div className="mt-14 grid grid-cols-1 gap-px bg-[#e4e3de] md:grid-cols-2">
            {voiceRules.map((v) => (
              <div key={v.rule} className="bg-[#f9f9f9] p-7">
                <p className="text-[15px] leading-[1.4] font-medium">{v.rule}</p>
                <p className="mt-4 border-l border-[#ff4100] pl-4 text-[15px] leading-[1.5] text-[#5a5a5a]">
                  {v.example}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14">
            <p className="font-mono text-[10px] tracking-[0.16em] text-[#8a8a86] uppercase">
              Never use
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {banned.map((w) => (
                <span
                  key={w}
                  className="border border-[#e4e3de] bg-white px-3 py-1.5 text-[13px] text-[#8a8a86] line-through"
                >
                  {w}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <h2 className="text-[clamp(28px,5vw,48px)] leading-[1.05] font-medium tracking-[-0.04em]">
            <span className="block">Components</span>
            <span className="block text-[#6a7282]">Reuse, don&rsquo;t rebuild</span>
          </h2>

          <div className="mt-16">
            <Row label="Buttons">
              <div className="flex flex-wrap items-center gap-4">
                <ButtonLink href="/v2/brand">Train your team</ButtonLink>
                <ButtonLink href="/v2/brand" variant="dark">
                  Find your archetype
                </ButtonLink>
              </div>
              <p className="mt-4 text-[13px] text-[#8a8a86]">
                Accent fill for the primary action. One per viewport.
              </p>
            </Row>

            <Row label="Dark tile">
              <div className="max-w-[380px] border border-white/10 bg-black p-8">
                <div className="flex items-start justify-between gap-4">
                  <p className="text-[11px] leading-none font-medium tracking-[0.18em] text-white/45 uppercase">
                    Build with us
                  </p>
                  <span className="text-white/40">&#8599;</span>
                </div>
                <div className="mt-24">
                  <p className="text-[28px] leading-[1.1] font-medium tracking-[-0.03em] text-white">
                    AI Engineering
                  </p>
                  <p className="mt-3 text-[15px] leading-[1.45] text-white/70">
                    Apps, agents, and automations shipped in weeks, not months.
                  </p>
                </div>
              </div>
            </Row>

            <Row label="Quote card">
              <article className="flex max-w-[340px] flex-col bg-[#f9f9f9]">
                <div className="size-16 bg-[#d8d6d0]" />
                <p className="mt-7 px-6 text-[13px] leading-[1.55] font-semibold">
                  &ldquo;They made everyone build something real with their own
                  workflows instead of watching slides.&rdquo;
                </p>
                <div className="mt-10 px-6 pb-6 font-mono text-[10px] leading-[1.7] tracking-[0.12em] uppercase">
                  <p>Tunde Bakare</p>
                  <p className="text-[#8c8a84]">Head of Product</p>
                </div>
              </article>
            </Row>
          </div>
        </Container>
      </section>

      <section className="bg-[#121313] py-24 text-[#fdfdfd]">
        <Container>
          <h2 className="text-[clamp(28px,5vw,48px)] leading-[1.05] font-medium tracking-[-0.04em]">
            <span className="block">Page recipes</span>
            <span className="block text-[#6a7282]">Skip sections, never reorder</span>
          </h2>

          <div className="mt-14 grid grid-cols-1 gap-px bg-white/10 lg:grid-cols-2">
            {[
              {
                name: "Service page",
                steps: [
                  "Hero — outcome + timebox, problem-fork subline",
                  "Proof bar — logos, no copy",
                  "The problem — one headline, one paragraph",
                  "How it works — 3 steps, labelled with weeks",
                  "What you walk away with — 3 named artifacts",
                  "Where you are now — 4-rung maturity ladder",
                  "Is this right for you — fit criteria + CTA",
                ],
              },
              {
                name: "Courses",
                steps: [
                  "Hero — boring H1, specific subline",
                  "Inline proof stats",
                  "Two-axis filter chips",
                  "One featured course",
                  "Grid — fixed 6-slot cards",
                  "Membership block, below the grid",
                ],
              },
              {
                name: "Insights hub",
                steps: [
                  "Hero — who it's for, not what we publish",
                  "Featured — 4–6 equal-weight cards",
                  "Trending — 3, mixed formats",
                  "A serialized artifact (numbered issue)",
                  "Topic clusters, named as programs",
                  "Read time on every card, no exceptions",
                ],
              },
              {
                name: "About",
                steps: [
                  "A claim about the world, not about us",
                  "Origin as a moment, ~120 words",
                  "Exactly 3 principles, full sentences",
                  "“No X. No Y. Just Z.”",
                  "Two founders as full-width rows",
                  "Three real numbers",
                ],
              },
            ].map((r) => (
              <div key={r.name} className="bg-[#121313] p-8">
                <p className="text-[20px] font-medium tracking-[-0.03em]">
                  {r.name}
                </p>
                <ol className="mt-5 flex flex-col gap-2">
                  {r.steps.map((s, i) => (
                    <li
                      key={s}
                      className="flex gap-3 text-[14px] leading-[1.45] text-white/60"
                    >
                      <span className="font-mono text-[11px] text-white/30">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {s}
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
