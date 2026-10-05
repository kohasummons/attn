import Link from "next/link";

import { SiteFooter } from "@/components/sections/site-footer";
import { SiteHeader } from "@/components/sections/site-header";
import { Container } from "@/components/ui/container";
import { PageHero, Section } from "@/components/ui/page-shell";

export type LegalBlock =
  | { type: "p"; text: string }
  | { type: "sub"; text: string }
  | { type: "list"; items: string[]; ordered?: boolean }
  | { type: "link"; text: string; linkLabel: string; href: string }
  | { type: "contact"; email: string };

export type LegalSection = {
  heading: string;
  blocks: LegalBlock[];
};

export type LegalDoc = {
  eyebrow: string;
  title: string;
  lead: string;
  lastUpdated: string;
  intro: LegalBlock[];
  sections: LegalSection[];
};

const paragraph =
  "mt-4 text-[16px] leading-[1.55] tracking-[-0.02em] text-[#5a5a5a]";
const listItem =
  "text-[16px] leading-[1.55] tracking-[-0.02em] text-[#5a5a5a]";

function Block({ block }: { block: LegalBlock }) {
  switch (block.type) {
    case "p":
      return <p className={paragraph}>{block.text}</p>;
    case "sub":
      return (
        <h3 className="mt-10 text-[17px] leading-[1.3] font-medium tracking-[-0.03em] text-[#121313]">
          {block.text}
        </h3>
      );
    case "list": {
      const cls =
        "mt-4 space-y-2 pl-6 marker:text-[#8a8a86] " +
        (block.ordered ? "list-[lower-alpha]" : "list-disc");
      return (
        <ul className={cls}>
          {block.items.map((item, i) => (
            <li key={i} className={listItem}>
              {item}
            </li>
          ))}
        </ul>
      );
    }
    case "link":
      return (
        <p className={paragraph}>
          {block.text}{" "}
          <Link
            href={block.href}
            className="border-b border-[#121313] pb-0.5 text-[#121313] transition-colors hover:border-[#8a8a86] hover:text-[#8a8a86]"
          >
            {block.linkLabel}
          </Link>
          .
        </p>
      );
    case "contact":
      return (
        <p className={paragraph}>
          Attention Factory —{" "}
          <a
            href={`mailto:${block.email}`}
            className="border-b border-[#121313] pb-0.5 text-[#121313] transition-colors hover:border-[#8a8a86] hover:text-[#8a8a86]"
          >
            {block.email}
          </a>
        </p>
      );
  }
}

export function LegalDocument({ doc }: { doc: LegalDoc }) {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero eyebrow={doc.eyebrow} title={doc.title} lead={doc.lead} />

        <Section tone="light">
          <Container>
            <div className="max-w-[720px]">
              <p className="text-[14px] leading-none text-[#8a8a86]">
                Last updated: {doc.lastUpdated}
              </p>

              {doc.intro.map((block, i) => (
                <Block key={i} block={block} />
              ))}

              {doc.sections.map((section, i) => (
                <section key={i}>
                  <h2 className="mt-14 text-[clamp(22px,2.5vw,28px)] leading-[1.05] font-medium tracking-[-0.04em] text-[#121313]">
                    {i + 1}. {section.heading}
                  </h2>
                  {section.blocks.map((block, j) => (
                    <Block key={j} block={block} />
                  ))}
                </section>
              ))}
            </div>
          </Container>
        </Section>
      </main>
      <SiteFooter />
    </>
  );
}
