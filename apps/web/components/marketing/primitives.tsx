import Image from "next/image";
import { DitherImage } from "@/components/effects/dither/dither-image";
import { paintingAssets } from "./artwork-sources";
import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";
import { ParallaxArtwork } from "./parallax-artwork";

export const asset = (filename: string) => `/redesign/${filename}`;

export function PageContainer({
  className,
  ...props
}: ComponentProps<typeof Container>) {
  return <Container className={cn("af-container", className)} {...props} />;
}

export function Eyebrow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={cn("af-eyebrow", className)}>
      <span aria-hidden="true" />
      {children}
    </p>
  );
}

export function ActionLink({
  className,
  children,
  ...props
}: ComponentProps<typeof Link>) {
  return (
    <Link className={cn(buttonVariants(), "af-button", className)} {...props}>
      {children}
    </Link>
  );
}

export function Artwork({
  name,
  mobileName,
  className,
  priority = false,
  sizes = "100vw",
  blend,
  tuningGroup,
}: {
  tuningGroup?: string;
  name: string;
  mobileName?: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  blend?: "top" | "bottom" | "both";
}) {
  const painting = paintingAssets[name];
  const mobilePainting = mobileName ? paintingAssets[mobileName] : undefined;
  const picture = painting ? (
    <DitherImage
      {...painting}
      tuningGroup={tuningGroup}
      mobileSrc={
        mobilePainting?.src !== painting.src ? mobilePainting?.src : undefined
      }
      sizes={sizes}
      priority={priority}
    />
  ) : (
    <picture>
      {mobileName && (
        <source media="(max-width: 600px)" srcSet={asset(mobileName)} />
      )}
      <Image src={asset(name)} alt="" fill sizes={sizes} priority={priority} />
    </picture>
  );

  return blend ? (
    <ParallaxArtwork className={cn("af-artwork", className)} blend={blend}>
      {picture}
    </ParallaxArtwork>
  ) : (
    <div className={cn("af-artwork", className)} aria-hidden="true">
      {picture}
    </div>
  );
}
