"use client";

import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "./content";
import { asset, Eyebrow, PageContainer } from "./primitives";

export function FrequentlyAskedQuestions() {
  return (
    <section className="af-faq af-section" aria-labelledby="faq-title">
      <PageContainer className="af-split">
        <div className="af-faq-intro">
          <Eyebrow>FAQs</Eyebrow>
          <h2 id="faq-title">All your questions and more, answered</h2>
          <Image src={asset("6f993.svg")} alt="" width={400} height={240} />
        </div>
        <Accordion className="af-accordion" defaultValue={[faqs[0]!.question]}>
          {faqs.map(({ question, answer }) => (
            <AccordionItem key={question} value={question}>
              <AccordionTrigger>
                <span className="af-desktop-copy">{question}</span>
                <span className="af-mobile-copy">
                  {question === faqs[0]!.question
                    ? "What services do you offfer"
                    : question}
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
