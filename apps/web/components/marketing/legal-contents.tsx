"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";
import { interDisplay } from "./fonts";

type ContentsItem = { id: string; title: string };

export function LegalContents({ sections }: { sections: ContentsItem[] }) {
  const [activeId, setActiveId] = useState(sections[0]?.id);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const elements = sections.map(({ id }) => document.getElementById(id));
    const article = document.getElementById("legal-article");
    let frame = 0;
    const update = () => {
      frame = 0;
      let current = sections[0]?.id;
      for (const element of elements) {
        if (element && element.getBoundingClientRect().top <= 160)
          current = element.id;
      }
      setActiveId(current);
      if (article) {
        const rect = article.getBoundingClientRect();
        const travel = Math.max(1, rect.height - window.innerHeight + 32);
        setProgress(Math.min(1, Math.max(0, (32 - rect.top) / travel)));
        setVisible(rect.top < window.innerHeight && rect.bottom > 120);
      }
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    window.addEventListener("hashchange", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      window.removeEventListener("hashchange", schedule);
    };
  }, [sections]);

  const items = (mobile = false) =>
    sections.map(({ id, title }) => (
      <a
        key={id}
        href={`#${id}`}
        aria-current={activeId === id ? "location" : undefined}
        title={title}
        onClick={() => {
          setActiveId(id);
          if (mobile) setOpen(false);
        }}
      >
        <span className="af-legal-contents-label">{title}</span>
      </a>
    ));

  return (
    <>
      <aside className="af-legal-sidebar">
        <nav className="af-legal-contents" aria-label="On this page">
          {items()}
        </nav>
      </aside>
      <div className="af-legal-mobile-contents" hidden={!visible && !open}>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger
            render={
              <Button
                variant="ghost"
                size="icon"
                className="af-legal-contents-button"
              />
            }
            aria-label="On this page"
          >
            <svg className="af-legal-progress" viewBox="0 0 56 56" aria-hidden="true">
              <circle cx="28" cy="28" r="22.5" fill="none" stroke="#f7dfd6" strokeWidth="2.5" />
              <circle cx="28" cy="28" r="22.5" fill="none" stroke="#e85626" strokeWidth="2.5"
                pathLength="100" strokeDasharray="100" strokeDashoffset={100 * (1 - progress)}
                strokeLinecap={progress > 0 ? "round" : "butt"} transform="rotate(-90 28 28)" />
            </svg>
            {open ? (
              <span className="af-legal-close-icon" aria-hidden="true">
                <svg viewBox="0 0 16 16"><path d="m5 5 6 6M11 5l-6 6" /></svg>
              </span>
            ) : (
              <Image src="/redesign/legal-menu.svg" alt="" width={14} height={16} className="af-legal-menu-icon" />
            )}
          </PopoverTrigger>
          <PopoverContent
            positionMethod="fixed"
            side="top"
            align="end"
            sideOffset={16}
            className={`af-legal-contents-popup ${interDisplay.variable}`}
          >
            <PopoverTitle className="sr-only">On this page</PopoverTitle>
            <ScrollArea className="af-legal-menu-scroll">
              <nav className="af-legal-contents" aria-label="On this page">
                {items(true)}
              </nav>
            </ScrollArea>
          </PopoverContent>
        </Popover>
      </div>
    </>
  );
}
