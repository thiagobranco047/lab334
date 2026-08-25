"use client";

import { MotionConfig } from "framer-motion";

import type { Presentation } from "@/data/presentations/types";
import { padSlideNumber } from "./shared/utils";
import SlideRenderer from "./slides/SlideRenderer";

type PresentationPrintViewProps = {
  presentation: Presentation;
};

export default function PresentationPrintView({
  presentation,
}: PresentationPrintViewProps) {
  return (
    <MotionConfig reducedMotion="always">
      <div className="print-proposal bg-presentation-bg text-presentation-fg">
        <header className="print-proposal-toolbar border-b border-presentation-line px-6 py-4 print:hidden">
          <div className="mx-auto flex max-w-[1100px] flex-wrap items-center justify-between gap-3">
            <div>
              <p className="font-display text-xs font-light uppercase tracking-[0.18em] text-presentation-muted">
                Versão para impressão
              </p>
              <h1 className="mt-1 font-display text-lg font-light tracking-lab text-presentation-fg">
                {presentation.client} — {presentation.title}
              </h1>
            </div>
            <button
              type="button"
              onClick={() => window.print()}
              className="border border-presentation-fg/25 bg-presentation-bg px-4 py-2 font-body text-xs font-medium uppercase tracking-[0.14em] text-presentation-fg transition hover:border-presentation-fg hover:bg-presentation-fg hover:text-presentation-bg"
            >
              Salvar PDF
            </button>
          </div>
        </header>

        <div className="print-proposal-pages mx-auto px-5 py-8 sm:px-8 sm:py-10">
          {presentation.slides.map((slide, index) => {
            const slideType = slide.type ?? "text";
            const isAnnex =
              slideType === "companyScope" || slideType === "programComparison";

            return (
              <section
                key={`${slide.title}-${index}`}
                className={`print-slide ${isAnnex ? "print-slide-annex" : "print-slide-standard"}`}
              >
                <div className="print-slide-header mb-8 flex items-baseline justify-between gap-4 print:mb-6">
                  <p className="font-display text-[11px] font-light uppercase tracking-[0.18em] text-presentation-muted">
                    {presentation.client}
                  </p>
                  <p className="font-display text-[11px] font-light tracking-[0.14em] text-presentation-muted">
                    {padSlideNumber(index + 1)} / {padSlideNumber(presentation.slides.length)}
                  </p>
                </div>
                <div className="print-slide-body">
                  <SlideRenderer slide={slide} presentation={presentation} showActions={false} />
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </MotionConfig>
  );
}
