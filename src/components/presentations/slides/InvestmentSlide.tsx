import { motion } from "framer-motion";

import type { PresentationSlide } from "@/data/presentations/types";
import { fadeUpItem, staggerContainer } from "../animations/slideVariants";

export default function InvestmentSlide({ slide }: { slide: PresentationSlide }) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="show"
      className="flex w-full flex-col py-0"
    >
      <motion.p
        variants={fadeUpItem}
        className="font-display text-sm font-light uppercase tracking-[0.28em] text-presentation-muted"
      >
        {slide.title}
      </motion.p>

      {slide.subtitle && (
        <motion.h2
          variants={fadeUpItem}
          className="mt-5 max-w-[20ch] font-display text-4xl font-extralight leading-[1.05] tracking-lab text-presentation-fg sm:text-6xl"
        >
          {slide.subtitle}
        </motion.h2>
      )}

      <motion.div
        variants={fadeUpItem}
        className="mt-10 grid gap-6 border border-presentation-line sm:grid-cols-[1.2fr_0.8fr]"
      >
        <div className="border-b border-presentation-line p-6 sm:border-b-0 sm:border-r sm:p-8">
          {slide.body && (
            <p className="max-w-slide-body lg:max-w-slide-body-lg font-body text-base font-light leading-relaxed text-presentation-fg sm:text-lg">
              {slide.body}
            </p>
          )}
        </div>

        <div className="flex flex-col justify-center p-6 sm:p-8">
          <p className="font-display text-xs font-light uppercase tracking-[0.28em] text-presentation-muted">
            Investimento
          </p>
          {slide.highlight && (
            <p className="mt-3 font-display text-[3rem] font-light tracking-lab text-presentation-fg">
              {slide.highlight}
            </p>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
