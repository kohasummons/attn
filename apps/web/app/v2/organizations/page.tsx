import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import { SiteFooter } from "@/components/sections/site-footer";
import { SiteHeader } from "@/components/sections/site-header";
import { Container } from "@/components/ui/container";
import { ButtonLink, PageHero, Section } from "@/components/ui/page-shell";

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

const flowers = ["rose", "iris", "dahlia"];

export default function OrganizationsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          title={["Your team is already using AI.", "Badly."]}
          lead="Most companies buy the tools and skip the training, so nothing changes. We train your people on their actual work, then leave systems that hold up."
        >
          <ButtonLink href="/v2/contact">Train your team</ButtonLink>
        </PageHero>

        <section className="mx-auto max-w-[1738px] border-x border-[#e4e3de] bg-white">
          <Container className="py-24 md:py-36">
            <div className="grid grid-cols-1 border-y border-[#e4e3de] lg:grid-cols-2">
              <div className="py-10 lg:border-r lg:border-[#e4e3de] lg:py-16 lg:pr-16">
                <h2 className="max-w-[480px] text-[clamp(32px,5vw,52px)] leading-[1.05] font-medium tracking-[-0.04em]">
                  <span className="block text-[#121313]">Seats are not</span>
                  <span className="block text-[#6a7282]">adoption.</span>
                </h2>
              </div>
              <p className="max-w-[620px] py-10 text-[16px] leading-[1.7] tracking-[-0.01em] text-[#505050] md:text-[18px] lg:py-16 lg:pl-16">
                A licence for every employee and a lunch-and-learn is the most
                common AI strategy in the world, and it almost never moves a
                number. People go back to their inbox on Tuesday because nobody
                showed them what to stop doing. Training only sticks when it runs
                on the work someone already has open.
              </p>
            </div>
          </Container>
        </section>

        <Section tone="black">
          <Container>
            <h2 className="text-[clamp(32px,5vw,52px)] leading-[1.05] font-medium tracking-[-0.04em]">
              <span className="block text-white">Three groups.</span>
              <span className="block text-[#6a7282]">
                They need different things.
              </span>
            </h2>
            <div className="mt-12 grid auto-rows-[380px] grid-cols-1 gap-2 md:grid-cols-3">
              {audiences.map((audience, index) => (
                <article
                  key={audience.title}
                  className="group relative flex flex-col justify-between overflow-hidden border border-white/10 bg-black p-8 transition-[transform,border-color] duration-500 ease-out hover:-translate-y-1 hover:border-white/30"
                >
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 scale-[1.06] bg-[length:auto_62%] bg-no-repeat opacity-0 transition-[opacity,transform] duration-[700ms] ease-out group-hover:scale-100 group-hover:opacity-100"
                    style={{
                      backgroundImage: `url('/images/flowers/${flowers[index]}.webp')`,
                      backgroundPosition: "82% 43%",
                    }}
                  />
                  <div className="relative flex items-start justify-between gap-4">
                    <p className="text-[13px] tracking-[-0.02em] text-white/45 transition-colors group-hover:text-white/75">
                      {audience.label}
                    </p>
                    <ArrowUpRight
                      aria-hidden
                      className="size-5 text-white/30 transition-colors group-hover:text-white"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div className="relative">
                    <h3 className="text-[clamp(23px,2.5vw,30px)] leading-[1.1] font-medium tracking-[-0.035em] text-white">
                      {audience.title}
                    </h3>
                    <p className="mt-4 max-w-[330px] text-[16px] leading-[1.55] text-white/68">
                      {audience.body}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </Section>

        <Section tone="paper">
          <Container>
            <h2 className="text-[clamp(32px,5vw,52px)] leading-[1.05] font-medium tracking-[-0.04em]">
              <span className="block text-[#121313]">Three formats.</span>
              <span className="block text-[#6a7282]">
                Pick by how much time you have.
              </span>
            </h2>
            <div className="mt-12 border-t border-[#d9d8d3]">
              {format.map((item) => (
                <article
                  key={item.title}
                  className="group grid grid-cols-1 gap-5 border-b border-[#d9d8d3] py-9 transition-colors hover:bg-white md:grid-cols-[150px_280px_1fr] md:items-center md:gap-10 md:px-8"
                >
                  <p className="text-[15px] font-medium tracking-[-0.02em] text-[#d83a00]">
                    {item.when}
                  </p>
                  <h3 className="text-[clamp(21px,2.4vw,28px)] leading-[1.12] font-medium tracking-[-0.035em] text-[#121313]">
                    {item.title}
                  </h3>
                  <div className="flex items-start justify-between gap-6">
                    <p className="max-w-[560px] text-[16px] leading-[1.6] text-[#5a5a5a] md:text-[17px]">
                      {item.body}
                    </p>
                    <ArrowUpRight
                      aria-hidden
                      className="mt-1 size-5 shrink-0 text-[#121313]/25 transition-colors group-hover:text-[#121313]"
                      strokeWidth={1.5}
                    />
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </Section>

        <section className="relative isolate min-h-[650px] overflow-hidden bg-[#121313] text-white">
          <Image
            src="/v2/cta-bg.png"
            alt=""
            fill
            sizes="100vw"
            className="-z-20 object-cover object-center"
          />
          <div aria-hidden className="absolute inset-0 -z-10 bg-black/60" />
          <Container className="py-24 md:py-36">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-24">
              <div>
                <p className="text-[clamp(64px,9vw,120px)] leading-[0.9] font-medium tracking-[-0.05em] text-white">
                  3,000+
                </p>
                <p className="mt-5 max-w-[360px] text-[16px] leading-[1.5] text-white/70 md:text-[18px]">
                  people and teams trained so far
                </p>
                <div className="mt-12">
                  <ButtonLink href="/v2/contact">Train your team</ButtonLink>
                </div>
              </div>

              <div>
                <h2 className="max-w-[480px] text-[clamp(30px,4vw,44px)] leading-[1.08] font-medium tracking-[-0.04em] text-white">
                  What your team keeps afterwards.
                </h2>
                <ul className="mt-7 border-t border-white/10">
                  {afterwards.map((item) => (
                    <li
                      key={item}
                      className="flex items-center justify-between gap-5 border-b border-white/10 py-5 text-[16px] leading-[1.45] text-white/80 md:text-[17px]"
                    >
                      {item}
                      <ArrowUpRight
                        aria-hidden
                        className="size-4 shrink-0 text-white/35"
                        strokeWidth={1.5}
                      />
                    </li>
                  ))}
                </ul>
                <p className="mt-8 max-w-[500px] text-[16px] leading-[1.6] text-white/60">
                  No AI hype. No slide decks nobody reopens. Just your people,
                  doing their own work faster than they did last quarter.
                </p>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
