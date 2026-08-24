export function ClosingCta() {
  return (
    <section className="w-full bg-[#1a0000] px-6 pt-[104px] pb-[150px]">
      <div className="mx-auto flex max-w-[720px] flex-col items-center text-center">
        <h2 className="sr-greed max-w-[695px] font-semibold leading-[1.05] text-white text-[clamp(38px,5vw,60px)]">
          A Week from now, one of two things will happened...
        </h2>

        <div className="sr-ppneue mt-[40px] max-w-[612px] space-y-[1.2em] font-medium leading-[1.4] text-[#c0bfb7] text-[clamp(16px,1.6vw,20px)]">
          <p>You&apos;ll simply be a week older.</p>
          <p>
            Or you&apos;ll be a week older with real AI Cinema skills, a
            portfolio taking shape, and a network of the top 1% in AI Film Making
          </p>
          <p>
            Most people are still watching tutorials. The people in this room learn the fastest way to get paid.
          </p>
        </div>

        <a
          href="#pricing"
          className="sr-dmsans mt-[52px] inline-flex items-center justify-center rounded-[99px] border border-white bg-white px-[24px] py-[12px] font-semibold leading-[1.5] tracking-[-0.32px] text-[#4c0e3a] text-[16px]"
        >
          Join the SuperRad AI Film Challenge
        </a>
      </div>
    </section>
  );
}
