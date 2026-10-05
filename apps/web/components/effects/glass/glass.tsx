"use client";

import { useEffect, useRef, type ComponentProps } from "react";
import { useRender } from "@base-ui/react/use-render";
import { cn } from "@/lib/utils";
import type { GlassOptions } from "./glass-renderer";
import "./glass.css";

type GlassSceneProps = Omit<ComponentProps<"div">, "ref"> &
  GlassOptions & {
    /** A centered, object-fit: cover image inside this scene. */
    backdropSelector?: string;
  };

export function GlassScene({
  children,
  className,
  backdropSelector = "[data-glass-backdrop] img",
  refraction,
  frost,
  tint,
  ...props
}: GlassSceneProps) {
  const root = useRef<HTMLDivElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const element = root.current;
    const target = canvas.current;
    if (!element || !target) return;
    let cancelled = false;
    let dispose: (() => void) | undefined;
    // Load Three.js only when this scene approaches the viewport.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        void import("./glass-renderer")
          .then(({ createGlassRenderer }) => {
            if (cancelled) return;
            const image =
              element.querySelector<HTMLImageElement>(backdropSelector);
            if (!image) return;
            try {
              dispose = createGlassRenderer(element, target, image, {
                refraction,
                frost,
                tint,
              });
            } catch {
              delete element.dataset.glassReady;
            }
          })
          .catch(() => {
            /* Keep the CSS glass when WebGL or the chunk is unavailable. */
          });
      },
      { rootMargin: "200px" },
    );
    observer.observe(element);
    return () => {
      cancelled = true;
      observer.disconnect();
      dispose?.();
    };
  }, [backdropSelector, refraction, frost, tint]);

  return (
    <div
      {...props}
      ref={root}
      className={cn("glass-scene", className)}
      data-glass-scene=""
    >
      <canvas ref={canvas} className="glass-canvas" aria-hidden="true" />
      {children}
    </div>
  );
}

/** Compose with a native link or an existing shadcn button through `render`. */
export function GlassSurface({
  render,
  className,
  ...props
}: useRender.ComponentProps<"div">) {
  return useRender({
    defaultTagName: "div",
    render,
    props: {
      ...props,
      className: cn("glass-surface", className),
      "data-glass-surface": "",
    },
  });
}
