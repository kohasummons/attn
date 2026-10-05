"use client";

import Image, { getImageProps } from "next/image";
import { useEffect, useRef, type CSSProperties } from "react";
import type { DitherHandle, DitherOptions } from "./dither-types";
import { useDitherTuning } from "./dither-tuning-context";
import { ditherSiteDefaults, originalImageColors } from "./dither-defaults";
import "./dither.css";

export type DitherImageProps = DitherOptions & {
  tuningGroup?: string;
  src: string;
  mobileSrc?: string;
  alt?: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
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
      {...imageColors}
      {...tuning?.options}
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
