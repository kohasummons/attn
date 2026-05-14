"use client";

import { useState } from "react";

import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

const items = [
  {
    q: "What makes Attention Factory different from other AI programs?",
    a: "Other programs teach concepts. Attention Factory turns AI investment into measurable workforce transformation — coaching, courses, and accountability under your supervision.",
  },
  {
    q: "What about data security and privacy?",
    a: "Your data stays yours. We never train on member work, and every workspace runs with role-based access and audit trails.",
  },
  {
    q: "Where does the agent run? Do we need custom integrations?",
    a: "Agents run inside your existing stack — Slack, Notion, Drive, Linear — with one-click connectors. No custom integrations required to start.",
  },
  {
    q: "Will agents replace my lawyers?",
    a: "No. Agents handle the repeatable work so your experts focus on judgment calls. You stay in the loop on every exception.",
  },
  {
    q: "Can we trust the output from a legal agent?",
    a: "Every output is cited, reviewable, and version-controlled. Your team approves before anything ships — agents propose, humans decide.",
  },
];

export function FAQChat() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = items[activeIndex] ?? items[0]!;

  return (
    <section className="bg-white py-32">
      <Container>
        <div className="mx-auto flex max-w-[720px] flex-col items-center text-center">
          <h2 className="text-[clamp(32px,4vw,44px)] font-medium leading-[1.05] tracking-[-0.04em] text-black">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-[16px] leading-[1.4] tracking-[-0.02em] text-black/60">
            Everything members ask us before joining. Tap a question to see the answer.
          </p>
        </div>

        <div className="mx-auto mt-16 flex max-w-[910px] flex-col gap-4">
          <ChatBubble side="left" tone="active">
            {active.q}
          </ChatBubble>

          <div className="relative flex justify-end">
            <ChatBubble side="right" tone="answer">
              {active.a}
            </ChatBubble>
            <span
              aria-hidden
              className="absolute -right-1 bottom-0 size-[20px] bg-[#8f87ff]"
            />
          </div>

          <ul className="mt-4 flex flex-col gap-4">
            {items.map((item, i) =>
              i === activeIndex ? null : (
                <li key={item.q} className="flex justify-start">
                  <button
                    type="button"
                    onClick={() => setActiveIndex(i)}
                    className="bg-[#f1f1f1] px-6 py-[18px] text-left text-[clamp(16px,2vw,20px)] leading-[1.2] tracking-[-0.03em] text-black transition-colors hover:bg-[#e7e7e7] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8f87ff]"
                  >
                    {item.q}
                  </button>
                </li>
              ),
            )}
          </ul>
        </div>
      </Container>
    </section>
  );
}

function ChatBubble({
  side,
  tone,
  children,
}: {
  side: "left" | "right";
  tone: "active" | "answer";
  children: React.ReactNode;
}) {
  return (
    <div className={cn("flex", side === "right" ? "justify-end" : "justify-start")}>
      <div
        className={cn(
          "max-w-[625px] bg-[#f1f1f1] px-6 py-[18px] text-[clamp(16px,2vw,20px)] leading-[1.35] tracking-[-0.03em]",
          tone === "answer" ? "text-[#5a5a5a]" : "text-black",
        )}
      >
        {children}
      </div>
    </div>
  );
}
