"use client";

import { useEffect, useState } from "react";
import { hqLaunchBadgeText } from "./hq-launch-time";

export function HqLaunchCountdown({ className }: { className: string }) {
  // Keep the server and first client render identical, then use the visitor's clock.
  const [label, setLabel] = useState("AttentionHQ is live");

  useEffect(() => {
    const update = () => setLabel(hqLaunchBadgeText(Date.now()));
    update();
    const interval = window.setInterval(update, 60_000);
    document.addEventListener("visibilitychange", update);
    return () => {
      window.clearInterval(interval);
      document.removeEventListener("visibilitychange", update);
    };
  }, []);

  return <span className={className}>{label}</span>;
}
