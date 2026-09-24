"use client";

import Image from "next/image";
import { useState, type FormEvent, type ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  DialogSurface,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { NativeSelect } from "@/components/ui/native-select";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { asset } from "./primitives";

export function ContactDialog({
  children = "Contact Us",
  className = "af-contact-button",
}: {
  children?: ReactNode;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className={className}>{children}</Button>
      </DialogTrigger>
      <AnimatePresence>
        {open && (
          <DialogPortal forceMount>
            <DialogOverlay forceMount asChild>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="af-overlay"
              />
            </DialogOverlay>
            <DialogSurface forceMount asChild>
              <motion.div
                className="af-dialog"
                initial={{
                  opacity: 0,
                  transform: reduceMotion
                    ? "none"
                    : "translateY(8px) scale(0.97)",
                }}
                animate={{ opacity: 1, transform: "translateY(0px) scale(1)" }}
                exit={{
                  opacity: 0,
                  transform: reduceMotion
                    ? "none"
                    : "translateY(8px) scale(0.97)",
                }}
                transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
              >
                <div className="af-contact-art">
                  <Image
                    src={asset("contact-painting.png")}
                    alt=""
                    fill
                    sizes="474px"
                  />
                  <Image
                    className="af-contact-logo"
                    src={asset("9875e.svg")}
                    alt=""
                    width={420}
                    height={74}
                  />
                </div>
                <DialogClose asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="af-close"
                    aria-label="Close contact form"
                  >
                    <X size={18} />
                  </Button>
                </DialogClose>
                <DialogTitle className="af-dialog-title">
                  We will love to hear from you
                </DialogTitle>
                <DialogDescription className="sr-only">
                  Tell us about your project or ask about our programs.
                </DialogDescription>
                <ContactForm />
              </motion.div>
            </DialogSurface>
          </DialogPortal>
        )}
      </AnimatePresence>
    </Dialog>
  );
}

function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;
    const form = event.currentTarget;
    setStatus("sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      if (!response.ok) throw new Error("Contact request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="af-form" onSubmit={submit}>
      <div className="af-form-row">
        <label>
          Name
          <Input
            name="name"
            autoComplete="name"
            placeholder="Your full name"
            required
            maxLength={120}
          />
        </label>
        <label>
          Email address
          <Input
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            required
            maxLength={254}
          />
        </label>
      </div>
      <div className="af-form-row">
        <label>
          Company (optional)
          <Input
            name="company"
            autoComplete="organization"
            placeholder="Company name"
            maxLength={180}
          />
        </label>
        <label>
          Subject
          <NativeSelect name="topic" defaultValue="" required>
            <option value="" disabled>
              Select a subject
            </option>
            <option>Training and workshops</option>
            <option>Software development</option>
            <option>Workflow automation</option>
            <option>AI planning</option>
            <option>Something else</option>
          </NativeSelect>
        </label>
      </div>
      <label>
        Message
        <Textarea
          name="message"
          placeholder="Tell us a little about what you have in mind…"
          required
          maxLength={10000}
          rows={4}
        />
      </label>
      <label className="af-honeypot" aria-hidden="true">
        Website
        <Input name="website" tabIndex={-1} autoComplete="off" />
      </label>
      <Button
        className="af-button"
        type="submit"
        disabled={status === "sending"}
      >
        {status === "sending" ? "Sending…" : "Send Message"}
      </Button>
      <div aria-live="polite" className="af-form-status">
        {status === "success" && (
          <p>Thank you. Your message is on its way to our team.</p>
        )}
        {status === "error" && (
          <p role="alert">
            We couldn’t send your message. Please try again or email{" "}
            <a href="mailto:hello@attentionfactory.io">
              hello@attentionfactory.io
            </a>
            .
          </p>
        )}
      </div>
    </form>
  );
}
