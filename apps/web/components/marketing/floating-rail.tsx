"use client";

import {
  useId,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { motion, useTransform } from "motion/react";
import {
  getRailProgress,
  railPhase,
  railSettings,
} from "./rail-motion";
import { getSquarePosition } from "./rail-motion-math";
import artwork from "./rail-artwork.json";
import { useRailAnimation } from "./use-rail-animation";

type SquareGeometry = {
  lineTop: number;
  lineBottom: number;
  squareTop: number;
  squareBottom: number;
};

function FloatingSquare({
  geometry,
  index,
  top,
  bottom,
  still,
  markup,
  squareScaleY,
}: {
  geometry: SquareGeometry;
  index: number;
  top: number;
  bottom: number;
  still: boolean;
  markup: string;
  squareScaleY: number;
}) {
  const size = (geometry.squareBottom - geometry.squareTop) * squareScaleY;
  const start = Math.max(top, geometry.lineTop);
  const end = Math.max(start, Math.min(bottom, geometry.lineBottom) - size);
  const transform = useTransform(() => {
    if (still) {
      const restingTop = Math.max(start, Math.min(end, geometry.squareTop));
      return `translateY(${restingTop - geometry.squareTop}px)`;
    }
    const settings = railSettings.get();
    const position = getSquarePosition({
      ...settings,
      progress: getRailProgress(railPhase.get(), settings, index),
      start,
      end,
    });
    return `translateY(${position - geometry.squareTop}px)`;
  });
  return (
    <motion.g
      className="af-floating-square"
      style={{ transform }}
      data-travel-top={start}
      data-travel-bottom={end + size}
    >
      <g
        transform={`translate(0 ${geometry.squareTop}) scale(1 ${squareScaleY}) translate(0 ${-geometry.squareTop})`}
        dangerouslySetInnerHTML={{ __html: markup }}
      />
    </motion.g>
  );
}

export function FloatingRail({
  name,
  className,
  visibleTop = 0,
  stopBefore,
}: {
  name: keyof typeof artwork;
  className?: string;
  /** Top of the visible rail in SVG units, after section clipping. */
  visibleTop?: number;
  /** A sibling inside the section that the rail must never overlap. */
  stopBefore?: string;
}) {
  const id = useId().replace(/:/g, "");
  const svg = useRef<SVGSVGElement>(null);
  const reduceMotion = useRailAnimation();
  const compact = name.startsWith("mobile");
  const mirrored = name.endsWith("right");
  const source =
    artwork[
      compact
        ? "mobile-left"
        : name.startsWith("trust")
          ? "trust-left"
          : "metrics-left"
    ];
  const [bottom, setBottom] = useState(source.height);
  const [squareScaleY, setSquareScaleY] = useState(1);
  const width = compact ? 32 : 64;

  useLayoutEffect(() => {
    const rail = svg.current;
    const section = rail?.closest("section");
    const boundary = stopBefore
      ? section?.querySelector(stopBefore)
      : undefined;
    if (!rail) return;
    const measure = () => {
      const rect = rail.getBoundingClientRect();
      if (!rect.height || !rect.width) return;
      // Preserve square artwork when CSS stretches the rail vertically.
      const scaleY = (rect.width / width) / (rect.height / source.height);
      setSquareScaleY((previous) => Math.abs(previous - scaleY) < 0.0001 ? previous : scaleY);
      if (!boundary) return;
      // Convert the actual ticker edge into SVG units, leaving an 8px gap.
      const limit =
        ((boundary.getBoundingClientRect().top - rect.top - 8) *
          source.height) /
        rect.height;
      const next = Math.max(visibleTop, Math.min(source.height, limit));
      setBottom((previous) =>
        Math.abs(previous - next) < 0.01 ? previous : next,
      );
    };
    const observer = new ResizeObserver(measure);
    observer.observe(rail);
    if (section) observer.observe(section);
    if (boundary) observer.observe(boundary);
    measure();
    // Font loading can move the ticker without changing its own dimensions.
    let active = true;
    void document.fonts.ready.then(() => {
      if (active) measure();
    });
    return () => {
      active = false;
      observer.disconnect();
    };
  }, [source.height, stopBefore, visibleTop, width]);

  const scopePaints = (markup: string) =>
    markup.replace(/(id="|url\(#|xlink:href="#)([^")]+)/g, `$1${id}-$2`);

  return (
    <svg
      ref={svg}
      className={`af-floating-rail ${className ?? ""}`}
      width={width}
      height={source.height}
      viewBox={source.viewBox}
      fill="none"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <clipPath id={`${id}-travel`}>
          <rect
            x="0"
            y={visibleTop}
            width={width}
            height={Math.max(0, bottom - visibleTop)}
          />
        </clipPath>
      </defs>
      <g clipPath={`url(#${id}-travel)`}>
        <g
          transform={mirrored ? `translate(${width} 0) scale(-1 1)` : undefined}
        >
          <g dangerouslySetInnerHTML={{ __html: scopePaints(source.rails) }} />
          {source.squares.map((square, index) => (
            <FloatingSquare
              key={index}
              geometry={source.geometry[index]}
              squareScaleY={squareScaleY}
              index={index}
              top={visibleTop}
              bottom={bottom}
              still={reduceMotion}
              markup={scopePaints(square)}
            />
          ))}
        </g>
      </g>
    </svg>
  );
}
