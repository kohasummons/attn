import type { Metadata } from "next";

import { SiteFooter } from "@/components/sections/site-footer";
import { SiteHeader } from "@/components/sections/site-header";
import { Container } from "@/components/ui/container";
import {
  ButtonLink,
  ImageBand,
  PageHero,
  Section,
  SectionHeading,
} from "@/components/ui/page-shell";

export const metadata: Metadata = {
  title: "Playbooks, guides and tools — Attention Factory",
  description:
    "Practical resources for putting AI to work: playbooks, guides, templates and tools your team can use this week. The first set is on the way.",
};

/**
 * PLACEHOLDER CONTENT — hand-written sample data standing in for a CMS or file
 * store. Nothing here is downloadable yet, so the cards are deliberately inert:
 * no hrefs, no hover affordance. When the real assets exist, add `href` to the
 * type and turn each card into a link.
 */
type Resource = {
  type: "Playbook" | "Guide" | "Template" | "Tool";
  title: string;
  outcome: string;
  contains: string;
};

const resources: Resource[] = [
  {
    type: "Playbook",
    title: "The eight-week AI pilot.",
    outcome: "Run one pilot that survives past week eight.",
    contains:
      "A week-by-week plan, the two meetings that matter, and the kill criteria to agree before you start.",
  },
  {
    type: "Guide",
    title: "Choosing what to automate first.",
    outcome: "Pick the process that pays back fastest.",
    contains:
      "A scoring sheet for effort, volume and risk, plus five worked examples from finance, support and ops.",
  },
  {
    type: "Template",
    title: "AI use policy, one page.",
    outcome: "Give your team rules they will actually read.",
    contains:
      "A one-page policy in plain language, a data handling table, and notes on what to change for your context.",
  },
  {
    type: "Tool",
    title: "Hours-saved tracker.",
    outcome: "Measure time saved instead of seats bought.",
    contains:
      "A spreadsheet with a two-week logging sheet, a baseline calculator, and a summary tab for your sponsor.",
  },
  {
    type: "Guide",
    title: "Briefing an agent properly.",
    outcome: "Write instructions an agent can follow.",
    contains:
      "The structure we use for system prompts, common failure modes, and a checklist to run before you ship.",
  },
  {
    type: "Template",
    title: "Team AI skills audit.",
    outcome: "See who can do what, in one afternoon.",
    contains:
      "A short survey, a four-rung scoring rubric, and a heatmap sheet to show where training should land.",
  },
];

/** How the resources are meant to be used, in order. */
const howToUse = [
  {
    title: "Start with the measurement",
    body: "Before you automate anything, log two weeks of the work as it happens now. Without a baseline you cannot tell a win from a feeling.",
  },
  {
    title: "Pick one process, not a portfolio",
    body: "Score the candidates, choose the highest-volume, lowest-risk one, and leave the rest alone until the first is running.",
  },
  {
    title: "Write the rules down early",
    body: "A one-page policy before the first build saves the argument later. It also answers the question your legal team is about to ask.",
  },
];

const pad = (n: number) => String(n + 1).padStart(2, "0");

export default function PlaybooksPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          title={["Playbooks, guides and tools.", "Free, when they land."]}
          lead="Practical resources for putting AI to work. No frameworks about frameworks. Things you can open on Monday and use by Friday."
          image="/images/hero/teal.webp"
        >
          <ButtonLink href="/v2/contact">Be the first to know</ButtonLink>
        </PageHero>

        {/* State the honest position before showing anything that looks
            downloadable. */}
        <Section tone="light">
          <Container>
            <div className="grid grid-cols-1 gap-12 border-y border-[#e4e3de] py-14 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-20">
              <SectionHeading
                title="The first set is coming."
                muted="Nothing is behind a form."
                lead="We are writing these out of the client work rather than inventing them, so they arrive one at a time. Tell us which one you want first and we will send it the day it is ready."
              />
              <div className="shrink-0">
                <ButtonLink href="/v2/contact">Be the first to know</ButtonLink>
              </div>
            </div>
          </Container>
        </Section>

        <Section tone="paper">
          <Container>
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
              <h2 className="text-[clamp(28px,5vw,48px)] leading-[1.05] font-medium tracking-[-0.04em] text-[#121313]">
                <span className="block">Most AI resources are</span>
                <span className="block text-[#6a7282]">advertising in a PDF.</span>
              </h2>
              <div className="max-w-[560px] space-y-5">
                <p className="text-[clamp(16px,1.8vw,19px)] leading-[1.55] tracking-[-0.01em] text-[#5a5a5a]">
                  You download a forty-page report, read four pages, and get a
                  sales call on Thursday. The document was never the point.
                </p>
                <p className="text-[clamp(16px,1.8vw,19px)] leading-[1.55] tracking-[-0.01em] text-[#5a5a5a]">
                  These are the working files from our own builds — the scoring
                  sheet we actually use, the policy we actually hand over, the
                  tracker we actually fill in. Short, and specific enough to be
                  useful the same week.
                </p>
              </div>
            </div>
          </Container>
        </Section>

        <ImageBand src="/images/hero/bronze.webp" height="sm" />

        {/* Inert preview — these are the resources in progress, not links. */}
        <Section tone="light">
          <Container>
            <SectionHeading
              title="What we are writing."
              muted="Six to start."
              lead="Each one is a single job, done in one sitting. These cards are a preview and do not open yet."
            />

            <div className="mt-14 grid grid-cols-1 gap-px bg-[#e4e3de] md:grid-cols-2 lg:grid-cols-3">
              {resources.map((resource, i) => (
                <div
                  key={resource.title}
                  className="flex flex-col bg-white p-8 md:p-10"
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <p className="text-[13px] tracking-[-0.02em] text-[#8a8a86]">
                      {resource.type}
                    </p>
                    <span className="text-[13px] text-[#c4c4c0]">{pad(i)}</span>
                  </div>

                  <h3 className="mt-8 text-[22px] leading-[1.15] font-medium tracking-[-0.04em] text-[#121313]">
                    {resource.title}
                  </h3>
                  <p className="mt-3 text-[16px] leading-[1.45] tracking-[-0.02em] text-[#121313]">
                    {resource.outcome}
                  </p>
                  <p className="mt-4 text-[15px] leading-[1.5] tracking-[-0.02em] text-[#5a5a5a]">
                    {resource.contains}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-[14px] leading-[1.5] tracking-[-0.02em] text-[#8a8a86]">
              In progress. Nothing above is downloadable yet.
            </p>
          </Container>
        </Section>

        <Section tone="black">
          <Container>
            <SectionHeading
              tone="dark"
              title="Use them in this order."
              muted="It matters more than which one you pick."
            />
            <div className="mt-14 grid grid-cols-1 gap-px bg-white/15 md:grid-cols-3">
              {howToUse.map((step, i) => (
                <div
                  key={step.title}
                  className="flex min-h-[280px] flex-col justify-between bg-black p-8 md:p-10"
                >
                  <p className="text-[13px] tracking-[-0.02em] text-white/40">
                    {pad(i)}
                  </p>
                  <div>
                    <h3 className="text-[clamp(20px,2vw,24px)] leading-[1.15] font-medium tracking-[-0.03em] text-white">
                      {step.title}
                    </h3>
                    <p className="mt-3 max-w-[320px] text-[15px] leading-[1.5] tracking-[-0.02em] text-white/65">
                      {step.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        <Section tone="dark" size="sm">
          <Container>
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-20">
              <SectionHeading
                tone="dark"
                title="Want the whole thing done with you?"
                muted="That is the day job."
                lead="The playbooks are what we can hand over on paper. The rest is the work itself — planning the rollout, building the software, training the team."
              />
              <div className="shrink-0">
                <ButtonLink href="/v2/services" variant="light">
                  See how we work
                </ButtonLink>
              </div>
            </div>
          </Container>
        </Section>
      </main>
      <SiteFooter />
    </>
  );
}
