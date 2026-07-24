"use client";

import { motion } from "framer-motion";

import type { PresentationSlide } from "@/data/presentations/types";
import { fadeUpItem, staggerContainer, staggerItem } from "../animations/slideVariants";

export default function PackageSlide({ slide }: { slide: PresentationSlide }) {
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
        className="font-display text-[clamp(2.25rem,5vw,3.75rem)] font-extralight leading-[1.05] tracking-lab text-presentation-fg"
      >
        {slide.title}
      </motion.h2>

      {slide.body && (
        <motion.p
          variants={fadeUpItem}
          className="mt-5 max-w-slide-body font-body text-base font-light leading-relaxed text-presentation-muted sm:text-lg"
        >
          {slide.body}
        </motion.p>
      )}

      <motion.div
        variants={fadeUpItem}
        className="mt-8 border border-presentation-line"
      >
        <div className="grid sm:grid-cols-[1.4fr_0.6fr]">
          <div className="border-b border-presentation-line p-6 sm:border-b-0 sm:border-r sm:p-8">
            <p className="font-display text-xs font-light uppercase tracking-[0.28em] text-presentation-muted">
              Inclui
            </p>
            {slide.bullets && slide.bullets.length > 0 && (
              <motion.ul
                variants={staggerContainer}
                initial="hidden"
                animate="show"
                className="mt-5 space-y-3"
              >
                {slide.bullets.map((item, i) => (
                  <motion.li
                    key={i}
                    variants={staggerItem}
                    className="flex items-center gap-3 font-body text-base font-light text-presentation-fg sm:text-lg"
                  >
                    <span className="h-px w-4 shrink-0 bg-presentation-line" />
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            )}
          </div>

          <div className="flex flex-col justify-center p-6 sm:p-8">
            <p className="font-display text-xs font-light uppercase tracking-[0.28em] text-presentation-muted">
              Valor do pacote
            </p>
            {slide.investment && (
              <p className="mt-3 font-display text-[clamp(2rem,3.5vw,2.75rem)] font-extralight leading-none tracking-lab text-presentation-fg">
                {slide.investment}
              </p>
            )}
            {slide.highlight && (
              <p className="mt-6 border-t border-presentation-line pt-5 font-body text-sm font-light italic text-presentation-muted">
                {slide.highlight}
              </p>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
