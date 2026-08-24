function Check() {
  return (
    <svg viewBox="0 0 13.19 12.36" className="h-[12px] w-[13px] shrink-0" fill="none" aria-hidden>
      <path d="M1.23416 7.6144L5.1385 11.0583L11.9702 1.21691" stroke="#F7FF00" strokeWidth="1.74878" strokeMiterlimit="10" strokeLinecap="square" />
    </svg>
  );
}

function Cross() {
  return (
    <span className="flex size-[16px] shrink-0 items-center justify-center bg-[#fafafa]">
      <svg viewBox="0 0 10 10" className="size-[10px]" fill="none" aria-hidden>
        <path d="M9.9995 0L0.0005 9.999M9.9995 10L0.0005 0.001" stroke="#FF0000" strokeWidth="1.49985" strokeMiterlimit="10" strokeLinecap="square" />
      </svg>
    </span>
  );
}

const forYou = [
  "You want a real path and proper training, and skip the guess",
  "You’re can follow along and implement from a ready made guide",
  "You can commit for three days to get results",
  "You want eyes on your work and people to ask the moment you are stuck",
];

const notForYou = [
  "You want the money without doing the reps",
  "You are looking for a magic button instead of a skill",
  "You will collect modules and never create anything",
  "You prefer watching tutorials instead of executing and implementing",
  "You don't like honest feedback and you want to be spoon fed"
];

export function Fit() {
  return (
    <section className="w-full bg-white px-6 py-[100px]">
      <div className="mx-auto flex max-w-[1000px] flex-col items-center text-center">
        <h2 className="sr-sansplomb font-normal leading-[1.05] text-black text-[clamp(38px,5vw,60px)]">
          Is SuperRad AI Film
          <br />
          Challenge right for you?
        </h2>
        {/* <p className="sr-ppneue mt-[16px] font-medium text-[#4f4d4d] text-[clamp(18px,2vw,24px)]">
          Cause this is the fhte restuslt you asked
        </p> */}

        <div className="mt-[80px] flex w-full flex-col items-stretch justify-center gap-[48px] md:flex-row">
          {/* For you */}
          <div className="w-full overflow-hidden rounded-[12px] bg-[#1a0000] md:w-[487px]">
            <div className="flex h-[66.8px] items-center bg-[#89b81d] px-[18px]">
              <p className="sr-ppneue font-medium leading-[20px] tracking-[-0.29px] text-white text-[20px]">
                This is for you if...
              </p>
            </div>
            {forYou.map((text, i) => (
              <div
                key={i}
                className={`flex h-[66.8px] items-center gap-[16px] px-[14px] text-left ${
                  i < forYou.length - 1 ? "border-b-[1.193px] border-white" : ""
                }`}
              >
                <Check />
                <p className="sr-ppneue font-medium leading-[20px] tracking-[-0.29px] text-white text-[16px]">
                  {text}
                </p>
              </div>
            ))}
          </div>

          {/* Not for you */}
          <div className="w-full overflow-hidden rounded-[12px] bg-[#f7f7f7] md:w-[385px]">
            <div className="flex h-[67px] items-center border-b-[1.193px] border-[#e8e8e8] bg-[#383838] px-[18px]">
              <p className="sr-ppneue font-medium leading-[20px] tracking-[-0.29px] text-white text-[20px]">
                This is not for you if...
              </p>
            </div>
            {notForYou.map((text, i) => (
              <div
                key={i}
                className={`flex h-[66.8px] items-center gap-[19px] px-[14px] text-left ${
                  i < notForYou.length - 1 ? "border-b-[1.193px] border-[#e8e8e8]" : ""
                }`}
              >
                <Cross />
                <p className="sr-ppneue font-medium leading-[20px] tracking-[-0.29px] text-[#666] text-[14.32px]">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
