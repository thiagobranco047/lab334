"use client";

import ProposalBrand from "./ProposalBrand";

type ProposalProgressProps = {
  current: number;
  total: number;
};

function padSlideNumber(value: number): string {
  return value.toString().padStart(2, "0");
}

export default function ProposalProgress({ current, total }: ProposalProgressProps) {
  const progress = total > 0 ? (current / total) * 100 : 0;

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-50 border-b border-proposal-line bg-proposal-bg/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-proposal items-center gap-6 px-5 py-4 sm:px-8">
        <ProposalBrand />
        <div className="hidden flex-1 sm:block">
          <div className="h-px overflow-hidden bg-proposal-line">
            <div
              className="h-full bg-proposal-fg transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
        <p className="ml-auto shrink-0 font-display text-sm font-light tracking-[0.18em] text-proposal-muted">
          {padSlideNumber(current)} / {padSlideNumber(total)}
        </p>
      </div>
    </div>
  );
}
