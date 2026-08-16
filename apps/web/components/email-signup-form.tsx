"use client";

/* eslint-disable @typescript-eslint/no-unused-vars --
   The signup form below is commented out while sign-ups run through the
   external waitlist link. Its endpoint, ids, state and handlers are kept so
   the form can be switched back on without rewiring it. */

import type { FormEvent } from "react";
import { useId, useState } from "react";

import { Button } from "./ui/button";

const joinFormEndpoint =
  "https://jff-api.young-queen-5ffa.workers.dev/f/11686a11-a8b7-4ee6-92ec-894870d5dc62";

declare global {
  interface Window {
    confetti?: (config?: {
      count?: number;
      fade?: boolean;
      position?: { x: number; y: number };
      size?: number;
      velocity?: number;
    }) => void;
  }
}

let confettiScriptPromise: Promise<void> | undefined;

function loadConfettiScript() {
  if (window.confetti) {
    return Promise.resolve();
  }

  confettiScriptPromise ??= new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Confetti failed to load"));
    script.src =
      "https://cdn.jsdelivr.net/npm/@hiseb/confetti@2.1.0/dist/confetti.min.js";
    document.head.appendChild(script);
  });

  return confettiScriptPromise;
}

async function sprayConfetti() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  await loadConfettiScript();

  const positions = [
    { x: window.innerWidth * 0.5, y: window.innerHeight * 0.62 },
    { x: window.innerWidth * 0.28, y: window.innerHeight * 0.42 },
    { x: window.innerWidth * 0.72, y: window.innerHeight * 0.42 },
  ];

  positions.forEach((position, index) => {
    window.setTimeout(() => {
      window.confetti?.({
        count: 70,
        fade: true,
        position,
        size: 1.1,
        velocity: 230,
      });
    }, index * 180);
  });
}

export function EmailSignupForm() {
  const emailId = useId();
  const iframeName = useId();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    setError("");

    const formData = new FormData(event.currentTarget);
    const website = formData.get("website");

    if (website) {
      event.preventDefault();
      setIsSaved(true);
      return;
    }

    setIsSubmitting(true);
  }

  function handleSubmissionComplete() {
    if (!isSubmitting) {
      return;
    }

    setIsSubmitting(false);
    setIsSaved(true);
    void sprayConfetti();
  }

  if (isSaved) {
    return (
      <div className="rounded-md bg-black px-4 py-5 text-white">
        <p className="text-[20px] font-black leading-none tracking-[-0.04em]">
          welcome aboard.
        </p>
        <p className="mt-2 text-[15px] font-medium leading-snug text-white/70">
          watch out for the drop.
        </p>
      </div>
    );
  }

  return (
    <>
      {/* <form
      action={joinFormEndpoint}
      className="flex flex-col gap-y-2"
      method="POST"
      onSubmit={handleSubmit}
      target={iframeName}
    >
      <label className="sr-only" htmlFor={emailId}>
        email
      </label>
      <Input
        autoComplete="email"
        className="h-14 w-full rounded-md bg-neutral-100 px-4 text-[16px] text-neutral-700 placeholder:text-[#888888] outline-none"
        id={emailId}
        name="email"
        onChange={(event) => setEmail(event.target.value)}
        placeholder="you@email.com"
        required
        type="email"
        value={email}
      />
      <input
        aria-hidden="true"
        autoComplete="off"
        className="hidden"
        name="website"
        tabIndex={-1}
        type="text"
      />
      <input name="source" type="hidden" value="attentionfactory.io" />
      <Button
        className="h-14 w-full cursor-pointer rounded-md bg-black text-[16px] font-semibold text-white disabled:cursor-not-allowed disabled:opacity-60"
        disabled={isSubmitting}
        type="submit"
      >
        {isSubmitting ? (
          <span className="inline-flex items-center justify-center gap-2">
            <span
              aria-hidden="true"
              className="size-4 animate-spin rounded-full border-2 border-white/30 border-t-white"
            />
            saving
          </span>
        ) : (
          "Remind me"
        )}
      </Button>
      {error ? <p className="text-[14px] font-medium text-red-600">{error}</p> : null}
      <iframe
        className="hidden"
        name={iframeName}
        onLoad={handleSubmissionComplete}
        title="signup submission"
      />
    </form> */}
    <a href="https://dub.sh/attn-bravo">
      <Button className="h-14 w-full cursor-pointer rounded-md bg-black text-[16px] font-semibold text-white disabled:cursor-not-allowed disabled:opacity-60">
        join the accelerator
        <span className="inline-block size-4 ml-2 text-[#fff]">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path strokeDasharray="16" strokeDashoffset="16" d="M5 12h13.5"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="16;0"/></path><path strokeDasharray="10" strokeDashoffset="10" d="M19 12l-5 5M19 12l-5 -5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.2s" values="10;0"/></path></g></svg>
        </span>
      </Button>
    </a>
    </>
  );
}
