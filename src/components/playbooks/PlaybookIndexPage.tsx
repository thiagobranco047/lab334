import Link from "next/link";

import PresentationBrand from "@/components/presentations/PresentationBrand";
import { getAllPlaybooks } from "@/data/playbooks";

export default function PlaybookIndexPage() {
  const playbooks = getAllPlaybooks().toSorted((a, b) => a.name.localeCompare(b.name, "pt-BR"));

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
            {String(playbooks.length).padStart(2, "0")} playbooks
          </p>
        </div>
      </header>

      <main className="mx-auto w-full max-w-presentation px-5 py-12 sm:px-8 sm:py-16">
        <div className="max-w-slide-body lg:max-w-slide-body-lg">
          <p className="font-display text-sm font-light uppercase tracking-[0.28em] text-presentation-muted">
            Playbooks Editoriais
          </p>
          <h1 className="mt-4 font-display text-[clamp(2.5rem,6vw,4rem)] font-extralight leading-[1.02] tracking-lab text-presentation-fg">
            Planejamento editorial
          </h1>
          <p className="mt-5 font-body text-base font-light leading-relaxed text-presentation-muted sm:text-lg">
            Acesse os playbooks estratégicos de cada marca em páginas independentes.
          </p>
        </div>

        <div className="presentations-grid">
          {playbooks.map((playbook) => (
            <Link
              key={playbook.slug}
              href={`/playbooks/${playbook.slug}`}
              className="presentation-card group"
            >
              <div className="presentation-card-content">
                <p className="font-display text-xs font-light uppercase tracking-[0.22em] text-presentation-muted">
                  {playbook.status}
                </p>
                <h2 className="font-display text-xl font-extralight leading-snug tracking-lab text-presentation-fg sm:text-2xl">
                  {playbook.name}
                </h2>
                <p className="font-body text-sm font-light text-presentation-muted">
                  {playbook.subtitle}
                </p>
                <p className="mt-1 font-body text-xs font-light text-presentation-muted">
                  {playbook.tags.slice(0, 3).join(", ")}
                </p>
              </div>
              <p className="presentation-card-action font-body text-xs font-medium uppercase tracking-[0.14em] text-presentation-fg">
                Abrir playbook →
              </p>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
