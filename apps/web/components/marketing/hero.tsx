import { Building2 } from "lucide-react";
import { SiteHeader } from "./navigation";
import { ActionLink, Artwork, PageContainer } from "./primitives";
import { links } from "./content";

export function Hero({ page = "home" }: { page?: "home" | "about" | "labs" }) {
  const about = page === "about";
  const labs = page === "labs";
  return (
    <section className={`af-hero${labs ? " af-hero-compact" : ""}`}>
      <Artwork
        name={page === "home" ? "hero-painting.png" : "about-painting.png"}
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
              <Building2 size={20} aria-hidden="true" />
              Attention HQ · Opens 5 October 2026
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
            <ActionLink href={about ? links.waitlist : links.workshops}>
              {about ? "Join The HQ" : "Join Our Training"}
            </ActionLink>
          </>
        )}
      </PageContainer>
    </section>
  );
}
