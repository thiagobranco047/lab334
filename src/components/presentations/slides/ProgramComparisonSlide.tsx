import type { ProgramComparisonData } from "@/data/presentations/types";

import ScopeLegend from "../shared/ScopeLegend";
import { ScopeStatusIcon, scopeStatusLabel } from "../shared/ScopeStatusIcon";

type ProgramComparisonSlideProps = {
  title: string;
  body?: string;
  data: ProgramComparisonData;
};

export default function ProgramComparisonSlide({
  title,
  body,
  data,
}: ProgramComparisonSlideProps) {
  return (
    <div className="program-comparison-slide flex w-full flex-col py-0">
      <div className="flex flex-wrap items-end justify-between gap-4 print:gap-2">
        <div>
          <h2 className="font-display text-[clamp(1.75rem,4vw,2.75rem)] font-extralight leading-none tracking-lab text-presentation-fg print:text-[1.35rem]">
            {title}
          </h2>
          {body && (
            <p className="mt-3 max-w-slide-body font-body text-sm font-light leading-relaxed text-presentation-muted print:mt-1 print:max-w-none print:text-[11px] print:leading-snug">
              {body}
            </p>
          )}
        </div>
        <ScopeLegend className="print:gap-x-3 print:gap-y-1 [&_span]:print:text-[10px] [&_svg]:print:h-3 [&_svg]:print:w-3" />
      </div>

      <div className="mt-5 overflow-x-auto rounded-lg border border-presentation-line print:mt-2 print:overflow-visible">
        <table className="w-full min-w-[52rem] border-collapse text-left print:min-w-0">
          <thead>
            <tr className="border-b border-presentation-line bg-presentation-surface/70">
              <th className="sticky left-0 z-10 bg-presentation-surface/95 px-3 py-2 font-display text-[11px] font-light uppercase tracking-[0.14em] text-presentation-muted sm:px-4 print:static print:px-2 print:py-1.5 print:text-[9px]">
                Serviço
              </th>
              {data.columns.map((column) => (
                <th
                  key={column.key}
                  className="px-2 py-2 text-center font-display text-[11px] font-light uppercase tracking-[0.12em] text-presentation-muted sm:px-3 print:px-1 print:py-1.5 print:text-[9px]"
                >
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.rows.map((row, index) => (
              <tr
                key={row.service}
                className={
                  index % 2 === 0
                    ? "border-b border-presentation-line bg-white"
                    : "border-b border-presentation-line bg-presentation-surface/30"
                }
              >
                <td className="sticky left-0 z-10 bg-inherit px-3 py-1.5 font-body text-sm font-light text-presentation-fg sm:px-4 print:static print:px-2 print:py-1 print:text-[10px]">
                  {row.service}
                </td>
                {data.columns.map((column) => {
                  const status = row.values[column.key] ?? "excluded";
                  return (
                    <td
                      key={`${row.service}-${column.key}`}
                      className="px-2 py-1.5 text-center sm:px-3 print:px-1 print:py-1"
                      title={scopeStatusLabel(status)}
                      aria-label={`${row.service} - ${column.label}: ${scopeStatusLabel(status)}`}
                    >
                      <span className="inline-flex items-center justify-center">
                        <ScopeStatusIcon status={status} className="h-4 w-4 shrink-0 print:h-3 print:w-3" />
                      </span>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
