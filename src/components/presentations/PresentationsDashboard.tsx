import Link from "next/link";

import PresentationBrand from "@/components/presentations/PresentationBrand";
import { formatCreatedAt, padSlideNumber } from "@/components/presentations/shared/utils";
import {
  getPresentationsExceptCategory,
  sortPresentationsByClient,
} from "@/data/presentations";
import { getCategoryLabel } from "@/data/presentations/categories";

export default function PresentationsDashboard() {
  const presentations = sortPresentationsByClient(
    getPresentationsExceptCategory("proposal")
  );

  return (
    <div className="relative min-h-[100dvh] bg-presentation-bg text-presentation-fg">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-[linear-gradient(to_left,rgba(224,224,224,0.35),transparent)]"
      />

      <header className="border-b border-presentation-line bg-presentation-bg/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-presentation items-center justify-between px-5 py-5 sm:px-8 sm:py-6">
          <PresentationBrand />
          <p className="font-display text-sm font-light tracking-[0.18em] text-presentation-muted">
            {String(presentations.length).padStart(2, "0")}{" "}
            {presentations.length === 1 ? "apresentação" : "apresentações"}
          </p>
        </div>
      </header>

      <main className="mx-auto w-full max-w-presentation px-5 py-12 sm:px-8 sm:py-16">
        <div className="max-w-slide-body lg:max-w-slide-body-lg">
          <p className="font-display text-sm font-light uppercase tracking-[0.28em] text-presentation-muted">
            Apresentações
          </p>
          <h1 className="mt-4 font-display text-[clamp(2.5rem,6vw,4rem)] font-extralight leading-[1.02] tracking-lab text-presentation-fg">
            Apresentações por cliente
          </h1>
          <p className="mt-5 font-body text-base font-light leading-relaxed text-presentation-muted sm:text-lg">
            Acesse as apresentações consultivas organizadas por cliente.
          </p>
        </div>

        <div className="presentations-grid">
          {presentations.map((presentation, index) => (
            <Link
              key={presentation.slug}
              href={`/apresentacoes/${presentation.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="presentation-card group"
            >
              <div className="presentation-card-header">
                <p className="presentation-card-number font-display text-4xl font-extralight leading-none tracking-lab text-presentation-line sm:text-5xl">
                  {padSlideNumber(index + 1)}
                </p>
                <time
                  dateTime={presentation.createdAt}
                  className="shrink-0 font-display text-xs font-light tracking-[0.18em] text-presentation-muted"
                >
                  {formatCreatedAt(presentation.createdAt)}
                </time>
              </div>
              <div className="presentation-card-content">
                <p className="font-display text-xs font-light uppercase tracking-[0.22em] text-presentation-muted">
                  {presentation.client}
                </p>
                <h2 className="font-display text-xl font-extralight leading-snug tracking-lab text-presentation-fg sm:text-2xl">
                  {presentation.title}
                </h2>
                <p className="font-body text-sm font-light text-presentation-muted">
                  {getCategoryLabel(presentation.category)}
                </p>
              </div>
              <p className="presentation-card-action font-body text-xs font-medium uppercase tracking-[0.14em] text-presentation-fg">
                Abrir apresentação →
              </p>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
