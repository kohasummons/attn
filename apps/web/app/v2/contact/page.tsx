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
  title: "Contact — Attention Factory",
  description:
    "Tell us what your team is trying to build. One inbox, a reply from a founder, and a straight answer on whether this is work we should take.",
};

const steps = [
  {
    when: "Step one",
    title: "You send it.",
    body: "Your message lands in one inbox. No routing, no qualification form, no sales rep in between.",
  },
  {
    when: "Step two",
    title: "Mercy or Joshua reads it.",
    body: "One of the two founders answers you directly, usually inside the same week, and says what they would do first.",
  },
  {
    when: "Step three",
    title: "We scope it, or we say no.",
    body: "A short call where we name the first thing to build and the weeks it takes, or tell you this is not work we should take.",
  },
];

const routes = [
  {
    label: "Email",
    value: "hello@attentionfactory.io",
    href: "mailto:hello@attentionfactory.io",
    body: "The fastest way in. Both founders read it.",
  },
  {
    label: "Teams",
    value: "Organization training",
    href: "/v2/organizations",
    body: "Ten people or a thousand. Live sessions, run on your work.",
  },
  {
    label: "Build",
    value: "Software building",
    href: "/v2/services/software-building",
    body: "Apps, agents, and automations shipped in weeks.",
  },
];

const fields = [
  { id: "name", label: "Name", type: "text", autoComplete: "name" },
  { id: "email", label: "Email", type: "email", autoComplete: "email" },
  {
    id: "company",
    label: "Company",
    type: "text",
    autoComplete: "organization",
  },
];

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Contact"
          title="Tell us what your team keeps working around."
          lead="One inbox, a reply from a founder, and a straight read on whether this is work we should take."
        />

        {/* What happens next + routes */}
        <Section tone="light">
          <Container>
            <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20">
              <div>
                <SectionHeading
                  eyebrow="After you reach out"
                  title="Three steps."
                  muted="None of them is a demo."
                />
                <div className="mt-12 border-t border-[#e4e3de]">
                  {steps.map((step) => (
                    <div
                      key={step.title}
                      className="border-b border-[#e4e3de] py-8"
                    >
                      <p className="font-mono text-[10px] tracking-[0.16em] text-[#8a8a86] uppercase">
                        {step.when}
                      </p>
                      <h3 className="mt-5 text-[20px] leading-[1.2] font-medium tracking-[-0.03em] text-[#121313]">
                        {step.title}
                      </h3>
                      <p className="mt-3 max-w-[480px] text-[15px] leading-[1.5] text-[#5a5a5a]">
                        {step.body}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <Eyebrow>Routes</Eyebrow>
                <div className="mt-7 border-t border-[#e4e3de]">
                  {routes.map((route) => (
                    <div
                      key={route.value}
                      className="border-b border-[#e4e3de] py-8"
                    >
                      <p className="font-mono text-[10px] tracking-[0.16em] text-[#8a8a86] uppercase">
                        {route.label}
                      </p>
                      <a
                        href={route.href}
                        className="mt-5 block text-[20px] leading-[1.2] font-medium tracking-[-0.03em] text-[#121313] underline underline-offset-4 transition-colors hover:text-[#5a5a5a]"
                      >
                        {route.value}
                      </a>
                      <p className="mt-3 max-w-[420px] text-[15px] leading-[1.5] text-[#5a5a5a]">
                        {route.body}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-10">
                  <ButtonLink href="/v2/organizations" variant="dark">
                    Train your team
                  </ButtonLink>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Form */}
        <Section tone="paper">
          <Container>
            <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
              <SectionHeading
                title="Write it out."
                muted="Plain words are fine."
                lead="Say what the problem is and who it slows down. Skip the brief."
              />

              <form className="w-full max-w-[560px]">
                <div className="grid grid-cols-1 gap-6">
                  {fields.map((field) => (
                    <div key={field.id}>
                      <label
                        htmlFor={field.id}
                        className="font-mono text-[10px] tracking-[0.16em] text-[#8a8a86] uppercase"
                      >
                        {field.label}
                      </label>
                      <input
                        id={field.id}
                        name={field.id}
                        type={field.type}
                        autoComplete={field.autoComplete}
                        className="mt-3 w-full border border-[#e4e3de] bg-white px-4 py-3 text-[16px] leading-[1.4] tracking-[-0.02em] text-[#121313] outline-none focus:border-[#121313]"
                      />
                    </div>
                  ))}

                  <div>
                    <label
                      htmlFor="message"
                      className="font-mono text-[10px] tracking-[0.16em] text-[#8a8a86] uppercase"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      className="mt-3 w-full resize-y border border-[#e4e3de] bg-white px-4 py-3 text-[16px] leading-[1.45] tracking-[-0.02em] text-[#121313] outline-none focus:border-[#121313]"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-8 inline-flex items-center justify-center bg-[#ff4100] px-7 py-4 text-[16px] leading-none font-medium whitespace-nowrap text-[#fdfdfd] transition-colors hover:bg-[#121313] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current sm:text-[18px]"
                >
                  Send it
                </button>

                <p className="mt-5 text-[14px] leading-[1.5] text-[#8a8a86]">
                  Prefer your own client? Write to{" "}
                  <a
                    href="mailto:hello@attentionfactory.io"
                    className="text-[#121313] underline underline-offset-4"
                  >
                    hello@attentionfactory.io
                  </a>
                  .
                </p>
              </form>
            </div>
          </Container>
        </Section>

        {/* Closing */}
        <Section tone="dark" size="sm">
          <Container>
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
              <h2 className="text-[clamp(28px,4vw,44px)] leading-[1.08] font-medium tracking-[-0.04em] text-white">
                No demo. No discovery deck.{" "}
                <span className="text-[#6a7282]">Just a real conversation.</span>
              </h2>
              <div className="max-w-[520px]">
                <p className="text-[16px] leading-[1.55] text-white/60">
                  We are two people, so we answer honestly and we answer fast.
                  If you are still reading the site,{" "}
                  <a
                    href="/v2/about"
                    className="text-white underline underline-offset-4"
                  >
                    start with who we are
                  </a>{" "}
                  or go back to{" "}
                  <a
                    href="/v2"
                    className="text-white underline underline-offset-4"
                  >
                    the homepage
                  </a>
                  .
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
