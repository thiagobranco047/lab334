import type { PlaybookSection } from "@/data/playbooks";

type SectionNavProps = {
  sections?: readonly PlaybookSection[];
};

export default function SectionNav({ sections }: SectionNavProps) {
  const items = sections ?? [];

  return (
    <nav aria-label="Seções do playbook">
      <p className="mb-3 font-display text-xs font-light uppercase tracking-[0.22em] text-presentation-muted">
        Seções
      </p>
      <ul className="m-0 list-none space-y-0.5 p-0">
        {items.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className="block rounded-md px-3 py-2 font-body text-sm font-light text-presentation-muted transition-colors hover:bg-presentation-surface hover:text-presentation-fg"
            >
              {section.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
