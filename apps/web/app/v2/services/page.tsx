import type { Metadata } from "next";
import Link from "next/link";

import { SiteFooter } from "@/components/sections/site-footer";
import { SiteHeader } from "@/components/sections/site-header";
import { Container } from "@/components/ui/container";
import {
  ButtonLink,
  PageHero,
  Section,
  SectionHeading,
} from "@/components/ui/page-shell";

import { services } from "./_data";

export const metadata: Metadata = {
  title: "Services — Attention Factory",
  description:
    "Plan the rollout, build the software, automate the work, and stay until the habit holds.",
};

export default function ServicesIndexPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Build with us"
          title={["Four ways we work.", "Each ends in something running."]}
          lead="We plan rollouts, build software, automate the work that repeats, and stay embedded until your team runs it without us."
        >
          <ButtonLink href="/v2/contact">Talk to us</ButtonLink>
        </PageHero>

        <Section tone="light">
          <Container>
            <div className="grid grid-cols-1 gap-px bg-[#e4e3de] md:grid-cols-2">
              {services.map((s) => (
                <Link
                  key={s.slug}
                  href={`/v2/services/${s.slug}`}
                  className="group flex flex-col justify-between bg-white p-8 transition-colors hover:bg-[#f9f9f9] md:p-10"
                >
                  <div className="flex items-start justify-between gap-4">
                    <p className="text-[13px] tracking-[-0.02em] text-[#8a8a86]">
                      {s.eyebrow}
                    </p>
                    <span
                      aria-hidden
                      className="text-[#c4c4c0] transition-colors group-hover:text-[#121313]"
                    >
                      &#8599;
                    </span>
                  </div>
                  <div className="mt-20">
                    <h2 className="max-w-[380px] text-[clamp(22px,2.5vw,28px)] leading-[1.15] font-medium tracking-[-0.03em] text-[#121313]">
                      {s.nav}
                    </h2>
                    <p className="mt-3 max-w-[420px] text-[15px] leading-[1.5] text-[#5a5a5a]">
                      {s.menuDescription}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </Section>

        <Section tone="dark">
          <Container>
            <SectionHeading
              tone="dark"
              title="Not sure which one."
              muted="Start with a conversation."
              lead="Tell us the workflow that hurts. If we're not the right people for it, we'll say so."
            />
            <div className="mt-10">
              <ButtonLink href="/v2/contact">Talk to us</ButtonLink>
            </div>
          </Container>
        </Section>
      </main>
      <SiteFooter />
    </>
  );
}
