import Image from "next/image";
import Link from "next/link";
import { ContactDialog } from "./contact-dialog";
import { links } from "./content";
import { Artwork, asset, PageContainer } from "./primitives";

const columns = [
  {
    title: "Services",
    items: [
      ["Software Development", links.services],
      ["Workflow Automation", links.services],
      ["AI Planning", links.services],
      ["Ongoing AI Support", links.services],
      ["Organization Training", "/v2/organizations"],
    ],
  },
  {
    title: "AI HQ",
    items: [
      ["Courses", links.university],
      ["Membership", links.waitlist],
      ["Weekends of AI", links.workshops],
    ],
  },
  {
    title: "Resources",
    items: [
      ["Playbooks", links.guides],
      ["Guides and Tools", links.guides],
      ["Events and Workshops", links.workshops],
    ],
  },
  {
    title: "Company",
    items: [
      ["About Us", "/about"],
      ["Contact Us", null],
      ["Privacy Policy", "/v2/privacy-policy"],
      ["Terms of Usage", "/v2/terms-of-service"],
    ],
  },
];
const agents = [
  { name: "ChatGPT", icon: "agent-chatgpt.svg", href: "https://chatgpt.com" },
  { name: "Claude", icon: "agent-claude.svg", href: "https://claude.ai" },
  { name: "Grok", icon: "agent-grok.svg", href: "https://grok.com" },
  { name: "Gemini", icon: "6792f.svg", href: "https://gemini.google.com" },
  {
    name: "Perplexity",
    icon: "agent-perplexity.svg",
    href: "https://perplexity.ai",
  },
];

function AgentCard() {
  return (
    <div className="af-agent-card">
      <Artwork name="agent-painting.png" mobileName="agent-mobile-bg.png" />
      <div className="af-agent-content">
        <div className="af-agent-links">
          {agents.map((agent) => (
            <a
              key={agent.name}
              href={agent.href}
              target="_blank"
              rel="noreferrer"
            >
              <Image src={asset(agent.icon)} alt="" width={32} height={32} />
              {agent.name}
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          ))}
        </div>
        <p>Ask your favourite agent about attention factory</p>
      </div>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="af-footer">
      <PageContainer>
        <picture className="af-wordmark" aria-hidden="true">
          <source
            media="(max-width: 600px)"
            srcSet={asset("footer-wordmark-mobile.svg")}
          />
          <Image
            src={asset("footer-wordmark.svg")}
            alt=""
            width={1160}
            height={232}
          />
        </picture>
      </PageContainer>
      <div className="af-footer-body">
        <Artwork
          name="footer-desktop-bg.png"
          mobileName="footer-mobile-bg.png"
        />
        <div className="af-footer-fade" aria-hidden="true" />
        <PageContainer>
          <div className="af-footer-top">
            <div className="af-footer-brand">
              <Link href="/" aria-label="Attention Factory home">
                <Image
                  src={asset("attention-factory-logo.svg")}
                  alt="Attention Factory"
                  width={275}
                  height={36}
                />
              </Link>
              <p>
                AI is your multiplier. We make you equipped to become 10x with
                it
              </p>
              <p className="af-mobile-only af-system-status">
                <span aria-hidden="true" />
                All systems operational
              </p>
            </div>
            <div className="af-footer-columns">
              {columns.map((column) => (
                <div key={column.title}>
                  <h2>{column.title}</h2>
                  <ul>
                    {column.items.map(([label, href]) => (
                      <li key={label}>
                        {href ? (
                          <Link href={href}>{label}</Link>
                        ) : (
                          <ContactDialog className="af-footer-contact" />
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <AgentCard />
            <p className="af-mobile-only af-system-status af-footer-status">
              <span aria-hidden="true" />
              All systems operational
            </p>
          </div>
          <div className="af-footer-bottom">
            <span>© {new Date().getFullYear()} Attention Factory</span>
            <span className="af-built-for">Built for people who build.</span>
          </div>
        </PageContainer>
      </div>
    </footer>
  );
}
