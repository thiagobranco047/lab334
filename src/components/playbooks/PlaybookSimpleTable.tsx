import Link from "next/link";

export type PlaybookTableCell = string | { href?: string; label: string };

type PlaybookSimpleTableProps = {
  headers: string[];
  rows: PlaybookTableCell[][];
};

function TableCellContent({ cell }: { cell: PlaybookTableCell }) {
  if (typeof cell === "string") {
    return cell;
  }

  if (!cell.href) {
    return <span className="font-medium">{cell.label}</span>;
  }

  return (
    <Link
      href={cell.href}
      className="font-medium text-presentation-fg underline-offset-4 transition-colors hover:underline"
    >
      {cell.label}
    </Link>
  );
}

export default function PlaybookSimpleTable({ headers, rows }: PlaybookSimpleTableProps) {
  return (
    <div className="overflow-x-auto rounded-lg border border-presentation-line">
      <table className="w-full min-w-[36rem] border-collapse text-left">
        <thead>
          <tr className="border-b border-presentation-line bg-presentation-surface/60">
            {headers.map((header) => (
              <th
                key={header}
                className="px-4 py-3 font-display text-xs font-light uppercase tracking-[0.16em] text-presentation-muted"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className="border-b border-presentation-line last:border-b-0"
            >
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className="px-4 py-3 align-top font-body text-sm font-light leading-relaxed text-presentation-fg"
                >
                  <TableCellContent cell={cell} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
