export const links = {
  university: "https://app.attentionfactory.io",
  waitlist: "https://nestuge.com/attnhq-waitlist",
  workshops: "https://weekendsofai.com",
  services: "/v2/services",
  guides: "/v2/playbooks",
};

export const services = [
  {
    title: "Education",
    description:
      "Training for you and your team, to get the best of AI knowledge and implement it.",
    action: "Visit University",
    href: links.university,
    icon: "7644e.svg",
    mobileIcon: "mobile-education.png",
    mobileAction: "Visit University",
  },
  {
    title: "Team Trainings",
    description: "Practical workshops that help your team put AI to work.",
    action: "View Workshops",
    href: "/v2/organizations",
    icon: "518f4.svg",
    mobileIcon: "mobile-training.png",
    mobileAction: "View Workshops",
  },
  {
    title: "Distributions",
    description:
      "Software, workflows, and AI systems built around your business.",
    action: "Explore Our Services",
    href: links.services,
    icon: "602b4.svg",
    mobileIcon: "mobile-distribution.png",
    mobileAction: "View Workshops",
  },
  {
    title: "Attention Films",
    description: "Explore what happens when creativity meets AI.",
    action: "Talk to Us",
    icon: "6ca45.svg",
    mobileIcon: "mobile-film.png",
    mobileAction: "View Our Films",
  },
];

export const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We build custom software, automate business workflows, help organizations plan and carry out AI adoption, and train individuals and teams. Our education arm includes Attention University and the free Weekends of AI program.",
  },
  {
    question: "How do you price your services?",
    answer:
      "Pricing depends on the scope, complexity, and support your project needs. Get in touch with your goals and we’ll work through the right approach with you.",
  },
  {
    question: "How do we start a project?",
    answer:
      "Use the contact form to tell us what you want to build or improve. We’ll follow up to understand your goals, scope, and next steps.",
  },
  {
    question: "Do you work with clients from anywhere in the world?",
    answer:
      "Yes. We work remotely with individuals and teams around the world.",
  },
  {
    question: "Do I need technical knowledge to join your training?",
    answer:
      "No. Weekends of AI is a practical place to start. Our programs help you move from understanding AI to applying it to your own work.",
  },
  {
    question: "Can you build software for an early idea?",
    answer:
      "Yes. Share the problem you’re trying to solve, who it’s for, and what you have so far. We can help you decide what to build first.",
  },
];

export type Product = {
  name: string;
  description: string;
  image: string;
  backdrop: string;
  href?: string;
  metric?: string;
  metricLabel?: string;
};

export const featuredProducts: Product[] = [
  {
    name: "TranscriptX",
    description: "Get instant transcripts for all your videos",
    image: "0110e.png",
    backdrop: "8fb0f.png",
    href: "https://transcriptx.xyz",
    metric: "3.8k",
    metricLabel: "Users",
  },
  {
    name: "Weekends of AI",
    description: "Learn one transferable AI skill every week",
    image: "656eb.png",
    backdrop: "8aabf.png",
    href: links.workshops,
    metric: "6.9k",
    metricLabel: "AI Fellows",
  },
];

// Figma contains preview artwork for these products; destinations await confirmation.
export const labProducts: Product[] = [
  featuredProducts[0]!,
  {
    name: "Bazooka",
    description: "An experiment from Attention Factory Labs.",
    image: "656eb.png",
    backdrop: "8aabf.png",
  },
  {
    name: "Billa",
    description: "An experiment from Attention Factory Labs.",
    image: "0110e.png",
    backdrop: "8fb0f.png",
  },
  {
    name: "Tazer",
    description: "An experiment from Attention Factory Labs.",
    image: "656eb.png",
    backdrop: "8aabf.png",
  },
];
