"use client";

import { useState, type FormEvent } from "react";

type FormStatus = "idle" | "submitting" | "success" | "error";

const topics = [
  "Learning or course support",
  "Team training",
  "Software development",
  "Workflow automation",
  "AI planning for an organization",
  "Partnership, speaking, or media",
  "Something else",
];

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Contact request failed");

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="w-full max-w-[620px] border border-[#d9d8d3] bg-white p-8 md:p-10"
      >
        <h3 className="text-[clamp(26px,3vw,34px)] leading-[1.1] font-medium tracking-[-0.035em] text-[#121313]">
          Your message has been sent.
        </h3>
        <p className="mt-5 text-[16px] leading-[1.65] text-[#5a5a5a] md:text-[17px]">
          Thank you for writing to Attention Factory. Someone from the team will
          review your message and reply with the right next step.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-[620px] border border-[#d9d8d3] bg-white p-7 md:p-10"
    >
      <div className="grid grid-cols-1 gap-6">
        <FormField
          id="name"
          label="Name"
          type="text"
          autoComplete="name"
          required
        />
        <FormField
          id="email"
          label="Email"
          type="email"
          autoComplete="email"
          required
        />
        <FormField
          id="company"
          label="Company or organization (optional)"
          type="text"
          autoComplete="organization"
        />

        <div>
          <label
            htmlFor="topic"
            className="text-[14px] tracking-[-0.02em] text-[#5a5a5a]"
          >
            What are you contacting us about?
          </label>
          <select
            id="topic"
            name="topic"
            className="mt-3 w-full border border-[#d9d8d3] bg-white px-4 py-3.5 text-[16px] leading-[1.4] tracking-[-0.02em] text-[#121313] outline-none focus:border-[#121313]"
          >
            {topics.map((topic) => (
              <option key={topic} value={topic}>
                {topic}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="message"
            className="text-[14px] tracking-[-0.02em] text-[#5a5a5a]"
          >
            Tell us more
          </label>
          <textarea
            id="message"
            name="message"
            rows={7}
            required
            placeholder="What are you trying to do, who is it for, and what would a good result look like?"
            className="mt-3 w-full resize-y border border-[#d9d8d3] bg-white px-4 py-3.5 text-[16px] leading-[1.5] tracking-[-0.02em] text-[#121313] outline-none placeholder:text-[#9a9994] focus:border-[#121313]"
          />
        </div>

        <div className="pointer-events-none absolute -left-[9999px] opacity-0">
          <label htmlFor="website">Website</label>
          <input
            id="website"
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-8 inline-flex items-center justify-center bg-[#ff4100] px-7 py-4 text-[16px] leading-none font-medium whitespace-nowrap text-white transition-colors hover:bg-[#121313] disabled:cursor-wait disabled:opacity-60 sm:text-[18px]"
      >
        Send message
      </button>

      {status === "error" ? (
        <p role="alert" className="mt-5 text-[15px] leading-[1.5] text-[#b42318]">
          We could not send your message. Please try again or email{" "}
          <a
            href="mailto:hello@attentionfactory.io"
            className="underline underline-offset-4"
          >
            hello@attentionfactory.io
          </a>
          .
        </p>
      ) : null}

      <p className="mt-5 text-[14px] leading-[1.5] text-[#8a8a86]">
        Prefer email? Write to{" "}
        <a
          href="mailto:hello@attentionfactory.io"
          className="text-[#121313] underline underline-offset-4"
        >
          hello@attentionfactory.io
        </a>
        .
      </p>
    </form>
  );
}

function FormField({
  id,
  label,
  type,
  autoComplete,
  required = false,
}: {
  id: string;
  label: string;
  type: "text" | "email";
  autoComplete: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="text-[14px] tracking-[-0.02em] text-[#5a5a5a]"
      >
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        autoComplete={autoComplete}
        required={required}
        className="mt-3 w-full border border-[#d9d8d3] bg-white px-4 py-3.5 text-[16px] leading-[1.4] tracking-[-0.02em] text-[#121313] outline-none focus:border-[#121313]"
      />
    </div>
  );
}
