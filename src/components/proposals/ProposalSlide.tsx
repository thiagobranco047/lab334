"use client";

import type { ReactNode } from "react";
import type { Proposal, ProposalSlide as ProposalSlideType } from "@/data/proposals";

type ProposalSlideProps = {
  slide: ProposalSlideType;
  proposal: Proposal;
  showActions?: boolean;
};

function extractPillarNumber(eyebrow?: string): string | null {
  if (!eyebrow) return null;
  const match = eyebrow.match(/(\d+)/);
  return match ? match[1].padStart(2, "0") : null;
}

function SlideBullets({ items, columns = 2 }: { items: string[]; columns?: 1 | 2 }) {
  return (
    <ul
      className={
        columns === 2
          ? "mt-8 grid gap-x-10 gap-y-3 sm:grid-cols-2"
          : "mt-8 space-y-3"
      }
    >
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-3 font-body text-base font-light leading-relaxed text-proposal-fg sm:text-lg"
        >
          <span className="mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-proposal-fg" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function ProposalButton({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
}) {
  const base =
    "inline-flex items-center justify-center px-7 py-4 font-body text-sm font-medium uppercase tracking-[0.14em] transition duration-300";

  if (variant === "secondary") {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} border border-proposal-fg/20 text-proposal-fg hover:border-proposal-fg hover:bg-proposal-fg hover:text-proposal-bg`}
      >
        {children}
      </a>
    );
  }

  return (
    <a
      href={href}
      className={`${base} border border-proposal-fg bg-proposal-fg text-proposal-bg hover:bg-transparent hover:text-proposal-fg`}
    >
      {children}
    </a>
  );
}

export default function ProposalSlide({
  slide,
  proposal,
  showActions = false,
}: ProposalSlideProps) {
  const slideType = slide.type ?? "text";
  const pillarNumber = extractPillarNumber(slide.eyebrow);

  if (slideType === "cover") {
    return (
      <div className="flex min-h-full flex-col justify-center py-6">
        <p className="font-body text-base font-light text-proposal-muted sm:text-lg">
          Cliente: <span className="text-proposal-fg">{proposal.client}</span>
        </p>

        <div className="mt-10 border-t border-proposal-line pt-10">
          <p className="font-display text-sm font-light uppercase tracking-[0.28em] text-proposal-muted">
            Proposta Comercial
          </p>
          <h1 className="mt-4 max-w-[16ch] font-display text-[clamp(3rem,8vw,5.5rem)] font-extralight leading-[0.95] tracking-lab text-proposal-fg">
            {slide.title}
          </h1>
        </div>

        <div className="mt-auto pt-16">
          <p className="font-body text-sm font-light uppercase tracking-[0.22em] text-proposal-muted">
            {proposal.date}
          </p>
        </div>
      </div>
    );
  }

  if (slideType === "investment") {
    return (
      <div className="flex min-h-full flex-col justify-center py-6">
        <p className="font-display text-sm font-light uppercase tracking-[0.28em] text-proposal-muted">
          {slide.title}
        </p>

        {slide.subtitle && (
          <h2 className="mt-5 max-w-[20ch] font-display text-4xl font-extralight leading-[1.05] tracking-lab text-proposal-fg sm:text-6xl">
            {slide.subtitle}
          </h2>
        )}

        <div className="mt-10 grid gap-6 border border-proposal-line sm:grid-cols-[1.2fr_0.8fr]">
          <div className="border-b border-proposal-line p-6 sm:border-b-0 sm:border-r sm:p-8">
            {slide.body && (
              <p className="max-w-[42ch] font-body text-base font-light leading-relaxed text-proposal-fg sm:text-lg">
                {slide.body}
              </p>
            )}
          </div>

          <div className="flex flex-col justify-center p-6 sm:p-8">
            <p className="font-display text-xs font-light uppercase tracking-[0.28em] text-proposal-muted">
              Investimento
            </p>
            {slide.highlight && (
              <p className="mt-3 font-display text-4xl font-light tracking-lab text-proposal-fg sm:text-6xl">
                {slide.highlight}
              </p>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (slideType === "cta") {
    return (
      <div className="flex min-h-full flex-col justify-center py-6">
        <h2 className="max-w-[14ch] font-display text-[clamp(2.5rem,6.5vw,4.5rem)] font-extralight leading-[1.02] tracking-lab text-proposal-fg">
          {slide.title}
        </h2>

        {slide.body && (
          <p className="mt-8 max-w-[46ch] font-body text-base font-light leading-relaxed text-proposal-fg sm:text-lg">
            {slide.body}
          </p>
        )}

        {slide.highlight && (
          <p className="mt-8 max-w-[34ch] border-l-2 border-proposal-fg pl-5 font-display text-xl font-light leading-snug tracking-lab text-proposal-fg sm:text-3xl">
            {slide.highlight}
          </p>
        )}

        {showActions && (
          <div className="mt-12 flex flex-col gap-3 sm:flex-row sm:items-center">
            {proposal.approveUrl && (
              <ProposalButton href={proposal.approveUrl}>Aprovar proposta</ProposalButton>
            )}
            {proposal.pdfUrl && (
              <ProposalButton href={proposal.pdfUrl} variant="secondary">
                Baixar PDF
              </ProposalButton>
            )}
          </div>
        )}
      </div>
    );
  }

  if (slideType === "pillar") {
    return (
      <div className="flex min-h-full flex-col justify-center py-6">
        <div className="flex items-start gap-6 sm:gap-10">
          {pillarNumber && (
            <p className="font-display text-[clamp(4.5rem,12vw,7.5rem)] font-extralight leading-none tracking-lab text-proposal-line">
              {pillarNumber}
            </p>
          )}

          <div className="min-w-0 flex-1">
            <h2 className="max-w-[18ch] font-display text-[clamp(2.25rem,5vw,3.75rem)] font-extralight leading-[1.05] tracking-lab text-proposal-fg">
              {slide.title}
            </h2>

            {slide.body && (
              <p className="mt-5 max-w-[48ch] font-body text-base font-light leading-relaxed text-proposal-fg sm:text-lg">
                {slide.body}
              </p>
            )}

            {slide.bullets && slide.bullets.length > 0 && (
              <SlideBullets items={slide.bullets} columns={slide.bullets.length > 4 ? 2 : 1} />
            )}

            {slide.highlight && (
              <p className="mt-8 border-t border-proposal-line pt-6 font-body text-base font-light italic text-proposal-muted sm:text-lg">
                {slide.highlight}
              </p>
            )}
          </div>
        </div>

        <p className="mt-auto pt-10 font-display text-xs font-light uppercase tracking-[0.35em] text-proposal-muted">
          Pilares
        </p>
      </div>
    );
  }

  return (
    <div className="flex min-h-full flex-col justify-center py-6">
      {slide.eyebrow && (
        <p className="mb-4 font-display text-sm font-light uppercase tracking-[0.28em] text-proposal-muted">
          {slide.eyebrow}
        </p>
      )}

      <h2 className="max-w-[18ch] font-display text-[clamp(2.25rem,5.5vw,4.25rem)] font-extralight leading-[1.05] tracking-lab text-proposal-fg">
        {slide.title}
      </h2>

      {slide.subtitle && (
        <p className="mt-4 font-body text-lg font-light text-proposal-muted sm:text-xl">
          {slide.subtitle}
        </p>
      )}

      {slide.body && (
        <p className="mt-6 max-w-[48ch] font-body text-base font-light leading-relaxed text-proposal-fg sm:mt-8 sm:text-lg">
          {slide.body}
        </p>
      )}

      {slide.bullets && slide.bullets.length > 0 && (
        <div className="mt-8 border-t border-proposal-line pt-8">
          <SlideBullets items={slide.bullets} columns={slide.bullets.length > 4 ? 2 : 1} />
        </div>
      )}

      {slide.highlight && (
        <p className="mt-8 max-w-[40ch] border-l-2 border-proposal-line pl-5 font-body text-base font-light italic text-proposal-muted sm:text-lg">
          {slide.highlight}
        </p>
      )}
    </div>
  );
}
