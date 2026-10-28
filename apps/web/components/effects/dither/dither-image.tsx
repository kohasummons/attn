"use client";

import Image, { getImageProps } from "next/image";
import { useEffect, useRef, type CSSProperties } from "react";
import type { DitherHandle, DitherOptions } from "./dither-types";
import { useDitherTuning } from "./dither-tuning-context";
import {
  ditherGroupPresets,
  ditherSiteDefaults,
  originalImageColors,
} from "./dither-defaults";
import "./dither.css";

export type DitherImageProps = DitherOptions & {
  tuningGroup?: string;
  src: string;
  mobileSrc?: string;
  alt?: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
  /** Selector, inside the same section, whose hover or focus brings back full color. */
  colorOnHover?: string;
};

export function DitherImage(props: DitherImageProps) {
  const tuning = useDitherTuning(props.tuningGroup);
  const imageColors = tuning?.overrideImageColors === false
    ? {
        dim: props.dim ?? originalImageColors.dim,
        contrast: props.contrast ?? originalImageColors.contrast,
        saturation: props.saturation ?? originalImageColors.saturation,
        warmth: props.warmth ?? originalImageColors.warmth,
      }
    : {};
  return (
    <DitherImageView
      {...props}
      {...ditherSiteDefaults}
      {...(props.tuningGroup ? ditherGroupPresets[props.tuningGroup] : undefined)}
      {...imageColors}
      {...tuning?.options}
      {...(props.colorOnHover ? { saturation: 0 } : {})}
    />
  );
}

function DitherImageView({
  src,
  mobileSrc,
  alt = "",
  sizes = "100vw",
  priority = false,
  className = "",
  strength,
  levels,
  pixelSize,
  dim,
  contrast,
  saturation,
  warmth,
  animated,
  animationDuration,
  animationAmount,
  colorOnHover,
}: DitherImageProps & Required<DitherOptions>) {
  const element = useRef<HTMLSpanElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  const handle = useRef<DitherHandle | null>(null);
  const options = useRef<DitherOptions>({});
  useEffect(() => {
    options.current = {
      strength,
      levels,
      pixelSize,
      dim,
      contrast,
      saturation,
      warmth,
      animated,
      animationDuration,
      animationAmount,
    };
    handle.current?.update(options.current);
  }, [
    strength,
    levels,
    pixelSize,
    dim,
    contrast,
    saturation,
    warmth,
    animated,
    animationDuration,
    animationAmount,
  ]);

  useEffect(() => {
    const root = element.current;
    const target = canvas.current;
    if (!root || !target) return;
    let cancelled = false;
    let registration: DitherHandle | undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        // The same proximity signal starts image loading and the effect. This
        // also handles browsers that defer lazy images inside layered artwork.
        const image = root.querySelector("img");
        if (!image) return;
        image.loading = "eager";
        void import("./dither-renderer")
          .then(({ registerDither }) => {
            if (cancelled) return;
            try {
              registration = registerDither(
                root,
                image,
                target,
                options.current,
              );
              handle.current = registration;
            } catch {
              /* The clean, color-graded image remains visible without WebGL. */
            }
          })
          .catch(() => {});
      },
      { rootMargin: "200px" },
    );
    observer.observe(root);
    return () => {
      cancelled = true;
      observer.disconnect();
      registration?.dispose();
      handle.current = null;
    };
  }, [src, mobileSrc]);

  useEffect(() => {
    const trigger = colorOnHover
      ? element.current?.closest("section")?.querySelector<HTMLElement>(colorOnHover)
      : null;
    if (!trigger) return;
    let frame = 0;
    let current = saturation;
    const fadeTo = (target: number) => {
      cancelAnimationFrame(frame);
      const from = current;
      const start = performance.now();
      const step = (now: number) => {
        const t = Math.min((now - start) / 500, 1);
        current = from + (target - from) * (1 - (1 - t) ** 3);
        handle.current?.update({ ...options.current, saturation: current });
        if (t < 1) frame = requestAnimationFrame(step);
      };
      frame = requestAnimationFrame(step);
    };
    const enter = () => fadeTo(1);
    const leave = () => fadeTo(saturation);
    const events = [
      ["pointerenter", enter],
      ["focus", enter],
      ["pointerleave", leave],
      ["blur", leave],
    ] as const;
    for (const [name, fn] of events) trigger.addEventListener(name, fn);
    return () => {
      cancelAnimationFrame(frame);
      for (const [name, fn] of events) trigger.removeEventListener(name, fn);
    };
  }, [colorOnHover, saturation]);

  const mobileImage = mobileSrc
    ? getImageProps({ src: mobileSrc, alt, fill: true, sizes, quality: 90 })
        .props
    : undefined;
  return (
    <span
      ref={element}
      className={`dither-image ${className}`}
      data-dither-strength={strength}
      data-dither-levels={levels}
      data-dither-pixel-size={pixelSize}
      data-dither-animated={animated}
      data-dither-duration={animationDuration}
      data-dither-amount={animationAmount}
      style={
        {
          "--dither-dim": dim,
          "--dither-contrast": contrast,
          "--dither-saturation": saturation,
        } as CSSProperties
      }
    >
      <picture>
        {mobileImage && (
          <source
            media="(max-width: 600px)"
            srcSet={mobileImage.srcSet}
            sizes={mobileImage.sizes}
          />
        )}
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          quality={90}
        />
      </picture>
      <canvas ref={canvas} data-dither-canvas="" aria-hidden="true" />
    </span>
  );
}
