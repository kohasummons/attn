function XCircle() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="size-[24px] shrink-0"
      fill="none"
      aria-hidden
    >
      <path
        d="M9.75 9.75L14.25 14.25M14.25 9.75L9.75 14.25M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z"
        stroke="#FF171B"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const blockers = [
  "Your AI work looks great on its own, but it does not hold up next to professional commercial work.",
  "The free stuff online shows you a tool, never the full client-ready workflow from brief to delivery.",
  "Twenty years into your craft, clients are asking whether AI can do your job, juniors are going for your briefs, and the layoffs are landing.",
  "Competitors are pitching faster turnarounds, more variations, and lower costs to the same clients.",
  "There is a new tool every week, and more time goes into choosing what to learn than actually learning it.",
  "Making good work is one thing. Finding clients who will pay seriously for it, and knowing what to charge, is another.",
  "Working alone means no feedback, no network, and no one to ask the moment it breaks.",
];

export function Pain() {
  return (
    <section className="relative w-full bg-[#1a0000] px-6 pt-[104px] pb-[140px]">
      <div className="mx-auto flex max-w-[720px] flex-col items-center text-center">
        <h2 className="sr-greed max-w-[695px] font-semibold leading-[1.05] text-white text-[clamp(38px,5vw,60px)]">
          Someone with less talent than you is getting paid for AI
        </h2>

        <div className="sr-ppneue mt-[40px] max-w-[612px] space-y-[1.2em] font-medium leading-[1.35] text-[#c0bfb7] text-[clamp(16px,1.6vw,20px)]">
          <p>They don&rsquo;t have more creative powers than you.</p>
          <p>
            They don&rsquo;t have better tools. They mastered a workflow and
            built a system that consistently delivers.
          </p>
          <p>
            They did not stay stuck seeing 40 new YouTube tutorials every week.
          </p>
          <p>Here is what blocks you:</p>
        </div>

        <div className="mt-[96px] flex w-full flex-col gap-[2px]">
          {blockers.map((text, i) => (
            <div
              key={i}
              className="flex w-full items-start gap-[9px] rounded-[24px] bg-white py-[16px] pl-[24px] pr-[16px] text-left"
            >
              <XCircle />
              <p className="sr-rubik font-light leading-[28px] text-black text-[20px]">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
