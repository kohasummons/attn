"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/page-shell";
import { siteFaqs } from "@/lib/site-faqs";


export function FAQ() {
  return (
    <section className="bg-white py-24 md:py-36">
      <Container>
        <div className="mx-auto max-w-[720px]">
          <SectionHeading
            title="Frequently asked questions."
            className="md:text-center"
          />

          <Accordion className="mt-12 w-full">
            {siteFaqs.map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border-b border-black/10"
              >
                {/* Lead tier, not H3 — at 30px the questions competed with the
                    section heading and the whole block read as one size. */}
                <AccordionTrigger className="items-center py-5 text-left text-[clamp(15px,1.8vw,19px)] leading-[1.4] font-medium tracking-[-0.02em] text-[#121313] hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-[16px] leading-[1.55] tracking-[-0.02em] text-[#5a5a5a]">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </section>
  );
}
