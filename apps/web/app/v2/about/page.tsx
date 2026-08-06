import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

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
  title: "About — Attention Factory",
  description:
    "Attention Factory has trained 3,000+ people and teams to build with AI. Two founders, one method: you leave with something running.",
};

const principles = [
  {
    title: "You learn it by building it.",
    body: "Every session ends with something running in your own account, not a certificate in your inbox.",
  },
  {
    title: "The bottleneck is never the model.",
    body: "It is the approval, the handoff, and the person waiting on a reply, so that is where we start.",
  },
  {
    title: "We tell you what we do not know.",
    body: "When the honest answer is that a thing is not ready yet, you hear it from us before you spend a quarter on it.",
  },
];

const founders = [
  {
    name: "Mercy Thaddeus",
    role: "Co-founder",
    photo: "/images/team-mercy.jpg",
    bio: [
      "Mercy runs the build side. She takes the problem your team keeps working around and turns it into an app, an agent, or an automation that ships in weeks.",
      "She has taught in rooms of forty and in calls of four, and she writes the curriculum the same way she writes software: cut it until only the part that works is left.",
    ],
  },
  {
    name: "Joshua Phyl",
    role: "Co-founder",
    photo: "/images/team-joshua.jpg",
    bio: [
      "Joshua runs the training side. He sits with your team, watches how the work actually moves, and rebuilds the session around what he sees rather than what the brief said.",
      "He is the one who will tell you a pilot is not worth running. That answer has saved more quarters than any workshop he has led.",
    ],
  },
];

const proof = [
  {
    figure: "3,000+",
    body: "People and teams trained, in person and online.",
  },
  {
    figure: "Two",
    body: "Founders. The people you meet are the people who do the work.",
  },
  {
    figure: "Monday",
    body: "The test for every session. If you cannot use it Monday, we cut it.",
  },
];

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="About"
          title={["The tools got good.", "The habits did not."]}
          lead="Attention Factory is a two-person studio that has trained 3,000+ people and teams to build with AI, then stayed to build the first thing with them."
        >
          <ButtonLink href="/v2/contact">Talk to us</ButtonLink>
        </PageHero>

        {/* Origin, told as a moment */}
        <Section tone="light">
          <Container>
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
              <h2 className="text-[clamp(28px,4vw,44px)] leading-[1.08] font-medium tracking-[-0.04em] text-[#121313]">
                The moment.
              </h2>
              <div className="max-w-[560px] space-y-6 text-[clamp(16px,1.8vw,19px)] leading-[1.55] tracking-[-0.01em] text-[#5a5a5a]">
                <p>
                  In 2023 the cost of building software fell off a cliff. A
                  model could draft the plan, write the code, and run the
                  analysis, and every company on earth found this out in the
                  same quarter. What did not change was the room. The same
                  meetings, the same approvals, the same one person who owns the
                  spreadsheet.
                </p>
                <p>
                  Mercy and Joshua were teaching in those rooms when the gap
                  showed up. People had the tools open and no idea what to do
                  with the next hour. So they stopped shipping decks and started
                  shipping builds: one team, one real problem, one working thing
                  by Friday. Three thousand people later, the question that
                  opened all of it is still open. What would your team do if
                  building were free?
                </p>
              </div>
            </div>
          </Container>
        </Section>

        {/* Principles */}
        <Section tone="black">
          <Container>
            <SectionHeading
              tone="dark"
              eyebrow="What we hold to"
              title="Three principles."
              muted="They decide what we say no to."
            />
            <div className="mt-16 grid grid-cols-1 gap-px bg-white/10 md:grid-cols-3">
              {principles.map((principle) => (
                <div key={principle.title} className="bg-black p-8">
                  <h3 className="text-[22px] leading-[1.15] font-medium tracking-[-0.03em] text-white">
                    {principle.title}
                  </h3>
                  <p className="mt-4 text-[15px] leading-[1.5] text-white/60">
                    {principle.body}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* Positioning */}
        <Section tone="paper" size="sm">
          <Container>
            <p className="max-w-[900px] text-[clamp(28px,5vw,48px)] leading-[1.05] font-medium tracking-[-0.04em] text-[#121313]">
              No pilots that die in committee.{" "}
              <span className="text-[#6a7282]">
                No forty-slide readouts. Just a working thing your team can run
                on Monday.
              </span>
            </p>
          </Container>
        </Section>

        {/* Founders as full-width rows */}
        <Section tone="light">
          <Container>
            <SectionHeading
              eyebrow="Who you work with"
              title="Two founders."
              muted="No bench, no handover."
            />
            <div className="mt-16 border-t border-[#e4e3de]">
              {founders.map((founder) => (
                <div
                  key={founder.name}
                  className="grid grid-cols-1 gap-8 border-b border-[#e4e3de] py-12 md:grid-cols-[220px_1fr] md:gap-14"
                >
                  <div className="relative aspect-square w-full max-w-[220px] overflow-hidden bg-[#f9f9f9]">
                    <Image
                      src={founder.photo}
                      alt={founder.name}
                      fill
                      sizes="220px"
                      className="object-cover"
                    />
                  </div>
                  <div className="max-w-[620px]">
                    <h3 className="text-[clamp(22px,2.5vw,28px)] leading-[1.05] font-semibold tracking-[-0.04em] text-[#121313]">
                      {founder.name}
                    </h3>
                    <p className="mt-2 text-[13px] tracking-[-0.02em] text-[#8a8a86]">
                      {founder.role}
                    </p>
                    <div className="mt-6 space-y-4 text-[16px] leading-[1.55] text-[#5a5a5a]">
                      {founder.bio.map((line) => (
                        <p key={line}>{line}</p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* Proof */}
        <Section tone="paper">
          <Container>
            <SectionHeading
              eyebrow="The record"
              title="Three things we can prove."
              muted="Everything else is a claim."
            />
            <div className="mt-16 grid grid-cols-1 gap-px bg-[#e4e3de] md:grid-cols-3">
              {proof.map((item) => (
                <div key={item.figure} className="bg-[#f9f9f9] p-8">
                  <p className="text-[clamp(28px,5vw,48px)] leading-[1.05] font-medium tracking-[-0.04em] text-[#121313]">
                    {item.figure}
                  </p>
                  <p className="mt-4 text-[15px] leading-[1.5] text-[#5a5a5a]">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* Closing CTA */}
        <Section tone="dark">
          <Container>
            <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20">
              <div>
                <h2 className="text-[clamp(28px,4vw,44px)] leading-[1.08] font-medium tracking-[-0.04em] text-white">
                  Bring us the problem your team keeps working around.
                </h2>
                <p className="mt-6 max-w-[520px] text-[16px] leading-[1.55] text-white/60">
                  Tell us what it is and who it slows down. You get an answer
                  from a founder, and a straight read on whether this is work we
                  should take.
                </p>
                <div className="mt-10">
                  <ButtonLink href="/v2/contact">Talk to us</ButtonLink>
                </div>
              </div>

              <div>
                <Eyebrow tone="dark">Where to go next</Eyebrow>
                <ul className="mt-7 border-t border-white/10">
                  <li className="border-b border-white/10">
                    <Link
                      href="/v2/organizations"
                      className="block py-5 text-[16px] leading-[1.45] text-white/80 transition-colors hover:text-white"
                    >
                      Train your team
                    </Link>
                  </li>
                  <li className="border-b border-white/10">
                    <Link
                      href="/v2/services/software-building"
                      className="block py-5 text-[16px] leading-[1.45] text-white/80 transition-colors hover:text-white"
                    >
                      Build software with us
                    </Link>
                  </li>
                  <li className="border-b border-white/10">
                    <Link
                      href="/v2"
                      className="block py-5 text-[16px] leading-[1.45] text-white/80 transition-colors hover:text-white"
                    >
                      be inevitable with ai
                    </Link>
                  </li>
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
