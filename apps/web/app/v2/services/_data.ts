export type CTA = { label: string; href: string };

export type Tone = "light" | "paper";

export type ShowcaseVariant = "wireframes" | "workflow" | "roadmap" | "cadence";

export type ProcessStep = { title: string; body: string };
/** A card in the sliding support strip: title, one line, and its image. */
export type ListCard = {
  title: string;
  body: string;
  image: string;
  alt: string;
};
export type Feature = { name: string; body: string };
export type Deliverable = { name: string; body: string };
export type WorkProject = {
  name: string;
  /** Short category, sentence case. */
  tag: string;
  /** One line on what it is. */
  blurb: string;
  image: string;
};

/**
 * Every service page is assembled from an ordered list of blocks so the four
 * pages share one visual system but keep the distinct flow each one needs.
 * The copy inside is authored and used verbatim.
 */
export type Block =
  | { kind: "opening"; tone?: Tone; title: string[]; body: string[] }
  | {
      kind: "showcase";
      tone?: Tone;
      variant?: ShowcaseVariant;
      image?: string;
      alt?: string;
    }
  | {
      kind: "process";
      id?: string;
      eyebrow: string;
      title: string;
      muted?: string;
      intro?: string;
      numbered: boolean;
      steps: ProcessStep[];
      note?: string;
    }
  | {
      kind: "deliverables";
      id?: string;
      tone?: Tone;
      eyebrow: string;
      title: string;
      muted: string;
      items: Deliverable[];
    }
  | {
      kind: "grid";
      id?: string;
      tone?: Tone;
      eyebrow?: string;
      title: string;
      intro?: string;
      cols: 2 | 3;
      items: Feature[];
    }
  | {
      kind: "list";
      id?: string;
      tone?: Tone;
      eyebrow?: string;
      title: string;
      intro?: string;
      items: ListCard[];
    }
  | { kind: "aside"; eyebrow?: string; title: string; body: string[] }
  | {
      kind: "rhythm";
      id?: string;
      tone?: Tone;
      eyebrow?: string;
      title: string;
      muted?: string;
      items: ProcessStep[];
    }
  | {
      kind: "work";
      id?: string;
      tone?: Tone;
      eyebrow: string;
      title: string;
      intro: string;
      projects: WorkProject[];
    };

export type ServiceContent = {
  slug: string;
  /** Display name in nav, footer and index cards. */
  nav: string;
  /** Dropdown description in nav, footer and index cards. */
  menuDescription: string;
  /** Full-bleed hero art. */
  hero: string;
  /** Hero uppercase kicker (sentence case in source, uppercased in CSS). */
  eyebrow: string;
  /** Hero heading, one <span> per line. */
  h1: string[];
  lead: string;
  primary: CTA;
  secondary: CTA;
  supporting: string;
  blocks: Block[];
  final: {
    title: string;
    body: string;
    button: CTA;
    call: { eyebrow: string; items: string[] };
  };
};

const CONTACT = "/v2/contact";

export const services: ServiceContent[] = [
  {
    slug: "software-building",
    nav: "Software development",
    menuDescription:
      "Apps, internal tools, platforms, and AI products, from first brief to launch.",
    hero: "/images/hero/amber.webp",
    eyebrow: "Custom software development",
    h1: ["Need a software built?", "Idea to working product."],
    lead: "Come with a rough brief or a half-built product that stalled. We decide what the first version needs, then design, build, and launch it.",
    primary: { label: "Tell us what you're building", href: CONTACT },
    secondary: { label: "See our work", href: "#work" },
    supporting: "Apps. Internal tools. Customer platforms. AI products.",
    blocks: [
      {
        kind: "opening",
        tone: "light",
        title: ["You do not need to have it all figured out."],
        body: [
          "Some clients come with a detailed brief. Others come with a problem, a few notes, or a product that is not working yet.",
          "We help you get clear on the user, the job, and the first version worth building. We keep that version focused. It should be useful enough to test with real people and small enough to finish.",
        ],
      },
      {
        kind: "showcase",
        tone: "paper",
        image: "/images/showcase/software-building.webp",
        alt: "Product design workspace: wireframe layouts beside a mobile app frame",
      },
      {
        kind: "process",
        eyebrow: "How we work",
        title: "Three stages.",
        muted: "One working product.",
        intro:
          "You see the product taking shape throughout the build. Every stage ends with something you can review.",
        numbered: true,
        steps: [
          {
            title: "Shape the product",
            body: "We define who the software is for, what it needs to do, and what can wait. You leave this stage with a clear scope, timeline, and cost.",
          },
          {
            title: "Design and build",
            body: "We design the flows and build the software in short cycles. You see progress each week and make decisions while changes are still easy to make.",
          },
          {
            title: "Test, launch, and hand over",
            body: "We test the product, fix what needs fixing, and prepare it for real users. You receive the code, accounts, documentation, and access your team needs.",
          },
        ],
        note: "Most first versions are built in about eight weeks. Larger products are planned in phases.",
      },
      {
        kind: "deliverables",
        tone: "paper",
        eyebrow: "You walk away with",
        title: "Go in with an idea.",
        muted: "Walk away with these.",
        items: [
          {
            name: "A working first version",
            body: "Software people can sign into, use, and give feedback on. It is built for real use, not a staged demo.",
          },
          {
            name: "A clear product plan",
            body: "A practical view of what to improve, remove, or build next based on the product and its first users.",
          },
          {
            name: "A codebase you own",
            body: "Clean code, full project access, and documentation your team can keep working with.",
          },
        ],
      },
      {
        kind: "grid",
        tone: "light",
        title: "Software takes different shapes.",
        intro:
          "We build customer apps, internal tools, AI products, dashboards, portals, and the software that connects work behind the scenes.",
        cols: 2,
        items: [
          {
            name: "Customer products",
            body: "Apps and platforms your customers can use, pay for, and return to.",
          },
          {
            name: "Internal tools",
            body: "Software that replaces spreadsheets, manual handoffs, and repeated admin.",
          },
          {
            name: "AI products",
            body: "Products that use AI where it improves the experience or removes work.",
          },
          {
            name: "Existing products",
            body: "New features, rebuilds, and rescue work for products that have stalled.",
          },
        ],
      },
      {
        kind: "work",
        id: "work",
        tone: "paper",
        eyebrow: "Our work",
        title: "What we have built.",
        intro:
          "A selection of products, internal tools, and AI systems built for real teams and real users.",
        projects: [
          {
            name: "TranscriptX",
            tag: "Live product",
            blurb:
              "Turns recorded conversations into searchable, quotable text.",
            image: "/images/work/transcriptx.webp",
          },
          {
            name: "Kohl",
            tag: "Mobile app",
            blurb: "A consumer mobile app built end to end, first screen to store.",
            image: "/images/work/kohl.webp",
          },
          {
            name: "AttentionHQ",
            tag: "Internal tool",
            blurb: "The internal hub that runs our programs, members, and operations.",
            image: "/images/work/attentionhq.webp",
          },
          {
            name: "Billa",
            tag: "Automation",
            blurb: "Billing and invoicing, automated from quote to receipt.",
            image: "/images/work/billa.webp",
          },
        ],
      },
    ],
    final: {
      title: "Have software you need built?",
      body: "Tell us what you know so far. We will help you define the first useful version, estimate the work, and decide whether we are the right team to build it.",
      button: { label: "Tell us what you're building", href: CONTACT },
      call: {
        eyebrow: "What we will cover on the call",
        items: [
          "Who the software is for",
          "What the first version needs to do",
          "The likely scope, timeline, and budget",
          "What happens next",
        ],
      },
    },
  },

  {
    slug: "workflow-automation",
    nav: "Workflow automation",
    menuDescription:
      "Find the repetitive work slowing your team down, then automate the right parts.",
    hero: "/images/hero/teal.webp",
    eyebrow: "Agents and automation",
    h1: ["Find the work worth automating.", "Then automate it."],
    lead: "Your team should not spend every week copying data and rebuilding the same reports. We find what costs the most time, then take it off their hands.",
    primary: { label: "Show us the workflow", href: CONTACT },
    secondary: { label: "See what we automate", href: "#examples" },
    supporting: "Email. Reporting. Lead handling. Support. Operations.",
    blocks: [
      {
        kind: "opening",
        tone: "light",
        title: ["The work comes first."],
        body: [
          "Most automation projects begin with a tool. We begin with the week your team actually has.",
          "We look at where people repeat themselves, wait for updates, fix the same mistakes, or move information by hand. That tells us what is worth automating and what should stay as it is.",
          "The task people complain about most is not always the task costing the company the most.",
        ],
      },
      { kind: "showcase", tone: "paper", variant: "workflow" },
      {
        kind: "process",
        eyebrow: "How we work",
        title: "Map it. Build it. Measure it.",
        numbered: true,
        steps: [
          {
            title: "See the whole workflow",
            body: "We follow the work from start to finish, speak with the people doing it, and find where time is lost, mistakes happen, or handoffs break.",
          },
          {
            title: "Automate the right parts",
            body: "We build the highest value automations first and test them with the people who will use them.",
          },
          {
            title: "Measure what changed",
            body: "We track time saved, work completed, errors reduced, and adoption. Then we decide what to improve or automate next.",
          },
        ],
      },
      {
        kind: "deliverables",
        tone: "paper",
        eyebrow: "You walk away with",
        title: "Go in with a messy workflow.",
        muted: "Walk away with these.",
        items: [
          {
            name: "A scored workflow map",
            body: "Every step, owner, delay, repeated task, and opportunity in one view.",
          },
          {
            name: "Working automations",
            body: "Live systems connected to the tools your team already uses.",
          },
          {
            name: "A ranked next list",
            body: "What to automate now, what to improve later, and what should stay human.",
          },
        ],
      },
      {
        kind: "aside",
        title: "Some work should stay human.",
        body: [
          "Good automation removes repetition and gives people more time for judgment.",
          "We keep people involved where context, trust, approval, or a final decision matters. The goal is to improve the work without making it harder to understand or control.",
        ],
      },
      {
        kind: "grid",
        id: "examples",
        tone: "light",
        eyebrow: "Where automation helps",
        title: "The work that quietly eats the week.",
        cols: 3,
        items: [
          {
            name: "Lead handling",
            body: "Research, qualify, route, and follow up without losing good leads in an inbox.",
          },
          {
            name: "Customer support",
            body: "Sort requests, answer routine questions, and send difficult cases to the right person.",
          },
          {
            name: "Operations",
            body: "Move information between tools, update records, trigger approvals, and keep people informed.",
          },
          {
            name: "Reporting",
            body: "Pull numbers from different systems and send the report without someone rebuilding it by hand.",
          },
          {
            name: "Onboarding",
            body: "Collect information, create accounts, assign tasks, and follow up when something is missing.",
          },
          {
            name: "Scheduling",
            body: "Manage bookings, confirmations, reminders, and changes without repeated messages.",
          },
        ],
      },
    ],
    final: {
      title: "Bring us one workflow.",
      body: "We will show you where time is being lost, what is worth automating first, and what the build will take.",
      button: { label: "Talk through a workflow", href: CONTACT },
      call: {
        eyebrow: "A good starting point",
        items: [
          "One process that happens repeatedly",
          "Someone who understands it from start to finish",
          "Access to the tools involved",
          "An outcome we can measure",
        ],
      },
    },
  },

  {
    slug: "ai-transformation-planning",
    nav: "AI planning",
    menuDescription:
      "Decide where AI fits, what to do first, and who owns it.",
    hero: "/images/hero/bronze.webp",
    eyebrow: "AI planning for organizations",
    h1: ["Decide where AI fits.", "Then make it work."],
    lead: "We help leadership teams see where AI improves real work, choose the first use cases, set clear rules, and give people a plan they can follow.",
    primary: { label: "Plan your AI rollout", href: CONTACT },
    secondary: { label: "See what you leave with", href: "#deliverables" },
    supporting: "Use cases. Ownership. Training. Risk. Measures.",
    blocks: [
      {
        kind: "opening",
        tone: "light",
        title: [
          "Most companies already have AI activity.",
          "They just cannot see it clearly.",
        ],
        body: [
          "One team is paying for several tools. Another is using ChatGPT quietly. Someone built a bot no one owns. Leaders hear updates but still cannot tell what is useful, safe, or worth funding.",
          "We bring the work into one view so you can decide what happens next.",
        ],
      },
      { kind: "showcase", tone: "paper", variant: "roadmap" },
      {
        kind: "process",
        eyebrow: "How we work",
        title: "Three questions before the roadmap.",
        numbered: true,
        steps: [
          {
            title: "Where can AI change the work?",
            body: "We look for repeated work, slow decisions, missed opportunities, and tasks people already want help with.",
          },
          {
            title: "What should happen first?",
            body: "We rank use cases by value, effort, risk, and whether the company is ready to support them.",
          },
          {
            title: "What needs to be true for it to work?",
            body: "We define ownership, training, data access, tools, rules, and the measures that will show whether it worked.",
          },
        ],
      },
      {
        kind: "deliverables",
        id: "deliverables",
        tone: "paper",
        eyebrow: "You walk away with",
        title: "Go in with scattered activity.",
        muted: "Walk away with a plan.",
        items: [
          {
            name: "A clear baseline",
            body: "What people are already using, where the strongest opportunities are, and where the company may be exposed.",
          },
          {
            name: "A ranked AI roadmap",
            body: "The first use cases, the order to tackle them, and why each one deserves attention.",
          },
          {
            name: "A 90-day action plan",
            body: "Owners, dates, budgets, training, and the work required to get started.",
          },
        ],
      },
      {
        kind: "aside",
        title: "Train people for the work they actually do.",
        body: [
          "Generic AI training gets forgotten.",
          "We teach teams using their roles, tools, and workflows, so they can apply what they learn when they return to work. The training follows the roadmap instead of sitting beside it as a separate activity.",
        ],
      },
      {
        kind: "grid",
        tone: "light",
        eyebrow: "What the plan covers",
        title: "One plan for the whole company.",
        cols: 3,
        items: [
          {
            name: "Work",
            body: "Where AI could save time, improve decisions, or create a better customer experience.",
          },
          {
            name: "People",
            body: "Who needs training, who owns each use case, and who makes the final decisions.",
          },
          {
            name: "Tools",
            body: "What the company already has, what it may need, and what it should stop paying for.",
          },
          {
            name: "Data",
            body: "What information each use case needs and who should have access to it.",
          },
          {
            name: "Rules",
            body: "How people can use AI safely and what requires review or approval.",
          },
          {
            name: "Measures",
            body: "What success looks like and how the company will track it.",
          },
        ],
      },
    ],
    final: {
      title: "Need an answer to “What are we doing with AI?”",
      body: "We will help you move from scattered experiments to a plan leadership can fund and teams can run.",
      button: { label: "Plan the next 90 days", href: CONTACT },
      call: {
        eyebrow: "What we will cover on the call",
        items: [
          "What people are already using",
          "Where work is slow or expensive",
          "What leadership wants AI to change",
          "What could happen in the next 90 days",
        ],
      },
    },
  },

  {
    slug: "ai-strategy-support",
    nav: "Ongoing AI support",
    menuDescription:
      "Experienced help as your AI plan becomes working systems.",
    hero: "/images/hero/plum.webp",
    eyebrow: "Ongoing AI support",
    h1: ["You have the plan.", "We help you keep it moving."],
    lead: "We work alongside your team as tools are tested, people are trained, and systems go live. Experienced support without hiring a full AI function.",
    primary: { label: "Talk about ongoing support", href: CONTACT },
    secondary: { label: "See how it works", href: "#support" },
    supporting: "Weekly guidance. Build reviews. Team support. Leadership updates.",
    blocks: [
      {
        kind: "opening",
        tone: "light",
        title: ["The work usually slows down between meetings."],
        body: [
          "Priorities change. A pilot has no owner. A tool stops fitting. The team doing the work needs an answer before the next leadership meeting.",
          "We stay close enough to help with the decisions that keep the rollout moving.",
        ],
      },
      { kind: "showcase", tone: "paper", variant: "cadence" },
      {
        kind: "process",
        id: "support",
        eyebrow: "How we work with your team",
        title: "One team beside yours.",
        numbered: false,
        steps: [
          {
            title: "Decide what happens next",
            body: "We help rank requests, choose tools, set scope, and keep the work focused on outcomes the company cares about.",
          },
          {
            title: "Support the people doing the work",
            body: "Your team gets working sessions, office hours, build reviews, and help when a project gets stuck.",
          },
          {
            title: "Show leadership what is changing",
            body: "We report on adoption, results, risks, and the decisions leadership needs to make next.",
          },
        ],
      },
      {
        kind: "list",
        tone: "light",
        eyebrow: "What we support",
        title: "Help where the work is happening.",
        intro: "We can help your team run:",
        items: [
          {
            title: "The AI use case pipeline",
            body: "A running list of what your teams want AI to do, scored and ordered so you always know what to build next.",
            image: "/images/support/printed-cards.png",
            alt: "A hand holding a fanned deck of pastel gradient printed cards",
          },
          {
            title: "Tool and vendor reviews",
            body: "A straight read on the tool your team is being sold: what it does, what it costs, and whether you already own something that does the job.",
            image: "/images/support/phone-screen.png",
            alt: "A hand holding a phone showing pastel gradient artwork",
          },
          {
            title: "Pilot planning",
            body: "A small test with a clear question behind it and a date it ends, so you learn something real before the budget goes out.",
            image: "/images/support/open-booklet.png",
            alt: "A hand holding an open booklet printed with pastel gradient shapes",
          },
          {
            title: "Product and automation reviews",
            body: "We look at what has been built, where it breaks, and what it takes to make it something your team can rely on Monday.",
            image: "/images/support/phone-screen.png",
            alt: "A hand holding a phone showing pastel gradient artwork",
          },
          {
            title: "Team training and office hours",
            body: "Working sessions and open hours where people bring the task they are stuck on and leave knowing how to finish it.",
            image: "/images/support/open-booklet.png",
            alt: "A hand holding an open booklet printed with pastel gradient shapes",
          },
          {
            title: "AI policy and responsible use",
            body: "Plain rules on what staff can put into which tool, who approves what, and where the limits sit. No legal filler.",
            image: "/images/support/printed-cards.png",
            alt: "A hand holding a fanned deck of pastel gradient printed cards",
          },
          {
            title: "Leadership reporting",
            body: "A monthly read on adoption, results, and risk, written for the people making the budget decisions.",
            image: "/images/support/open-booklet.png",
            alt: "A hand holding an open booklet printed with pastel gradient shapes",
          },
          {
            title: "Internal AI communication",
            body: "Updates your teams actually read, so people know what is changing, what it means for them, and what happens next.",
            image: "/images/support/printed-cards.png",
            alt: "A hand holding a fanned deck of pastel gradient printed cards",
          },
        ],
      },
      {
        kind: "rhythm",
        tone: "paper",
        title: "Clear support.",
        muted: "A clear rhythm.",
        items: [
          {
            title: "Every week",
            body: "Review priorities, unblock teams, and decide what happens next.",
          },
          {
            title: "Every month",
            body: "Review results, risks, adoption, and the next set of priorities with leadership.",
          },
          {
            title: "When needed",
            body: "Review a new tool, help scope a pilot, check a build, or run a session with the team.",
          },
        ],
      },
      {
        kind: "aside",
        title: "The goal is for your team to need us less.",
        body: [
          "Outside support should build ability inside the company.",
          "We help your people develop the judgment, habits, and systems to keep the work moving without us. When the company is ready to own the function fully, we hand it over properly.",
        ],
      },
    ],
    final: {
      title: "Need an AI lead before you are ready to hire one?",
      body: "We can work with your team for a defined period, help put the first systems and habits in place, and hand over when the capability lives inside the company.",
      button: { label: "Talk about support", href: CONTACT },
      call: {
        eyebrow: "What we will cover on the call",
        items: [
          "What is already in motion",
          "Where the rollout is getting stuck",
          "Who owns AI today",
          "What kind of support would help",
        ],
      },
    },
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
