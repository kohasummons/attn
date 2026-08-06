import Image from "next/image";

export function Business() {
  return (
    <section className="relative overflow-hidden bg-[#d9d9d9]">
      <Image
        src="/v2/cta-bg.png"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/30" />

      {/* <div className="relative mx-auto min-h-[600px] max-w-[1166px] px-6 py-24">
        <div className="max-w-[535px]">
          <EyebrowLabel className="text-white">Business</EyebrowLabel>
          <h2 className="mt-3 text-[clamp(36px,6vw,64px)] font-medium leading-[1.05] tracking-[-0.04em] text-white">
            Your team is already using AI. Badly.
          </h2>
          <p className="mt-5 text-[clamp(15px,1.8vw,19px)] leading-[1.45] tracking-[-0.01em] text-white">
            Most companies buy the tools and skip the training, so nothing
            changes. We train your people to use AI on their actual work, then
            leave you with systems that hold up after we go.
          </p>
          <div className="mt-10">
            <ArrowButton variant="light" showArrow={false}>
              Train your team
            </ArrowButton>
          </div>
        </div>
      </div> */}
    </section>
  );
}
