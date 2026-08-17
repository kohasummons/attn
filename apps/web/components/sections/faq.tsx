"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/page-shell";

const items = [
  {
    q: "What services do you offer?",
    a: "We build custom software, automate business workflows, help organizations plan and carry out AI adoption, and train individuals and teams. Our education arm includes Attention University and the free Weekends of AI program.",
  },
  {
    q: "Do you offer training for individuals and teams?",
    a: "Yes. Individuals can learn through Weekends of AI and Attention University. Organizations can book private training designed around their team's roles, tools, level of experience, and the work they want to improve.",
  },
  {
    q: "Do I need a technical background to join your training?",
    a: "Most of our beginner programs do not require a technical background. Where a course or project requires coding or previous experience, we make that clear before registration.",
  },
  {
    q: "How do I know which service is right for me?",
    a: "If you have a product idea, start with software development. If a repeat process is slowing your team down, start with workflow automation. If your organization wants to use AI but does not know what to do first, start with AI planning. If the goal is to build skills, choose an individual course or team training.",
  },
  {
    q: "Can you help us figure out where AI fits in our organization?",
    a: "Yes. We look at your goals, workflows, team, data, and current tools, then identify the strongest use cases. We help you decide what to do first, who should own it, what the team needs to learn, and how the results will be measured.",
  },
  {
    q: "Can you build a software product from an early idea?",
    a: "Yes. You can come with a rough idea, a few notes, a design, or a product that has already been started. We help you define the first useful version, then design, build, test, and prepare it for launch.",
  },
  {
    q: "Can you automate a workflow we already use?",
    a: "Yes. We review how the work happens today, find the repeated steps, and decide what should be automated and what should stay human. We can automate work such as lead handling, onboarding, reporting, approvals, customer support, scheduling, and internal operations.",
  },
  {
    q: "How do we start a project?",
    a: "Send us a short description of what you need. We will schedule a call to understand the problem, the people involved, your timeline, and your budget. If the work is a good fit, we will send a proposal covering the scope, deliverables, schedule, and investment.",
  },
  {
    q: "How do you price your services?",
    a: "The price depends on the type of work, the scope, the timeline, and the support required. After the first call, we provide a custom quote that explains what is included and how payment will work.",
  },
  {
    q: "Do you work with clients from anywhere in the world?",
    a: "Yes. We work remotely with clients, teams, and learners across the world. Calls, project reviews, training, and day-to-day communication can all happen online.",
  },
];

export function FAQ() {
  return (
    <section className="bg-white py-24 md:py-36">
      <Container>
        <div className="mx-auto max-w-[720px]">
          <SectionHeading
            title="Frequently asked questions."
            className="md:text-center"
          />

          <Accordion className="mt-12 w-full">
            {items.map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border-b border-black/10"
              >
                {/* Lead tier, not H3 — at 30px the questions competed with the
                    section heading and the whole block read as one size. */}
                <AccordionTrigger className="items-center py-5 text-left text-[clamp(15px,1.8vw,19px)] leading-[1.4] font-medium tracking-[-0.02em] text-[#121313] hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-[16px] leading-[1.55] tracking-[-0.02em] text-[#5a5a5a]">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </section>
  );
}
