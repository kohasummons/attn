import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { SiteFooter } from "@/components/sections/site-footer";
import { SiteHeader } from "@/components/sections/site-header";
import { Container } from "@/components/ui/container";
import {
  ButtonLink,
  Eyebrow,
  ImageBand,
  PageHero,
  Section,
  SectionHeading,
} from "@/components/ui/page-shell";

import { getService, services } from "../_data";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const service = getService((await params).slug);
  if (!service) return {};
  return {
    title: `${service.nav} — Attention Factory`,
    description: service.lead,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const service = getService((await params).slug);
  if (!service) notFound();

  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow={service.eyebrow}
          title={service.h1}
          lead={service.lead}
          image={service.hero}
        >
          <ButtonLink href="/v2/contact">Talk to us</ButtonLink>
        </PageHero>

        {/* The problem */}
        <Section tone="light">
          <Container>
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
              <h2 className="text-[clamp(28px,4vw,44px)] leading-[1.08] font-medium tracking-[-0.04em] text-[#121313]">
                {service.problem.title}
              </h2>
              <p className="max-w-[560px] text-[clamp(16px,1.8vw,19px)] leading-[1.55] tracking-[-0.01em] text-[#5a5a5a]">
                {service.problem.body}
              </p>
            </div>
          </Container>
        </Section>

        {/* How it works */}
        <Section tone="black">
          <Container>
            <SectionHeading
              tone="dark"
              eyebrow="How it works"
              title="Three steps."
              muted="Each one has a date."
            />
            <div className="mt-16 grid grid-cols-1 gap-px bg-white/10 md:grid-cols-3">
              {service.steps.map((step) => (
                <div key={step.title} className="bg-black p-8">
                  <p className="font-mono text-[10px] tracking-[0.16em] text-[#ff4100] uppercase">
                    {step.when}
                  </p>
                  <h3 className="mt-6 text-[22px] leading-[1.15] font-medium tracking-[-0.03em] text-white">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-[1.5] text-white/60">
                    {step.body}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* Deliverables */}
        <Section tone="paper">
          <Container>
            <SectionHeading
              title="Go in with a problem."
              muted="Walk away with these."
            />
            <div className="mt-16 grid grid-cols-1 gap-px bg-[#e4e3de] md:grid-cols-3">
              {service.deliverables.map((d) => (
                <div key={d.name} className="bg-[#f9f9f9] p-8">
                  <p className="font-mono text-[10px] tracking-[0.16em] text-[#8a8a86] uppercase">
                    {d.label}
                  </p>
                  <h3 className="mt-6 text-[20px] leading-[1.2] font-medium tracking-[-0.03em] text-[#121313]">
                    {d.name}
                  </h3>
                  <p className="mt-3 text-[15px] leading-[1.5] text-[#5a5a5a]">
                    {d.body}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        <ImageBand src={`/images/flowers/${service.bloom}.webp`} height="sm" />

        {/* Maturity ladder */}
        <Section tone="light">
          <Container>
            <SectionHeading
              eyebrow="Where you are now"
              title="Four rungs."
              muted="Most companies are on the second."
            />
            <div className="mt-16 border-t border-[#e4e3de]">
              {service.ladder.map((rung) => (
                <div
                  key={rung.rung}
                  className="grid grid-cols-1 gap-4 border-b border-[#e4e3de] py-8 md:grid-cols-[80px_260px_1fr] md:items-baseline md:gap-10"
                >
                  <p className="font-mono text-[12px] tracking-[0.14em] text-[#c4c4c0]">
                    {rung.rung}
                  </p>
                  <p className="text-[20px] leading-[1.2] font-medium tracking-[-0.03em] text-[#121313]">
                    {rung.name}
                  </p>
                  <p className="max-w-[600px] text-[15px] leading-[1.5] text-[#5a5a5a]">
                    {rung.body}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* Fit + CTA */}
        <Section tone="dark">
          <Container>
            <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20">
              <div>
                <h2 className="text-[clamp(28px,4vw,44px)] leading-[1.08] font-medium tracking-[-0.04em] text-white">
                  {service.fit.title}
                </h2>
                <p className="mt-6 max-w-[520px] text-[16px] leading-[1.55] text-white/60">
                  {service.fit.body}
                </p>
                <div className="mt-10">
                  <ButtonLink href="/v2/contact">Talk to us</ButtonLink>
                </div>
              </div>

              <div>
                <Eyebrow tone="dark">What we&rsquo;ll need from you</Eyebrow>
                <ul className="mt-7 border-t border-white/10">
                  {service.fit.requires.map((r) => (
                    <li
                      key={r}
                      className="border-b border-white/10 py-5 text-[16px] leading-[1.45] text-white/80"
                    >
                      {r}
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
