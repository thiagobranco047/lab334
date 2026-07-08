import type { Playbook } from "@/data/playbooks";

type PlaybookHeroProps = {
  playbook: Playbook;
};

export default function PlaybookHero({ playbook }: PlaybookHeroProps) {
  return (
    <header
      className="relative overflow-hidden rounded-2xl border border-presentation-line p-6 sm:p-10"
      style={{
        background: `linear-gradient(135deg, ${playbook.accentColor}08 0%, ${playbook.accentColor}14 50%, transparent 100%)`,
      }}
    >
      <div
        className="absolute inset-y-0 left-0 w-1 rounded-l-2xl"
        style={{ backgroundColor: playbook.accentColor }}
        aria-hidden="true"
      />

      <div className="relative pl-4 sm:pl-6">
        <span
          className="inline-block rounded-full px-3 py-1 font-display text-xs font-light tracking-[0.14em] text-white"
          style={{ backgroundColor: playbook.accentColor }}
        >
          {playbook.status}
        </span>

        <h1 className="mt-5 font-display text-[clamp(2rem,5vw,3.25rem)] font-extralight leading-[1.05] tracking-lab text-presentation-fg">
          {playbook.name}
        </h1>

        <p className="mt-3 max-w-slide-body font-display text-lg font-light leading-snug text-presentation-fg sm:text-xl">
          {playbook.subtitle}
        </p>

        <p className="mt-5 max-w-slide-body-lg font-body text-base font-light leading-relaxed text-presentation-muted">
          {playbook.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {playbook.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-presentation-line bg-presentation-surface px-3 py-1 font-body text-xs font-light text-presentation-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </header>
  );
}
