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
      ["Privacy Policy", "/v2/privacy-policy"],
      ["Terms of Usage", "/v2/terms-of-service"],
    ],
  },
];
const agents = [
  { name: "ChatGPT", icon: "103d9.svg", href: "https://chatgpt.com" },
  { name: "Claude", icon: "c1e6f.svg", href: "https://claude.ai" },
  { name: "Grok", icon: "48bb3.svg", href: "https://grok.com" },
  { name: "Gemini", icon: "6792f.svg", href: "https://gemini.google.com" },
  { name: "Perplexity", icon: "b264e.svg", href: "https://perplexity.ai" },
];

export function SiteFooter() {
  return (
    <footer className="af-footer">
      <div className="af-wordmark" aria-hidden="true">
        <Image
          src={asset("180be.png")}
          alt=""
          width={1300}
          height={171}
          sizes="95vw"
        />
        <span className="af-coordinate af-coordinate-left">x</span>
        <span className="af-coordinate af-coordinate-right">y</span>
      </div>
      <div className="af-footer-body">
        <Artwork name="footer-painting.png" />
        <div className="af-footer-fade" aria-hidden="true" />
        <PageContainer>
          <div className="af-footer-top">
            <div className="af-footer-brand">
              <Link href="/" aria-label="Attention Factory home">
                <Image
                  src={asset("950cb.png")}
                  alt="Attention Factory"
                  width={199}
                  height={26}
                />
              </Link>
              <p>
                AI is your multiplier. We make you equipped to become 10x with
                it
              </p>{" "}
              <div className="af-agent-card">
                <Artwork name="agent-painting.png" />
                <div>
                  <p>Ask your favourite agent about attention factory</p>
                  <div className="af-agent-links">
                    {agents.map((agent) => (
                      <a
                        key={agent.name}
                        href={agent.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Image
                          src={asset(agent.icon)}
                          alt=""
                          width={20}
                          height={20}
                        />
                        {agent.name}
                        <span className="sr-only"> (opens in a new tab)</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="af-footer-columns">
              {columns.map((column) => (
                <div key={column.title}>
                  <h2>{column.title}</h2>
                  <ul>
                    {column.items.map(([label, href]) => (
                      <li key={label}>
                        <Link href={href!}>{label}</Link>
                      </li>
                    ))}
                    {column.title === "Company" && (
                      <li>
                        <ContactDialog className="af-footer-contact" />
                      </li>
                    )}
                  </ul>
                </div>
              ))}
            </div>
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
