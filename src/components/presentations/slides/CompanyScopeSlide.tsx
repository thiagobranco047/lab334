import type { CompanyScopeData } from "@/data/presentations/types";

type CompanyScopeSlideProps = {
  data: CompanyScopeData;
  title?: string;
};

export default function CompanyScopeSlide({ data, title }: CompanyScopeSlideProps) {
  return (
    <div className="company-scope-slide flex w-full flex-col py-0">
      <div className="flex flex-wrap items-start justify-between gap-4 border-b border-presentation-line pb-5 print:gap-2 print:pb-2">
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-3 print:gap-2">
            <h2 className="font-display text-[clamp(1.75rem,4vw,2.75rem)] font-extralight leading-none tracking-lab text-presentation-fg print:text-[1.35rem]">
              {data.company}
            </h2>
            <span className="rounded border border-presentation-line px-2.5 py-1 font-display text-[11px] font-light uppercase tracking-[0.16em] text-presentation-muted print:px-1.5 print:py-0.5 print:text-[9px] print:tracking-[0.12em]">
              {data.program}
            </span>
          </div>
          {title && (
            <p className="mt-2 font-display text-xs font-light uppercase tracking-[0.18em] text-presentation-muted print:mt-0.5 print:text-[9px]">
              {title}
            </p>
          )}
          <p className="mt-3 max-w-slide-body-lg font-body text-sm font-light leading-relaxed text-presentation-muted sm:text-base print:mt-1 print:max-w-none print:text-[11px] print:leading-snug">
            {data.objective}
          </p>
          {data.channels && data.channels.length > 0 && (
            <p className="mt-2 font-body text-xs font-light text-presentation-muted sm:text-sm print:mt-0.5 print:text-[10px]">
              Canais: {data.channels.join(" · ")}
            </p>
          )}
        </div>
        <div className="shrink-0 text-right">
          <p className="font-display text-[11px] font-light uppercase tracking-[0.18em] text-presentation-muted print:text-[9px] print:tracking-[0.12em]">
            Investimento mensal
          </p>
          <p className="mt-1 font-display text-2xl font-extralight tracking-lab text-presentation-fg sm:text-3xl print:mt-0 print:text-xl">
            {data.investment}
          </p>
        </div>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 print:mt-2 print:grid-cols-4 print:gap-1.5">
        {data.blocks.map((block) => (
          <section
            key={block.title}
            className="rounded-lg border border-presentation-line bg-presentation-surface/40 p-4 print:rounded-md print:p-2"
          >
            <h3 className="border-b border-presentation-line pb-2 font-display text-xs font-light uppercase tracking-[0.16em] text-presentation-muted print:pb-1 print:text-[9px] print:tracking-[0.1em]">
              {block.title}
            </h3>
            <ul className="mt-3 space-y-1.5 print:mt-1 print:space-y-0.5">
              {block.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 font-body text-sm font-light leading-snug text-presentation-fg print:gap-1 print:text-[10px] print:leading-tight"
                >
                  <svg
                    className="mt-0.5 h-3.5 w-3.5 shrink-0 print:mt-px print:h-2.5 print:w-2.5"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
                  >
                    <circle cx="8" cy="8" r="7" fill="#16A34A" />
                    <path
                      d="M4.75 8.15L6.9 10.3L11.25 5.7"
                      stroke="white"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            {block.note && (
              <p className="mt-3 border-t border-presentation-line pt-2 font-body text-xs font-light leading-relaxed text-presentation-muted print:mt-1 print:pt-1 print:text-[9px] print:leading-snug">
                {block.note}
              </p>
            )}
          </section>
        ))}
      </div>

      {data.exclusions && data.exclusions.length > 0 && (
        <div className="mt-4 rounded-lg border border-dashed border-presentation-line px-4 py-3 print:mt-1.5 print:rounded-md print:px-2 print:py-1.5">
          <p className="font-display text-[11px] font-light uppercase tracking-[0.16em] text-presentation-muted print:text-[9px] print:tracking-[0.1em]">
            Não incluso
          </p>
          <ul className="mt-2 grid gap-1 sm:grid-cols-2 print:mt-1 print:gap-0.5 print:grid-cols-3">
            {data.exclusions.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 font-body text-sm font-light text-presentation-muted print:gap-1 print:text-[10px] print:leading-tight"
              >
                <svg
                  className="mt-0.5 h-3.5 w-3.5 shrink-0 print:mt-px print:h-2.5 print:w-2.5"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                >
                  <circle cx="8" cy="8" r="7" fill="#DC2626" />
                  <path
                    d="M5.4 5.4L10.6 10.6M10.6 5.4L5.4 10.6"
                    stroke="white"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
