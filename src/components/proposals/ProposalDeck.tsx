"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal, flushSync } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";

import type { Proposal } from "@/data/proposals";
import { exportProposalToPdf, PROPOSAL_PDF_HEIGHT, PROPOSAL_PDF_WIDTH } from "@/lib/exportProposalPdf";
import ProposalBrand from "./ProposalBrand";
import ProposalControls from "./ProposalControls";
import ProposalProgress from "./ProposalProgress";
import ProposalSlide from "./ProposalSlide";

type ProposalDeckProps = {
  proposal: Proposal;
};

const slideVariants = {
  enter: {
    opacity: 0,
    y: 24,
  },
  center: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: -16,
  },
};

export default function ProposalDeck({ proposal }: ProposalDeckProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [exportSlideIndex, setExportSlideIndex] = useState<number | null>(null);
  const [isExporting, setIsExporting] = useState(false);
  const exportFrameRef = useRef<HTMLDivElement>(null);
  const totalSlides = proposal.slides.length;

  const getExportFrameClassName = () => {
    const root = document.querySelector("[data-proposal-root]");
    const rootClasses = root instanceof HTMLElement ? root.className : "";
    return `pointer-events-none fixed top-0 left-0 z-[9997] overflow-hidden bg-proposal-bg text-proposal-fg antialiased ${rootClasses}`;
  };

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

  const handleExportPdf = useCallback(async () => {
    if (isExporting) return;

    setIsExporting(true);

    try {
      await exportProposalToPdf(
        proposal,
        () => exportFrameRef.current,
        (index) => {
          flushSync(() => setExportSlideIndex(index));
        }
      );
    } catch (error) {
      console.error(error);
      window.alert("Não foi possível gerar o PDF. Tente novamente.");
    } finally {
      setExportSlideIndex(null);
      setIsExporting(false);
    }
  }, [isExporting, proposal]);

  useEffect(() => {
    document.title = `${proposal.client} — Lab. 334`;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (isExporting) return;

      if (event.key === "ArrowRight") {
        event.preventDefault();
        goNext();
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        goPrevious();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goNext, goPrevious, isExporting, proposal.client]);

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

  const currentSlide = proposal.slides[currentIndex];
  const isLastSlide = currentIndex === totalSlides - 1;

  const exportFrame =
    exportSlideIndex !== null && typeof document !== "undefined"
      ? createPortal(
          <div
            ref={exportFrameRef}
            aria-hidden={!isExporting}
            className={getExportFrameClassName()}
            style={{
              width: PROPOSAL_PDF_WIDTH,
              height: PROPOSAL_PDF_HEIGHT,
            }}
          >
            <div className="flex h-full flex-col px-24 pb-16 pt-20">
              <ProposalBrand />
              <div className="flex flex-1 flex-col justify-center">
                <ProposalSlide
                  slide={proposal.slides[exportSlideIndex]}
                  proposal={proposal}
                  showActions={false}
                  exportMode
                />
              </div>
              <p className="font-body text-sm font-light uppercase tracking-[0.24em] text-proposal-muted">
                Proposta Comercial — {proposal.client}
              </p>
            </div>
          </div>,
          document.body
        )
      : null;

  return (
    <div className="relative min-h-[100dvh] overflow-hidden bg-proposal-bg text-proposal-fg">
      {isExporting && (
        <div className="fixed inset-0 z-[9998] flex items-center justify-center bg-proposal-bg/90 backdrop-blur-sm">
          <p className="font-display text-sm font-light uppercase tracking-[0.24em] text-proposal-muted">
            Gerando PDF...
          </p>
        </div>
      )}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-[linear-gradient(to_left,rgba(224,224,224,0.35),transparent)]"
      />

      <ProposalProgress current={currentIndex + 1} total={totalSlides} />

      <main className="relative mx-auto flex min-h-[100dvh] max-w-proposal items-stretch px-5 pb-24 pt-28 sm:px-8 sm:pb-28 sm:pt-32">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex w-full flex-col justify-center"
          >
            <ProposalSlide
              slide={currentSlide}
              proposal={proposal}
              showActions={isLastSlide}
              onExportPdf={handleExportPdf}
              isExportingPdf={isExporting}
            />
          </motion.div>
        </AnimatePresence>
      </main>

      <ProposalControls
        current={currentIndex + 1}
        total={totalSlides}
        onPrevious={goPrevious}
        onNext={goNext}
      />

      <footer className="pointer-events-none fixed bottom-5 left-5 z-40 hidden sm:block">
        <p className="font-body text-xs font-light uppercase tracking-[0.24em] text-proposal-muted sm:text-sm">
          Proposta Comercial — {proposal.client}
        </p>
      </footer>

      {exportFrame}
    </div>
  );
}
