import type { Metadata } from "next";

import { SiteFooter } from "@/components/sections/site-footer";
import { SiteHeader } from "@/components/sections/site-header";
import { Container } from "@/components/ui/container";
import { PageHero, Section } from "@/components/ui/page-shell";

export const metadata: Metadata = {
  title: "Terms of Service — Attention Factory",
  description:
    "The terms that apply when you use the Attention Factory website and the materials we publish on it.",
};

/**
 * TEMPLATE — NOT LEGAL ADVICE.
 *
 * This document is a plain-language placeholder pending review by a qualified
 * lawyer. It names no jurisdiction, no governing law and no company
 * registration details on purpose. Do not present it as finished terms, and do
 * not add specific legal commitments here without counsel signing them off.
 */

const LAST_UPDATED = "23 July 2026";

export default function TermsOfServicePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Legal"
          title="Terms of service."
          lead="The terms that apply when you use this website and the materials on it."
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
                  a lawyer and it is not a binding agreement. It must be
                  reviewed and completed by qualified counsel before it is
                  relied on.
                </p>
              </div>

              <p className="mt-10 text-[14px] leading-none text-[#8a8a86]">
                Last updated: {LAST_UPDATED}
              </p>

              <p className="mt-8 text-[16px] leading-[1.55] tracking-[-0.02em] text-[#5a5a5a]">
                These terms cover your use of the Attention Factory website. Paid
                work is covered by a separate written agreement, and that
                agreement takes priority over anything here.
              </p>

              <h2 className="mt-14 text-[clamp(22px,2.5vw,28px)] leading-[1.05] font-medium tracking-[-0.04em] text-[#121313]">
                Using this site
              </h2>
              <p className="mt-4 text-[16px] leading-[1.55] tracking-[-0.02em] text-[#5a5a5a]">
                You may read the site and use the materials we publish for your
                own work. Do not use the site in a way that damages it, blocks
                other people from using it, or breaks the law.
              </p>

              <h2 className="mt-14 text-[clamp(22px,2.5vw,28px)] leading-[1.05] font-medium tracking-[-0.04em] text-[#121313]">
                Our content
              </h2>
              <p className="mt-4 text-[16px] leading-[1.55] tracking-[-0.02em] text-[#5a5a5a]">
                The writing, design, and materials on this site belong to
                Attention Factory unless stated otherwise. Share them with credit
                and a link. Ask us first before republishing them in full or
                selling them.
              </p>

              <h2 className="mt-14 text-[clamp(22px,2.5vw,28px)] leading-[1.05] font-medium tracking-[-0.04em] text-[#121313]">
                What you send us
              </h2>
              <p className="mt-4 text-[16px] leading-[1.55] tracking-[-0.02em] text-[#5a5a5a]">
                If you send us a message, a form submission, or a file, you keep
                what is yours. You give us permission to read it and to use it to
                reply to you.
              </p>

              <h2 className="mt-14 text-[clamp(22px,2.5vw,28px)] leading-[1.05] font-medium tracking-[-0.04em] text-[#121313]">
                No guarantees
              </h2>
              <p className="mt-4 text-[16px] leading-[1.55] tracking-[-0.02em] text-[#5a5a5a]">
                The site and its materials are provided as they are. We write
                from our own experience, and none of it is professional, legal,
                or financial advice for your situation.
              </p>

              <h2 className="mt-14 text-[clamp(22px,2.5vw,28px)] leading-[1.05] font-medium tracking-[-0.04em] text-[#121313]">
                Links to other sites
              </h2>
              <p className="mt-4 text-[16px] leading-[1.55] tracking-[-0.02em] text-[#5a5a5a]">
                We sometimes link out to other sites. We do not control them and
                we are not responsible for what is on them.
              </p>

              <h2 className="mt-14 text-[clamp(22px,2.5vw,28px)] leading-[1.05] font-medium tracking-[-0.04em] text-[#121313]">
                Changes to these terms
              </h2>
              <p className="mt-4 text-[16px] leading-[1.55] tracking-[-0.02em] text-[#5a5a5a]">
                We may update these terms. When we do, we will change the date at
                the top of this page. Continuing to use the site means the
                current version applies.
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
