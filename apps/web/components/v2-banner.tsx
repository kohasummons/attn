import Link from "next/link";

export function V2Banner() {
  return (
    <Link
      href="/v2"
      className="group flex w-full items-center justify-center gap-2 bg-[#ff4100] px-5 py-3 text-center text-[14px] font-medium tracking-[-0.01em] text-white transition-colors hover:bg-[#121313] sm:text-[15px]"
    >
      <span>Our new site is here — take a look at the v2.</span>
      <span
        aria-hidden="true"
        className="transition-transform group-hover:translate-x-0.5"
      >
        →
      </span>
    </Link>
  );
}
