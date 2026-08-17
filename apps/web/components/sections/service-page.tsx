import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/ui/container";
import {
  ButtonLink,
  PageHero,
  Section,
  SectionHeading,
} from "@/components/ui/page-shell";
import {
  FeatureExplorer,
  ListCarousel,
  WorkCarousel,
} from "@/components/sections/service-interactive";
import { cn } from "@/lib/utils";

import type {
  Block,
  ServiceContent,
  ShowcaseVariant,
} from "@/app/v2/services/_data";

const pad = (n: number) => String(n + 1).padStart(2, "0");

/** Isolated blooms (shot on black) reused across the dark card grids. */
const FLOWERS = ["rose", "iris", "dahlia", "peony", "lotus", "ranunculus"];

/**
 * The flower revealed inside a dark card. `persist` keeps it faintly present at
 * rest (the way a feature card carries its art) instead of only on hover.
 */
function Bloom({
  index,
  persist = false,
  position = "82% 42%",
}: {
  index: number;
  persist?: boolean;
  position?: string;
}) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 scale-[1.06] bg-[length:auto_58%] bg-no-repeat transition-[opacity,transform] duration-[700ms] ease-out group-hover:scale-100 group-hover:opacity-100",
        persist ? "opacity-25" : "opacity-0",
      )}
      style={{
        backgroundImage: `url('/images/flowers/${FLOWERS[index % FLOWERS.length]}.webp')`,
        backgroundPosition: position,
      }}
    />
  );
}

/* ------------------------------------------------------------------ blocks */

function OpeningBlock({ block }: { block: Extract<Block, { kind: "opening" }> }) {
  return (
    <Section tone={block.tone ?? "light"}>
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <h2 className="text-[clamp(28px,5vw,48px)] leading-[1.05] font-medium tracking-[-0.04em] text-[#121313]">
            {block.title.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
          <div className="max-w-[560px] space-y-5">
            {block.body.map((p) => (
              <p
                key={p}
                className="text-[clamp(16px,1.8vw,19px)] leading-[1.55] tracking-[-0.01em] text-[#5a5a5a]"
              >
                {p}
              </p>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

function ProcessBlock({ block }: { block: Extract<Block, { kind: "process" }> }) {
  return (
    <Section id={block.id} tone="black">
      <Container>
        <SectionHeading
          tone="dark"
          eyebrow={block.eyebrow}
          title={block.title}
          muted={block.muted}
        />
        {block.intro ? (
          <p className="mt-6 max-w-[620px] text-[16px] leading-[1.55] text-white/60">
            {block.intro}
          </p>
        ) : null}
        <div className="mt-12 grid grid-cols-1 gap-px border border-white/25 bg-white/25 md:grid-cols-3">
          {block.steps.map((step, i) => (
            <div
              key={step.title}
              className="group relative flex min-h-[300px] flex-col justify-between overflow-hidden bg-black p-8 transition-colors duration-500 md:min-h-[340px]"
            >
              <Bloom index={i} />
              <div className="relative flex items-start justify-between">
                {block.numbered ? (
                  <p className="font-mono text-[12px] tracking-[0.14em] text-white/40">
                    {pad(i)}
                  </p>
                ) : (
                  <span
                    aria-hidden
                    className="mt-1.5 block h-1.5 w-1.5 bg-white/40"
                  />
                )}
                <ArrowUpRight
                  aria-hidden
                  className="size-5 text-white/20 transition-colors duration-500 group-hover:text-white"
                  strokeWidth={1.5}
                />
              </div>
              <div className="relative flex flex-col gap-3">
                <h3 className="text-[clamp(20px,2vw,24px)] leading-[1.15] font-medium tracking-[-0.03em] text-white">
                  {step.title}
                </h3>
                <p className="max-w-[320px] text-[15px] leading-[1.45] text-white/70">
                  {step.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function DeliverablesBlock({
  block,
}: {
  block: Extract<Block, { kind: "deliverables" }>;
}) {
  return (
    <Section id={block.id} tone="black">
      <Container>
        <SectionHeading
          tone="dark"
          eyebrow={block.eyebrow}
          title={block.title}
          muted={block.muted}
        />
        <div className="mt-12 grid grid-cols-1 gap-2 md:grid-cols-2 md:grid-rows-2">
          {block.items.map((d, i) => {
            const feature = i === 0;
            return (
              <div
                key={d.name}
                className={cn(
                  "group relative flex min-h-[240px] flex-col justify-between overflow-hidden border border-white/20 bg-[#0a0a0a] p-8 transition-colors duration-500 hover:border-white/45 md:p-10",
                  feature && "md:row-span-2 md:min-h-[500px]",
                )}
              >
                <Bloom
                  index={i + 3}
                  persist={feature}
                  position={feature ? "78% 60%" : "82% 42%"}
                />
                <p className="relative font-mono text-[12px] tracking-[0.14em] text-white/40">
                  {pad(i)}
                </p>
                <div className="relative flex flex-col gap-3">
                  <h3
                    className={cn(
                      "font-medium leading-[1.12] tracking-[-0.03em] text-white",
                      feature
                        ? "text-[clamp(26px,3vw,36px)]"
                        : "text-[22px] leading-[1.2]",
                    )}
                  >
                    {d.name}
                  </h3>
                  <p
                    className={cn(
                      "text-[15px] leading-[1.5] text-white/65",
                      feature ? "max-w-[380px]" : "max-w-[320px]",
                    )}
                  >
                    {d.body}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}

function GridBlock({ block }: { block: Extract<Block, { kind: "grid" }> }) {
  return (
    <Section id={block.id} tone={block.tone ?? "light"}>
      <Container>
        <SectionHeading
          eyebrow={block.eyebrow}
          title={block.title}
          lead={block.intro}
        />
        <FeatureExplorer items={block.items} />
      </Container>
    </Section>
  );
}

function ListBlock({ block }: { block: Extract<Block, { kind: "list" }> }) {
  return (
    <Section id={block.id} tone={block.tone ?? "light"}>
      <Container>
        <SectionHeading
          eyebrow={block.eyebrow}
          title={block.title}
          lead={block.intro}
        />
        {/* The same tiles, but as a strip that advances on its own so a long
            list reads as one moving band instead of a static block of eight. */}
        <ListCarousel items={block.items} />
      </Container>
    </Section>
  );
}

function AsideBlock({ block }: { block: Extract<Block, { kind: "aside" }> }) {
  return (
    <Section tone="black">
      <Container>
        {/* One wide bloom-backed panel, the way the homepage feature tile
            carries its art, instead of bare text on a flat band. */}
        <div className="group relative overflow-hidden border border-white/15 bg-black p-8 transition-colors duration-500 hover:border-white/35 md:p-14">
          <Bloom index={2} persist position="88% 50%" />
          <div className="relative grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
            <h2 className="text-[clamp(28px,5vw,48px)] leading-[1.05] font-medium tracking-[-0.04em] text-white">
              {block.title}
            </h2>
            <div className="max-w-[560px] space-y-5">
              {block.body.map((p) => (
                <p
                  key={p}
                  className="text-[clamp(16px,1.8vw,19px)] leading-[1.55] tracking-[-0.01em] text-white/65"
                >
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

function RhythmBlock({ block }: { block: Extract<Block, { kind: "rhythm" }> }) {
  return (
    <Section id={block.id} tone="black">
      <Container>
        <SectionHeading
          tone="dark"
          eyebrow={block.eyebrow}
          title={block.title}
          muted={block.muted}
        />
        {/* Homepage tile treatment: black cards, bloom on hover, arrow. The
            cadence labels were accent orange, which broke the once-per-viewport
            rule three times over. */}
        <div className="mt-14 grid grid-cols-1 gap-px bg-white/15 md:grid-cols-3">
          {block.items.map((r, i) => (
            <div
              key={r.title}
              className="group relative flex min-h-[300px] flex-col justify-between overflow-hidden bg-black p-8 transition-colors duration-500 md:p-10"
            >
              <Bloom index={i + 1} />
              <div className="relative flex items-start justify-between gap-4">
                <span className="text-[13px] leading-none text-white/40">
                  {pad(i)}
                </span>
                <ArrowUpRight
                  aria-hidden
                  className="size-5 shrink-0 text-white/20 transition-colors duration-500 group-hover:text-white"
                  strokeWidth={1.5}
                />
              </div>
              <div className="relative flex flex-col gap-3">
                <h3 className="text-[clamp(20px,2vw,24px)] leading-[1.15] font-medium tracking-[-0.03em] text-white">
                  {r.title}
                </h3>
                <p className="max-w-[320px] text-[15px] leading-[1.5] tracking-[-0.02em] text-white/65">
                  {r.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function WorkBlock({ block }: { block: Extract<Block, { kind: "work" }> }) {
  return (
    <Section id={block.id} tone={block.tone ?? "paper"}>
      <Container>
        <SectionHeading
          eyebrow={block.eyebrow}
          title={block.title}
          lead={block.intro}
        />
        <WorkCarousel projects={block.projects} />
      </Container>
    </Section>
  );
}

/* -------------------------------------------------------------- showcases */

function ShowcaseBlock({
  block,
}: {
  block: Extract<Block, { kind: "showcase" }>;
}) {
  return (
    <Section tone={block.tone ?? "paper"} size="sm">
      <Container>
        {block.image ? (
          <div className="relative aspect-[16/9] w-full overflow-hidden border border-[#e4e3de] bg-white">
            <Image
              src={block.image}
              alt={block.alt ?? ""}
              fill
              sizes="(min-width: 768px) 1120px, 100vw"
              className="object-cover"
            />
          </div>
        ) : block.variant ? (
          <div className="border border-[#e4e3de] bg-white p-6 md:p-10">
            <Showcase variant={block.variant} />
          </div>
        ) : null}
      </Container>
    </Section>
  );
}

function Showcase({ variant }: { variant: ShowcaseVariant }) {
  switch (variant) {
    case "wireframes":
      return <WireframeVisual />;
    case "workflow":
      return <WorkflowVisual />;
    case "roadmap":
      return <RoadmapVisual />;
    case "cadence":
      return <CadenceVisual />;
    default: {
      const _exhaustive: never = variant;
      return _exhaustive;
    }
  }
}

function WireframeVisual() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-[1.7fr_1fr] md:items-start">
      <div className="border border-[#e4e3de]">
        <div className="flex items-center gap-1.5 border-b border-[#e4e3de] px-3 py-2.5">
          <span className="h-2 w-2 border border-[#d5d4cf]" />
          <span className="h-2 w-2 border border-[#d5d4cf]" />
          <span className="h-2 w-2 border border-[#d5d4cf]" />
          <span className="ml-3 h-2 w-40 bg-[#eeede9]" />
        </div>
        <div className="grid grid-cols-[64px_1fr]">
          <div className="space-y-2 border-r border-[#e4e3de] p-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className="block h-2 w-full bg-[#eeede9]" />
            ))}
          </div>
          <div className="space-y-3 p-4">
            <div className="flex gap-3">
              <span className="h-12 flex-1 bg-[#f2f1ed]" />
              <span className="h-12 flex-1 bg-[#f2f1ed]" />
              <span className="h-12 flex-1 border border-[#ff4100]/30 bg-[#ff4100]/10" />
            </div>
            <span className="block h-24 w-full bg-[#f2f1ed]" />
            <div className="flex gap-3">
              <span className="h-2 w-1/2 bg-[#eeede9]" />
              <span className="h-2 w-1/4 bg-[#eeede9]" />
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto w-[160px] border border-[#e4e3de] p-3">
        <span className="mx-auto mb-3 block h-1 w-10 bg-[#e4e3de]" />
        <span className="block h-16 w-full bg-[#f2f1ed]" />
        <div className="mt-3 space-y-2">
          <span className="block h-2 w-full bg-[#eeede9]" />
          <span className="block h-2 w-2/3 bg-[#eeede9]" />
        </div>
        <span className="mt-4 block h-8 w-full border border-[#ff4100]/30 bg-[#ff4100]/10" />
      </div>
    </div>
  );
}

function WorkflowNode({
  label,
  accent,
}: {
  label: string;
  accent?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex h-14 items-center justify-center border px-4 text-center font-mono text-[11px] tracking-[0.08em] uppercase",
        accent
          ? "border-[#ff4100]/40 bg-[#ff4100]/10 text-[#ff4100]"
          : "border-[#e4e3de] bg-white text-[#5a5a5a]",
      )}
    >
      {label}
    </div>
  );
}

function WorkflowVisual() {
  const nodes: { label: string; accent?: boolean }[] = [
    { label: "Trigger" },
    { label: "Sort" },
    { label: "Enrich" },
    { label: "Route" },
    { label: "Done", accent: true },
  ];
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col items-stretch gap-3 md:flex-row md:items-center">
        {nodes.map((n, i) => (
          <div key={n.label} className="flex items-center gap-3 md:flex-1">
            <div className="flex-1">
              <WorkflowNode label={n.label} accent={n.accent} />
            </div>
            {i < nodes.length - 1 ? (
              <span className="hidden h-px w-6 shrink-0 bg-[#d5d4cf] md:block" />
            ) : null}
          </div>
        ))}
      </div>
      <div className="flex items-center gap-3 md:pl-[40%]">
        <span className="font-mono text-[10px] tracking-[0.14em] text-[#8a8a86] uppercase">
          Escalate
        </span>
        <div className="w-44">
          <WorkflowNode label="Human check" />
        </div>
      </div>
    </div>
  );
}

function RoadmapVisual() {
  const phases = [
    { name: "Phase 1", start: 0, span: 2, accent: true },
    { name: "Phase 2", start: 1, span: 2, accent: false },
    { name: "Phase 3", start: 3, span: 1, accent: false },
  ];
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-[1.4fr_1fr]">
      <div>
        <div className="grid grid-cols-4 border-b border-[#e4e3de] pb-2">
          {["Q1", "Q2", "Q3", "Q4"].map((q) => (
            <span
              key={q}
              className="font-mono text-[10px] tracking-[0.14em] text-[#8a8a86] uppercase"
            >
              {q}
            </span>
          ))}
        </div>
        <div className="mt-4 space-y-3">
          {phases.map((p) => (
            <div key={p.name} className="grid grid-cols-4">
              <span
                style={{
                  gridColumnStart: p.start + 1,
                  gridColumnEnd: p.start + 1 + p.span,
                }}
                className={cn(
                  "flex h-8 items-center px-3 font-mono text-[10px] tracking-[0.1em] uppercase",
                  p.accent
                    ? "border border-[#ff4100]/30 bg-[#ff4100]/10 text-[#ff4100]"
                    : "bg-[#f2f1ed] text-[#5a5a5a]",
                )}
              >
                {p.name}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="border-l border-[#e4e3de] pl-6">
        <p className="font-mono text-[10px] tracking-[0.14em] text-[#8a8a86] uppercase">
          Ranked use cases
        </p>
        <ul className="mt-4 space-y-3">
          {[0, 1, 2, 3].map((n) => (
            <li key={n} className="flex items-center gap-3">
              <span className="font-mono text-[11px] text-[#c4c4c0]">
                {pad(n)}
              </span>
              <span className="h-2 flex-1 bg-[#eeede9]" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function CadenceVisual() {
  const highlighted = new Set([2, 9, 16]);
  const statuses = ["Open", "In review", "Done", "Open"];
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
      <div>
        <p className="font-mono text-[10px] tracking-[0.14em] text-[#8a8a86] uppercase">
          This month
        </p>
        <div className="mt-4 grid grid-cols-5 gap-1.5">
          {Array.from({ length: 20 }).map((_, i) => (
            <span
              key={i}
              className={cn(
                "aspect-square border",
                highlighted.has(i)
                  ? "border-[#ff4100]/30 bg-[#ff4100]/10"
                  : "border-[#e4e3de] bg-white",
              )}
            />
          ))}
        </div>
        <div className="mt-4 flex items-center gap-2 font-mono text-[10px] tracking-[0.12em] text-[#8a8a86] uppercase">
          <span className="h-2 w-2 border border-[#ff4100]/40 bg-[#ff4100]/10" />
          Session
        </div>
      </div>
      <div className="border-l border-[#e4e3de] pl-6">
        <p className="font-mono text-[10px] tracking-[0.14em] text-[#8a8a86] uppercase">
          Decisions
        </p>
        <ul className="mt-4 space-y-2.5">
          {statuses.map((s, i) => (
            <li
              key={i}
              className="flex items-center justify-between border-b border-[#e4e3de] pb-2.5"
            >
              <span className="h-2 w-24 bg-[#eeede9]" />
              <span className="font-mono text-[9px] tracking-[0.12em] text-[#8a8a86] uppercase">
                {s}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ----------------------------------------------------------------- render */

function renderBlock(block: Block, i: number) {
  switch (block.kind) {
    case "opening":
      return <OpeningBlock key={i} block={block} />;
    case "showcase":
      return <ShowcaseBlock key={i} block={block} />;
    case "process":
      return <ProcessBlock key={i} block={block} />;
    case "deliverables":
      return <DeliverablesBlock key={i} block={block} />;
    case "grid":
      return <GridBlock key={i} block={block} />;
    case "list":
      return <ListBlock key={i} block={block} />;
    case "aside":
      return <AsideBlock key={i} block={block} />;
    case "rhythm":
      return <RhythmBlock key={i} block={block} />;
    case "work":
      return <WorkBlock key={i} block={block} />;
    default: {
      const _exhaustive: never = block;
      return _exhaustive;
    }
  }
}

function FinalSection({ final }: { final: ServiceContent["final"] }) {
  return (
    <section className="relative overflow-hidden bg-[#0b0c0c]">
      <Image
        src="/v2/cta-bg.png"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
      <div aria-hidden className="absolute inset-0 bg-black/45" />

      <div className="relative mx-auto min-h-[600px] max-w-[1166px] px-6 py-24">
        <div className="max-w-[560px]">
          <h2 className="text-[clamp(36px,6vw,64px)] font-medium leading-[1.05] tracking-[-0.04em] text-white">
            {final.title}
          </h2>
          <p className="mt-5 text-[clamp(15px,1.8vw,19px)] leading-[1.45] tracking-[-0.01em] text-white">
            {final.body}
          </p>
          <div className="mt-10">
            {/* Outlined, matching the homepage CTA banner — same background art,
                same treatment. */}
            <ButtonLink href={final.button.href} variant="light">
              {final.button.label}
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ServiceMain({ service }: { service: ServiceContent }) {
  return (
    <main>
      <PageHero
        eyebrow={service.eyebrow}
        image={service.hero}
        title={service.h1}
        lead={service.lead}
      >
        <div className="flex flex-wrap items-center gap-4">
          <ButtonLink href={service.primary.href}>
            {service.primary.label}
          </ButtonLink>
          <ButtonLink href={service.secondary.href} variant="light">
            {service.secondary.label}
          </ButtonLink>
        </div>
      </PageHero>

      {service.blocks.map((block, i) => renderBlock(block, i))}

      <FinalSection final={service.final} />
    </main>
  );
}
