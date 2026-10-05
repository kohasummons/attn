"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

const CTA_URL = "https://dub.sh/attn-superad-optin";

type Tier = "vip" | "diamond";

const tiers: Record<Tier, { price: string; label: string }> = {
  vip: { price: "$49.99", label: "VIP" },
  diamond: { price: "$99.99", label: "Diamond" },
};

// One combined list. The base (Silver/Gold) perks are always unlocked; the
// Diamond perks are locked on the VIP tab and unlock when you switch to
// Diamond, so Diamond shows the whole list open. Descriptions are placeholder.
// `hideOnDiamond` drops a base card once its Diamond upgrade takes over.
type Perk = {
  title: string;
  desc: string;
  diamond?: boolean;
  hideOnDiamond?: boolean;
};

const perks: Perk[] = [
  {
    title: "Everything in General Access",
    desc: "All the General Access essentials — the 3-day live sessions, the prompt playbook, skills and templates, and the graduation ceremony.",
  },
  {
    title: "Free TranscriptX credits + SuperRad Agent ",
    desc: "Free TranscriptX credits so you can transcribe and repurpose everything you make from day one. Plus, a free SuperRad Agent to help you with your work.",
    diamond: true,
  },
  {
    title: "Six months of replay access",
    desc: "Rewatch every session for six months so you can revisit any lesson whenever you need it.",
    hideOnDiamond: true,
  },
  {
    title: "Private Q&A WhatsApp group",
    desc: "A private group where you can ask questions and get answers between and after the live sessions up to a month after the challenge ends.",
  },
  {
    title: "Instructor review of your team film",
    desc: "Your team's final film gets a direct review from an instructor, with actionable notes.",
    hideOnDiamond: true,
  },
  {
    title: "Twelve months (12) of replay access",
    desc: "A full year of replay access to every session — revisit the material for as long as you need.",
    diamond: true,
  },
  {
    title: "60-minute (60) post-challenge group review",
    desc: "A dedicated hour after the challenge to review the work as a group and sharpen your next steps.",
    diamond: true,
  },
  {
    title: "Personal review and final feedback",
    desc: "A personal review of your work with final feedback tailored to you, not just your team.",
    diamond: true,
  },
];

// One card for both states. When `unlocked` flips, the header colour, the
// icon, the body blur and the lock overlay all crossfade in place (300ms) —
// the card "becomes active" instead of snapping.
function FeatureCard({
  title,
  desc,
  unlocked,
  gated = false,
  onUnlock,
}: {
  title: string;
  desc: string;
  unlocked: boolean;
  gated?: boolean;
  onUnlock?: () => void;
}) {
  // Only unlocked cards react to hover — locked cards stay static (no grow, no pink).
  const interactive = unlocked;
  return (
    <div
      className={`group flex w-full scale-95 flex-col overflow-hidden ${
        interactive
          ? "cursor-pointer transition-transform duration-300 will-change-transform hover:scale-100"
          : ""
      }`}
    >
      {/* Header — muted grey by default; on unlocked cards the pink #f10c5c layer
          fades in on hover. (Solid grey, since the card's scale transform isolates
          mix-blend-luminosity, which would otherwise render full purple.) */}
      <div className="relative flex h-[50px] items-center gap-[16px] overflow-hidden rounded-t-[16px] pl-[26px] pr-[16px]">
        <div className="absolute inset-0 bg-[#5b5252]" />
        <div
          className={`absolute inset-0 bg-[#f10c5c] opacity-0 transition-opacity duration-300 ${
            interactive ? "sr-card-stripes group-hover:opacity-100" : ""
          }`}
        />
        <p className="sr-ppneue relative z-10 flex-1 font-bold leading-[1.0006] tracking-[-0.16px] text-white text-[16px]">
          {title}
        </p>
        <div className="relative z-10 size-[24px] shrink-0">
          <img
            src="/superrad/upgrade/slash.svg"
            alt=""
            aria-hidden
            className="absolute inset-0 h-[24px] w-[23px] transition-opacity duration-300"
            style={{ opacity: unlocked ? 0 : 1 }}
          />
          <img
            src="/superrad/upgrade/check.svg"
            alt=""
            aria-hidden
            className="absolute inset-0 size-[24px] transition-opacity duration-300"
            style={{ opacity: unlocked ? 1 : 0 }}
          />
        </div>
      </div>

      {/* Body — blur clears and the lock overlay fades out on unlock. */}
      <div className="relative flex w-full flex-col rounded-b-[16px] bg-white pl-[24px] pr-[16px] py-[16px]">
        <p
          className="sr-ppneue font-medium leading-[1.0006] tracking-[-0.16px] text-black text-[20px] transition-[filter] duration-300"
          style={{ filter: unlocked ? "blur(0px)" : "blur(4.95px)" }}
        >
          {desc}
        </p>
        {gated && (
          <button
            type="button"
            onClick={onUnlock}
            aria-hidden={unlocked}
            tabIndex={unlocked ? -1 : 0}
            style={{
              opacity: unlocked ? 0 : 1,
              pointerEvents: unlocked ? "none" : "auto",
            }}
            className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-[7px] bg-black px-[16px] py-[10px] transition-opacity duration-300"
          >
            <span className="sr-ppneue whitespace-nowrap font-medium leading-[1.0006] tracking-[-0.2px] text-white text-[20px]">
              Switch to Diamond to Access 💎
            </span>
          </button>
        )}
      </div>
    </div>
  );
}

function Tab({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  const reduce = useReducedMotion();
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      onClick={onClick}
      className="relative flex flex-1 cursor-pointer items-center justify-center rounded-[10px] p-[10px]"
    >
      {active && (
        <motion.div
          layoutId="tab-pill"
          transition={
            reduce
              ? { duration: 0 }
              : { type: "spring", stiffness: 500, damping: 40 }
          }
          className="absolute inset-0 rounded-[10px] bg-[#221919]"
        />
      )}
      <span className="relative z-10 flex items-center justify-center">
        {children}
      </span>
    </button>
  );
}

export function Vip() {
  const [tier, setTier] = useState<Tier>("vip");
  const reduce = useReducedMotion();
  const meta = tiers[tier];

  return (
    <section className="w-full bg-[#221919] px-6 pt-[83px] pb-[120px]">
      {/* Tab toggle */}
      <div
        role="tablist"
        aria-label="Choose your tier"
        className="mx-auto flex w-full max-w-[568px] items-center gap-[29px] rounded-[16px] bg-[#2f2323] p-[10px]"
      >
        <Tab active={tier === "vip"} onClick={() => setTier("vip")}>
          <span
            className={`sr-sansplomb whitespace-nowrap font-bold leading-none text-[50px] ${
              tier === "vip" ? "text-white" : "text-[#6e6e6e] mix-blend-luminosity"
            }`}
          >
            VIP 🥇
          </span>
        </Tab>
        <Tab active={tier === "diamond"} onClick={() => setTier("diamond")}>
          <span
            className={`sr-sansplomb whitespace-nowrap font-bold leading-none ${
              tier === "diamond"
                ? "text-white"
                : "text-[#6e6e6e] mix-blend-luminosity"
            }`}
          >
            <span className="text-[50px]">Diamond </span>
            <span className="text-[40px]">💎</span>
          </span>
        </Tab>
      </div>

      {/* Panel — only the changing pieces (price, label, gated card, CTA ref)
          update in place when the tier switches; the layout stays put. */}
      <div
        role="tabpanel"
        className="mx-auto mt-[52px] flex w-full max-w-[448px] flex-col gap-[21px]"
      >
        <div className="flex flex-col gap-[6px]">
          <div className="flex w-full items-center justify-center pb-[12px]">
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.p
                key={meta.price}
                initial={reduce ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? { opacity: 0 } : { opacity: 0, y: -10 }}
                transition={{ duration: 0.22 }}
                className="sr-sansplomb whitespace-nowrap font-bold leading-none text-white text-[70px]"
              >
                {meta.price}
              </motion.p>
            </AnimatePresence>
          </div>
          <p className="sr-ppneue text-center font-medium leading-normal text-[#ababab] text-[14px]">
            Here’s everything you get when you upgrade to {meta.label}.
          </p>
        </div>

        <div className="flex flex-col gap-[29px]">
          <div className="flex flex-col gap-[16px]">
            {/* popLayout: hidden cards fade/scale out while the rest slide up to
                fill the gap (and slide back in when they reappear on VIP). */}
            <AnimatePresence initial={false} mode="popLayout">
              {perks
                .filter((perk) => !(perk.hideOnDiamond && tier === "diamond"))
                .map((perk) => (
                  <motion.div
                    key={perk.title}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={
                      reduce
                        ? { duration: 0 }
                        : { duration: 0.35, ease: [0.22, 1, 0.36, 1] }
                    }
                    className="w-full"
                  >
                    <FeatureCard
                      title={perk.title}
                      desc={perk.desc}
                      gated={perk.diamond}
                      unlocked={perk.diamond ? tier === "diamond" : true}
                      onUnlock={perk.diamond ? () => setTier("diamond") : undefined}
                    />
                  </motion.div>
                ))}
            </AnimatePresence>
          </div>

          <a
            href={`${CTA_URL}?ref=${tier}`}
            data-posthog-event="upgrade_cta_clicked"
            data-posthog-property="tier"
            data-posthog-value={tier}
            className="sr-inter font-bold sr-stripes-hover flex h-[67px] w-full cursor-pointer items-center justify-center rounded-[8px] bg-[#899412] leading-[19.2px] tracking-[-0.32px] text-white text-[24px]"
          >
            <span className="relative z-10">Claim the {meta.label} Access</span>
          </a>
        </div>
      </div>
    </section>
  );
}
