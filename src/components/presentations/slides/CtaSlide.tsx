import { motion } from "framer-motion";

import type { Presentation, PresentationSlide } from "@/data/presentations/types";
import { fadeUpItem, staggerContainer } from "../animations/slideVariants";
import PresentationButton from "../shared/PresentationButton";

type CtaSlideProps = {
  slide: PresentationSlide;
  presentation: Presentation;
  showActions?: boolean;
};

export default function CtaSlide({ slide, presentation, showActions = false }: CtaSlideProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="show"
      className="flex w-full flex-col py-0"
    >
      <motion.h2
        variants={fadeUpItem}
        className="max-w-slide-cta-title lg:max-w-slide-cta-title-lg font-display text-[clamp(2.5rem,6.5vw,4.5rem)] font-extralight leading-[1.02] tracking-lab text-proposal-fg"
      >
        {slide.title}
      </motion.h2>

      {slide.body && (
        <motion.p
          variants={fadeUpItem}
          className="mt-8 max-w-slide-body lg:max-w-slide-body-lg font-body text-base font-light leading-relaxed text-proposal-fg sm:text-lg"
        >
          {slide.body}
        </motion.p>
      )}

      {slide.highlight && (
        <motion.p
          variants={fadeUpItem}
          className="mt-8 max-w-slide-body border-l-2 border-proposal-fg pl-5 font-display text-xl font-light leading-snug tracking-lab text-proposal-fg sm:text-3xl"
        >
          {slide.highlight}
        </motion.p>
      )}

      {showActions && (
        <motion.div
          variants={fadeUpItem}
          className="mt-12 flex flex-col gap-3 sm:flex-row sm:items-center"
        >
          {presentation.approveUrl && (
            <PresentationButton href={presentation.approveUrl}>Aprovar proposta</PresentationButton>
          )}
          {presentation.pdfUrl && (
            <PresentationButton href={presentation.pdfUrl} variant="secondary">
              Baixar PDF
            </PresentationButton>
          )}
        </motion.div>
      )}
    </motion.div>
  );
}
