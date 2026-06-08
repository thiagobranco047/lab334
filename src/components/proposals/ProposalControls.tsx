"use client";

type ProposalControlsProps = {
  current: number;
  total: number;
  onPrevious: () => void;
  onNext: () => void;
};

export default function ProposalControls({
  current,
  total,
  onPrevious,
  onNext,
}: ProposalControlsProps) {
  const isFirst = current <= 1;
  const isLast = current >= total;

  const buttonClass =
    "group flex h-11 w-11 items-center justify-center border border-proposal-fg/25 bg-proposal-bg text-proposal-fg transition hover:border-proposal-fg hover:bg-proposal-fg hover:text-proposal-bg disabled:cursor-not-allowed disabled:border-proposal-line disabled:text-proposal-muted disabled:hover:bg-proposal-bg disabled:hover:text-proposal-muted sm:h-12 sm:w-12";

  return (
    <div className="fixed bottom-5 right-5 z-50 flex items-center gap-2 sm:bottom-8 sm:right-8 sm:gap-3">
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
          className="h-4 w-4 transition-transform group-hover:-translate-x-0.5"
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
          className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
}
