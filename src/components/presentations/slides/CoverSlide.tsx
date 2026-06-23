import { motion } from "framer-motion";

import { getCategoryLabel } from "@/data/presentations/categories";
import type { Presentation, PresentationSlide } from "@/data/presentations/types";
import { fadeUpItem, staggerContainer } from "../animations/slideVariants";

type SlideProps = {
  slide: PresentationSlide;
  presentation: Presentation;
};

export default function CoverSlide({ slide, presentation }: SlideProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="show"
      className="flex w-full flex-col py-0"
    >
      <motion.p variants={fadeUpItem} className="font-body text-base font-light text-presentation-muted sm:text-lg">
        Cliente: <span className="text-presentation-fg">{presentation.client}</span>
      </motion.p>

      <motion.div variants={fadeUpItem} className="mt-10 border-t border-presentation-line pt-10">
        <p className="font-display text-sm font-light uppercase tracking-[0.28em] text-presentation-muted">
          {getCategoryLabel(presentation.category)}
        </p>
        <h1 className="mt-4 max-w-slide-title lg:max-w-slide-title-lg font-display text-[clamp(3rem,8vw,5.5rem)] font-extralight leading-[0.95] tracking-lab text-presentation-fg">
          {slide.title}
        </h1>
      </motion.div>

      <motion.div variants={fadeUpItem} className="mt-16 pt-0">
        <p className="font-body text-sm font-light uppercase tracking-[0.22em] text-presentation-muted">
          {presentation.date}
        </p>
      </motion.div>
    </motion.div>
  );
}
