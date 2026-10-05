"use client";

import { motion } from "motion/react";
import posthog from "posthog-js";
import { useEffect, useRef, useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../../components/ui/dialog";
import type { Currency } from "./currency";
import { TrackedEnrollLink } from "./tracked-enroll-link";

const COUPON = "EARLY20";
// once dismissed/shown we don't nag again across visits.
const SEEN_KEY = "af_coupon_seen";
// element that marks the "money" section; once it's seen we start the timer.
const ANCHOR_ID = "enroll";
// how long after they reach the money section before the modal pops.
const POST_MONEY_DELAY_MS = 6000;

export function CouponModal({
  checkoutUrl,
  currency,
}: {
  checkoutUrl: string;
  currency?: Currency;
}) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const firedRef = useRef(false);

  useEffect(() => {
    if (window.localStorage.getItem(SEEN_KEY)) return;

    const trigger = (reason: "post_money_timer" | "exit_intent") => {
      if (firedRef.current) return;
      firedRef.current = true;
      window.localStorage.setItem(SEEN_KEY, "1");
      posthog.capture("coupon_modal_shown", { reason, coupon: COUPON });
      setOpen(true);
    };

    let timer: number | undefined;

    // primary: once the money section scrolls into view, start the countdown.
    const anchor = document.getElementById(ANCHOR_ID);
    const observer = anchor
      ? new IntersectionObserver(
          (entries) => {
            if (entries.some((e) => e.isIntersecting) && timer === undefined) {
              timer = window.setTimeout(
                () => trigger("post_money_timer"),
                POST_MONEY_DELAY_MS,
              );
            }
          },
          { threshold: 0.25 },
        )
      : null;
    if (anchor && observer) observer.observe(anchor);

    // exit intent (desktop): cursor leaves through the top of the viewport,
    // i.e. heading for the tab bar / close button / url bar.
    const onMouseOut = (e: MouseEvent) => {
      if (e.clientY <= 0 && !e.relatedTarget) trigger("exit_intent");
    };
    document.addEventListener("mouseout", onMouseOut);

    return () => {
      observer?.disconnect();
      document.removeEventListener("mouseout", onMouseOut);
      if (timer !== undefined) window.clearTimeout(timer);
    };
  }, []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(COUPON);
      setCopied(true);
      posthog.capture("coupon_copied", { coupon: COUPON });
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      // clipboard blocked — the code is visible anyway.
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="font-mono">
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 320, damping: 26 }}
        >
          <DialogHeader>
            <DialogDescription className="text-[#0099ff]">
              first 20 fellows only
            </DialogDescription>
            <DialogTitle className="text-[22px] font-semibold tracking-[-0.02em] text-neutral-950">
              wait — here&apos;s 30% off
            </DialogTitle>
          </DialogHeader>

          <p className="mt-2 text-[13px] leading-[1.5] text-[#888]">
            we&apos;re handing the first 20 fellows an early-bird code. use it
            at checkout before the seats fill.
          </p>

          <button
            type="button"
            onClick={copy}
            className="my-5 flex w-full cursor-pointer items-center justify-between gap-3 rounded-md border border-dashed border-neutral-300 bg-neutral-50 px-4 py-3 transition hover:border-[#0099ff]"
          >
            <span className="text-[24px] font-black tracking-[-0.03em] text-neutral-950">
              {COUPON}
            </span>
            <span className="text-[11px] uppercase tracking-[0.16em] text-[#0099ff]">
              {copied ? "copied!" : "tap to copy"}
            </span>
          </button>

          <TrackedEnrollLink
            href={checkoutUrl}
            source="coupon_modal"
            currency={currency}
            className="flex h-12 w-full items-center justify-center gap-2 rounded-md bg-[#0099ff] text-[15px] font-medium text-white transition hover:bg-[#0088e6]"
          >
            claim my seat <span aria-hidden>&rarr;</span>
          </TrackedEnrollLink>

          <p className="mt-3 text-[11px] uppercase tracking-[0.16em] text-[#aaa]">
            you&apos;ll only see this once
          </p>

          <DialogClose asChild>
            <button
              type="button"
              className="mt-3 cursor-pointer text-[12px] uppercase tracking-[0.16em] text-[#888] transition hover:text-neutral-950"
            >
              no thanks
            </button>
          </DialogClose>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
}
