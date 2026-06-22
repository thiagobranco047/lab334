export default function SlideBullets({
  items,
  columns = 2,
}: {
  items: string[];
  columns?: 1 | 2;
}) {
  const itemClassName =
    "flex items-start gap-3 font-body text-base font-light leading-snug text-proposal-fg sm:text-lg";

  const renderItem = (item: string) => (
    <li key={item} className={itemClassName}>
      <span className="mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-proposal-fg" />
      <span>{item}</span>
    </li>
  );

  if (columns === 1) {
    return <ul className="mt-8">{items.map(renderItem)}</ul>;
  }

  const rowsPerColumn = Math.ceil(items.length / 2);
  const leftColumn = items.slice(0, rowsPerColumn);
  const rightColumn = items.slice(rowsPerColumn);

  return (
    <div className="mt-8 flex w-full gap-x-10">
      <ul className="min-w-0 flex-1">{leftColumn.map(renderItem)}</ul>
      <ul className="min-w-0 flex-1">{rightColumn.map(renderItem)}</ul>
    </div>
  );
}
