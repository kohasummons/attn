const rows: [string, string][] = [
  ["Everything in General Access[Sliver]", "Everything in Gold"],
  ["Six (6) months of replay access", "Twelve (12) months of replay access"],
  ["Private Q&A WhatsApp group", "60-minute post-challenge group review"],
  ["One instructor review of your AI film", "Personal review and final feedback"],
  ["Limited Access to SuperRad Film Agent", "Three (3) Months of TranscriptX + SuperRad Film Agent"],
];

const cellText =
  "sr-dmsans whitespace-wrap font-semibold leading-[16.2px] tracking-[-0.2px] text-[#eaeaea] text-[16px]";

function Row({
  left,
  right,
  last,
}: {
  left: string;
  right: string;
  last?: boolean;
}) {
  return (
    <div
      className={`flex w-full ${last ? "" : "border-b-[0.675px] border-[#373432]"}`}
    >
      <div className="flex flex-1 items-center gap-[10.8px] border-r-[0.675px] border-[#373432] pl-[32px] pr-[33px] py-[13.5px]">
        <img
          src="/superrad/upgrade/check.svg"
          alt=""
          aria-hidden
          className="h-[24px] w-[25px] shrink-0"
        />
        <span className={cellText}>{left}</span>
      </div>
      <div className="flex flex-1 items-center gap-[10.8px] px-[32px] py-[13.5px]">
        <img
          src="/superrad/upgrade/check.svg"
          alt=""
          aria-hidden
          className="h-[24px] w-[25px] shrink-0"
        />
        <span className={cellText}>{right}</span>
      </div>
    </div>
  );
}

export function UpgradeTable() {
  return (
    <section className="w-full bg-[#221919] px-6 pt-[80px] pb-[120px]">
      <div className="mx-auto flex max-w-[964px] flex-col items-center gap-[50px]">
        <div className="flex max-w-[361px] flex-col items-center gap-[15px] text-center text-white">
          <h2 className="sr-greed font-medium leading-none text-[50px]">
            Upgrade your Access
          </h2>
          <p className="sr-dmsans font-medium leading-normal text-[16px] text-[#aeaea6]">
            Here’s the kind of clarity you’ll achieve in the SuperRad AI Film Challenge.
          </p>
        </div>

        <div className="relative w-full px-[9.6px]">
          {/* On narrow screens the table keeps its width and scrolls sideways. */}
          <div className="w-full overflow-x-auto">
            <div className="w-full min-w-[720px] overflow-hidden rounded-[16.202px] border-[0.675px] border-[#3a3a3a] bg-gradient-to-b from-[#262221] from-[26%] to-transparent">
            {/* Header */}
            <div className="flex w-full border-b-[0.675px] border-[#373432]">
              <div className="flex flex-1 items-center justify-center border-r-[0.675px] border-[#373432] px-[32px] py-[24px]">
                <span className="sr-greed whitespace-nowrap font-bold uppercase leading-[16.2px] text-white text-[20px]">
                  VIP // Gold access
                </span>
              </div>
              <div className="flex flex-1 items-center justify-center px-[32px] py-[24px]">
                <span className="sr-greed whitespace-nowrap font-semibold uppercase leading-[16.2px] text-white text-[20px]">
                  Diamond Access
                </span>
              </div>
            </div>

            {rows.map(([left, right], i) => (
              <Row
                key={i}
                left={left}
                right={right}
                last={i === rows.length - 1}
              />
            ))}

            {/* CTAs */}
            <div className="flex w-full items-start justify-center gap-[21px] p-[20px]">
              <a
                href="https://dub.sh/attn-superad-optin?ref=gold"
                className="sr-inter sr-stripes-hover flex h-[67px] flex-1 cursor-pointer items-center justify-center rounded-[8px] bg-[#96139f] font-bold leading-[19.2px] tracking-[-0.4px] text-white text-[24px]"
              >
                <span className="relative z-10">Claim the VIP Access</span>
              </a>
              <a
                href="https://dub.sh/attn-superad-optin?ref=diamond"
                className="sr-inter sr-stripes-hover flex h-[67px] flex-1 cursor-pointer items-center justify-center rounded-[8px] bg-[#b5620f] font-bold leading-[19.2px] tracking-[-0.4px] text-white text-[24px]"
              >
                <span className="relative z-10">Claim the Diamond Access</span>
              </a>
            </div>
          </div>
          </div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-[36px] bg-gradient-to-l from-[#221919] to-transparent md:hidden" />
        </div>
      </div>
    </section>
  );
}
