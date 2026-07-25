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
  title: "Intelligence — Attention Factory",
  description:
    "Our read on where AI is actually going, minus the hype. Reports, essays and briefings for the person who has to make the call.",
};

/**
 * PLACEHOLDER CONTENT — every entry in `featured`, `briefings` and the reading
 * links below is hand-written sample copy standing in for the real research
 * catalogue. None of these pieces are published yet. Replace these arrays with
 * a CMS fetch and give each item a real route before this page goes live; the
 * `href: "#"` values are deliberate placeholders, marked TODO one by one.
 */
type Format = "Report" | "Essay" | "Briefing";

type Article = {
  format: Format;
  /** Read time is required on every card. No exceptions. */
  readTime: string;
  headline: string;
  subhead?: string;
  href: string;
};

const featured: Article[] = [
  {
    format: "Report",
    readTime: "18 min read",
    headline: "Nine agent deployments: how the working ones were staffed.",
    subhead:
      "The difference was never the model. It was who owned the thing on week six.",
    href: "#", // TODO: link to the report route once the research CMS exists.
  },
  {
    format: "Essay",
    readTime: "11 min read",
    headline: "Three futures for enterprise search in 2027. Which one are you funding?",
    subhead:
      "One of them quietly deletes the intranet. Two of them keep your search box exactly where it is.",
    href: "#", // TODO: link to the essay route once the research CMS exists.
  },
  {
    format: "Briefing",
    readTime: "7 min read",
    headline: "AI spend will keep climbing through 2026. Output probably will not.",
    subhead:
      "What the budget lines say, and the gap between licences bought and hours saved.",
    href: "#", // TODO: link to the briefing route once the research CMS exists.
  },
  {
    format: "Report",
    readTime: "14 min read",
    headline: "Five ways to kill an AI pilot: the 2026 postmortem.",
    subhead:
      "Twelve companies, four repeating failure patterns, and the question that predicts all of them.",
    href: "#", // TODO: link to the report route once the research CMS exists.
  },
  {
    format: "Essay",
    readTime: "9 min read",
    headline: "Small models are winning quietly. The benchmarks will be last to say so.",
    subhead:
      "Where cheap models already beat expensive ones, and where that argument falls apart.",
    href: "#", // TODO: link to the essay route once the research CMS exists.
  },
  {
    format: "Briefing",
    readTime: "6 min read",
    headline: "Two roads out of the 2026 skills squeeze. Is your team on either?",
    subhead: "Hiring is neither of them.",
    href: "#", // TODO: link to the briefing route once the research CMS exists.
  },
];

type Briefing = {
  number: string;
  readTime: string;
  headline: string;
  standfirst: string;
  href: string;
};

// The serialized artifact. Newest first.
const briefings: Briefing[] = [
  {
    number: "Briefing No. 03",
    readTime: "8 min read",
    headline: "The month the price of inference stopped being the story.",
    standfirst:
      "Three releases, one pricing change, and what each one means for a build you are already halfway through.",
    href: "#", // TODO: link to the briefing route once the research CMS exists.
  },
  {
    number: "Briefing No. 02",
    readTime: "7 min read",
    headline: "Procurement caught up with AI in 2026. Slowly.",
    standfirst:
      "What changed in the questions security teams are now asking vendors, and how to answer them.",
    href: "#", // TODO: link to the briefing route once the research CMS exists.
  },
  {
    number: "Briefing No. 01",
    readTime: "6 min read",
    headline: "Four questions to ask before you buy another seat.",
    standfirst:
      "The first briefing. A short, boring checklist that has saved teams a full budget cycle.",
    href: "#", // TODO: link to the briefing route once the research CMS exists.
  },
];

const programs = [
  {
    label: "Program 01",
    name: "Work After Automation",
    body: "What actually happens to a team's day once the automation lands. We track the jobs that change shape, not the ones that disappear in a headline.",
    topics: [
      "Job design after the first agent",
      "The load that lands on middle management",
      "Training that survives the pilot",
      "Measuring hours, not licences",
    ],
  },
  {
    label: "Program 02",
    name: "The Model Economy",
    body: "Where the money goes, who keeps it, and what that means for a company buying rather than building. Prices, dependencies and the cost of switching.",
    topics: [
      "Compute and the price curve",
      "Open weights in regulated work",
      "The real cost of switching vendors",
      "Where the margin actually sits",
    ],
  },
];

function ArticleCard({ article }: { article: Article }) {
  return (
    <a
      href={article.href}
      className="group flex flex-col bg-white p-8 transition-colors hover:bg-[#f9f9f9]"
    >
      <div className="flex items-baseline gap-4">
        <p className="font-mono text-[10px] tracking-[0.16em] text-[#8a8a86] uppercase">
          {article.format}
        </p>
        <p className="font-mono text-[10px] tracking-[0.16em] text-[#c4c4c0] uppercase">
          {article.readTime}
        </p>
      </div>
      <h3 className="mt-8 text-[clamp(22px,2.5vw,28px)] leading-[1.1] font-medium tracking-[-0.04em] text-[#121313]">
        {article.headline}
      </h3>
      {article.subhead ? (
        <p className="mt-3 text-[15px] leading-[1.5] tracking-[-0.02em] text-[#5a5a5a]">
          {article.subhead}
        </p>
      ) : null}
    </a>
  );
}

export default function IntelligencePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Attention Factory Intelligence"
          title="For the person who has to decide by Monday."
          lead="You do not need another newsletter about what a model can write. You need to know what is worth funding this quarter, what to stall, and what your board is about to ask you. Our read on where AI is actually going, minus the hype."
        />

        {/* Featured — six equal-weight cards, no hero card */}
        <Section tone="light">
          <Container>
            <SectionHeading
              eyebrow="Featured"
              title="Six pieces worth your afternoon."
              muted="Read time on every one."
            />
            <div className="mt-16 grid grid-cols-1 gap-px bg-[#e4e3de] md:grid-cols-2 lg:grid-cols-3">
              {featured.map((article) => (
                <ArticleCard key={article.headline} article={article} />
              ))}
            </div>
          </Container>
        </Section>

        {/* Serialized artifact */}
        <Section tone="black">
          <Container>
            <SectionHeading
              tone="dark"
              eyebrow="The Briefing"
              title="One numbered issue a month."
              muted="Ten minutes, then back to work."
            />
            <div className="mt-16 border-t border-white/10">
              {briefings.map((briefing) => (
                <a
                  key={briefing.number}
                  href={briefing.href}
                  className="group grid grid-cols-1 gap-4 border-b border-white/10 py-10 transition-colors hover:bg-white/[0.03] md:grid-cols-[220px_1fr] md:gap-10"
                >
                  <div className="flex items-baseline gap-4 md:flex-col md:gap-3">
                    <p className="font-mono text-[10px] tracking-[0.16em] text-white/45 uppercase">
                      {briefing.number}
                    </p>
                    <p className="font-mono text-[10px] tracking-[0.16em] text-white/30 uppercase">
                      {briefing.readTime}
                    </p>
                  </div>
                  <div className="max-w-[680px]">
                    <h3 className="text-[clamp(22px,2.5vw,28px)] leading-[1.1] font-medium tracking-[-0.04em] text-white">
                      {briefing.headline}
                    </h3>
                    <p className="mt-3 text-[16px] leading-[1.5] tracking-[-0.02em] text-white/60">
                      {briefing.standfirst}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </Container>
        </Section>

        {/* Research programs */}
        <Section tone="paper">
          <Container>
            <SectionHeading
              eyebrow="Research programs"
              title="Two questions we work on."
              muted="Not a tag cloud."
            />
            <div className="mt-16 grid grid-cols-1 gap-px bg-[#e4e3de] md:grid-cols-2">
              {programs.map((program) => (
                <div key={program.name} className="bg-[#f9f9f9] p-8">
                  <p className="font-mono text-[10px] tracking-[0.16em] text-[#8a8a86] uppercase">
                    {program.label}
                  </p>
                  <h3 className="mt-6 text-[clamp(22px,2.5vw,28px)] leading-[1.1] font-medium tracking-[-0.04em] text-[#121313]">
                    {program.name}
                  </h3>
                  <p className="mt-4 max-w-[520px] text-[16px] leading-[1.5] text-[#5a5a5a]">
                    {program.body}
                  </p>
                  <ul className="mt-8 border-t border-[#e4e3de]">
                    {program.topics.map((topic) => (
                      <li
                        key={topic}
                        className="border-b border-[#e4e3de] py-4 text-[15px] leading-[1.45] text-[#121313]"
                      >
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* Closing */}
        <Section tone="dark" size="sm">
          <Container>
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
              <div>
                <h2 className="text-[clamp(28px,4vw,44px)] leading-[1.08] font-medium tracking-[-0.04em] text-white">
                  Not every idea needs eighteen minutes.
                </h2>
                <p className="mt-6 max-w-[520px] text-[16px] leading-[1.55] text-white/60">
                  The shorter writing lives on the blog: field notes from the
                  builds, the training rooms and the budget meetings. Same voice,
                  fewer footnotes.
                </p>
                <div className="mt-10">
                  <ButtonLink href="/v2/blog">Read the blog</ButtonLink>
                </div>
              </div>
              <div>
                <Eyebrow tone="dark">What we publish</Eyebrow>
                <ul className="mt-7 border-t border-white/10">
                  {[
                    "Reports — the long ones, with the method attached.",
                    "Essays — an argument we are willing to be wrong about.",
                    "Briefings — one numbered issue a month, ten minutes flat.",
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
