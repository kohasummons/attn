import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, LockKeyhole } from "lucide-react";
import { ContactDialog } from "./contact-dialog";
import { TrustLogos } from "./trust-logos";
import { CountUp } from "./count-up";
import { ContinuousTicker } from "./continuous-ticker";
import { FloatingRail } from "./floating-rail";
import { HorizontalRail } from "./horizontal-rail";
import { RedactedProductCard } from "./redacted-product-card";
import {
  featuredProducts,
  labProducts,
  links,
  services,
  partnerships,
  testimonials,
  type Product,
} from "./content";
import {
  ActionLink,
  Artwork,
  asset,
  Eyebrow,
  PageContainer,
} from "./primitives";

function SectionRails({ trust = false }: { trust?: boolean }) {
  return (
    <div
      className={`af-section-rails${trust ? " af-section-rails-trust" : ""}`}
      aria-hidden="true"
    >
      {(["left", "right"] as const).map((side) => (
        <span className="af-rail-position" key={side}>
          <FloatingRail
            name={`${trust ? "trust" : "metrics"}-${side}`}
            stopBefore={trust ? ".af-logos" : undefined}
            className="af-desktop-copy"
          />
          <FloatingRail
            name={`mobile-${side}`}
            className="af-mobile-only"
            visibleTop={49}
          />
        </span>
      ))}
    </div>
  );
}

export function TrustSection() {
  return (
    <section className="af-trust af-section">
      <SectionRails trust />
      <FloatingRail
        name="mobile-left"
        visibleTop={(73 * 178) / 250}
        stopBefore=".af-logos"
        className="af-mobile-only af-trust-decor af-trust-decor-left"
      />
      <FloatingRail
        name="mobile-right"
        visibleTop={(73 * 178) / 250}
        stopBefore=".af-logos"
        className="af-mobile-only af-trust-decor af-trust-decor-right"
      />
      <PageContainer>
        <Eyebrow>Trusted by the best</Eyebrow>
        <h2>We are trusted by industry leaders</h2>
        <TrustLogos />
      </PageContainer>
    </section>
  );
}

export function CoursesSection({ mission = false }: { mission?: boolean }) {
  return (
    <section className="af-landscape-section af-section">
      <Artwork
        blend="both"
        name={mission ? "mission-desktop-bg.png" : "courses-desktop-bg.png"}
        mobileName={mission ? "mission-mobile-bg.png" : "courses-mobile-bg.png"}
      />
      <div className="af-landscape-fade" aria-hidden="true" />
      <PageContainer className="af-split">
        <div>
          <Eyebrow>
            {mission ? (
              "Mission"
            ) : (
              <>
                <span className="af-desktop-copy">The future is now</span>
                <span className="af-mobile-copy">Trusted by the best</span>
              </>
            )}
          </Eyebrow>
          <p className="af-lead">
            {mission
              ? "That could mean building an app, automating a workflow, using AI better at work, or starting a new career."
              : "Learn AI, put it to work, and build with it at the AI University."}
          </p>
        </div>
        <div>
          <h2>
            {mission
              ? "People should leave Attention Factory able to do something they could not do before."
              : "Build practical AI skills through courses, projects, and a community of learners."}
          </h2>
          <ActionLink href={links.university}>View Our Programs</ActionLink>
        </div>
      </PageContainer>
    </section>
  );
}

function ProductCard({
  product,
  featured,
}: {
  product: Product;
  featured?: boolean;
}) {
  return (
    <article className="af-product">
      <div className="af-product-art">
        <Artwork
          name={product.backdrop}
          sizes="(max-width: 600px) 90vw, 572px"
        />
        <div className="af-product-screen">
          <Image
            src={asset(product.image)}
            alt={`${product.name} product preview`}
            fill
            sizes={
              featured
                ? "(max-width: 700px) 90vw, 550px"
                : "(max-width: 700px) 90vw, 360px"
            }
          />
        </div>
        {!featured && (
          <span
            className={
              product.href
                ? "af-live af-product-status"
                : "af-preview af-product-status"
            }
          >
            {product.href ? "Live" : "Preview"}
          </span>
        )}
        {featured && product.metric && (
          <div className="af-product-metric">
            <Image src={asset("411d5.svg")} alt="" fill sizes="130px" />
            <strong>{product.metric}</strong>
            <span>{product.metricLabel}</span>
          </div>
        )}
        {product.href && (
          <Link className="af-text-link af-product-visit" href={product.href}>
            Visit Website
            <ArrowUpRight
              className="af-desktop-copy"
              size={18}
              aria-hidden="true"
            />
            <Image
              className="af-mobile-only"
              src={asset("arrow-white.svg")}
              alt=""
              width={18}
              height={18}
            />
            <span className="sr-only">: {product.name}</span>
          </Link>
        )}
        {!product.href && (
          <span className="af-text-link af-product-visit af-product-pending">
            Website coming soon
            <ArrowUpRight
              className="af-desktop-copy"
              size={20}
              aria-hidden="true"
            />
            <Image
              className="af-mobile-only"
              src={asset("arrow-orange.svg")}
              alt=""
              width={18}
              height={18}
            />
          </span>
        )}
      </div>
      <div className="af-product-heading">
        <h3>{product.name}</h3>
      </div>
      <p>{product.description}</p>
    </article>
  );
}

export function ProjectsSection({ labs = false }: { labs?: boolean }) {
  return (
    <section
      className={`af-projects af-section${labs ? " af-lab-projects" : ""}`}
    >
      <PageContainer>
        {labs && (
          <h2 className="af-labs-heading">Experiments</h2>
        )}
        {!labs && (
          <div className="af-projects-heading">
            <Eyebrow>We are always tinkering</Eyebrow>
            <h2>
              We are builders by nature and in our labs we always try to solve
              problems using AI
            </h2>
          </div>
        )}
        <div
          className={
            labs ? "af-product-grid af-product-grid-three" : "af-product-grid"
          }
        >
          {(labs ? labProducts : featuredProducts).map((product, index) =>
            labs && product.name !== "TranscriptX" ? (
              <RedactedProductCard key={`redacted-${index}`} />
            ) : (
              <ProductCard
                key={product.name}
                product={product}
                featured={!labs}
              />
            ),
          )}
          {labs &&
            [1, 2].map((id) => (
              <RedactedProductCard key={id} />
            ))}
        </div>
      </PageContainer>
      {!labs && (
        <Link href="/labs" className="af-lab-ribbon">
          <span className="sr-only">Visit Our Lab</span>
          <ContinuousTicker>
            {Array.from({ length: 12 }, (_, i) => (
              <span key={i} className="af-lab-ribbon-item">
                <Image
                  src={asset("lab-flask.svg")}
                  alt=""
                  width={18}
                  height={18}
                />{" "}
                Visit Our Lab <i className="af-ribbon-separator" />
              </span>
            ))}
          </ContinuousTicker>
        </Link>
      )}
    </section>
  );
}

export function HeadquartersSection() {
  return (
    <section className="af-hq af-section" id="headquarters">
      <Artwork name="hq-desktop.svg" mobileName="hq-mobile.svg" />
      <div className="af-desktop-art af-hq-rails" aria-hidden="true">
        <HorizontalRail />
        <HorizontalRail />
        <HorizontalRail index={2} />
      </div>
      <HorizontalRail
        className="af-mobile-only af-hq-decor"
        width={115}
        restingX={40}
      />
      <PageContainer>
        <div className="af-split af-split-wide-left">
          <div>
            <Eyebrow>
              <span className="af-desktop-copy">
                Attention Factory University
              </span>
              <span className="af-mobile-copy">Attention Factory University</span>
            </Eyebrow>
            <h2>
              Learn the skills to turn your ideas into working projects.
            </h2>
            <ActionLink href={links.waitlist}>Join AttentionHQ</ActionLink>
          </div>
          <p className="af-lead">
            Explore practical tutorials and projects to help you build with AI
            at AttentionHQ.
          </p>
        </div>
        <p className="af-hq-note af-lead">
          <span className="af-desktop-copy">
            Join us at the university
          </span>
          <span className="af-mobile-copy">
            Join us at the university
          </span>
        </p>
      </PageContainer>
    </section>
  );
}

export function ServicesSection({ about = false }: { about?: boolean }) {
  const entries = about ? partnerships : services;
  return (
    <section className="af-services af-section" id="services">
      <PageContainer className="af-split">
        <div className="af-services-summary">
          <Eyebrow>
            {about ? "Work With Us" : "Trainings, workshops and more"}
          </Eyebrow>
          <h2>
            {about
              ? "Here are some ways to partner with us"
              : "Learn with us, train your team, or bring your next project to life."}
          </h2>
          <p className="af-services-intro af-lead">
            {about ? (
              "People come to Attention Factory to learn, train their teams, plan how AI should be used, or build something that solves a real problem."
            ) : (
              <>
                <span className="af-desktop-copy">
                  Join us at the university
                </span>
                <span className="af-mobile-copy">
                  Join us at the university
                </span>
              </>
            )}
          </p>
        </div>
        <div
          className="af-services-list"
          role="region"
          aria-label={about ? "Ways to partner with us" : "Services"}
        >
          {entries.map((service) => (
            <article key={service.title}>
              <picture className="af-service-icon">
                <source
                  media="(max-width: 600px)"
                  srcSet={asset(service.mobileIcon)}
                />
                <Image
                  src={asset(service.mobileIcon)}
                  alt=""
                  width={40}
                  height={40}
                />
              </picture>
              <div>
                <h3>{service.title}</h3>
                <p>
                  <span className="af-desktop-copy">{service.description}</span>
                  <span className="af-mobile-copy">
                    {service.description}
                  </span>
                </p>
                {service.href ? (
                  <Link className="af-text-link" href={service.href}>
                    <span className="af-desktop-copy">{service.action}</span>
                    <span className="af-mobile-copy">
                      {service.mobileAction}
                    </span>
                    <ArrowUpRight className="af-desktop-copy" size={20} />
                    <Image
                      className="af-mobile-only"
                      src={asset("arrow-ink.svg")}
                      alt=""
                      width={18}
                      height={18}
                    />
                  </Link>
                ) : (
                  <ContactDialog className="af-text-link af-text-button">
                    <span className="af-desktop-copy">{service.action}</span>
                    <span className="af-mobile-copy">
                      {service.mobileAction}
                    </span>
                    <ArrowUpRight className="af-desktop-copy" size={20} />
                    <Image
                      className="af-mobile-only"
                      src={asset("arrow-ink.svg")}
                      alt=""
                      width={18}
                      height={18}
                    />
                  </ContactDialog>
                )}
              </div>
            </article>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}

export function TestimonialsSection() {
  return (
    <section className="af-testimonials af-section">
      <SectionRails />
      <PageContainer>
        <div className="af-section-heading">
          <Eyebrow>Feedback from our AI fellows</Eyebrow>
          <h2>We are spoken of kindly</h2>
        </div>
        <div className="af-testimonial-grid">
          {testimonials.map(({ headline, quote, name, role, cohort }) => (
            <figure className="af-testimonial" key={name}>
              <blockquote>
                <h3>“{headline}”</h3>
                <p>{quote}</p>
              </blockquote>
              <figcaption>
                <strong>{name}</strong>
                <span>
                  {role}
                  {cohort ? (
                    <>
                      <i aria-hidden="true" /> {cohort}
                    </>
                  ) : null}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}

export function ArticlesSection() {
  return (
    <section className="af-articles af-section">
      <PageContainer>
        <div className="af-section-heading">
          <Eyebrow>State of intelligence</Eyebrow>
          <h2>We write about the new things in AI</h2>
        </div>
        <div className="af-article-grid">
          {["September", "August", "July"].map((month, index) => (
            <article key={month}>
              <div className="af-article-image">
                <Artwork
                  name={`article-${index + 1}-desktop.png`}
                  sizes="(max-width: 600px) 90vw, 380px"
                />
              </div>
              <h3>AI Roundup For {month}</h3>
              <p>
                The {month} AI roundup is not yet available. Check back for
                updates.
              </p>
              <span className="af-text-link af-article-locked">
                Coming soon
                <LockKeyhole size={20} aria-hidden="true" />
                <span className="sr-only"> — locked, not yet available</span>
              </span>
            </article>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}

export function StorySection() {
  return (
    <section className="af-story af-section">
      <Artwork name="story-desktop.svg" mobileName="story-mobile.svg" />
      <div className="af-desktop-art af-story-rails" aria-hidden="true">
        <Image
          src={asset("story-decor-vertical.png")}
          alt=""
          width={16}
          height={609}
        />
        <Image
          src={asset("story-decor-horizontal.png")}
          alt=""
          width={251}
          height={64}
        />
      </div>
      <PageContainer className="af-story-content">
        <Eyebrow>Humble beginnings</Eyebrow>
        <h2>
          <span>
            The AI University began with free online content that showed people
            how to use AI for real work.
          </span>
          <span>
            As the audience grew, people asked for deeper classes, more
            structure, and help applying AI to their own work.
          </span>
        </h2>
        <p className="af-lead af-story-summary">
          Because the work began online, the audience and client base crossed borders from the start. Some of our earliest clients were in the UK and Canada. Today, we work with learners and organizations across Africa and beyond.
        </p>
        <div className="af-lead af-story-note">
          <p>
            The learning programs grew to include free masterclasses,
            Weekends of AI, and intensive bootcamps.
          </p>
          <p>
            Businesses began coming to us with another set of needs: team
            training, software development, workflow automation, and help
            deciding where AI fits.
          </p>
        </div>
        <ActionLink href={links.university}>View Our Programs</ActionLink>
      </PageContainer>
    </section>
  );
}

export function MetricsSection() {
  const metrics = [
    [250000, "People reached through our educational content."],
    [3200, "Learners trained through Weekends of AI."],
    [160, "Learners who have completed our intensive bootcamp."],
  ] as const;
  return (
    <section className="af-metrics af-section">
      <SectionRails />
      <PageContainer>
        <div className="af-section-heading">
          <Eyebrow>Metrics</Eyebrow>
          <h2>A few numbers from our journey</h2>
        </div>
        <dl>
          {metrics.map(([value, description]) => (
            <div key={value}>
              <dt>
                <CountUp value={value} suffix="+" />
              </dt>
              <dd>{description}</dd>
            </div>
          ))}
        </dl>
      </PageContainer>
    </section>
  );
}
