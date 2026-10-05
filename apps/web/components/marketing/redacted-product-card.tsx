import Image from "next/image";
import { GlassScene, GlassSurface } from "@/components/effects/glass/glass";
import { Artwork, asset } from "./primitives";

export function RedactedProductCard() {
  return (
    <article className="af-product af-redacted">
      <GlassScene
        className="af-product-art"
        backdropSelector=".af-product-screen img"
        refraction={14}
        frost={0.2}
        tint={0.012}
      >
        <Artwork
          name="product-2-desktop-bg.png"
          sizes="(max-width: 600px) 90vw, 380px"
        />
        <div className="af-product-screen">
          <Image
            src={asset("6bc7a.svg")}
            alt=""
            fill
            sizes="360px"
          />
        </div>
        <GlassSurface className="af-product-lock" aria-hidden="true">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M8 10V7a4 4 0 0 1 8 0v3" stroke="white" strokeWidth="2" />
            <rect x="5" y="10" width="14" height="12" rx="3" fill="white" />
            <path d="M12 15v3" stroke="#555" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </GlassSurface>
        <span className="af-redacted-label">REDACTED</span>
      </GlassScene>
      <h3>[Redacted]</h3>
      <p>[Redacted]</p>
    </article>
  );
}
