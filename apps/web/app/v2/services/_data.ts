export type ServiceContent = {
  slug: string;
  nav: string;
  eyebrow: string;
  /** Full-bleed hero art. */
  hero: string;
  /** Single bloom used on the mid-page band, matches the services grid. */
  bloom: string;
  /** Outcome + timebox. */
  h1: string;
  /** Problem fork: most teams do A or B. */
  lead: string;
  problem: { title: string; body: string };
  steps: { when: string; title: string; body: string }[];
  deliverables: { label: string; name: string; body: string }[];
  ladder: { rung: string; name: string; body: string }[];
  fit: { title: string; body: string; requires: string[] };
};

export const services: ServiceContent[] = [
  {
    slug: "software-building",
    hero: "/images/hero/amber.webp",
    bloom: "rose",
    nav: "Software building",
    eyebrow: "Build with us",
    h1: "From idea to software people actually use. In eight weeks.",
    lead: "Most teams either spend six months in discovery or ship a prototype nobody opens. We build the smallest thing that proves the value, then harden what survives.",
    problem: {
      title: "Prototypes are easy now. Production is not.",
      body: "Anyone can get a demo working in an afternoon. The hard part starts after: auth, evals, error states, the edge cases your users hit on day three, and the question of who maintains it once the excitement wears off. That gap is where most internal AI projects quietly die.",
    },
    steps: [
      {
        when: "Week 1–2",
        title: "Scope to one job",
        body: "We map the workflow, pick the single job worth automating first, and agree what “working” means in numbers before anyone writes code.",
      },
      {
        when: "Week 3–6",
        title: "Build in the open",
        body: "You get a working build every week and the people who will use it test it every week. Nothing is designed in a vacuum.",
      },
      {
        when: "Week 7–8",
        title: "Harden and hand over",
        body: "Evals, monitoring, docs, and a walkthrough with whoever owns it next. We leave with the repo in your hands.",
      },
    ],
    deliverables: [
      {
        label: "Software",
        name: "A production application",
        body: "Deployed, authenticated, monitored, and running on your infrastructure. Not a demo behind our login.",
      },
      {
        label: "Evidence",
        name: "An evaluation suite",
        body: "The test set and scoring we used to decide the thing works, so you can tell if it stops working.",
      },
      {
        label: "Handover",
        name: "The repo and a runbook",
        body: "Source, deployment steps, and a recorded walkthrough for the engineer who inherits it.",
      },
    ],
    ladder: [
      {
        rung: "01",
        name: "Scattered experiments",
        body: "A few people are using chat tools privately. Nothing is shared, nothing is measured.",
      },
      {
        rung: "02",
        name: "One-off prototypes",
        body: "Someone built a demo that impressed a meeting and now sits unused in a browser tab.",
      },
      {
        rung: "03",
        name: "A tool in production",
        body: "One workflow runs on software you own, with a named owner and real usage numbers.",
      },
      {
        rung: "04",
        name: "A build habit",
        body: "Your team ships its own internal tools without us, and knows when not to.",
      },
    ],
    fit: {
      title: "Is this right for you?",
      body: "Built for teams with a specific workflow that hurts and someone senior who can make decisions in the room. Not a fit if you're still deciding whether AI is worth doing.",
      requires: [
        "One named business owner who can approve scope",
        "Access to the people who do the work today",
        "A workflow you can describe in one sentence",
      ],
    },
  },
  {
    slug: "workflow-automation",
    hero: "/images/hero/teal.webp",
    bloom: "dahlia",
    nav: "Workflow automation",
    eyebrow: "Agents and automation",
    h1: "Find the work worth automating. Then automate it.",
    lead: "Most teams either automate the loudest complaint or wait for a perfect roadmap. We score the whole surface first, then build the two or three that actually pay.",
    problem: {
      title: "The bottleneck is rarely where people think it is.",
      body: "Ask a team what to automate and you'll get the task they hate most. That's rarely the task costing the most hours. Without a scored view of the whole workflow you end up automating irritation instead of cost, and the numbers never move.",
    },
    steps: [
      {
        when: "Week 1–2",
        title: "Map and score",
        body: "We catalogue every repeatable task in the target function and score each on hours burned, error rate, and how automatable it honestly is.",
      },
      {
        when: "Week 3–5",
        title: "Build the top two",
        body: "We build working automations for the highest-scoring candidates, with your team in the loop each week.",
      },
      {
        when: "Week 6",
        title: "Measure and decide",
        body: "Before-and-after numbers on the real workflow, and a ranked list of what to do next.",
      },
    ],
    deliverables: [
      {
        label: "Diagnosis",
        name: "A scored workflow map",
        body: "Every task in the function, scored and ranked. Usually 30–60 tasks, of which 5–10 are worth touching.",
      },
      {
        label: "Working software",
        name: "Two live automations",
        body: "Running against real data, with a before-and-after measurement on hours or error rate.",
      },
      {
        label: "Roadmap",
        name: "The next five, ranked",
        body: "What to build next, in order, with the reasoning attached so you can argue with it.",
      },
    ],
    ladder: [
      {
        rung: "01",
        name: "Manual and invisible",
        body: "The work happens in inboxes and spreadsheets. Nobody can say how many hours it takes.",
      },
      {
        rung: "02",
        name: "Measured",
        body: "You know which tasks cost the most and roughly what they're worth.",
      },
      {
        rung: "03",
        name: "Partly automated",
        body: "The top workflows run themselves, with a human checking the output.",
      },
      {
        rung: "04",
        name: "Agentic",
        body: "Agents run the process end to end and escalate only the genuinely ambiguous cases.",
      },
    ],
    fit: {
      title: "Is this right for you?",
      body: "Built for operations, finance, and support teams where the same work repeats weekly. Not a fit for one-off creative work or anything that changes shape every time.",
      requires: [
        "A function with repeatable, high-volume work",
        "Two to three hours a week from someone who does the work",
        "Access to the systems the work already runs through",
      ],
    },
  },
  {
    slug: "ai-transformation-planning",
    hero: "/images/hero/bronze.webp",
    bloom: "iris",
    nav: "AI transformation planning",
    eyebrow: "Plan the rollout",
    h1: "Plan first. Then transform.",
    lead: "Most companies either buy a licence for everyone and call it a strategy, or spend a year writing a plan nobody reads. We get you a clear read on where you stand and a concrete twelve months.",
    problem: {
      title: "Everyone has a tool. Almost nobody has a plan.",
      body: "Seats get bought, a pilot runs, a deck gets presented, and six months later usage has flatlined and nobody wants to say so. The missing piece is never enthusiasm. It's an honest baseline and a sequence someone owns.",
    },
    steps: [
      {
        when: "Week 1–2",
        title: "Baseline",
        body: "We measure actual usage, proficiency, and where the real blockers sit — not what the survey says, what the data says.",
      },
      {
        when: "Week 3–5",
        title: "Find the barriers",
        body: "Interviews across levels to work out what's stopping adoption: skill, permission, tooling, or incentives.",
      },
      {
        when: "Week 6–8",
        title: "Write the twelve months",
        body: "A sequenced plan with owners, dates, and the number each phase is supposed to move.",
      },
    ],
    deliverables: [
      {
        label: "Maturity",
        name: "An AI readiness baseline",
        body: "Where you sit today on usage, proficiency, and capacity — scored, with the evidence attached.",
      },
      {
        label: "Barriers",
        name: "A blocker map",
        body: "What's actually stopping adoption, ranked, separated into skill, tooling, permission, and incentive.",
      },
      {
        label: "Roadmap",
        name: "A twelve-month sequence",
        body: "Phased, with named owners and a target number per phase. A to-do list, not a slide deck.",
      },
    ],
    ladder: [
      {
        rung: "01",
        name: "Curious",
        body: "Individuals experiment on their own. Leadership has opinions but no numbers.",
      },
      {
        rung: "02",
        name: "Piloting",
        body: "A team has a licence and a use case. Nobody can tell you the ROI.",
      },
      {
        rung: "03",
        name: "Adopted",
        body: "Usage is measured, training is routine, and specific workflows have changed shape.",
      },
      {
        rung: "04",
        name: "Operating",
        body: "AI is in how the work is designed, not bolted onto it. New hires learn it in week one.",
      },
    ],
    fit: {
      title: "Is this right for you?",
      body: "Built for companies past the experimentation phase who need a defensible plan. Not a fit if you want a strategy deck to put in a drawer.",
      requires: [
        "An executive sponsor who will own the outcome",
        "Access to usage data and to people at every level",
        "Willingness to hear an unflattering baseline",
      ],
    },
  },
  {
    slug: "ai-strategy-support",
    hero: "/images/hero/plum.webp",
    bloom: "peony",
    nav: "AI strategy support",
    eyebrow: "Embedded help",
    h1: "The plan is written. Now someone has to run it.",
    lead: "Most rollouts stall in month three, when the consultants have left and the plan meets an actual calendar. We stay embedded until the habit holds.",
    problem: {
      title: "Strategy is cheap. Follow-through is the whole job.",
      body: "The gap between a good plan and a changed company is a hundred small decisions made under time pressure by people with other jobs. That's where momentum dies — not in the strategy, in the third month of execution.",
    },
    steps: [
      {
        when: "Month 1",
        title: "Take the plan over",
        body: "We inherit whatever plan exists, pressure-test it against reality, and cut it to what can actually ship this quarter.",
      },
      {
        when: "Month 2–5",
        title: "Run the cadence",
        body: "Weekly working sessions with the owners, unblocking the specific thing that's stuck that week.",
      },
      {
        when: "Month 6",
        title: "Hand back",
        body: "Your team runs the cadence without us, and we write down how it works so it survives a reorg.",
      },
    ],
    deliverables: [
      {
        label: "Cadence",
        name: "A running operating rhythm",
        body: "A weekly session your team keeps holding after we stop attending.",
      },
      {
        label: "People",
        name: "Named internal owners",
        body: "Two to four people who can run this without us, trained on the job rather than in a classroom.",
      },
      {
        label: "Record",
        name: "Decisions written down",
        body: "What was tried, what worked, what was killed and why — so the next team doesn't relitigate it.",
      },
    ],
    ladder: [
      {
        rung: "01",
        name: "Consultant-dependent",
        body: "Progress happens when an outside firm is in the building, and stops when they leave.",
      },
      {
        rung: "02",
        name: "Sponsored",
        body: "An executive cares, but delivery still depends on one or two heroes.",
      },
      {
        rung: "03",
        name: "Owned",
        body: "Named people run the cadence and report real numbers without being asked.",
      },
      {
        rung: "04",
        name: "Self-sustaining",
        body: "The rhythm survives people leaving. It's how the company works now.",
      },
    ],
    fit: {
      title: "Is this right for you?",
      body: "Built for companies with a plan already in hand and no one with the time to run it. Not a fit if you're looking for a body to fill a seat.",
      requires: [
        "An existing plan or roadmap, however rough",
        "Two internal people who will eventually own this",
        "A six-month horizon, minimum",
      ],
    },
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
