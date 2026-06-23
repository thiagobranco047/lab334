import { motion } from "framer-motion";

import type { PresentationSlide } from "@/data/presentations/types";
import { fadeUpItem, staggerContainer } from "../animations/slideVariants";
import SlideBullets from "../shared/SlideBullets";
import { extractPillarNumber } from "../shared/utils";

export default function PillarSlide({ slide }: { slide: PresentationSlide }) {
  const pillarNumber = extractPillarNumber(slide.eyebrow);

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="show"
      className="flex w-full flex-col py-0"
    >
      <div className="flex items-start gap-6 sm:gap-10">
        {pillarNumber && (
          <motion.p
            variants={fadeUpItem}
            className="font-display text-[clamp(4.5rem,12vw,7.5rem)] font-extralight leading-none tracking-lab text-presentation-line"
          >
            {pillarNumber}
          </motion.p>
        )}

        <div className="min-w-0 flex-1">
          <motion.h2
            variants={fadeUpItem}
            className="max-w-slide-title lg:max-w-slide-title-lg font-display text-[clamp(2.25rem,5vw,3.75rem)] font-extralight leading-[1.05] tracking-lab text-presentation-fg"
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

          {slide.bullets && slide.bullets.length > 0 && (
            <motion.div variants={fadeUpItem}>
              <SlideBullets items={slide.bullets} columns={slide.bullets.length > 4 ? 2 : 1} />
            </motion.div>
          )}

          {slide.highlight && (
            <motion.p
              variants={fadeUpItem}
              className="mt-8 border-t border-presentation-line pt-6 font-body text-base font-light italic text-presentation-muted sm:text-lg"
            >
              {slide.highlight}
            </motion.p>
          )}
        </div>
      </div>
    </motion.div>
  );
}
