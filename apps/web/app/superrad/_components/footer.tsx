export function Footer() {
  return (
    <footer className="w-full bg-white px-6 pt-[96px] pb-[150px]">
      <div className="mx-auto max-w-[1440px] flex items-center justify-center">
        <span className="sr-archivo rounded-[6px] bg-[#f5f5f4] px-[8px] py-[3px] font-medium uppercase leading-[20px] tracking-[1px] text-[#a3a3a3] text-[10px] flex items-center justify-center">
          Disclaimer
        </span>
      </div>
      <p className="sr-ppneue mx-auto max-w-[600px] text-center font-medium leading-[1.5] tracking-[-0.32px] text-[#646464] text-[16px] mt-[12px]">
        Results are not guaranteed. Your outcome depends on your effort,
        consistency, skill and market conditions. Nothing here is financial
        advice.
      </p>
    </footer>
  );
}
