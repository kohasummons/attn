import type { Metadata } from "next";

import { SiteFooter } from "@/components/sections/site-footer";
import { SiteHeader } from "@/components/sections/site-header";
import { Container } from "@/components/ui/container";
import {
  ButtonLink,
  PageHero,
  Section,
  SectionHeading,
} from "@/components/ui/page-shell";

const APP_MEMBERSHIP = "https://app.attentionfactory.io/membership";
const WEEKENDS = "https://weekendsofai.com";

export const metadata: Metadata = {
  title: "Courses — Attention Factory",
  description:
    "Short, structured courses you can work through at your own pace. Each one is built around real tasks. The full list is on the way.",
};

/** What every course holds, regardless of subject. */
const format = [
  {
    title: "Built around a real task",
    body: "Each course ends with something that works — a page live, an agent answering, a report that writes itself. Not a quiz.",
  },
  {
    title: "Short by design",
    body: "You work through it in evenings, not quarters. If a lesson can be cut without losing the build, it gets cut.",
  },
  {
    title: "Your own pace",
    body: "Nothing is scheduled. Start, stop, and come back to the same place with the work still there.",
  },
  {
    title: "The tools people actually use",
    body: "We teach on what is in front of you today, and we say plainly when a tool stops being the right answer.",
  },
];

const pad = (n: number) => String(n + 1).padStart(2, "0");

export default function CoursesPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          title="Courses"
          lead="Short, structured courses you can work through at your own pace. Each one is built around real tasks."
          image="/images/bg-atf2.webp"
        >
          <div className="flex flex-wrap items-center gap-4">
            <ButtonLink href="/v2/contact">Be the first to know</ButtonLink>
            <ButtonLink href={APP_MEMBERSHIP} variant="light">
              Go to Attention University
            </ButtonLink>
          </div>
        </PageHero>

        {/* The honest state of the page: there is no list yet. Say so first,
            before showing anything that looks like one. */}
        <Section tone="light">
          <Container>
            <div className="grid grid-cols-1 gap-12 border-y border-[#e4e3de] py-14 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-20">
              <div>
                <SectionHeading
                  title="The course list is coming."
                  muted="Be the first to know."
                  lead="We are still building the first set. Tell us what you are trying to learn and we will send the list the day it opens, along with what is free."
                />
              </div>
              <div className="flex shrink-0 flex-wrap items-center gap-4">
                <ButtonLink href="/v2/contact">Be the first to know</ButtonLink>
                <ButtonLink href={WEEKENDS} variant="dark">
                  Start with Weekends of AI
                </ButtonLink>
              </div>
            </div>
          </Container>
        </Section>

        <Section tone="paper" size="sm">
          <Container>
            <SectionHeading
              title="What a course looks like."
              muted="Same shape every time."
            />
            <div className="mt-14 grid grid-cols-1 gap-px bg-[#e4e3de] md:grid-cols-2">
              {format.map((f, i) => (
                <div key={f.title} className="bg-[#f9f9f9] p-8 md:p-10">
                  <span className="text-[13px] text-[#b4b3ae]">{pad(i)}</span>
                  <h3 className="mt-6 text-[clamp(22px,2.5vw,28px)] leading-[1.05] font-medium tracking-[-0.04em] text-[#121313]">
                    {f.title}
                  </h3>
                  <p className="mt-4 max-w-[440px] text-[15px] leading-[1.55] tracking-[-0.02em] text-[#5a5a5a]">
                    {f.body}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        <Section tone="dark">
          <Container>
            <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20">
              <SectionHeading
                tone="dark"
                title="The full platform lives in Attention University."
                muted="Courses, community, and live sessions."
                lead="Membership opens every course, the community, and the live sessions. It runs inside the Attention Factory app."
              />
              <div className="flex items-end">
                <ButtonLink href={APP_MEMBERSHIP} variant="light">
                  Go to Attention University
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
