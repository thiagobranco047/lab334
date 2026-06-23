"use client";

import { motion } from "framer-motion";

import type { PresentationSlide } from "@/data/presentations/types";
import { fadeUpItem, staggerContainer, staggerItem } from "../animations/slideVariants";

export default function StatsSlide({ slide }: { slide: PresentationSlide }) {
  const stats = slide.stats;

  if (!stats?.length) return null;

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="show"
      className="flex w-full flex-col py-0"
    >
      {slide.eyebrow && (
        <motion.p
          variants={fadeUpItem}
          className="mb-4 font-display text-sm font-light uppercase tracking-[0.28em] text-presentation-muted"
        >
          {slide.eyebrow}
        </motion.p>
      )}

      <motion.h2
        variants={fadeUpItem}
        className="max-w-slide-title lg:max-w-slide-title-lg font-display text-[clamp(2rem,4.5vw,3.5rem)] font-extralight leading-[1.05] tracking-lab text-presentation-fg"
      >
        {slide.title}
      </motion.h2>

      {slide.body && (
        <motion.p
          variants={fadeUpItem}
          className="mt-5 max-w-slide-body lg:max-w-slide-body-lg font-body text-base font-light leading-relaxed text-presentation-fg sm:text-lg"
        >
          {slide.body}
        </motion.p>
      )}

      <motion.div
        variants={fadeUpItem}
        className="mt-10 grid gap-px border border-presentation-line bg-presentation-line sm:grid-cols-2 lg:grid-cols-3"
      >
        {stats.map((stat) => (
          <motion.div
            key={stat.label}
            variants={staggerItem}
            className="bg-presentation-bg p-6 sm:p-8"
          >
            <p className="font-display text-[clamp(2rem,4vw,3rem)] font-light tracking-lab text-presentation-fg">
              {stat.value}
            </p>
            <p className="mt-2 font-body text-sm font-light uppercase tracking-[0.16em] text-presentation-muted sm:text-base">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
