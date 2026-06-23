"use client";

type PresentationControlsProps = {
  current: number;
  total: number;
  onPrevious: () => void;
  onNext: () => void;
  sideLabel?: string;
};

export default function PresentationControls({
  current,
  total,
  onPrevious,
  onNext,
  sideLabel,
}: PresentationControlsProps) {
  const isFirst = current <= 1;
  const isLast = current >= total;

  const buttonClass =
    "group flex h-9 w-9 items-center justify-center border border-presentation-fg/25 bg-presentation-bg text-presentation-fg transition hover:border-presentation-fg hover:bg-presentation-fg hover:text-presentation-bg disabled:cursor-not-allowed disabled:border-presentation-line disabled:text-presentation-muted disabled:hover:bg-presentation-bg disabled:hover:text-presentation-muted sm:h-10 sm:w-10";

  return (
    <div className="fixed bottom-5 right-5 z-50 flex items-center gap-4 sm:bottom-8 sm:right-8 sm:gap-5">
      {sideLabel && (
        <p className="hidden font-display text-xs font-light uppercase tracking-[0.35em] text-presentation-muted sm:block">
          {sideLabel}
        </p>
      )}
      <div className="flex items-center gap-2 sm:gap-3">
      <button
        type="button"
        onClick={onPrevious}
        disabled={isFirst}
        aria-label="Slide anterior"
        className={buttonClass}
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <button
        type="button"
        onClick={onNext}
        disabled={isLast}
        aria-label="Próximo slide"
        className={buttonClass}
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      </div>
    </div>
  );
}
