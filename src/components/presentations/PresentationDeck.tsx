"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { getCategoryLabel } from "@/data/presentations/categories";
import type { Presentation } from "@/data/presentations/types";
import { getSlideMotion } from "./animations/slideVariants";
import { usePresentationNavigation } from "./hooks/usePresentationNavigation";
import PresentationControls from "./PresentationControls";
import PresentationProgress from "./PresentationProgress";
import SlideRenderer from "./slides/SlideRenderer";

type PresentationDeckProps = {
  presentation: Presentation;
};

export default function PresentationDeck({ presentation }: PresentationDeckProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = presentation.slides.length;

  const goToSlide = useCallback(
    (index: number) => {
      if (index < 0 || index >= totalSlides || index === currentIndex) return;
      setCurrentIndex(index);
    },
    [currentIndex, totalSlides]
  );

  const goNext = useCallback(() => {
    goToSlide(currentIndex + 1);
  }, [currentIndex, goToSlide]);

  const goPrevious = useCallback(() => {
    goToSlide(currentIndex - 1);
  }, [currentIndex, goToSlide]);

  usePresentationNavigation({
    currentIndex,
    totalSlides,
    goToSlide,
    goNext,
    goPrevious,
  });

  useEffect(() => {
    document.title = `${presentation.client} — Lab. 334`;
  }, [presentation.client]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.body.style.backgroundColor = "#FFFFFF";
    document.body.style.color = "#4A525A";

    return () => {
      document.body.style.overflow = "";
      document.body.style.backgroundColor = "";
      document.body.style.color = "";
    };
  }, []);

  const currentSlide = presentation.slides[currentIndex];
  const slideType = currentSlide.type ?? "text";
  const slideMotion = getSlideMotion(slideType);
  const isLastSlide = currentIndex === totalSlides - 1;
  const categoryLabel = getCategoryLabel(presentation.category);

  return (
    <div className="relative min-h-[100dvh] touch-pan-y overflow-hidden bg-proposal-bg text-proposal-fg">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-[linear-gradient(to_left,rgba(224,224,224,0.35),transparent)]"
      />

      <PresentationProgress current={currentIndex + 1} total={totalSlides} />

      <main className="fixed inset-0 z-10 grid place-items-center px-5 sm:px-10 lg:px-12">
        <div className="mx-auto w-full max-w-proposal">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={currentIndex}
              initial={slideMotion.enter}
              animate={slideMotion.center}
              exit={slideMotion.exit}
              transition={slideMotion.transition}
              className="w-full"
            >
              <SlideRenderer
                slide={currentSlide}
                presentation={presentation}
                showActions={isLastSlide}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      <PresentationControls
        current={currentIndex + 1}
        total={totalSlides}
        onPrevious={goPrevious}
        onNext={goNext}
        sideLabel={slideType === "pillar" ? "Pilares" : undefined}
      />

      <footer className="pointer-events-none fixed bottom-5 left-5 z-40 hidden sm:block">
        <p className="font-display text-sm font-light uppercase tracking-[0.18em] text-proposal-muted">
          {categoryLabel} — {presentation.client}
        </p>
      </footer>
    </div>
  );
}
