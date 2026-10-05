"use client";

import Image from "next/image";
import { useState, useSyncExternalStore } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { siteFaqs } from "@/lib/site-faqs";
import { asset, Eyebrow, PageContainer } from "./primitives";

const mobileQuery = "(max-width: 600px)";
function subscribeToViewport(callback: () => void) {
  const query = window.matchMedia(mobileQuery);
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}

export function FrequentlyAskedQuestions() {
  const mobile = useSyncExternalStore(
    subscribeToViewport,
    () => window.matchMedia(mobileQuery).matches,
    () => false,
  );
  const [expanded, setExpanded] = useState<string[] | null>(null);
  return (
    <section className="af-faq af-section" aria-labelledby="faq-title">
      <PageContainer className="af-split">
        <div className="af-faq-intro">
          <Eyebrow>FAQs</Eyebrow>
          <h2 id="faq-title">All your questions and more, answered</h2>
          <Image
            src={asset("faq-desktop-art.svg")}
            alt=""
            width={402}
            height={324}
          />
        </div>
        <Accordion
          className="af-accordion"
          value={expanded ?? (mobile ? [siteFaqs[0]!.question] : [])}
          onValueChange={setExpanded}
        >
          {siteFaqs.map(({ question, answer }) => (
            <AccordionItem key={question} value={question}>
              <AccordionTrigger>
                <span className="af-desktop-copy">
                  {question}
                </span>
                <span className="af-mobile-copy">
                  {question}
                </span>
                <span className="af-faq-plus" aria-hidden="true" />
              </AccordionTrigger>
              <AccordionContent>
                <p>{answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </PageContainer>
    </section>
  );
}
