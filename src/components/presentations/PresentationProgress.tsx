"use client";

import { AnimatePresence, motion } from "framer-motion";

import PresentationBrand from "./PresentationBrand";
import { padSlideNumber } from "./shared/utils";

type PresentationProgressProps = {
  current: number;
  total: number;
};

export default function PresentationProgress({ current, total }: PresentationProgressProps) {
  const progress = total > 0 ? (current / total) * 100 : 0;

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-50 border-b border-presentation-line bg-presentation-bg/95 backdrop-blur-sm">
      <div className="grid grid-cols-[1fr_auto] items-center gap-x-4 px-5 py-4 sm:grid-cols-[1fr_minmax(0,1200px)_1fr] sm:gap-x-6 sm:px-8 sm:py-5">
        <div className="justify-self-start sm:col-start-1">
          <PresentationBrand />
        </div>

        <div className="hidden min-w-0 sm:col-start-2 sm:block">
          <div className="relative h-px overflow-hidden bg-presentation-line">
            <motion.div
              className="absolute inset-y-0 left-0 bg-presentation-fg"
              initial={false}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
        </div>

        <div className="justify-self-end sm:col-start-3">
          <p className="font-display text-sm font-light tracking-[0.18em] text-presentation-muted">
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.span
                key={current}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block text-presentation-fg"
              >
                {padSlideNumber(current)}
              </motion.span>
            </AnimatePresence>
            <span className="text-presentation-line"> / </span>
            {padSlideNumber(total)}
          </p>
        </div>
      </div>
    </div>
  );
}
