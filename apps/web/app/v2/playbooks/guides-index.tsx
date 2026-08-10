"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import { cn } from "@/lib/utils";

import {
  GUIDE_ENTRIES,
  GUIDE_TOOLS,
  GUIDE_TOPICS,
  guideMatchesFilter,
  guideMatchesSearch,
} from "./guides-data";

type Pill = { id: string; label: string };

const dateFmt = new Intl.DateTimeFormat("en-US", {
  month: "short",
  year: "numeric",
});

function formatDate(iso: string) {
  const d = new Date(iso);
  return Number.isNaN(d.getTime()) ? "" : dateFmt.format(d);
}

export function GuidesIndex() {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  const { topicPills, toolPills } = useMemo(() => {
    const usedTopics = new Set(GUIDE_ENTRIES.map((e) => e.topic));
    const usedTools = new Set(GUIDE_ENTRIES.flatMap((e) => e.tools));
    return {
      topicPills: GUIDE_TOPICS.filter(
        (t) => t.id !== "all" && usedTopics.has(t.id),
      ).map((t) => ({ id: `topic:${t.id}`, label: t.label }) as Pill),
      toolPills: GUIDE_TOOLS.filter(
        (t) => t.id !== "all" && usedTools.has(t.id),
      ).map((t) => ({ id: `tool:${t.id}`, label: t.label }) as Pill),
    };
  }, []);

  const filtered = useMemo(() => {
    return GUIDE_ENTRIES.filter(
      (e) => guideMatchesFilter(e, filter) && guideMatchesSearch(e, search),
    ).sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    );
  }, [filter, search]);

  return (
    <div>
      {/* Controls — squared, bordered, to match the rest of the site. */}
      <div className="flex flex-col gap-6 border-y border-[#e4e3de] py-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex flex-wrap items-center gap-2">
            <FilterPill
              pill={{ id: "all", label: "All" }}
              active={filter === "all"}
              onClick={() => setFilter("all")}
            />
            {topicPills.map((p) => (
              <FilterPill
                key={p.id}
                pill={p}
                active={filter === p.id}
                onClick={() => setFilter(p.id)}
              />
            ))}
          </div>

          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search a tool or keyword…"
            aria-label="Search guides"
            className="w-full max-w-[320px] border border-[#e4e3de] bg-white px-4 py-2.5 text-[15px] tracking-[-0.01em] text-[#121313] outline-none transition-colors placeholder:text-[#8a8a86] focus:border-[#121313]"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {toolPills.map((p) => (
            <FilterPill
              key={p.id}
              pill={p}
              active={filter === p.id}
              onClick={() => setFilter(p.id)}
            />
          ))}
        </div>
      </div>

      <p className="mt-6 text-[14px] tracking-[-0.02em] text-[#8a8a86]">
        {filtered.length} {filtered.length === 1 ? "resource" : "resources"}
      </p>

      {filtered.length === 0 ? (
        <p className="mt-8 border border-dashed border-[#d5d4cf] bg-white px-4 py-16 text-center text-[15px] text-[#8a8a86]">
          No guides match those filters yet. Try resetting one.
        </p>
      ) : (
        <div className="mt-6 grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((entry) => (
            <Link
              key={entry.slug}
              href={`/v2/playbooks/${entry.slug}`}
              className="group flex flex-col border border-[#e4e3de] bg-white p-8 transition-colors duration-300 hover:bg-[#f9f9f9] md:p-10"
            >
              <div className="flex items-baseline justify-between gap-4">
                <p className="text-[11px] font-medium tracking-[0.14em] text-[#8a8a86] uppercase">
                  {entry.category}
                </p>
                <span className="text-[13px] tracking-[-0.02em] text-[#c4c4c0]">
                  {formatDate(entry.publishedAt)}
                </span>
              </div>

              <h3 className="mt-8 text-[22px] leading-[1.15] font-medium tracking-[-0.04em] text-[#121313] group-hover:underline">
                {entry.title}
              </h3>
              <p className="mt-4 flex-1 text-[15px] leading-[1.5] tracking-[-0.02em] text-[#5a5a5a]">
                {entry.excerpt}
              </p>

              <div className="mt-6 flex flex-wrap gap-1.5">
                {entry.tools.map((t) => (
                  <span
                    key={t}
                    className="border border-[#e4e3de] px-2 py-1 text-[11px] tracking-[-0.01em] text-[#8a8a86]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

function FilterPill({
  pill,
  active,
  onClick,
}: {
  pill: Pill;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "border px-3.5 py-1.5 text-[13px] tracking-[-0.02em] transition-colors",
        active
          ? "border-[#121313] bg-[#121313] text-white"
          : "border-[#e4e3de] bg-white text-[#5a5a5a] hover:border-[#121313] hover:text-[#121313]",
      )}
    >
      {pill.label}
    </button>
  );
}
