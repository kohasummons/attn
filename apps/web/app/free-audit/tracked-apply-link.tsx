"use client";

import posthog from "posthog-js";
import type { ReactNode } from "react";

export function TrackedApplyLink({
  href,
  className,
  children,
}: {
  href: string;
  className: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={() => {
        posthog.capture("free_audit_apply_clicked");
      }}
    >
      {children}
    </a>
  );
}
