import Image from "next/image";
import { Building2 } from "lucide-react";
import { SiteHeader } from "./navigation";
import { ActionLink, Artwork, PageContainer, asset } from "./primitives";
import { links } from "./content";

export function Hero({ page = "home" }: { page?: "home" | "about" | "labs" }) {
  const about = page === "about";
  const labs = page === "labs";
  return (
    <section className={`af-hero${labs ? " af-hero-compact" : ""}`}>
      <Artwork
        name={page === "home" ? "hero-painting.png" : "about-painting.png"}
        mobileName={page === "home" ? "hero-mobile-bg.png" : undefined}
        priority
      />
      <div className="af-hero-fade" aria-hidden="true" />
      <div className="af-guidelines" aria-hidden="true" />
      <SiteHeader />
      <PageContainer className="af-hero-content">
        {labs ? (
          <>
            <h1>Attention Factory Labs</h1>
            <p>Our Products and Experimentation</p>
          </>
        ) : (
          <>
            <a className="af-launch-badge" href={links.waitlist}>
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
              <span className="af-desktop-copy">
                Attention HQ · Opens 5 October 2026
              </span>
              <span className="af-mobile-copy">
                Attention HQ Opens in 12 Days
              </span>
            </a>
            <h1>
              {about ? (
                <>
                  We help people <em>learn AI</em> for the purpose of{" "}
                  <em>creating value</em>
                </>
              ) : (
                <>
                  Learn to <em>leverage AI</em> not just talk about{" "}
                  <em>leveraging AI</em>
                </>
              )}
            </h1>
            <p>
              {about
                ? "What started as free online content has grown into learning programs for individuals, training for teams, and software and automation for organizations."
                : "You now use AI to automate processes, but there is a lot of value you leave on the table. We are here to bring that value to you"}
            </p>
            <ActionLink href={about ? links.waitlist : links.university}>
              {about ? (
                "Join The HQ"
              ) : (
                <>
                  <span className="af-desktop-copy">Join Our Training</span>
                  <span className="af-mobile-copy">View Our Courses</span>
                </>
              )}
            </ActionLink>
          </>
        )}
      </PageContainer>
    </section>
  );
}
