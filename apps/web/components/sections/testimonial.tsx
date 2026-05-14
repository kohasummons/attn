import Image from "next/image";

export function Testimonial() {
  return (
    <section className="bg-[#f9f9f9] py-12">
      <div className="mx-auto flex max-w-[1166px] items-stretch px-6">
        <div className="relative hidden h-[500px] w-[132px] shrink-0 overflow-hidden border border-[#f0f0f0] bg-[#f9f9f9] md:block">
          <Image
            src="/v2/testimonial-portrait.png"
            alt=""
            width={220}
            height={243}
            className="absolute left-[-37px] top-[134px] max-w-none object-cover"
          />
        </div>

        <div className="relative flex h-[500px] flex-1 flex-col justify-center border border-[#f0f0f0] bg-[#f9f9f9] px-8 md:px-16">
          <Image
            src="/v2/testimonial-logo.svg"
            alt="BB Capital"
            width={124}
            height={36}
            className="absolute left-8 top-[72px] md:left-16"
          />

          <Image
            src="/v2/testimonial-portrait.png"
            alt=""
            width={220}
            height={243}
            className="absolute left-[-100px] top-[128px] hidden max-w-none object-cover md:block"
          />

          <blockquote className="ml-0 max-w-[633px] text-[clamp(22px,2.5vw,28px)] font-normal leading-[1.4] tracking-[-0.01em] text-black md:ml-[140px]">
            &ldquo;We completely rebuilt our GTM stack with Attio in under 90 days while growing pipeline&rdquo;
          </blockquote>

          <div className="mt-6 flex items-center text-[18px] text-black md:ml-[140px]">
            <span className="font-bold">Joshua Phyl</span>
            <span>,&nbsp;BB Capital</span>
          </div>
        </div>

        <div className="relative hidden h-[500px] w-[132px] shrink-0 overflow-hidden border border-[#f0f0f0] bg-[#f9f9f9] md:block">
          <Image
            src="/v2/testimonial-portrait.png"
            alt=""
            width={220}
            height={243}
            className="absolute left-[-37px] top-[140px] max-w-none object-cover"
          />
        </div>
      </div>
    </section>
  );
}
