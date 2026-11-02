"use client";

import { useEffect, useState } from "react";

// SuperRad kicks off September 4, 2026 at 6PM WAT. WAT is UTC+1 (no DST), so
// 18:00 WAT = 17:00 UTC. Fixed target, identical for every viewer's timezone.
const TARGET_MS = Date.UTC(2026, 8, 4, 17, 0, 0); // month 8 = September

type TimeLeft = { days: number; hours: number; minutes: number; seconds: number };

export function Countdown() {
  const [t, setT] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const tick = () => {
      const now = Date.now();
      const diff = Math.max(0, TARGET_MS - now);
      setT({
        days: Math.floor(diff / 86_400_000),
        hours: Math.floor((diff % 86_400_000) / 3_600_000),
        minutes: Math.floor((diff % 3_600_000) / 60_000),
        seconds: Math.floor((diff % 60_000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const pad = (n: number) => n.toString().padStart(2, "0");

  return (
    <div className="sr-ppneue flex h-[34px] items-center divide-x divide-[#002a3a]/10 rounded-[5px] bg-[#b3b3b31a] text-[15px] font-medium tabular-nums text-[#002a3a]">
      {t.days > 0 && (
        <span className="flex h-full items-center px-[8px]">
          {t.days}
          <span className="ml-[1px] text-[#002a3a]/50">d</span>
        </span>
      )}
      <span className="flex h-full items-center px-[8px]">
        {pad(t.hours)}
        <span className="ml-[1px] text-[#002a3a]/50">h</span>
      </span>
      <span className="flex h-full items-center px-[8px]">
        {pad(t.minutes)}
        <span className="ml-[1px] text-[#002a3a]/50">m</span>
      </span>
      <span className="flex h-full items-center px-[8px]">
        {pad(t.seconds)}
        <span className="ml-[1px] text-[#002a3a]/50">s</span>
      </span>
    </div>
  );
}
