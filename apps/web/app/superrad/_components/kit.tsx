"use client";

import type { CSSProperties, ReactNode } from "react";
import { motion } from "motion/react";
import { useReveal } from "./stagger";

/** An absolutely-positioned image inside a card (object-cover), positions as % of the 615×498 card. */
function Cover({ src, style, rounded }: { src: string; style: CSSProperties; rounded?: boolean }) {
  return (
    <img
      src={src}
      alt=""
      aria-hidden
      className={`absolute max-w-none object-cover ${rounded ? "rounded-[7px]" : ""}`}
      style={style}
    />
  );
}

/** A cropped sprite: outer clip box + inner offset image. */
function Crop({ src, box, inner }: { src: string; box: CSSProperties; inner: CSSProperties }) {
  return (
    <div className="absolute overflow-hidden" style={box}>
      <img src={src} alt="" aria-hidden className="absolute max-w-none" style={inner} />
    </div>
  );
}

const B = "/superrad/kit";

function Card({
  title,
  desc,
  children,
}: {
  title: string;
  desc: ReactNode;
  children?: ReactNode;
}) {
  const { item } = useReveal();
  return (
    <motion.div variants={item} className="flex flex-col">
      <div className="relative aspect-[615/498] w-full overflow-hidden rounded-[10px] bg-[#fafaf9]">
        {children}
      </div>
      <div className="mt-[20px] flex flex-col gap-[6px]">
        <h3 className="sr-archivo font-semibold leading-[24px] text-[#111827] text-[16px]">
          {title}
        </h3>
        <p className="sr-archivo max-w-[527px] font-medium leading-[23px] text-[#737373] text-[16px]">
          {desc}
        </p>
      </div>
    </motion.div>
  );
}

const kitchenRow = [
  { src: `${B}/kitchen.webp`, left: "6.34%" },
  { src: `${B}/environment.webp`, left: "49.29%" },
  { src: `${B}/gym.webp`, left: "92.24%" },
  { src: `${B}/market.webp`, left: "135.19%" },
];

export function Kit() {
  const { container, viewport } = useReveal();
  return (
    <section className="flex w-full flex-col items-center gap-[80px] bg-white px-6 pt-[100px] pb-[101px]">
      {/* header */}
      <div className="flex flex-col items-center gap-[12px]">
        <span className="sr-archivo rounded-[6px] bg-[#f5f5f4] px-[8px] py-[3px] font-medium uppercase leading-[20px] tracking-[1px] text-[#a3a3a3] text-[10px]">
          Included in your kit
        </span>
        <h2 className="sr-greed text-center font-medium leading-[36px] tracking-[-1px] text-[#0c0a09] text-[60px]">
          What you get
        </h2>
        <p className="sr-archivo max-w-[600px] text-center font-medium leading-[23px] text-[#737373] text-[16px] mt-6">
          The SuperRad kit. Our Workflow, Prompts and Skills engineered to skip the grunt work and create Cinimatic Content + Videos with GenAI faster than ever before.
        </p>
      </div>

      {/* card grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="grid w-full max-w-[1250px] grid-cols-1 gap-x-[20px] gap-y-[84px] md:grid-cols-2"
      >
        {/* 1 — SuperCharacter Sheet (sprite face crop) */}
        <Card
          title="The SuperCharacter Sheet"
          desc="Our very own reference sheet that locks your character's face, hair, skin tone, features, and overall look"
        >
          <Crop
            src={`${B}/hero4k.webp`}
            box={{ left: "4.07%", top: "4.22%", width: "88.13%", height: "137.52%" }}
            inner={{ left: "0", top: "0", width: "224.69%", height: "100%" }}
          />
        </Card>

        {/* 2 — Get paid faster (two sprite crops) */}
        <Card
          title="The SuperWorld Sheet"
          desc="The skill & schematics that direct our AI Location and Production Design"
        >
          <Crop
            src={`${B}/hero4k.webp`}
            box={{ left: "14.31%", top: "12.85%", width: "29.67%", height: "81.41%" }}
            inner={{ left: "-184.88%", top: "0", width: "395.06%", height: "100%" }}
          />
          <Crop
            src={`${B}/hero4k.webp`}
            box={{ left: "54.31%", top: "12.85%", width: "29.67%", height: "81.41%" }}
            inner={{ left: "-285.03%", top: "0", width: "395.06%", height: "100%" }}
          />
        </Card>

        {/* 3 — One home (kitchen row) */}
        <Card
          title="The SuperWorld Sheet"
          desc="The skill & schematics that direct our AI Location and Production Design"
        >
          {kitchenRow.map((img, i) => (
            <Cover
              key={i}
              src={img.src}
              rounded
              style={{ left: img.left, top: "7%", width: "39.28%", height: "85.76%" }}
            />
          ))}
        </Card>

        {/* 4 — Track earnings (products) */}
        <Card
          title="The SuperProps Sheet"
          desc="Our exact production props, locations, and visual references template to use for your own projects"
        >
          <Crop
            src={`${B}/headphones.webp`}
            box={{ left: "59.85%", top: "9.26%", width: "21.66%", height: "35.49%" }}
            inner={{ left: "-5.72%", top: "-27.28%", width: "379%", height: "160.61%" }}
          />
          <Crop
            src={`${B}/bag.webp`}
            box={{ left: "35.17%", top: "1.38%", width: "22.18%", height: "65.67%" }}
            inner={{ left: "0", top: "0", width: "239.81%", height: "100%" }}
          />
          <Cover
            src={`${B}/mug.webp`}
            style={{ left: "34.29%", top: "32.99%", width: "53.19%", height: "65.67%" }}
          />
          <Crop
            src={`${B}/tubedancer.webp`}
            box={{ left: "12.68%", top: "16.70%", width: "20%", height: "65.67%" }}
            inner={{ left: "0", top: "0", width: "265.97%", height: "100%" }}
          />
        </Card>

        {/* 5 — One home (camera) */}
        <Card
          title="The SuperDirector Kit"
          desc="Access to our Agent that can control framing, lenses, camera angles, movement, depth, and composition so your shots feel intentional and cinematic."
        >
          <Cover
            src={`${B}/image126.webp`}
            style={{ left: "-19.51%", top: "11.84%", width: "102.11%", height: "70.59%" }}
          />
          <Cover
            src={`${B}/image127.webp`}
            style={{ left: "50.08%", top: "36.33%", width: "49.59%", height: "34.28%" }}
          />
        </Card>
      </motion.div>
    </section>
  );
}
