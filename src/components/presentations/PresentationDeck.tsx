"use client";

import { useCallback, useEffect, useRef, useState } from "react";
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
  const scrollContainerRef = useRef<HTMLElement | null>(null);
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

  const currentSlide = presentation.slides[currentIndex];
  const slideType = currentSlide.type ?? "text";
  const isAnnexSlide = slideType === "companyScope" || slideType === "programComparison";

  usePresentationNavigation({
    currentIndex,
    totalSlides,
    goToSlide,
    goNext,
    goPrevious,
    allowContentScroll: isAnnexSlide,
    getScrollContainer: () => scrollContainerRef.current,
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

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }
  }, [currentIndex]);

  const slideMotion = getSlideMotion(slideType);
  const isCtaSlide = slideType === "cta";
  const categoryLabel = getCategoryLabel(presentation.category);
  const pillarSideLabel =
    slideType === "pillar"
      ? currentSlide.eyebrow?.startsWith("Oportunidade")
        ? "Oportunidades"
        : "Pilares"
      : undefined;

  return (
    <div className="relative min-h-[100dvh] touch-pan-y overflow-hidden bg-presentation-bg text-presentation-fg">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-[linear-gradient(to_left,rgba(224,224,224,0.35),transparent)]"
      />

      <PresentationProgress current={currentIndex + 1} total={totalSlides} />

      <main
        ref={scrollContainerRef}
        className={
          isAnnexSlide
            ? "fixed inset-x-0 top-[4.75rem] bottom-[5.5rem] z-10 overflow-y-auto overscroll-contain bg-presentation-bg sm:top-[5.25rem] sm:bottom-24"
            : "fixed inset-0 z-10 grid place-items-center overflow-hidden px-5 sm:px-10 lg:px-12"
        }
      >
        {isAnnexSlide ? (
          <div className="mx-auto grid w-full grid-cols-1 px-5 py-6 sm:grid-cols-[1fr_minmax(0,1200px)_1fr] sm:gap-x-6 sm:px-8 sm:py-8">
            <div className="min-w-0 pb-6 sm:col-start-2 sm:pb-8">
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
                    showActions={isCtaSlide}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        ) : (
          <div className="mx-auto w-full max-w-presentation">
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
                  showActions={isCtaSlide}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        )}
      </main>

      <PresentationControls
        current={currentIndex + 1}
        total={totalSlides}
        onPrevious={goPrevious}
        onNext={goNext}
        sideLabel={pillarSideLabel}
      />

      <footer className="pointer-events-none fixed bottom-5 left-5 z-40 hidden sm:block">
        <p className="font-display text-sm font-light uppercase tracking-[0.18em] text-presentation-muted">
          {categoryLabel} — {presentation.client}
        </p>
      </footer>
    </div>
  );
}
