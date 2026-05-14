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
    a: "Attention Factory is your AI partner — we help leaders, builders, and creators turn AI investment into measurable workforce transformation and ROI.",
  },
  {
    q: "Are the courses on demand?",
    a: "Yes. All courses are self-paced and on demand, with live coaching sessions available for members.",
  },
  {
    q: "Where do I sign up?",
    a: "Join the community via the button at the top of any page. We'll get you set up within 24 hours.",
  },
  {
    q: "Are you ready for rolling rates?",
    a: "Our rolling-rate program adapts to your team's progress and locks in early pricing for the first cohort.",
  },
];

export function FAQ() {
  return (
    <section className="bg-white py-32">
      <Container>
        <div className="mx-auto max-w-[720px]">
          <h2 className="text-center text-[clamp(32px,4vw,44px)] font-medium leading-[1.05] tracking-[-0.04em] text-black">
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
