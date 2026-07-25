import type { Metadata } from "next";

import { SiteFooter } from "@/components/sections/site-footer";
import { SiteHeader } from "@/components/sections/site-header";
import { Container } from "@/components/ui/container";
import { PageHero, Section } from "@/components/ui/page-shell";

export const metadata: Metadata = {
  title: "Privacy Policy — Attention Factory",
  description:
    "How Attention Factory collects, uses and stores the information you give us, and how to get in touch about it.",
};

/**
 * TEMPLATE — NOT LEGAL ADVICE.
 *
 * This document is a plain-language placeholder pending review by a qualified
 * lawyer. It deliberately makes no jurisdiction-specific claims and asserts no
 * regulatory compliance. Do not present it as a finished privacy policy, and do
 * not add specific legal commitments here without counsel signing them off.
 */

const LAST_UPDATED = "23 July 2026";

export default function PrivacyPolicyPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Legal"
          title="Privacy policy."
          lead="What we collect, why we collect it, and how to reach us about it."
        />

        <Section tone="light">
          <Container>
            <div className="max-w-[720px]">
              <div className="border border-[#e4e3de] border-l-2 border-l-[#ff4100] p-6">
                <p className="font-mono text-[10px] tracking-[0.16em] text-[#8a8a86] uppercase">
                  Template — pending legal review
                </p>
                <p className="mt-4 text-[15px] leading-[1.5] tracking-[-0.02em] text-[#5a5a5a]">
                  This document is a draft template. It has not been reviewed by
                  a lawyer and it is not a binding statement of our practices.
                  It must be reviewed and completed by qualified counsel before
                  it is relied on.
                </p>
              </div>

              <p className="mt-10 text-[14px] leading-none text-[#8a8a86]">
                Last updated: {LAST_UPDATED}
              </p>

              <p className="mt-8 text-[16px] leading-[1.55] tracking-[-0.02em] text-[#5a5a5a]">
                This policy describes how Attention Factory handles information
                connected with our website and our work with you. If anything
                here is unclear, write to us and ask.
              </p>

              <h2 className="mt-14 text-[clamp(22px,2.5vw,28px)] leading-[1.05] font-medium tracking-[-0.04em] text-[#121313]">
                What we collect
              </h2>
              <p className="mt-4 text-[16px] leading-[1.55] tracking-[-0.02em] text-[#5a5a5a]">
                We collect information you give us directly. That includes your
                name, email address, company, and anything you write in a
                contact or sign-up form.
              </p>
              <p className="mt-4 text-[16px] leading-[1.55] tracking-[-0.02em] text-[#5a5a5a]">
                We also collect basic technical information when you visit the
                site, such as pages viewed and the general type of device and
                browser used.
              </p>

              <h2 className="mt-14 text-[clamp(22px,2.5vw,28px)] leading-[1.05] font-medium tracking-[-0.04em] text-[#121313]">
                How we use it
              </h2>
              <p className="mt-4 text-[16px] leading-[1.55] tracking-[-0.02em] text-[#5a5a5a]">
                We use the information to reply to you, to deliver the work or
                materials you asked for, and to understand which parts of the
                site people actually read.
              </p>
              <p className="mt-4 text-[16px] leading-[1.55] tracking-[-0.02em] text-[#5a5a5a]">
                If you sign up to hear from us, we use your email address to
                send you those updates. Every one of those emails includes a way
                to stop receiving them.
              </p>

              <h2 className="mt-14 text-[clamp(22px,2.5vw,28px)] leading-[1.05] font-medium tracking-[-0.04em] text-[#121313]">
                Who else sees it
              </h2>
              <p className="mt-4 text-[16px] leading-[1.55] tracking-[-0.02em] text-[#5a5a5a]">
                We use third-party providers to run the site, send email, and
                measure site usage. Those providers process information on our
                behalf. We do not sell your information.
              </p>

              <h2 className="mt-14 text-[clamp(22px,2.5vw,28px)] leading-[1.05] font-medium tracking-[-0.04em] text-[#121313]">
                How long we keep it
              </h2>
              <p className="mt-4 text-[16px] leading-[1.55] tracking-[-0.02em] text-[#5a5a5a]">
                We keep information for as long as we need it for the purpose it
                was given, and then we delete it.
              </p>

              <h2 className="mt-14 text-[clamp(22px,2.5vw,28px)] leading-[1.05] font-medium tracking-[-0.04em] text-[#121313]">
                Your choices
              </h2>
              <p className="mt-4 text-[16px] leading-[1.55] tracking-[-0.02em] text-[#5a5a5a]">
                You can ask us what information we hold about you, ask us to
                correct it, or ask us to delete it. Email us and we will respond.
              </p>

              <h2 className="mt-14 text-[clamp(22px,2.5vw,28px)] leading-[1.05] font-medium tracking-[-0.04em] text-[#121313]">
                Changes to this policy
              </h2>
              <p className="mt-4 text-[16px] leading-[1.55] tracking-[-0.02em] text-[#5a5a5a]">
                If we change this policy, we will update the date at the top of
                this page.
              </p>

              <h2 className="mt-14 text-[clamp(22px,2.5vw,28px)] leading-[1.05] font-medium tracking-[-0.04em] text-[#121313]">
                Contact us
              </h2>
              <p className="mt-4 text-[16px] leading-[1.55] tracking-[-0.02em] text-[#5a5a5a]">
                Attention Factory —{" "}
                <a
                  href="mailto:hello@attentionfactory.io"
                  className="border-b border-[#121313] pb-0.5 text-[#121313] transition-colors hover:border-[#8a8a86] hover:text-[#8a8a86]"
                >
                  hello@attentionfactory.io
                </a>
              </p>
            </div>
          </Container>
        </Section>
      </main>
      <SiteFooter />
    </>
  );
}
