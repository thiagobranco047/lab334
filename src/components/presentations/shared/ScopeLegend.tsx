import type { ScopeStatus } from "@/data/presentations/types";

import { ScopeStatusIcon } from "./ScopeStatusIcon";

const LEGEND_ITEMS: { status: ScopeStatus; label: string }[] = [
  { status: "included", label: "Incluso" },
  { status: "partial", label: "Incluso parcialmente" },
  { status: "excluded", label: "Não incluso" },
];

type ScopeLegendProps = {
  className?: string;
};

export default function ScopeLegend({ className = "" }: ScopeLegendProps) {
  return (
    <div className={`flex flex-wrap items-center gap-x-5 gap-y-2 ${className}`}>
      {LEGEND_ITEMS.map((item) => (
        <span
          key={item.status}
          className="inline-flex items-center gap-1.5 font-body text-sm font-light text-presentation-muted"
        >
          <ScopeStatusIcon status={item.status} className="h-4 w-4" />
          {item.label}
        </span>
      ))}
    </div>
  );
}
