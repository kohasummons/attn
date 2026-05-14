"use client";

import { useEffect, useState } from "react";

import { CaretDown } from "@/components/ui/caret-down";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Services", hasMenu: true },
  { label: "Courses", hasMenu: true },
  { label: "Case Studies", hasMenu: true },
  { label: "Resources", hasMenu: false },
  { label: "Intelligence", hasMenu: false },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 h-20 transition-colors duration-200",
        scrolled
          ? "bg-white backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-full max-w-[1166px] items-center justify-between px-6">
        <a
          href="/v2"
          className={cn(
            "flex items-center gap-1 text-[20px] font-semibold tracking-[-0.04em] transition-colors",
            scrolled ? "text-[#121313]" : "text-white",
          )}
        >
          <span>attention</span>
          <span>factory</span>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <button
              key={item.label}
              type="button"
              className={cn(
                "inline-flex items-center gap-1 text-[16px] font-medium transition-colors",
                scrolled
                  ? "text-[#121313] hover:text-[#121313]/70"
                  : "text-white/90 hover:text-white",
              )}
            >
              {item.label}
              {item.hasMenu ? <CaretDown /> : null}
            </button>
          ))}
        </nav>

        <button
          type="button"
          className="bg-black px-5 py-3 text-[16px] font-medium text-[#fdfdfd] hover:bg-black/85 transition-colors"
        >
          Join the Community
        </button>
      </div>
    </header>
  );
}
