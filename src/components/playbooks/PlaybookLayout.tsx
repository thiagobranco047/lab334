import Link from "next/link";
import type { ReactNode } from "react";

import PresentationBrand from "@/components/presentations/PresentationBrand";
import { PLAYBOOK_SECTIONS, type PlaybookSection } from "@/data/playbooks";

import SectionNav from "./SectionNav";

type PlaybookLayoutProps = {
  children: ReactNode;
  showBackLink?: boolean;
  sections?: readonly PlaybookSection[];
};

export default function PlaybookLayout({
  children,
  showBackLink = true,
  sections = PLAYBOOK_SECTIONS,
}: PlaybookLayoutProps) {
  return (
    <div className="relative min-h-[100dvh] bg-presentation-bg text-presentation-fg">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-[linear-gradient(to_left,rgba(224,224,224,0.35),transparent)]"
      />

      <header className="sticky top-0 z-20 border-b border-presentation-line bg-presentation-bg/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-presentation items-center justify-between px-5 py-5 sm:px-8 sm:py-6">
          <div className="flex items-center gap-6">
            <Link href="/playbooks">
              <PresentationBrand />
            </Link>
            {showBackLink && (
              <Link
                href="/playbooks"
                className="hidden font-body text-xs font-light uppercase tracking-[0.14em] text-presentation-muted transition-colors hover:text-presentation-fg sm:inline"
              >
                ← Playbooks
              </Link>
            )}
          </div>
          <p className="font-display text-sm font-light tracking-[0.18em] text-presentation-muted">
            Editorial
          </p>
        </div>
      </header>

      <div className="mx-auto w-full max-w-presentation px-5 py-8 sm:px-8 sm:py-12">
        <div className="grid gap-8 lg:grid-cols-[220px_1fr] lg:gap-12">
          <aside className="hidden lg:block lg:sticky lg:top-28 lg:self-start lg:max-h-[calc(100dvh-8rem)] lg:overflow-y-auto">
            <SectionNav sections={sections} />
          </aside>

          <main className="min-w-0 space-y-8 pb-24">{children}</main>
        </div>
      </div>
    </div>
  );
}
