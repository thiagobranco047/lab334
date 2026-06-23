import { motion } from "framer-motion";

import type { PresentationSlide } from "@/data/presentations/types";
import { fadeUpItem, staggerContainer } from "../animations/slideVariants";
import SlideBullets from "../shared/SlideBullets";

export default function TextSlide({ slide }: { slide: PresentationSlide }) {
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
        className="max-w-slide-title lg:max-w-slide-title-lg font-display text-[clamp(2.25rem,5.5vw,4.25rem)] font-extralight leading-[1.05] tracking-lab text-presentation-fg"
      >
        {slide.title}
      </motion.h2>

      {slide.subtitle && (
        <motion.p variants={fadeUpItem} className="mt-4 font-body text-lg font-light text-presentation-muted sm:text-xl">
          {slide.subtitle}
        </motion.p>
      )}

      {slide.body && (
        <motion.p
          variants={fadeUpItem}
          className="mt-6 max-w-slide-body lg:max-w-slide-body-lg font-body text-base font-light leading-relaxed text-presentation-fg sm:mt-8 sm:text-lg"
        >
          {slide.body}
        </motion.p>
      )}

      {slide.bullets && slide.bullets.length > 0 && (
        <motion.div variants={fadeUpItem} className="mt-8 w-full border-t border-presentation-line pt-8">
          <SlideBullets items={slide.bullets} columns={slide.bullets.length > 4 ? 2 : 1} />
        </motion.div>
      )}

      {slide.highlight && (
        <motion.p
          variants={fadeUpItem}
          className="mt-8 max-w-slide-body border-l-2 border-presentation-line pl-5 font-body text-base font-light italic text-presentation-muted sm:text-lg"
        >
          {slide.highlight}
        </motion.p>
      )}
    </motion.div>
  );
}
