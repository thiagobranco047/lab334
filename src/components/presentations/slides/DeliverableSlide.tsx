"use client";

import { motion } from "framer-motion";

import type { PresentationSlide } from "@/data/presentations/types";
import { fadeUpItem, staggerContainer, staggerItem } from "../animations/slideVariants";

export default function DeliverableSlide({ slide }: { slide: PresentationSlide }) {
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

      <motion.div
        variants={fadeUpItem}
        className="mt-8 grid border border-presentation-line sm:grid-cols-[1.4fr_0.6fr]"
      >
        <div className="border-b border-presentation-line p-6 sm:border-b-0 sm:border-r sm:p-8">
          {slide.body && (
            <p className="font-body text-base font-light leading-relaxed text-presentation-fg sm:text-lg">
              {slide.body}
            </p>
          )}

          {slide.bullets && slide.bullets.length > 0 && (
            <motion.ul
              variants={staggerContainer}
              initial="hidden"
              animate="show"
              className="mt-6 space-y-2"
            >
              {slide.bullets.map((item, i) => (
                <motion.li
                  key={i}
                  variants={staggerItem}
                  className="flex items-start gap-3 font-body text-sm font-light text-presentation-fg sm:text-base"
                >
                  <span className="mt-[0.45em] h-[3px] w-[3px] shrink-0 rounded-full bg-presentation-muted" />
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          )}

          {slide.subtitle && (
            <p className="mt-6 font-body text-sm font-light text-presentation-muted">
              Prazo estimado: {slide.subtitle}
            </p>
          )}
        </div>

        <div className="flex flex-col justify-center p-6 sm:p-8">
          <p className="font-display text-xs font-light uppercase tracking-[0.28em] text-presentation-muted">
            Investimento
          </p>
          {slide.investment && (
            <p className="mt-3 font-display text-[clamp(1.75rem,3.5vw,2.75rem)] font-extralight leading-none tracking-lab text-presentation-fg">
              {slide.investment}
            </p>
          )}
          {slide.highlight && (
            <p className="mt-6 border-t border-presentation-line pt-5 font-body text-sm font-light italic text-presentation-muted">
              {slide.highlight}
            </p>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
