"use client";

import { Fragment, useEffect, useState } from "react";
import { ActionLink, Artwork, Eyebrow, PageContainer } from "./primitives";
import { links } from "./content";
import { nextSession, remainingTime } from "./event-time";

const labels = ["Days", "Hours", "Minutes", "Seconds"];
const dateFormat = new Intl.DateTimeFormat("en-GB", {
  weekday: "long",
  day: "numeric",
  month: "long",
  timeZone: "Africa/Lagos",
});

export function EventSection() {
  const [now, setNow] = useState<number | null>(null);
  useEffect(() => {
    const update = () => setNow(Date.now());
    update();
    const interval = window.setInterval(update, 1000);
    return () => window.clearInterval(interval);
  }, []);
  const session = now === null ? null : nextSession(now);
  const values =
    now === null || session === null
      ? null
      : remainingTime(now, session.getTime());

  return (
    <section id="events" className="af-event" aria-labelledby="event-title">
      <Artwork name="event-desktop-bg.png" mobileName="event-mobile-bg.png" />
      <div className="af-event-fade" aria-hidden="true" />
      <PageContainer>
        <Eyebrow>Weekends of AI</Eyebrow>
        <h2 id="event-title">
          Join us every weekend to learn a new concept in AI
        </h2>
        <ActionLink href={`${links.workshops}/signup`}>Register Now</ActionLink>
        <div
          className="af-countdown"
          role="timer"
          aria-live="off"
          aria-label={
            session
              ? `Next session: ${dateFormat.format(session)}, 6 p.m. West Africa Time`
              : "Next session: Saturday, 6 p.m. West Africa Time"
          }
        >
          {labels.map((label, index) => (
            <Fragment key={label}>
              {index > 0 && (
                <b aria-hidden="true" data-value=":">
                  :
                </b>
              )}
              <div>
                <strong
                  data-value={
                    values ? String(values[index]).padStart(2, "0") : "––"
                  }
                >
                  {values ? String(values[index]).padStart(2, "0") : "––"}
                </strong>
                <span>
                  <span className="af-desktop-copy">{label}</span>
                  <span className="af-mobile-copy">
                    {["DAYS", "HRS", "MINS", "SECS"][index]}
                  </span>
                </span>
              </div>
            </Fragment>
          ))}
        </div>
        <p className="af-countdown-caption">
          Countdown to the next Weekend of AI
        </p>
        <p className="af-event-date">
          {session ? dateFormat.format(session) : "Every Saturday"} · 6 p.m. WAT
          · Free, live training
        </p>
      </PageContainer>
    </section>
  );
}
