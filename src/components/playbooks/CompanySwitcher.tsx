"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import type { Playbook } from "@/data/playbooks";

type CompanySwitcherProps = {
  playbooks: Playbook[];
  currentPlaybook: Playbook;
};

export default function CompanySwitcher({ playbooks, currentPlaybook }: CompanySwitcherProps) {
  const pathname = usePathname();

  return (
    <nav aria-label="Navegação entre empresas" className="space-y-1">
      <p className="mb-3 font-display text-xs font-light uppercase tracking-[0.22em] text-presentation-muted">
        Playbooks
      </p>
      {playbooks.map((playbook) => {
        const href = `/playbooks/${playbook.slug}`;
        const isActive = pathname === href;
        return (
          <Link
            key={playbook.slug}
            href={href}
            className={`flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm transition-colors ${
              isActive
                ? "bg-presentation-surface font-medium text-presentation-fg"
                : "font-light text-presentation-muted hover:bg-presentation-surface/60 hover:text-presentation-fg"
            }`}
          >
            <span
              className="h-2 w-2 shrink-0 rounded-full"
              style={{ backgroundColor: playbook.accentColor }}
              aria-hidden="true"
            />
            <span className="truncate font-body leading-snug">
              {playbook.name}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
