import Image from "next/image";
import { Building2 } from "lucide-react";
import { SiteHeader } from "./navigation";
import { ActionLink, Artwork, PageContainer, asset } from "./primitives";
import { links } from "./content";
import { HqLaunchCountdown } from "./hq-launch-countdown";

export function Hero({ page = "home" }: { page?: "home" | "about" | "labs" }) {
  const about = page === "about";
  const labs = page === "labs";
  return (
    <section className={`af-hero${labs ? " af-hero-compact" : ""}`}>
      <Artwork
        tuningGroup="hero"
        blend="bottom"
        name={
          page === "home"
            ? "hero-desktop-bg.png"
            : labs
              ? "labs-desktop-bg.png"
              : "about-desktop-bg.png"
        }
        mobileName={
          page === "home"
            ? "hero-mobile-bg.png"
            : about
              ? "about-mobile-bg.png"
              : undefined
        }
        // A portrait hero crops a wide painting: request enough pixels for
        // its rendered height, rather than only the narrow viewport width.
        sizes={
          labs
            ? "(max-width: 600px) 700px, 100vw"
            : "(max-width: 600px) 1200px, (max-width: 1100px) 1400px, 100vw"
        }
        priority
      />
      <div className="af-hero-fade" aria-hidden="true" />
      <div className="af-guidelines" aria-hidden="true" />
      <SiteHeader />
      <PageContainer className="af-hero-content">
        {labs ? (
          <>
            <h1>attn.labs</h1>
          </>
        ) : (
          <>
            <a
              className="af-launch-badge"
              href="https://academy.attentionfactory.io/ai-university"
            >
              <Building2
                className="af-desktop-copy"
                size={20}
                aria-hidden="true"
              />
              <Image
                className="af-mobile-only"
                src={asset("hq-badge.svg")}
                alt=""
                width={18}
                height={18}
              />
              <HqLaunchCountdown className="af-desktop-copy" />
              <HqLaunchCountdown className="af-mobile-copy" />
            </a>
            <h1>
              {about ? (
                <>
                  We help people <em>learn AI</em>, use it at work, and{" "}
                  <em>build with it.</em>
                </>
              ) : (
                <>
                  AI is a <em>multiplier</em>.
                  <br />
                  We make it <em>work for you</em>.
                </>
              )}
            </h1>
            <p>
              {about
                ? "Attention Factory is an AI education and technology company. What started as free online content has grown into learning programs for individuals, training for teams, and software and automation for organizations."
                : (
                  <>
                    Getting value from AI is a different job.
                    <br />
                    We help you do that.
                  </>
                )}
            </p>
            <ActionLink href={about ? links.waitlist : links.university}>
              {about ? (
                "Join AttentionHQ"
              ) : (
                "Join the AI University"
              )}
            </ActionLink>
          </>
        )}
      </PageContainer>
    </section>
  );
}
