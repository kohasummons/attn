import type { Metadata } from "next";
import Image from "next/image";

import { SiteFooter } from "@/components/sections/site-footer";
import { SiteHeader } from "@/components/sections/site-header";
import { Container } from "@/components/ui/container";
import { ButtonLink, PageHero, Section } from "@/components/ui/page-shell";

import { GuidesIndex } from "./guides-index";

export const metadata: Metadata = {
  title: "Playbooks, guides and tools — Attention Factory",
  description:
    "We turn the methods we teach, test, and use in our own work into free guides you can follow on your own. Choose the task in front of you and start there.",
};

export default function PlaybooksPage() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* 1 — Dark hero. */}
        <PageHero
          title={["The Free Resource Library", "Your AI Playbook"]}
          lead="100+ bite-sized guides covering AI prompts, skills, workflows, and career strategy."
          image="/images/hero/teal.webp"
        >
          <ButtonLink href="#guides">Browse the guides</ButtonLink>
        </PageHero>

        {/* 4 + 5 — Guide library introduction and the existing library. */}
        <Section id="guides" tone="light">
          <Container>
            <div className="max-w-[640px]">
              <h2 className="text-[clamp(28px,5vw,48px)] leading-[1.05] font-medium tracking-[-0.04em] text-[#121313]">
                Find the guide that fits what you are trying to do.
              </h2>
              <p className="mt-6 max-w-[560px] text-[16px] leading-[1.65] tracking-[-0.01em] text-[#5a5a5a] md:text-[18px]">
                Search by topic, tool, or task. Every guide is free to read, and
                we add new ones when our classes and projects give us something
                useful to share.
              </p>
            </div>
            <div className="mt-14">
              <GuidesIndex />
            </div>
          </Container>
        </Section>

        {/* Final CTA, dark image treatment. */}
        <section className="relative isolate overflow-hidden bg-[#0b0c0c]">
          <Image
            src="/v2/cta-bg.png"
            alt=""
            fill
            sizes="100vw"
            className="-z-20 object-cover object-center"
          />
          <div aria-hidden className="absolute inset-0 -z-10 bg-black/60" />
          <div className="py-24 md:py-36">
            <Container>
              <div className="max-w-[640px]">
                <h2 className="text-[clamp(28px,4vw,44px)] leading-[1.1] font-medium tracking-[-0.04em] text-white">
                  The guides are only one way to learn with us.
                </h2>
                <p className="mt-6 max-w-[560px] text-[16px] leading-[1.65] text-white/75 md:text-[18px]">
                  You can join{" "}
                  <a
                    href="https://weekendsofai.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white underline underline-offset-4 transition-colors hover:text-white/70"
                  >
                    Weekends of AI
                  </a>
                  , take a structured course in{" "}
                  <a
                    href="https://app.attentionfactory.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white underline underline-offset-4 transition-colors hover:text-white/70"
                  >
                    Attention University
                  </a>
                  , bring us in to train your team, or work with us on software
                  and automation.
                </p>
                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <ButtonLink href="/v2/courses">Explore learning</ButtonLink>
                  <ButtonLink href="/v2/services" variant="light">
                    Work with us
                  </ButtonLink>
                </div>
              </div>
            </Container>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
