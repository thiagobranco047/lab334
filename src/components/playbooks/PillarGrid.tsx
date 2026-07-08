import type { ContentPillar } from "@/data/playbooks";

type PillarGridProps = {
  pillars: ContentPillar[];
  accentColor?: string;
};

export default function PillarGrid({ pillars, accentColor }: PillarGridProps) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {pillars.map((pillar) => (
        <div
          key={pillar.label}
          className="flex items-start gap-3 rounded-lg border border-presentation-line bg-presentation-surface/60 px-4 py-3"
        >
          {pillar.icon && (
            <span className="text-lg leading-none" aria-hidden="true">
              {pillar.icon}
            </span>
          )}
          <span
            className="font-body text-sm font-light leading-snug text-presentation-fg"
            style={accentColor ? { borderLeftColor: accentColor } : undefined}
          >
            {pillar.label}
          </span>
        </div>
      ))}
    </div>
  );
}
