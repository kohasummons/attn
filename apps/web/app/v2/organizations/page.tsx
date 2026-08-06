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
  title: "Organization training — Attention Factory",
  description:
    "We train your people to use AI on their actual work, then leave you with systems that hold up after we go.",
};

const audiences = [
  {
    label: "Leaders",
    title: "Decide what to do",
    body: "Executives and directors who have to sequence the rollout, set the budget, and answer the board. They leave able to tell a real opportunity from a demo.",
  },
  {
    label: "Builders",
    title: "Ship the thing",
    body: "Operators, analysts, and engineers who will build the internal tools. They leave with something working, built on their own workflow.",
  },
  {
    label: "Everyone else",
    title: "Use it Monday",
    body: "The people whose week is full of the work AI is actually good at. They leave with three habits they'll still have in a month.",
  },
];

const format = [
  {
    when: "Half day",
    title: "Executive session",
    body: "One room, the leadership team, and an honest read on where you stand. Ends with a decision, not a deck.",
  },
  {
    when: "Two days",
    title: "Build intensive",
    body: "Hands on keyboards. Every person leaves having built and shipped something against their own work.",
  },
  {
    when: "Six weeks",
    title: "Cohort programme",
    body: "Weekly sessions across a department, with work between them and a demo day at the end.",
  },
];

const afterwards = [
  "Recordings and materials your team keeps",
  "The internal champions we trained to run the next round",
  "A written record of what worked and what we killed",
];

export default function OrganizationsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="For your whole team"
          title={["Your team is already using AI.", "Badly."]}
          lead="Most companies buy the tools and skip the training, so nothing changes. We train your people on their actual work, then leave systems that hold up."
        >
          <ButtonLink href="/v2/contact">Train your team</ButtonLink>
        </PageHero>

        <Section tone="light">
          <Container>
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
              <h2 className="text-[clamp(28px,4vw,44px)] leading-[1.08] font-medium tracking-[-0.04em] text-[#121313]">
                Seats are not adoption.
              </h2>
              <p className="max-w-[560px] text-[clamp(16px,1.8vw,19px)] leading-[1.55] tracking-[-0.01em] text-[#5a5a5a]">
                A licence for every employee and a lunch-and-learn is the most
                common AI strategy in the world, and it almost never moves a
                number. People go back to their inbox on Tuesday because nobody
                showed them what to stop doing. Training only sticks when it runs
                on the work someone already has open.
              </p>
            </div>
          </Container>
        </Section>

        <Section tone="black">
          <Container>
            <SectionHeading
              tone="dark"
              eyebrow="Who we train"
              title="Three groups."
              muted="They need different things."
            />
            <div className="mt-16 grid grid-cols-1 gap-px bg-white/10 md:grid-cols-3">
              {audiences.map((a) => (
                <div key={a.title} className="bg-black p-8">
                  <p className="text-[13px] tracking-[-0.02em] text-white/40">
                    {a.label}
                  </p>
                  <h3 className="mt-6 text-[22px] leading-[1.15] font-medium tracking-[-0.03em] text-white">
                    {a.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-[1.5] text-white/60">
                    {a.body}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        <Section tone="paper">
          <Container>
            <SectionHeading
              title="Three formats."
              muted="Pick by how much time you have."
            />
            <div className="mt-16 border-t border-[#e4e3de]">
              {format.map((f) => (
                <div
                  key={f.title}
                  className="grid grid-cols-1 gap-4 border-b border-[#e4e3de] py-8 md:grid-cols-[140px_260px_1fr] md:items-baseline md:gap-10"
                >
                  <p className="text-[13px] tracking-[-0.02em] text-[#ff4100]">
                    {f.when}
                  </p>
                  <p className="text-[20px] leading-[1.2] font-medium tracking-[-0.03em] text-[#121313]">
                    {f.title}
                  </p>
                  <p className="max-w-[600px] text-[15px] leading-[1.5] text-[#5a5a5a]">
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
              <div>
                <p className="text-[clamp(64px,9vw,120px)] leading-[0.9] font-medium tracking-[-0.05em] text-white">
                  3,000+
                </p>
                <p className="mt-5 text-[16px] leading-[1.4] text-white/50">
                  people and teams trained so far
                </p>
                <div className="mt-12">
                  <ButtonLink href="/v2/contact">Train your team</ButtonLink>
                </div>
              </div>

              <div>
                <Eyebrow tone="dark">What you keep afterwards</Eyebrow>
                <ul className="mt-7 border-t border-white/10">
                  {afterwards.map((item) => (
                    <li
                      key={item}
                      className="border-b border-white/10 py-5 text-[16px] leading-[1.45] text-white/80"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-8 max-w-[440px] text-[15px] leading-[1.5] text-white/50">
                  No AI hype. No slide decks nobody reopens. Just your people,
                  doing their own work faster than they did last quarter.
                </p>
              </div>
            </div>
          </Container>
        </Section>
      </main>
      <SiteFooter />
    </>
  );
}
