import type { Metadata } from "next";

import { SiteFooter } from "@/components/sections/site-footer";
import { SiteHeader } from "@/components/sections/site-header";
import { Container } from "@/components/ui/container";
import {
  ButtonLink,
  Eyebrow,
  PageHero,
  Section,
  SectionHeading,
} from "@/components/ui/page-shell";

export const metadata: Metadata = {
  title: "The Lab — Attention Factory",
  description:
    "The products and experiments we build for ourselves and for the teams we work with. Some are live. Some are half-finished on purpose.",
};

/**
 * PLACEHOLDER CONTENT — the `products` data below is hand-written. TranscriptX
 * is real; the remaining entries describe internal tools at varying stages and
 * should be confirmed with the team before this page goes live. No metrics,
 * user counts or adoption numbers appear here because none have been measured.
 */
type Status = "Live" | "In beta" | "Experiment";

type Product = {
  status: Status;
  name: string;
  /** Verb-first, under ten words. */
  does: string;
  /** One sentence on who it is for and why it exists. */
  forWhom: string;
};

const flagship: Product = {
  status: "Live",
  name: "TranscriptX",
  does: "Turns recorded conversations into searchable, quotable text.",
  forWhom:
    "Built for teams who record everything and read none of it: interviews, client calls, research sessions and workshops become text you can search on Monday instead of audio nobody opens again.",
};

const products: Product[] = [
  {
    status: "In beta",
    name: "Signal Desk",
    does: "Reads the week in AI and drafts the briefing.",
    forWhom:
      "It is how our Intelligence team keeps up with releases, papers and pricing changes without spending two days a week reading.",
  },
  {
    status: "In beta",
    name: "Runbook",
    does: "Turns a messy process document into a working automation.",
    forWhom:
      "We use it on the first week of a build to get from someone's Google Doc to something that actually runs.",
  },
  {
    status: "Experiment",
    name: "Groundskeeper",
    does: "Checks agent output against the source documents.",
    forWhom:
      "An answer to the one question every client asks us: how do you know the thing did not make that up.",
  },
  {
    status: "Experiment",
    name: "Halfpipe",
    does: "Scores prompts before they reach production.",
    forWhom:
      "A test harness for the prompts inside our own client work, so a rewrite gets checked instead of eyeballed.",
  },
];

const statusStyles: Record<Status, string> = {
  Live: "border-[#121313] text-[#121313]",
  "In beta": "border-[#8a8a86] text-[#8a8a86]",
  Experiment: "border-[#c4c4c0] text-[#8a8a86]",
};

const reasons = [
  {
    label: "Reason 01",
    title: "We hit the walls before you do.",
    body: "Evaluation, permissions, cost per run, the moment a model changes underneath you. We have paid for those lessons on our own roadmap, not on your budget.",
  },
  {
    label: "Reason 02",
    title: "Advice from people who ship is different advice.",
    body: "A firm that has never maintained its own software will tell you what is possible. A firm that maintains five things will tell you what it costs to keep them running in month nine.",
  },
  {
    label: "Reason 03",
    title: "The tools go into the client work.",
    body: "Runbook and Halfpipe were built for our own delivery. When they earn their place internally, they show up in your build too, already tested.",
  },
];

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="flex flex-col bg-[#f9f9f9] p-8">
      <span
        className={`inline-flex w-fit items-center border px-3 py-1.5 font-mono text-[10px] leading-none tracking-[0.16em] uppercase ${statusStyles[product.status]}`}
      >
        {product.status}
      </span>
      <h3 className="mt-8 text-[clamp(22px,2.5vw,28px)] leading-[1.1] font-medium tracking-[-0.04em] text-[#121313]">
        {product.name}
      </h3>
      <p className="mt-3 text-[16px] leading-[1.45] tracking-[-0.02em] text-[#121313]">
        {product.does}
      </p>
      <p className="mt-4 text-[15px] leading-[1.5] text-[#5a5a5a]">
        {product.forWhom}
      </p>
    </div>
  );
}

export default function TheLabPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="The Lab"
          title="We build our own software. Then we tell you what it cost."
          lead="The Lab is where Attention Factory ships products, not decks. Some run in production. Some are experiments we keep in public because the failures are the useful part."
        >
          <ButtonLink href="/v2/contact">Talk to us</ButtonLink>
        </PageHero>

        {/* Flagship */}
        <Section tone="light">
          <Container>
            <SectionHeading
              eyebrow="Flagship"
              title="TranscriptX."
              muted="Live, and paying its own way."
            />
            <div className="mt-14 grid grid-cols-1 gap-10 border-t border-[#e4e3de] pt-10 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
              <div>
                <span className="inline-flex w-fit items-center border border-[#121313] px-3 py-1.5 font-mono text-[10px] leading-none tracking-[0.16em] text-[#121313] uppercase">
                  {flagship.status}
                </span>
                <p className="mt-8 text-[clamp(22px,2.5vw,28px)] leading-[1.15] font-medium tracking-[-0.04em] text-[#121313]">
                  {flagship.does}
                </p>
              </div>
              <p className="max-w-[560px] text-[clamp(16px,1.8vw,19px)] leading-[1.55] tracking-[-0.01em] text-[#5a5a5a]">
                {flagship.forWhom}
              </p>
            </div>
          </Container>
        </Section>

        {/* The rest of the shelf */}
        <Section tone="paper">
          <Container>
            <SectionHeading
              eyebrow="Also in the lab"
              title="Four more, at four stages."
              muted="We label them honestly."
            />
            <div className="mt-16 grid grid-cols-1 gap-px bg-[#e4e3de] md:grid-cols-2">
              {products.map((product) => (
                <ProductCard key={product.name} product={product} />
              ))}
            </div>
            <p className="mt-8 max-w-[620px] text-[14px] leading-[1.5] text-[#8a8a86]">
              No download counts. No adoption charts. We have not measured
              those, so we are not printing them.
            </p>
          </Container>
        </Section>

        {/* Why we build our own */}
        <Section tone="black">
          <Container>
            <SectionHeading
              tone="dark"
              eyebrow="Why we build our own"
              title="Most AI firms have never maintained an AI product."
              muted="It shows in the advice."
            />
            <div className="mt-16 grid grid-cols-1 gap-px bg-white/10 md:grid-cols-3">
              {reasons.map((reason) => (
                <div key={reason.title} className="bg-black p-8">
                  <p className="font-mono text-[10px] tracking-[0.16em] text-white/45 uppercase">
                    {reason.label}
                  </p>
                  <h3 className="mt-6 text-[22px] leading-[1.15] font-medium tracking-[-0.03em] text-white">
                    {reason.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-[1.5] text-white/60">
                    {reason.body}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* Closing CTA */}
        <Section tone="dark" size="sm">
          <Container>
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
              <div>
                <h2 className="text-[clamp(28px,4vw,44px)] leading-[1.08] font-medium tracking-[-0.04em] text-white">
                  Want one of these pointed at your problem?
                </h2>
                <p className="mt-6 max-w-[520px] text-[16px] leading-[1.55] text-white/60">
                  Tell us what your team keeps doing by hand. If something on
                  this shelf fits, we will say so. If it does not, we will say
                  that instead.
                </p>
                <div className="mt-10">
                  <ButtonLink href="/v2/contact">Talk to us</ButtonLink>
                </div>
              </div>
              <div>
                <Eyebrow tone="dark">How the lab runs</Eyebrow>
                <ul className="mt-7 border-t border-white/10">
                  {[
                    "Every product starts as a tool we needed for a client build.",
                    "Experiments stay labelled experiments until they earn a promotion.",
                    "Anything we retire, we say we retired.",
                  ].map((line) => (
                    <li
                      key={line}
                      className="border-b border-white/10 py-5 text-[16px] leading-[1.45] text-white/80"
                    >
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Container>
        </Section>
      </main>
      <SiteFooter />
    </>
  );
}
