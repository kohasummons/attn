import { cookies, headers } from "next/headers";

export type Currency = "NGN" | "USD";

export const CURRENCY_COOKIE = "af_currency";

const COUNTRY_TO_CURRENCY: Record<string, Currency> = {
  NG: "NGN",
};

// Cookie override wins; otherwise fall back to Vercel's geo header. Defaults to
// USD when the header is missing (preview/dev) or the country isn't mapped.
// Also returns whether the visitor is Nigerian so we can hide the toggle for
// everyone else — non-NG visitors only see USD and can't switch.
export async function getCurrencyContext(): Promise<{
  currency: Currency;
  isNigerianVisitor: boolean;
}> {
  const cookieStore = await cookies();
  const override = cookieStore.get(CURRENCY_COOKIE)?.value;

  const h = await headers();
  const country = h.get("x-vercel-ip-country") ?? "";
  const isNigerianVisitor = country === "NG";

  const currency: Currency =
    override === "NGN" || override === "USD"
      ? override
      : (COUNTRY_TO_CURRENCY[country] ?? "USD");

  return { currency, isNigerianVisitor };
}

// adjust USD numbers when nestuge confirms the final rate; spark-plan total is
// installment × 2 by design (mirrors the naira spread).
export const PRICING: Record<
  Currency,
  {
    full: string;
    fullNote: string;
    installment: string;
    installmentTotal: string;
    installmentCTA: string;
  }
> = {
  NGN: {
    full: "₦150,000",
    fullNote: "one payment, done.",
    installment: "₦80,000",
    installmentTotal: "₦160,000",
    installmentCTA: "start with ₦80,000",
  },
  USD: {
    full: "$149",
    fullNote: "one payment.",
    installment: "$75",
    installmentTotal: "$150",
    installmentCTA: "start with $75",
  },
};
