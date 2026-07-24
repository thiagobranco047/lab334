"use client";

import { motion } from "framer-motion";

import type { PresentationSlide } from "@/data/presentations/types";
import { fadeUpItem, staggerContainer, staggerItem } from "../animations/slideVariants";

export default function InvestmentTableSlide({ slide }: { slide: PresentationSlide }) {
  const items = slide.investmentItems;

  if (!items || items.length === 0) return null;

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
        className="font-display text-[clamp(2rem,4.5vw,3.5rem)] font-extralight leading-[1.05] tracking-lab text-presentation-fg"
      >
        {slide.title}
      </motion.h2>

      {slide.body && (
        <motion.p
          variants={fadeUpItem}
          className="mt-5 max-w-slide-body font-body text-base font-light leading-relaxed text-presentation-fg sm:text-lg"
        >
          {slide.body}
        </motion.p>
      )}

      <motion.div
        variants={fadeUpItem}
        className="mt-8 grid grid-cols-2 gap-px border border-presentation-line bg-presentation-line sm:grid-cols-4"
      >
        {items.map((item, i) => (
          <motion.div
            key={i}
            variants={staggerItem}
            className="flex flex-col justify-between bg-presentation-bg p-5 sm:p-6"
          >
            <p className="font-display text-xs font-light uppercase tracking-[0.22em] text-presentation-muted">
              {item.name}
            </p>
            <div className="mt-4">
              <p className="font-display text-xl font-extralight tracking-lab text-presentation-fg sm:text-2xl">
                {item.price}
              </p>
              {item.description && (
                <p className="mt-1 font-body text-xs font-light text-presentation-muted">
                  {item.description}
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {slide.highlight && (
        <motion.p
          variants={fadeUpItem}
          className="mt-6 font-body text-sm font-light italic text-presentation-muted"
        >
          {slide.highlight}
        </motion.p>
      )}
    </motion.div>
  );
}
