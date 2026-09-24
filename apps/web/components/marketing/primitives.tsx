import Image from "next/image";
import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

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
}: {
  name: string;
  mobileName?: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div className={cn("af-artwork", className)} aria-hidden="true">
      <picture>
        {mobileName && (
          <source media="(max-width: 600px)" srcSet={asset(mobileName)} />
        )}
        <Image
          src={asset(name)}
          alt=""
          fill
          sizes="100vw"
          priority={priority}
        />
      </picture>
    </div>
  );
}
