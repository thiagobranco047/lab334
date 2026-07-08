import type { ReactNode } from "react";

type SectionCardProps = {
  id: string;
  title: string;
  accentColor?: string;
  children: ReactNode;
};

export default function SectionCard({ id, title, accentColor, children }: SectionCardProps) {
  return (
    <section id={id} className="scroll-mt-28 rounded-xl border border-presentation-line bg-white p-6 sm:p-8">
      <div className="mb-5 flex items-center gap-3">
        {accentColor && (
          <span
            className="h-1 w-8 shrink-0 rounded-full"
            style={{ backgroundColor: accentColor }}
            aria-hidden="true"
          />
        )}
        <h2 className="font-display text-lg font-light tracking-lab text-presentation-fg sm:text-xl">
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}
