/**
 * The glowing aurora "Enroll" CTA from the hero (Figma node 1:1987).
 * Pill: 297×112, radius 56.17, bg gradient #1e228a → #051219, with masked
 * cyan aurora light-paths (exported SVGs) blended plus-lighter, an inner white
 * glow and an outer blue glow. Aurora assets re-anchored to the pill's own box.
 */
export function EnrollButton({
  href = "#pricing",
  className = "",
}: {
  href?: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      aria-label="Enroll"
      className={`sr-ppneue group relative inline-flex h-[112px] w-[297px] shrink-0 items-center justify-center rounded-full transition-transform duration-300 hover:scale-[1.02] ${className}`}
    >
      {/* Pill body + glows */}
      <span className="absolute inset-0 overflow-hidden rounded-full bg-gradient-to-b from-[#1e228a] to-[#051219] shadow-[0px_2.809px_140.426px_0px_rgba(108,199,245,0.6),0px_0px_1.826px_0px_#ffffff]">
        {/* Aurora light-paths (positions are pill-local, from Figma) */}
        <img
          src="/superrad/aurora/v43.svg"
          alt=""
          aria-hidden
          className="pointer-events-none absolute max-w-none"
          style={{ left: "52px", top: "-8px", width: "248px", height: "136px" }}
        />
        <img
          src="/superrad/aurora/v40.svg"
          alt=""
          aria-hidden
          className="pointer-events-none absolute max-w-none mix-blend-plus-lighter"
          style={{ left: "46px", top: "-25px", width: "320px", height: "175px" }}
        />
        <img
          src="/superrad/aurora/v41.svg"
          alt=""
          aria-hidden
          className="pointer-events-none absolute max-w-none mix-blend-plus-lighter"
          style={{
            left: "-81px",
            top: "-52px",
            width: "320px",
            height: "175px",
            transform: "rotate(180deg) scaleY(-1)",
          }}
        />
        {/* Soft white highlight streak */}
        <span
          className="pointer-events-none absolute rounded-full bg-white blur-[7px] mix-blend-plus-lighter"
          style={{ left: "28px", top: "82px", width: "230px", height: "26px", opacity: 0.9 }}
        />
        {/* Inner glow */}
        <span className="pointer-events-none absolute inset-0 rounded-full shadow-[inset_14.043px_14.043px_42.128px_0px_rgba(255,255,255,0.25)]" />
      </span>

      <span className="relative z-10 text-[26.681px] font-bold leading-none text-white">
        Enroll
      </span>
    </a>
  );
}
