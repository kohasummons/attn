"use client";

import { useEffect, useState } from "react";
// Aliased: this file also uses the DOM `new Image()` constructor to preload.
import NextImage from "next/image";
import Link from "next/link";

interface ServiceLayoutProps {
  title: string;
  subtitle: string;
  carouselItems?: CarouselItem[];
  children: React.ReactNode;
}

export interface CarouselItem {
  src: string;
  alt: string;
}

const defaultCarouselItems: CarouselItem[] = [
  {
    src: "/images/service-carousel-01.svg",
    alt: "AI Video Ads concept image",
  },
  {
    src: "/images/service-carousel-02.svg",
    alt: "AI Spokesperson concept image",
  },
  {
    src: "/images/service-carousel-03.svg",
    alt: "Programmatic SEO concept image",
  },
  {
    src: "/images/service-carousel-04.svg",
    alt: "Social content automation concept image",
  },
  {
    src: "/images/service-carousel-05.svg",
    alt: "Voice cloning concept image",
  },
  {
    src: "/images/service-carousel-06.svg",
    alt: "Music video visuals concept image",
  },
];

export function ServiceLayout({ title, subtitle, carouselItems, children }: ServiceLayoutProps) {
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});
  const items = carouselItems && carouselItems.length > 0 ? carouselItems : defaultCarouselItems;

  const handleImageLoad = (src: string) => {
    setLoadedImages((prev) => (prev[src] ? prev : { ...prev, [src]: true }));
  };

  useEffect(() => {
    let isMounted = true;

    items.forEach((item) => {
      const image = new Image();
      image.src = item.src;
      image.onload = () => {
        if (isMounted) {
          handleImageLoad(item.src);
        }
      };
      image.onerror = () => {
        if (isMounted) {
          handleImageLoad(item.src);
        }
      };
    });

    return () => {
      isMounted = false;
    };
  }, [items]);

  return (
    <div className="min-h-screen bg-white font-mono text-sm">
      <div className="max-w-2xl mx-auto px-6 py-8 md:py-12">
        {/* Header */}
        <header className="flex items-center justify-between mb-12">
          <Link href="/" className="text-lg font-medium text-black tracking-tight hover:text-[#5B6EF7] transition-colors">
            Attention Factory
          </Link>
          <Link href="/#services" className="text-[#5B6EF7] hover:underline">
            ← All Services
          </Link>
        </header>

        {/* Service Header */}
        <section className="mb-12">
          <h1 className="text-2xl font-medium text-black mb-3">{title}</h1>
          <p className="text-gray-600">{subtitle}</p>
          <div className="mt-6">
            <div className="service-carousel">
              <div className="service-carousel__track">
                {[...items, ...items].map((item, index) => (
                  <div
                    key={`${item.src}-${index}`}
                      className={`service-carousel__item shrink-0 w-[220px] h-[155px] border border-gray-100 ${
                      loadedImages[item.src] ? "" : "is-loading"
                    }`}
                    aria-hidden={index >= items.length}
                  >
                    <NextImage
                      src={item.src}
                      alt={item.alt}
                      width={220}
                      height={155}
                      // These are static SVGs; the image optimizer rejects SVG
                      // unless `dangerouslyAllowSVG` is on, so serve them as-is.
                      unoptimized
                      className={`service-carousel__image w-full h-full object-cover ${
                        loadedImages[item.src] ? "is-loaded" : ""
                      }`}
                      loading="eager"
                      decoding="async"
                      onLoad={() => handleImageLoad(item.src)}
                      onError={() => handleImageLoad(item.src)}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Custom Content */}
        {children}

        {/* CTA */}
        <section className="mt-16 pt-8 border-t border-gray-100">
          <h3 className="text-base font-medium text-black mb-3">Ready to get started?</h3>
          <p className="text-gray-600 mb-6">Let&apos;s talk about your project.</p>
          <a
            href="mailto:hello@attentionfactory.io"
            className="inline-flex items-center gap-2 text-[#5B6EF7] hover:underline"
          >
            Get in touch <span>→</span>
          </a>
        </section>

        {/* Footer Nav */}
        {/* <section className="mt-16 pt-8 border-t border-gray-100">
          <div className="flex gap-6">
            <Link href="/" className="text-gray-500 hover:text-[#5B6EF7]">
              Home
            </Link>
            <Link href="/#services" className="text-gray-500 hover:text-[#5B6EF7]">
              Services
            </Link>
            <a href="mailto:hello@attentionfactory.io" className="text-gray-500 hover:text-[#5B6EF7]">
              Contact
            </a>
          </div>
        </section> */}
      </div>
    </div>
  );
}
