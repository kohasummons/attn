import { VideoCard } from "./video-card";

export function MasterGeneration() {
  return (
    <section className="relative w-full pt-[100px] pb-[120px]">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center px-6 text-center">
        <h2 className="sr-greed font-semibold leading-[1.0] text-black text-[clamp(40px,6vw,70px)]">
          In 3 Days
        </h2>
        <h2 className="sr-greed mt-[6px] font-semibold leading-[1.0] text-black text-[clamp(40px,6vw,70px)]">
          Master Cinematic AI Generation
        </h2>

        <p className="sr-ppneue mt-[18px] max-w-[740px] font-medium leading-[1.35] text-[#4f4d4d] text-[clamp(17px,1.8vw,24px)]">
          Go from an idea to a finished cinematic film with zero team, zero
          gadgets and a battle tested workflow. You can use the system for
          Content for your brands, ADS or even your own projects like this:
        </p>

        {/* Media card (Figma Rectangle 36) — vertical Bunny Stream player */}
        <VideoCard />
      </div>
    </section>
  );
}
