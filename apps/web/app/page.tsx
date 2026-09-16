import Link from "next/link";

import { EmailSignupForm } from "../components/email-signup-form";
import { PhotoCarousel } from "../components/photo-carousel";
import { V2Banner } from "../components/v2-banner";

const photos = [
  {
    alt: "AttentionHQ",
    height: 800,
    src: "/images/attn-hq.png",
    width: 800,
  },
  {
    alt: "AttentionHQ",
    height: 800,
    src: "/images/attn-hq.png",
    width: 800,
  },
  {
    alt: "AttentionHQ",
    height: 800,
    src: "/images/attn-hq.png",
    width: 800,
  },
  {
    alt: "AttentionHQ",
    height: 800,
    src: "/images/attn-hq.png",
    width: 800,
  },
  // {
  //   alt: "Attention Factory",
  //   height: 1586,
  //   src: "/images/3.png",
  //   width: 1186,
  // },
  // {
  //   alt: "Mercy from Attention Factory",
  //   height: 800,
  //   src: "/images/2.png",
  //   width: 800,
  // },
  // {
  //   alt: "Mercy from Attention Factory",
  //   height: 800,
  //   src: "/images/6.png",
  //   width: 800,
  // },
  // {
  //   alt: "Mercy from Attention Factory",
  //   height: 800,
  //   src: "/images/7.png",
  //   width: 800,
  // },
  // {
  //   alt: "Mercy from Attention Factory",
  //   height: 800,
  //   src: "/images/8.png",
  //   width: 800,
  // },
];

export default function HomePage() {
  return (
    <main className="min-h-dvh bg-background text-foreground relative p-0">
      <V2Banner />
      <div className="fixed bottom-0 w-full left-0 h-32 bg-linear-to-t from-[#fefefe] from-10% via-50% via-[#fefefe]/50 to-transparent pointer-events-none isolate" />
      <div className="w-full max-w-[600px] px-5 py-8 text-[18px] font-medium leading-[1.55] tracking-[-0.7px] text-[#888888] sm:p-14 sm:text-[20px]">
        <nav className="mb-4 flex flex-wrap gap-x-3 gap-y-1 text-[18px] font-medium sm:text-[20px]">
          <Link
            className="text-[#0099ff] underline underline-offset-2"
            href="/"
          >
            home
          </Link>
          <Link
            className="text-[#0099ff] underline underline-offset-2"
            href="/team"
          >
            team
          </Link>
          {/* <a className="text-[#0099ff] underline underline-offset-2" href="/contact">
              work with us
            </a> */}
        </nav>

        <h1 className="mb-4 text-[38px] font-bold leading-[1.05] tracking-[-0.04em] text-neutral-950 sm:text-[50px]">
          attention factory.
        </h1>

        <p className="mb-4">something is coming.</p>

        {/* <p className="mb-4">
          we help brands, founders, and teams turn fuzzy ideas into things people can
          actually see, use, share, and remember.
        </p> */}

        {/* <p className="mb-4">
          sometimes that means ai videos, spokespeople, ads, chatbots, launch content,
          prototypes, or full creative systems. mostly, it means making the internet
          feel a little less boring.
        </p> */}

        <p className="mb-8">
          for people who would rather leverage AI than talk about leveraging AI.
        </p>

        <p className="mb-4">for leaders, builders & creators</p>

        {/* <div className="mb-8">
          <div
            aria-label="Attention Factory signature"
            className="mt-2 h-[25px] w-32 bg-[#888888] sm:h-[31px] sm:w-40"
            role="img"
            style={{
              WebkitMask: "url('/images/signature-attn.png') left center / contain no-repeat",
              mask: "url('/images/signature-attn.png') left center / contain no-repeat",
            }}
          />
        </div> */}

        <section className="mt-10">
          {/* <p className="mb-5">
            we can send you a reminder when it&apos;s live. drop your email
            below.
          </p> */}

          <EmailSignupForm />

          <PhotoCarousel photos={photos} />

          {/* <div className="my-4">
            <MembershipModalButton />
          </div> */}

          {/* <p className="mt-5">
            p.s. if you wanna contact us, ping{" "}
            <a
              className="text-sky-600 underline underline-offset-2"
              href="mailto:hello@attentionfactory.io"
            >
              hello@attentionfactory.io
            </a>
            . we generally respond fastest to short emails with a clear ask.
          </p> */}
        </section>
      </div>
    </main>
  );
}
