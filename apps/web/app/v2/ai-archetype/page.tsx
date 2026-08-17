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
  title: "AI archetype — Attention Factory",
  description:
    "Most people use AI in a way that doesn't match how they actually work. Find out what fits you, plus what to learn next.",
};

/**
 * The quiz itself is a separate build. This page explains what the archetype is
 * and captures intent. Wire the CTA to the quiz route when it ships.
 */

const archetypes = [
  {
    name: "The Operator",
    body: "You run process. AI pays you back fastest in the work that repeats every week.",
  },
  {
    name: "The Builder",
    body: "You already make things. Your gap is knowing what's worth building versus buying.",
  },
  {
    name: "The Analyst",
    body: "You live in data and documents. Your wins are in research, synthesis, and drafting.",
  },
  {
    name: "The Decider",
    body: "You set direction. You need to judge what's real without building it yourself.",
  },
];

const steps = [
  "Answer a few questions about how your week actually goes",
  "Get your archetype and the three habits that fit it",
  "Get a short path — what to learn first, and what to skip",
];

export default function AiArchetypePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Free, five minutes"
          title="What kind of AI user are you?"
          lead="Most people use AI in a way that doesn't match how they actually work. Answer a few questions and find out what fits you, plus what to learn next."
        >
          <ButtonLink href="https://ai-archetype-pied.vercel.app/">
            Find your archetype
          </ButtonLink>
        </PageHero>

        <Section tone="light">
          <Container>
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
              <h2 className="text-[clamp(28px,4vw,44px)] leading-[1.08] font-medium tracking-[-0.04em] text-[#121313]">
                Everyone gets the same advice. Almost nobody needs it.
              </h2>
              <p className="max-w-[560px] text-[clamp(16px,1.8vw,19px)] leading-[1.55] tracking-[-0.01em] text-[#5a5a5a]">
                The advice that helps a founder is useless to an analyst, and the
                workflow that transforms an operations lead does nothing for a
                designer. Knowing which one you are is the difference between
                three tools you actually keep and a folder of abandoned tabs.
              </p>
            </div>
          </Container>
        </Section>

        <Section tone="black">
          <Container>
            <SectionHeading
              tone="dark"
              eyebrow="The four"
              title="Four archetypes."
              muted="You're mostly one of them."
            />
            <div className="mt-16 grid grid-cols-1 gap-px bg-white/10 md:grid-cols-2">
              {archetypes.map((a) => (
                <div key={a.name} className="bg-black p-8">
                  <h3 className="text-[22px] leading-[1.15] font-medium tracking-[-0.03em] text-white">
                    {a.name}
                  </h3>
                  <p className="mt-3 max-w-[420px] text-[15px] leading-[1.5] text-white/60">
                    {a.body}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        <Section tone="paper">
          <Container>
            <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20">
              <div>
                <SectionHeading
                  title="How it works."
                  muted="Five minutes, no signup."
                />
                <div className="mt-10">
                  <ButtonLink href="https://ai-archetype-pied.vercel.app/">
                    Find your archetype
                  </ButtonLink>
                </div>
              </div>
              <div>
                <Eyebrow>What you get</Eyebrow>
                <ol className="mt-7 border-t border-[#e4e3de]">
                  {steps.map((s, i) => (
                    <li
                      key={s}
                      className="flex gap-5 border-b border-[#e4e3de] py-5 text-[16px] leading-[1.45] text-[#121313]"
                    >
                      <span className="font-mono text-[11px] text-[#c4c4c0]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {s}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </Container>
        </Section>
      </main>
      <SiteFooter />
    </>
  );
}
