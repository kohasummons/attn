"use client";

import Link from "next/link";
import { useCallback, useState } from "react";

import { Container } from "@/components/ui/container";
import type { GuideEntry } from "../guides-data";

const dateFmt = new Intl.DateTimeFormat("en-US", {
  month: "long",
  year: "numeric",
});

function formatDate(iso: string) {
  const d = new Date(iso);
  return Number.isNaN(d.getTime()) ? "" : dateFmt.format(d);
}

export function SectionsView({ entry }: { entry: GuideEntry }) {
  const [copied, setCopied] = useState<number | null>(null);

  const copy = useCallback(async (text: string, i: number) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(i);
      setTimeout(() => setCopied((c) => (c === i ? null : c)), 1800);
    } catch {
      /* clipboard unavailable */
    }
  }, []);

  return (
    <>
      {/* Dark hero, consistent with the rest of v2. */}
      <section className="bg-[#121313] pb-14 pt-12 text-white md:pb-20 md:pt-16">
        <Container>
          <Link
            href="/v2/playbooks"
            className="text-[13px] tracking-[-0.01em] text-white/55 transition-colors hover:text-white"
          >
            ← All guides
          </Link>
          <p className="mt-8 font-mono text-[12px] tracking-[0.14em] text-[#ff4100] uppercase">
            {entry.category}
            {entry.publishedAt ? (
              <span className="ml-3 text-white/40">
                {formatDate(entry.publishedAt)}
              </span>
            ) : null}
          </p>
          <h1 className="mt-4 max-w-[820px] text-[clamp(30px,5vw,52px)] leading-[1.05] font-medium tracking-[-0.04em]">
            {entry.title}
          </h1>
          <p className="mt-6 max-w-[620px] text-[16px] leading-[1.6] tracking-[-0.01em] text-white/70 md:text-[18px]">
            {entry.excerpt}
          </p>
        </Container>
      </section>

      {/* Body. */}
      <section className="bg-white py-16 md:py-24">
        <Container>
          <div className="mx-auto flex max-w-[760px] flex-col gap-12">
            {entry.sections.map((section, i) => (
              <article key={section.heading}>
                <h2 className="text-[clamp(20px,2.4vw,28px)] leading-[1.15] font-medium tracking-[-0.03em] text-[#121313]">
                  {section.heading}
                </h2>
                {section.body ? (
                  <p className="mt-4 text-[16px] leading-[1.7] tracking-[-0.01em] whitespace-pre-wrap text-[#3f3f3f] md:text-[17px]">
                    {section.body}
                  </p>
                ) : null}
                {section.prompt ? (
                  <div className="mt-5 border border-[#e4e3de] bg-[#faf9f6]">
                    <div className="flex items-center justify-between border-b border-[#e4e3de] px-4 py-2.5">
                      <span className="font-mono text-[11px] tracking-[0.14em] text-[#8a8a86] uppercase">
                        Copy prompt
                      </span>
                      <button
                        type="button"
                        onClick={() => copy(section.prompt!, i)}
                        className="border border-[#d5d4cf] bg-white px-3 py-1 text-[12px] tracking-[-0.01em] text-[#121313] transition-colors hover:bg-[#f1f0ec]"
                      >
                        {copied === i ? "Copied" : "Copy"}
                      </button>
                    </div>
                    <pre className="overflow-x-auto px-4 py-4 font-mono text-[13px] leading-[1.6] whitespace-pre-wrap text-[#1a1a1a]">
                      {section.prompt}
                    </pre>
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
