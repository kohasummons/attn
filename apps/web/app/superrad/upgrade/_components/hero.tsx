import { StarRating } from "@/app/superrad/_components/star";

const paragraphs = [
  "When you finish the SuperRad AI Film Challenge, you’ll have all it takes to make a cinematic AI film ",
  "+ plus your own portfolio film",
  "The question you’ll be sitting with is: “Is this actually good? Would Mercy look at this and say yes?”",
  "Normally, the only way to get my eyes on your work privately is my 1:1 audit & training session at $500. That’s my standing rate and it doesn’t change.",
  "But because you’ve just enrolled, and because I want your AI Film skill to turn into revenue and never gather dust.",
];

export function Hero() {
  return (
    <section className="w-full bg-[#221919] px-6 pt-[100px]">
      <div className="mx-auto flex max-w-[600px] flex-col items-center text-center">
        <span className="sr-greed inline-flex items-center rounded-[39px] bg-[#2f2323] px-[23px] py-[7px] font-semibold leading-none text-white text-[16px]">
          You will only see this once
        </span>

        <h1 className="sr-sansplomb mt-[24px] font-bold leading-[1.12] text-white text-[80px]">
          Wait, one thing
          <br />
          before you go in.
        </h1>

        <p className="sr-ppneue mt-[44px] max-w-[383px] font-medium leading-normal text-white text-[18px]">
          You’ve just made a smart decision, and I want to give you the chance to
          make one more.
        </p>

        <img
          src="/superrad/upgrade/butterfly.png"
          alt=""
          aria-hidden
          className="mt-[56px] h-[143px] w-[133px] object-cover"
        />

        <div className="mt-[80px] flex max-w-[445px] flex-col gap-[56px]">
          {paragraphs.map((text, i) => (
            <p
              key={i}
              className="sr-ppneue font-medium leading-normal text-white text-[24px]"
            >
              {text}
            </p>
          ))}
          <p className="sr-ppneue font-medium leading-normal text-white text-[24px]">
            I’m offering you the SuperRad+ Access — a closer session
            with me where you bring what you’ve built and we fix it together + other perks
            <br />
            <br />
            On this page only.
          </p>
        </div>

        <StarRating className="mt-[80px]"/>
      </div>
    </section>
  );
}
