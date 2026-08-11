type PlaybookCalloutProps = {
  label?: string;
  accentColor: string;
  children: string;
};

export default function PlaybookCallout({
  label = "Regra editorial",
  accentColor,
  children,
}: PlaybookCalloutProps) {
  return (
    <aside
      className="rounded-lg border px-5 py-4"
      style={{
        borderColor: `${accentColor}33`,
        backgroundColor: `${accentColor}08`,
      }}
    >
      <p className="mb-2 font-display text-xs font-light uppercase tracking-[0.18em] text-presentation-muted">
        {label}
      </p>
      <p className="font-display text-base font-light leading-relaxed tracking-lab text-presentation-fg">
        {children}
      </p>
    </aside>
  );
}
