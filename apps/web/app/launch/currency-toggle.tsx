"use client";

import posthog from "posthog-js";
import { useTransition } from "react";
import type { Currency } from "./currency";

export function CurrencyToggle({
  currency,
  setCurrency,
}: {
  currency: Currency;
  setCurrency: (c: Currency) => Promise<void>;
}) {
  const [pending, startTransition] = useTransition();

  const choose = (next: Currency) => {
    if (next === currency || pending) return;
    posthog.capture("currency_toggled", { from: currency, to: next });
    startTransition(async () => {
      await setCurrency(next);
    });
  };

  return (
    <div
      role="group"
      aria-label="Currency"
      className="inline-flex items-center gap-1 rounded-full border border-neutral-200 bg-white p-1"
    >
      <button
        type="button"
        onClick={() => choose("NGN")}
        aria-pressed={currency === "NGN"}
        disabled={pending}
        className={`rounded-full px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] transition disabled:cursor-not-allowed ${
          currency === "NGN"
            ? "bg-neutral-950 text-white"
            : "text-[#888] hover:text-neutral-950"
        }`}
      >
        ₦ NGN
      </button>
      <button
        type="button"
        onClick={() => choose("USD")}
        aria-pressed={currency === "USD"}
        disabled={pending}
        className={`rounded-full px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] transition disabled:cursor-not-allowed ${
          currency === "USD"
            ? "bg-neutral-950 text-white"
            : "text-[#888] hover:text-neutral-950"
        }`}
      >
        $ USD
      </button>
    </div>
  );
}
