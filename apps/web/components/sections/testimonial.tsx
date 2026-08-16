"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

type Testimonial = {
  quote: string;
  name: string;
  role?: string;
  /** What they shipped afterwards. Rendered under the quote when present. */
  result?: string;
  /**
   * Real headshot only. Left undefined until the person's own photo is in
   * `public/v2/team/` — the stock portraits in that folder belong to other
   * companies, and pairing one with a named participant would misattribute it.
   */
  portrait?: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "Before the bootcamp, I understood AI in theory. I could talk about it, but I couldn't actually ship anything. Since then, I've built and launched websites, apps, AI agents, and my own digital product. I don't just talk about AI anymore. I build it and ship it, for myself and for real clients.",
    name: "Anonymous",
    role: "AI Fellow - Alpha",
    result:"",
  },
  {
    quote:
      "Before the mentorship, I was overwhelmed and lacked direction. I was sorting through too much information and constantly second-guessing my work. The mentorship gave me clear guidance, practical systems, and hands-on skills. I stopped guessing, saved hours of trial and error, and became more confident and intentional with my content.",
    name: "Anonymous",
    role: "Business Manager",
    portrait: "/v2/team/portrait-business-manager.png",
  },
  {
    quote:
      "I wasn't sure I would get enough value from the program. I left with practical, hands-on skills and built and deployed apps using Claude Code, Lovable, Replit, and Emergent. I would definitely recommend it.",
    name: "Anonymous",
    role: "AI Fellow - Bravo",
  },
];

function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <article className="flex min-w-0 shrink-0 basis-[82%] snap-start flex-col bg-white sm:basis-[60%] md:basis-[calc((100%-1.5rem)/2)] lg:basis-[calc((100%-3rem)/3)]">
      {/* Square portrait, flush to the top-left corner of the card. Without a
          real headshot the corner stays a flat swatch so the card keeps its
          shape and nothing is misattributed. */}
      {item.portrait ? (
        <Image
          src={item.portrait}
          alt=""
          width={64}
          height={64}
          className="size-16 shrink-0 object-cover grayscale"
        />
      ) : (
        <div aria-hidden className="size-16 shrink-0 bg-[#e4e3de]" />
      )}

      <p className="mt-7 px-6 text-[13px] leading-[1.55] font-semibold tracking-[-0.005em] text-[#1a1a1a]">
        &ldquo;{item.quote}&rdquo;
      </p>

      {item.result ? (
        <p className="mt-5 px-6 text-[13px] leading-[1.55] tracking-[-0.005em] text-[#5a5a5a]">
          {item.result}
        </p>
      ) : null}

      <div className="mt-auto px-6 pt-10 pb-6 text-[13px] leading-[1.6] tracking-[-0.02em]">
        <p className="text-[#1a1a1a]">{item.name}</p>
        {item.role ? <p className="text-[#8c8a84]">{item.role}</p> : null}
      </div>
    </article>
  );
}

export function Testimonial() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [pages, setPages] = useState(1);
  const [page, setPage] = useState(0);

  const measure = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    // A "page" is one viewport-width of the track.
    const total = Math.max(1, Math.round(el.scrollWidth / el.clientWidth));
    setPages(total);
    setPage(Math.round(el.scrollLeft / el.clientWidth));
  }, []);

  useEffect(() => {
    measure();
    const el = trackRef.current;
    if (!el) return;
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, [measure]);

  const scrollToPage = (next: number) => {
    const el = trackRef.current;
    if (!el) return;
    const clamped = Math.max(0, Math.min(pages - 1, next));
    el.scrollTo({ left: clamped * el.clientWidth, behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-[#f9f9f9] py-16 md:py-24">
      <div className="relative mx-auto max-w-[1166px] px-6">
        <h2 className="text-[clamp(28px,5vw,48px)] leading-[1.05] font-medium tracking-[-0.04em]">
          <span className="block text-[#1a1a1a]">What our customers</span>
          <span className="block text-[#6a7282]">are saying</span>
        </h2>

        <div
          ref={trackRef}
          onScroll={measure}
          className="mt-12 flex items-stretch snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain [-ms-overflow-style:none] [scrollbar-width:none] md:gap-6 [&::-webkit-scrollbar]:hidden"
        >
          {testimonials.map((item) => (
            <TestimonialCard key={item.name} item={item} />
          ))}
        </div>

        {pages > 1 ? (
          <div className="mt-8 flex items-center justify-between">
            <div className="flex items-center gap-2">
              {Array.from({ length: pages }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to slide ${i + 1}`}
                  aria-current={i === page}
                  onClick={() => scrollToPage(i)}
                  className={cn(
                    "size-1.5 rounded-full transition-colors duration-300",
                    i === page
                      ? "bg-[#1a1a1a]"
                      : "bg-[#1a1a1a]/20 hover:bg-[#1a1a1a]/40",
                  )}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                aria-label="Previous testimonials"
                onClick={() => scrollToPage(page - 1)}
                disabled={page === 0}
                className="flex size-9 items-center justify-center rounded-full border border-[#1a1a1a]/15 text-[#1a1a1a] transition-colors duration-300 hover:border-[#1a1a1a]/40 hover:bg-white disabled:pointer-events-none disabled:opacity-30"
              >
                <ArrowLeft className="size-4" strokeWidth={1.5} />
              </button>
              <button
                type="button"
                aria-label="Next testimonials"
                onClick={() => scrollToPage(page + 1)}
                disabled={page >= pages - 1}
                className="flex size-9 items-center justify-center rounded-full border border-[#1a1a1a]/15 text-[#1a1a1a] transition-colors duration-300 hover:border-[#1a1a1a]/40 hover:bg-white disabled:pointer-events-none disabled:opacity-30"
              >
                <ArrowRight className="size-4" strokeWidth={1.5} />
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------------------
 * PREVIOUS TESTIMONIAL LAYOUT — expanding accordion panels with portraits and
 * company logos. Kept intact, commented out. To restore: re-add the imports
 * below, swap this data/component back in, and remove the version above.
 *
 * import Image from "next/image";
 * import { motion } from "motion/react";
 *
 * type Testimonial = {
 *   quote: string;
 *   name: string;
 *   company: string;
 *   portrait: string;
 *   logo: string;
 * };
 *
 * const testimonials: Testimonial[] = [
 *   {
 *     quote:
 *       "We completely rebuilt our GTM stack with Attio in under 90 days while growing pipeline",
 *     name: "Joshua Omobola",
 *     company: "BB Capital",
 *     portrait: "/v2/testimonial-portrait.png",
 *     logo: "/v2/testimonial-logo.svg",
 *   },
 *   {
 *     quote:
 *       "Their team became an extension of ours — we shipped a working MVP in six weeks.",
 *     name: "Jane Doe",
 *     company: "Acme",
 *     portrait: "/v2/testimonial-portrait.png",
 *     logo: "/v2/testimonial-logo.svg",
 *   },
 *   {
 *     quote:
 *       "Saw a 3x lift in qualified pipeline within a quarter of launching with them.",
 *     name: "Sam Lee",
 *     company: "Globex",
 *     portrait: "/v2/testimonial-portrait.png",
 *     logo: "/v2/testimonial-logo.svg",
 *   },
 * ];
 *
 * const spring = {
 *   type: "spring" as const,
 *   stiffness: 220,
 *   damping: 32,
 *   mass: 0.7,
 * };
 *
 * export function Testimonial() {
 *   const [active, setActive] = useState(0);
 *   const mobileScrollRef = useRef<HTMLDivElement>(null);
 *   const [mobileIndex, setMobileIndex] = useState(0);
 *
 *   const handleMobileScroll = useCallback(() => {
 *     const el = mobileScrollRef.current;
 *     if (!el) return;
 *     const index = Math.round(el.scrollLeft / el.clientWidth);
 *     setMobileIndex(index);
 *   }, []);
 *
 *   useEffect(() => {
 *     const el = mobileScrollRef.current;
 *     if (!el) return;
 *     el.addEventListener("scroll", handleMobileScroll, { passive: true });
 *     return () => el.removeEventListener("scroll", handleMobileScroll);
 *   }, [handleMobileScroll]);
 *
 *   const goToMobile = (i: number) => {
 *     const el = mobileScrollRef.current;
 *     if (!el) return;
 *     el.scrollTo({ left: i * el.clientWidth, behavior: "smooth" });
 *   };
 *
 *   return (
 *     <section className="bg-[#f9f9f9] py-12">
 *       <div className="mx-auto hidden max-w-[1166px] items-stretch gap-1 px-6 md:flex">
 *         {testimonials.map((t, i) => {
 *           const isActive = i === active;
 *           return (
 *             <motion.div
 *               key={t.name}
 *               role="button"
 *               tabIndex={0}
 *               aria-expanded={isActive}
 *               onClick={() => setActive(i)}
 *               onKeyDown={(e) => {
 *                 if (e.key === "Enter" || e.key === " ") {
 *                   e.preventDefault();
 *                   setActive(i);
 *                 }
 *               }}
 *               animate={{ flexGrow: isActive ? 1 : 0 }}
 *               transition={spring}
 *               style={{ flexBasis: 0, flexShrink: 0 }}
 *               className={cn(
 *                 "relative h-[500px] min-w-[132px] overflow-hidden border border-[#f0f0f0] bg-[#f9f9f9] text-left outline-none focus-visible:ring-2 focus-visible:ring-black",
 *                 !isActive && "cursor-pointer transition-colors hover:bg-[#f3f3f3]",
 *               )}
 *             >
 *               <motion.div
 *                 animate={{ x: isActive ? -100 : -37 }}
 *                 transition={spring}
 *                 className="absolute top-[134px] border"
 *               >
 *                 <Image
 *                   src={t.portrait}
 *                   alt=""
 *                   width={220}
 *                   height={243}
 *                   className="max-w-none object-cover"
 *                 />
 *               </motion.div>
 *
 *               <motion.div
 *                 animate={{ opacity: isActive ? 1 : 0 }}
 *                 transition={{ duration: 0.25, delay: isActive ? 0.2 : 0 }}
 *                 className="pointer-events-none relative flex h-full flex-col justify-center px-16"
 *               >
 *                 <Image
 *                   src={t.logo}
 *                   alt={t.company}
 *                   width={124}
 *                   height={36}
 *                   className="ml-[140px]"
 *                 />
 *                 <blockquote className="ml-[140px] max-w-[633px] text-[clamp(22px,2.5vw,28px)] font-normal leading-[1.4] tracking-[-0.01em] text-black">
 *                   &ldquo;{t.quote}&rdquo;
 *                 </blockquote>
 *                 <div className="mt-6 ml-[140px] flex items-center text-[18px] text-black">
 *                   <span className="font-bold">{t.name}</span>
 *                   <span>,&nbsp;{t.company}</span>
 *                 </div>
 *               </motion.div>
 *             </motion.div>
 *           );
 *         })}
 *       </div>
 *
 *       <div className="md:hidden">
 *         <div
 *           ref={mobileScrollRef}
 *           className="flex snap-x snap-mandatory overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
 *         >
 *           {testimonials.map((t) => (
 *             <article
 *               key={t.name}
 *               className="flex h-[420px] w-full shrink-0 snap-center flex-col justify-center border-[#f0f0f0] bg-[#f9f9f9] px-6"
 *             >
 *               <Image
 *                 src={t.logo}
 *                 alt={t.company}
 *                 width={104}
 *                 height={30}
 *                 className="mb-8"
 *               />
 *               <blockquote className="max-w-[480px] text-[20px] font-normal leading-[1.4] tracking-[-0.01em] text-black">
 *                 &ldquo;{t.quote}&rdquo;
 *               </blockquote>
 *               <div className="mt-5 flex items-center text-[15px] text-black">
 *                 <span className="font-bold">{t.name}</span>
 *                 <span>,&nbsp;{t.company}</span>
 *               </div>
 *             </article>
 *           ))}
 *         </div>
 *
 *         <div className="mt-5 flex items-center justify-center gap-2">
 *           {testimonials.map((t, i) => (
 *             <button
 *               key={t.name}
 *               type="button"
 *               aria-label={`Show ${t.name}`}
 *               onClick={() => goToMobile(i)}
 *               className={cn(
 *                 "h-2 rounded-full transition-all",
 *                 mobileIndex === i ? "w-6 bg-black" : "w-2 bg-black/30",
 *               )}
 *             />
 *           ))}
 *         </div>
 *       </div>
 *     </section>
 *   );
 * }
 * ------------------------------------------------------------------------- */
