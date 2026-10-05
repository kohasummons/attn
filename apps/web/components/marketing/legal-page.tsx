import { DitherTuning } from "@/components/effects/dither/dither-tuning";
import { SiteHeader } from "./navigation";
import { SiteFooter } from "./footer";
import { Artwork, PageContainer } from "./primitives";
import { interDisplay } from "./fonts";
import { LegalContents } from "./legal-contents";
import type { LegalDocument } from "./legal-documents";
import "./styles.css";
import "./desktop.css";
import "./mobile.css";
import "./artwork.css";
import "./legal.css";

export function LegalPage({ document }: { document: LegalDocument }) {
  return (
    <DitherTuning>
      <div
        className={`af-site af-legal af-mobile-layout ${interDisplay.variable}`}
      >
        <a href="#main" className="af-skip-link">
          Skip to content
        </a>
        <section className="af-legal-hero" aria-labelledby="legal-title">
          <div className="af-legal-artwork">
            <Artwork
              name="labs-desktop-bg.png"
              tuningGroup="hero"
              sizes="(max-width: 600px) 1287px, 100vw"
              priority
            />
          </div>
          <div className="af-guidelines" aria-hidden="true" />
          <SiteHeader />
          <h1 id="legal-title">{document.title}</h1>
        </section>
        <main id="main" className="af-legal-main">
          <PageContainer className="af-legal-layout">
            <LegalContents
              sections={document.sections.map(({ id, title }) => ({
                id,
                title,
              }))}
            />
            <article
              id="legal-article"
              className="af-legal-article"
              aria-label={document.title}
            >
              {document.sections.map(({ id, title, content }, index) => (
                <section
                  key={id}
                  id={id}
                  className="af-legal-section"
                  aria-labelledby={`${id}-title`}
                >
                  <h2 id={`${id}-title`}>{title}</h2>
                  {index === 0 && (
                    <p className="af-legal-updated">
                      Last Updated: {document.updatedAt}
                    </p>
                  )}
                  <div className="af-legal-copy">{content}</div>
                  {index === 0 && document.notice && (
                    <aside
                      className="af-legal-notice"
                      aria-label="Document status"
                    >
                      <strong>Template — pending legal review</strong>
                      {document.notice}
                    </aside>
                  )}
                </section>
              ))}
            </article>
          </PageContainer>
        </main>
        <SiteFooter />
      </div>
    </DitherTuning>
  );
}
