import { motion } from "framer-motion";

import type { PresentationSlide } from "@/data/presentations/types";
import { fadeUpItem, staggerContainer } from "../animations/slideVariants";

export default function QuoteSlide({ slide }: { slide: PresentationSlide }) {
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
          className="mb-6 font-display text-sm font-light uppercase tracking-[0.28em] text-presentation-muted"
        >
          {slide.eyebrow}
        </motion.p>
      )}

      <motion.blockquote
        variants={fadeUpItem}
        className="max-w-[22ch] border-l-2 border-presentation-fg pl-6 font-display text-[clamp(2rem,5vw,3.75rem)] font-extralight leading-[1.08] tracking-lab text-presentation-fg"
      >
        {slide.title}
      </motion.blockquote>

      {slide.body && (
        <motion.p
          variants={fadeUpItem}
          className="mt-8 max-w-slide-body lg:max-w-slide-body-lg font-body text-base font-light leading-relaxed text-presentation-fg sm:text-lg"
        >
          {slide.body}
        </motion.p>
      )}

      {slide.highlight && (
        <motion.p
          variants={fadeUpItem}
          className="mt-8 font-body text-sm font-light uppercase tracking-[0.2em] text-presentation-muted sm:text-base"
        >
          {slide.highlight}
        </motion.p>
      )}
    </motion.div>
  );
}
