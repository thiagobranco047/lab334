import type { ScopeStatus } from "@/data/presentations/types";

type ScopeStatusIconProps = {
  status: ScopeStatus;
  className?: string;
};

export function ScopeStatusIcon({ status, className = "" }: ScopeStatusIconProps) {
  const classes = ["h-4 w-4 shrink-0", className].filter(Boolean).join(" ");

  if (status === "included") {
    return (
      <svg
        className={classes}
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
    );
  }

  if (status === "partial") {
    return (
      <svg
        className={classes}
        viewBox="0 0 16 16"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="8" cy="8" r="6.25" stroke="#EA580C" strokeWidth="1.5" fill="none" />
        <circle cx="8" cy="8" r="2.25" fill="#EA580C" />
      </svg>
    );
  }

  return (
    <svg
      className={classes}
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
  );
}

export function scopeStatusLabel(status: ScopeStatus): string {
  if (status === "included") return "Incluso";
  if (status === "partial") return "Incluso parcialmente";
  return "Não incluso";
}
