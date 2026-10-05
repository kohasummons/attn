"use client";

import posthog from "posthog-js";
import type { ReactNode } from "react";
import type { Currency } from "./currency";

// wraps the enroll anchors with a posthog.capture so we can tell *which* CTA
// drove the click (hero, framing block, pricing card, final cta, etc.) plus
// the plan and currency in effect at click time.
export function TrackedEnrollLink({
  href,
  className,
  source,
  plan,
  currency,
  children,
}: {
  href: string;
  className: string;
  source: string;
  plan?: "full" | "spark";
  currency?: Currency;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={() => {
        posthog.capture("enroll_clicked", { source, plan, currency });
      }}
    >
      {children}
    </a>
  );
}
