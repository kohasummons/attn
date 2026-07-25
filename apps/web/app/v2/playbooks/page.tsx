import type { Metadata } from "next";

import { SiteFooter } from "@/components/sections/site-footer";
import { SiteHeader } from "@/components/sections/site-header";
import { Container } from "@/components/ui/container";
import { PageHero, Section, SectionHeading } from "@/components/ui/page-shell";

export const metadata: Metadata = {
  title: "Playbooks, guides and tools — Attention Factory",
  description:
    "Practical resources for putting AI to work: playbooks, guides, templates and tools your team can use this week.",
};

/**
 * PLACEHOLDER CONTENT — the `resources` array below is hand-written sample data
 * standing in for a CMS or a file store. Replace it with a real fetch, and wire
 * each `href` to an actual asset, before this page goes live.
 */
type Resource = {
  type: "Playbook" | "Guide" | "Template" | "Tool";
  title: string;
  outcome: string;
  contains: string;
  href: string;
};

const resources: Resource[] = [
  {
    type: "Playbook",
    title: "The eight-week AI pilot.",
    outcome: "Run one pilot that survives past week eight.",
    contains:
      "A week-by-week plan, the two meetings that matter, and the kill criteria to agree before you start.",
    href: "#", // TODO: link to the real asset or gated download route.
  },
  {
    type: "Guide",
    title: "Choosing what to automate first.",
    outcome: "Pick the process that pays back fastest.",
    contains:
      "A scoring sheet for effort, volume and risk, plus five worked examples from finance, support and ops.",
    href: "#", // TODO: link to the real asset or gated download route.
  },
  {
    type: "Template",
    title: "AI use policy, one page.",
    outcome: "Give your team rules they will actually read.",
    contains:
      "A one-page policy in plain language, a data handling table, and notes on what to change for your context.",
    href: "#", // TODO: link to the real asset or gated download route.
  },
  {
    type: "Tool",
    title: "Hours-saved tracker.",
    outcome: "Measure time saved instead of seats bought.",
    contains:
      "A spreadsheet with a two-week logging sheet, a baseline calculator, and a summary tab for your sponsor.",
    href: "#", // TODO: link to the real asset or gated download route.
  },
  {
    type: "Guide",
    title: "Briefing an agent properly.",
    outcome: "Write instructions an agent can follow.",
    contains:
      "The structure we use for system prompts, common failure modes, and a checklist to run before you ship.",
    href: "#", // TODO: link to the real asset or gated download route.
  },
  {
    type: "Template",
    title: "Team AI skills audit.",
    outcome: "See who can do what, in one afternoon.",
    contains:
      "A short survey, a four-rung scoring rubric, and a heatmap sheet to show where training should land.",
    href: "#", // TODO: link to the real asset or gated download route.
  },
];

export default function PlaybooksPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Resources"
          title="Playbooks, guides and tools."
          lead="Practical resources for putting AI to work. No frameworks about frameworks. Things you can open on Monday and use by Friday."
        />

        <Section tone="light">
          <Container>
            <SectionHeading
              title="Take what you need."
              muted="All of it is free."
            />

            <div className="mt-16 grid grid-cols-1 gap-px bg-[#e4e3de] md:grid-cols-2 lg:grid-cols-3">
              {resources.map((resource) => (
                <div
                  key={resource.title}
                  className="flex flex-col bg-white p-8"
                >
                  <p className="w-fit border border-[#e4e3de] px-3 py-1.5 font-mono text-[10px] tracking-[0.16em] text-[#8a8a86] uppercase">
                    {resource.type}
                  </p>

                  <h3 className="mt-8 text-[22px] leading-[1.15] font-medium tracking-[-0.04em] text-[#121313]">
                    {resource.title}
                  </h3>
                  <p className="mt-3 text-[16px] leading-[1.45] tracking-[-0.02em] text-[#121313]">
                    {resource.outcome}
                  </p>
                  <p className="mt-4 text-[15px] leading-[1.5] text-[#5a5a5a]">
                    {resource.contains}
                  </p>

                  <a
                    // TODO: replace with the real download or detail route.
                    href={resource.href}
                    className="mt-8 inline-flex w-fit items-center border-b border-[#121313] pb-1 text-[15px] leading-none font-medium tracking-[-0.02em] text-[#121313] transition-colors hover:border-[#8a8a86] hover:text-[#8a8a86]"
                  >
                    Get it
                  </a>
                </div>
              ))}
            </div>
          </Container>
        </Section>
      </main>
      <SiteFooter />
    </>
  );
}
