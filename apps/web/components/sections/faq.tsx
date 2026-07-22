"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Container } from "@/components/ui/container";

const items = [
  {
    q: "What is Attention Factory?",
    a: "Attention Factory is your partner helping you and your business find the relevant oppourtuniteis in AI that multiplies your results. We get this done with measurable transformation and ROI.",
  },
  {
    q: "What services do you offer?",
    a: "Everything from building your own AI Systems and Apps, helping your team transition into an AI-first culture, following our own curisity researching and contributing to the AI common wealth, to builidng your ideas from zero to one in our lab"
  },
  {
    q: "Do you have on-demand guides?",
    a: "Yes, we do. We've created & curated courses for self-paced learning.",
  },
  {
    q: "Who does Attention Factory work with?",
    a: "We work with leaders, builders, and creators who are looking to turn AI into a Multiplier advantage. Businesses of all sizes and industries, from startups to enterprise companies and public-sector institutions. We embedded in various ways ranging from leadership advisory to workforce training."
  }
];

export function FAQ() {
  return (
    <section className="bg-white py-20 md:py-62">
      <Container>
        <div className="mx-auto max-w-[720px]">
          <h2 className="text-left md:text-center text-[clamp(32px,4vw,44px)] font-medium leading-[1.05] tracking-[-0.04em] text-black">
            Frequently Asked Questions
          </h2>

          <Accordion className="mt-16 w-full">
            {items.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-b border-black/10">
                <AccordionTrigger className="py-5 text-left text-[clamp(20px,2.5vw,30px)] font-normal leading-[1.2] text-black hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-base text-black/70">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </section>
  );
}
