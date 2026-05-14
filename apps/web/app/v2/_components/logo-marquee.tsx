"use client";

import Image from "next/image";
import { motion } from "motion/react";

const logoGroups = [
  { src: "/v2/logo_group_1.png", alt: "Logo group 1" },
  { src: "/v2/Logos_Group_X_02.png", alt: "Logo group 2" },
  { src: "/v2/logo_group_3.png", alt: "Logo group 3" },
  { src: "/v2/logo_group_4.png", alt: "Logo group 4" },
  { src: "/v2/Logos_Group_X_03.png", alt: "Logo group 5" },
  { src: "/v2/logo_group_6.png", alt: "Logo group 6" },
];

export function LogoMarquee() {
  const doubled = [...logoGroups, ...logoGroups];

  return (
    <div className="w-full overflow-hidden">
      <motion.div
        className="flex w-max items-center"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
      >
        {doubled.map((logo, i) => (
          <Image
            key={i}
            src={logo.src}
            alt={logo.alt}
            width={1200}
            height={300}
            className="h-[100px] w-auto select-none"
            priority={i < logoGroups.length}
          />
        ))}
      </motion.div>
    </div>
  );
}
