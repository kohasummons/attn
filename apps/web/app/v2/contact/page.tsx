import type { Metadata } from "next";
import Image from "next/image";

import { SiteFooter } from "@/components/sections/site-footer";
import { SiteHeader } from "@/components/sections/site-header";
import { Container } from "@/components/ui/container";
import { ButtonLink, Section } from "@/components/ui/page-shell";

import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "Contact — Attention Factory",
  description:
    "Contact Attention Factory about learning, team training, software development, workflow automation, AI planning, or partnerships.",
};

const steps = [
  {
    label: "Step one",
    title: "Choose a topic",
    body: "Tell us why you are writing so we can send your message to the right person.",
  },
  {
    label: "Step two",
    title: "Share the context",
    body: "A few sentences about your goal, the problem, or the question are enough. Include any timing we should know about.",
  },
  {
    label: "Step three",
    title: "We reply with the next step",
    body: "That may be a direct answer, a link to the right program, a few follow-up questions, or a call to discuss the work.",
  },
];

const reasons = [
  {
    title: "Learning and course support",
    body: "Ask about Weekends of AI, Attention University, registration, course access, or a program you are already taking.",
    flower: "peony",
  },
  {
    title: "Training for teams",
    body: "Tell us about your team, what they do, and what you want the training to help them do better.",
    flower: "iris",
  },
  {
    title: "Software development",
    body: "Share the product you want to build, who it is for, and what you know about the first version so far.",
    flower: "rose",
  },
  {
    title: "Workflow automation and AI planning",
    body: "Tell us about the process you want to improve or the question your organization is trying to answer about AI.",
    flower: "dahlia",
  },
  {
    title: "Partnerships and other requests",
    body: "Use this for speaking, media, sponsorships, community partnerships, collaborations, or anything that does not fit above.",
    flower: "lotus",
  },
];

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* Contact hero */}
        <section className="relative isolate flex min-h-[680px] flex-col justify-start overflow-hidden bg-[#121313] pt-[144px] pb-14 text-white md:min-h-[720px] md:pt-[190px] md:pb-20">
          <Image
            src="/images/bg-atf2.webp"
            alt=""
            fill
            priority
            sizes="100vw"
            className="-z-20 object-cover object-center"
          />
          <div
            aria-hidden
            className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0b0c0c] via-[#0b0c0c]/88 to-[#0b0c0c]/35"
          />
          <Container>
            <h1 className="max-w-[960px] text-[clamp(38px,6vw,64px)] leading-[1.05] font-medium tracking-[-0.04em]">
              <span className="block">Tell us what you are trying to do.</span>
              <span className="block text-[#6a7282]">
                We will help you find the right next step.
              </span>
            </h1>
            <p className="mt-7 max-w-[680px] text-[16px] leading-[1.65] tracking-[-0.01em] text-white/72 md:text-[18px]">
              You may be looking for a course, training for your team, help
              building software, an automation project, or a partnership. Send
              the context you have. You do not need a polished brief.
            </p>
            <div className="mt-10">
              <ButtonLink href="#contact-form">Send us a message</ButtonLink>
            </div>
          </Container>
        </section>

        {/* What happens next */}
        <section className="mx-auto max-w-[1738px] border-x border-[#e4e3de] bg-white">
          <Container className="py-24 md:py-36">
            <h2 className="max-w-[760px] text-[clamp(32px,5vw,52px)] leading-[1.05] font-medium tracking-[-0.04em] text-[#121313]">
              What happens after you write to us.
            </h2>
            <div className="mt-12 grid grid-cols-1 gap-2 md:grid-cols-3">
              {steps.map((step) => (
                <article
                  key={step.title}
                  className="flex min-h-[300px] flex-col border border-[#e4e3de] bg-[#f9f9f9] p-8 md:p-10"
                >
                  <p className="text-[15px] tracking-[-0.02em] text-[#8a8a86]">
                    {step.label}
                  </p>
                  <div className="mt-auto pt-12">
                    <h3 className="text-[clamp(22px,2.5vw,28px)] leading-[1.12] font-medium tracking-[-0.035em] text-[#121313]">
                      {step.title}
                    </h3>
                    <p className="mt-4 text-[16px] leading-[1.6] text-[#5a5a5a] md:text-[17px]">
                      {step.body}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </section>

        {/* Reasons people contact us */}
        <Section tone="black">
          <Container>
            <h2 className="text-[clamp(32px,5vw,52px)] leading-[1.05] font-medium tracking-[-0.04em] text-white">
              Choose the reason you are writing.
            </h2>
            <p className="mt-6 max-w-[720px] text-[16px] leading-[1.65] text-white/65 md:text-[18px]">
              You can use the same form for any of these. Choosing a topic simply
              helps us send your message to the right part of the team.
            </p>
            <div className="mt-12 grid auto-rows-[360px] grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
              {reasons.map((reason) => (
                <article
                  key={reason.title}
                  className="group relative flex flex-col justify-end overflow-hidden border border-white/10 bg-black p-8 transition-[transform,border-color] duration-500 ease-out hover:-translate-y-1 hover:border-white/30"
                >
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 scale-[1.06] bg-[length:auto_62%] bg-no-repeat opacity-0 transition-[opacity,transform] duration-[700ms] ease-out group-hover:scale-100 group-hover:opacity-100"
                    style={{
                      backgroundImage: `url('/images/flowers/${reason.flower}.webp')`,
                      backgroundPosition: "82% 43%",
                    }}
                  />
                  <div className="relative">
                    <h3 className="text-[clamp(23px,2.5vw,30px)] leading-[1.1] font-medium tracking-[-0.035em] text-white">
                      {reason.title}
                    </h3>
                    <p className="mt-4 max-w-[360px] text-[16px] leading-[1.55] text-white/68">
                      {reason.body}
                    </p>
                  </div>
                </article>
              ))}

              <article className="flex flex-col justify-between bg-white p-8 md:p-10">
                <p className="text-[15px] tracking-[-0.02em] text-black/45">
                  Email
                </p>
                <div>
                  <a
                    href="mailto:hello@attentionfactory.io"
                    className="text-[clamp(22px,2.5vw,30px)] leading-[1.1] font-medium tracking-[-0.035em] text-black underline decoration-black/25 underline-offset-5 transition-colors hover:text-[#ff4100]"
                  >
                    hello@attentionfactory.io
                  </a>
                  <p className="mt-4 max-w-[380px] text-[16px] leading-[1.55] text-black/60">
                    You can also write to us directly for general questions and
                    requests.
                  </p>
                </div>
              </article>
            </div>
          </Container>
        </Section>

        {/* Contact form */}
        <section
          id="contact-form"
          className="scroll-mt-20 bg-[#f9f9f9] py-24 md:py-36"
        >
          <Container>
            <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
              <div>
                <h2 className="text-[clamp(32px,5vw,52px)] leading-[1.05] font-medium tracking-[-0.04em]">
                  <span className="block text-[#121313]">Write to us.</span>
                  <span className="block text-[#6a7282]">
                    A short message is enough.
                  </span>
                </h2>
                <p className="mt-6 max-w-[520px] text-[16px] leading-[1.65] text-[#5a5a5a] md:text-[18px]">
                  Tell us what you are trying to do, what is getting in the way,
                  and any deadline or context we should know about.
                </p>
              </div>
              <ContactForm />
            </div>
          </Container>
        </section>

        {/* Final contact prompt */}
        <section className="relative isolate min-h-[560px] overflow-hidden bg-[#121313] text-white">
          <Image
            src="/v2/cta-bg.png"
            alt=""
            fill
            sizes="100vw"
            className="-z-20 object-cover object-center"
          />
          <div aria-hidden className="absolute inset-0 -z-10 bg-black/60" />
          <Container className="py-24 md:py-36">
            <h2 className="max-w-[680px] text-[clamp(36px,6vw,64px)] leading-[1.05] font-medium tracking-[-0.04em] text-white">
              Not sure which option fits?
            </h2>
            <p className="mt-6 max-w-[620px] text-[16px] leading-[1.65] text-white/72 md:text-[18px]">
              You do not need to figure that out before you contact us. Tell us
              what you are trying to do, and we will direct you to the right
              person, program, or service.
            </p>
            <div className="mt-10">
              <ButtonLink href="#contact-form">Send a message</ButtonLink>
            </div>
          </Container>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
