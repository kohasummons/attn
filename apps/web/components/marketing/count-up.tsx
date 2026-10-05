"use client";

import { useEffect, useRef } from "react";
import { animate, useInView } from "motion/react";

const numberFormat = new Intl.NumberFormat("en-US");

export function CountUp({ value, suffix = "" }: {
  value: number;
  suffix?: string;
}) {
  const container = useRef<HTMLSpanElement>(null);
  const display = useRef<HTMLSpanElement>(null);
  const isInView = useInView(container, { once: true, amount: 0.6 });
  const label = `${numberFormat.format(value)}${suffix}`;

  useEffect(() => {
    const element = display.current;
    if (!element) return;

    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let animation: ReturnType<typeof animate> | undefined;
    const showFinalValue = () => {
      animation?.stop();
      element.textContent = label;
    };
    const onPreferenceChange = () => {
      if (preference.matches) showFinalValue();
    };

    if (preference.matches) {
      showFinalValue();
    } else {
      element.textContent = `0${suffix}`;
      if (isInView) {
        animation = animate(0, value, {
          duration: 1.6,
          ease: [0.23, 1, 0.32, 1],
          onUpdate: (latest) => {
            element.textContent = `${numberFormat.format(Math.round(latest))}${suffix}`;
          },
          onComplete: () => {
            element.textContent = label;
          },
        });
      }
    }

    preference.addEventListener("change", onPreferenceChange);
    return () => {
      animation?.stop();
      preference.removeEventListener("change", onPreferenceChange);
    };
  }, [isInView, label, suffix, value]);

  return (
    <span ref={container} className="af-count-up">
      <span className="sr-only">{label}</span>
      {/* Reserve the final width and expose only the final total to screen readers. */}
      <span className="af-count-up-width" aria-hidden="true">
        {label}
      </span>
      <span ref={display} className="af-count-up-value" aria-hidden="true">
        {label}
      </span>
    </span>
  );
}
