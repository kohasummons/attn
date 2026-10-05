"use client";

import Image from "next/image";
import { useState, useEffect, type FormEvent, type ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { DitherImage } from "@/components/effects/dither/dither-image";
import { interDisplay } from "./fonts";
import "./contact-dialog.css";
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
  // Legacy contact URLs open the existing redesigned modal on the homepage.
  useEffect(() => {
    if (className !== "af-contact-button") return;
    const sync = () => {
      if (window.location.hash === "#contact") setOpen(true);
    };
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, [className]);
  function changeOpen(next: boolean) {
    setOpen(next);
    if (!next && window.location.hash === "#contact") {
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
    }
  }

  return (
    <Dialog open={open} onOpenChange={changeOpen}>
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
                className={`af-dialog af-contact-dialog ${interDisplay.variable}`}
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
                  <DitherImage src="/redesign/originals/contact.webp" tuningGroup="contact" dim={0.4} sizes="(max-width: 600px) calc(100vw - 80px), 474px" />
                  <picture className="af-contact-logo">
                    <source media="(max-width: 600px)" srcSet={asset("contact-logo-mobile.svg")} />
                    <Image src={asset("9875e.svg")} alt="" width={367.227} height={49} />
                  </picture>
                </div>
                <DialogClose asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="af-close"
                    aria-label="Close contact form"
                  >
                    <Image src={asset("contact-close.svg")} alt="" width={12} height={12} />
                  </Button>
                </DialogClose>
                <DialogTitle className="af-dialog-title">
                  Tell us what you are trying to do.
                </DialogTitle>
                <DialogDescription className="sr-only">
                  We will help you find the right next step.
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
          <span>Name <b aria-hidden="true">*</b></span>
          <Input
            name="name"
            autoComplete="name"
            placeholder="What can we call you?"
            required
            maxLength={120}
          />
        </label>
        <label>
          <span>Email Address <b aria-hidden="true">*</b></span>
          <Input
            name="email"
            type="email"
            autoComplete="email"
            placeholder="What is your email?"
            required
            maxLength={254}
          />
        </label>
      </div>
      <div className="af-form-row">
        <label>
          <span>Company <em>- optional</em></span>
          <Input
            name="company"
            autoComplete="organization"
            placeholder="Enter company name"
            maxLength={180}
          />
        </label>
        <label>
          <span>Subject of Inquiry <b aria-hidden="true">*</b></span>
          <NativeSelect name="topic" defaultValue="" required>
            <option value="" disabled>
              Select scope
            </option>
            <option>Learning or course support</option>
            <option>Team training</option>
            <option>Software development</option>
            <option>Workflow automation</option>
            <option>AI planning for an organization</option>
            <option>Partnership, speaking, or media</option>
            <option>Something else</option>
          </NativeSelect>
        </label>
      </div>
      <label>
        <span>Message <b aria-hidden="true">*</b></span>
        <Textarea
          name="message"
          placeholder="Dear attention factory..."
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
