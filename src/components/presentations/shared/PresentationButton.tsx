import type { ReactNode } from "react";

export default function PresentationButton({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
}) {
  const base =
    "inline-flex items-center justify-center px-7 py-4 font-body text-sm font-medium uppercase tracking-[0.14em] transition duration-300";

  if (variant === "secondary") {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} border border-proposal-fg/20 text-proposal-fg hover:border-proposal-fg hover:bg-proposal-fg hover:text-proposal-bg`}
      >
        {children}
      </a>
    );
  }

  return (
    <a
      href={href}
      className={`${base} border border-proposal-fg bg-proposal-fg text-proposal-bg hover:bg-transparent hover:text-proposal-fg`}
    >
      {children}
    </a>
  );
}
