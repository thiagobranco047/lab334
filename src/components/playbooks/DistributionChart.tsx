import type { EditorialDistribution } from "@/data/playbooks";

type DistributionChartProps = {
  distribution: EditorialDistribution[];
  accentColor?: string;
};

export default function DistributionChart({ distribution, accentColor }: DistributionChartProps) {
  return (
    <div className="space-y-4">
      {distribution.map((item) => (
        <div key={item.label}>
          <div className="mb-1.5 flex items-baseline justify-between gap-4">
            <span className="font-body text-sm font-light text-presentation-fg">{item.label}</span>
            <span className="shrink-0 font-display text-sm font-light tabular-nums text-presentation-muted">
              {item.percentage}%
            </span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-presentation-surface">
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{
                width: `${item.percentage}%`,
                backgroundColor: accentColor ?? "#4A525A",
                opacity: 0.75,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
