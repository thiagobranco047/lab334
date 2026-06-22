import Link from "next/link";

import PresentationBrand from "@/components/presentations/PresentationBrand";
import { padSlideNumber } from "@/components/presentations/shared/utils";
import { getCategoryLabel } from "@/data/presentations/categories";
import { getPresentationsByCategory } from "@/data/presentations";

export default function ProposalsDashboard() {
  const proposals = getPresentationsByCategory("proposal").sort((a, b) => {
    const byClient = a.client.localeCompare(b.client, "pt-BR");
    return byClient !== 0 ? byClient : a.title.localeCompare(b.title, "pt-BR");
  });

  return (
    <div className="relative min-h-[100dvh] bg-proposal-bg text-proposal-fg">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-[linear-gradient(to_left,rgba(224,224,224,0.35),transparent)]"
      />

      <header className="border-b border-proposal-line bg-proposal-bg/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-proposal items-center justify-between px-5 py-5 sm:px-8 sm:py-6">
          <PresentationBrand />
          <p className="font-display text-sm font-light tracking-[0.18em] text-proposal-muted">
            {String(proposals.length).padStart(2, "0")} propostas
          </p>
        </div>
      </header>

      <main className="mx-auto w-full max-w-proposal px-5 py-12 sm:px-8 sm:py-16">
        <div className="max-w-slide-body lg:max-w-slide-body-lg">
          <p className="font-display text-sm font-light uppercase tracking-[0.28em] text-proposal-muted">
            {getCategoryLabel("proposal")}
          </p>
          <h1 className="mt-4 font-display text-[clamp(2.5rem,6vw,4rem)] font-extralight leading-[1.02] tracking-lab text-proposal-fg">
            Propostas por cliente
          </h1>
          <p className="mt-5 font-body text-base font-light leading-relaxed text-proposal-muted sm:text-lg">
            Acesse as apresentações comerciais organizadas por cliente.
          </p>
        </div>

        <div className="proposals-grid">
          {proposals.map((proposal, index) => (
            <Link
              key={proposal.slug}
              href={`/propostas/${proposal.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="proposal-card group"
            >
              <p className="proposal-card-number font-display text-4xl font-extralight leading-none tracking-lab text-proposal-line sm:text-5xl">
                {padSlideNumber(index + 1)}
              </p>
              <p className="mt-4 font-display text-xs font-light uppercase tracking-[0.22em] text-proposal-muted">
                {proposal.client}
              </p>
              <p className="mt-3 font-display text-xs font-light uppercase tracking-[0.22em] text-proposal-muted">
                {proposal.date}
              </p>
              <h2 className="mt-4 font-display text-xl font-extralight leading-snug tracking-lab text-proposal-fg sm:text-2xl">
                {proposal.title}
              </h2>
              {proposal.investment && (
                <p className="mt-4 font-body text-sm font-light text-proposal-muted">
                  {proposal.investment}
                </p>
              )}
              <p className="mt-auto pt-6 font-body text-xs font-medium uppercase tracking-[0.14em] text-proposal-fg">
                Abrir apresentação →
              </p>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
