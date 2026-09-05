import clsx from "clsx";
import type { ReactNode } from "react";

type Tone = "mint" | "neutral" | "quiet" | "warn";

const tones: Record<Tone, string> = {
  mint: "border-mint/40 bg-mint/12 text-mint",
  neutral: "border-rule-strong bg-deep-raised text-paper-soft",
  quiet: "border-rule bg-transparent text-paper-muted",
  warn: "border-pending/40 bg-pending/10 text-pending",
};

export function Badge({
  tone = "neutral",
  className,
  children,
}: {
  tone?: Tone;
  className?: string;
  children: ReactNode;
}) {
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium whitespace-nowrap",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}

/** A small filled circle. Mint when a thing is live, hollow when it is not. */
export function Dot({ on = true }: { on?: boolean }) {
  return (
    <span
      aria-hidden
      className={clsx(
        "size-1.5 rounded-full",
        on ? "bg-mint" : "border border-paper-muted",
      )}
    />
  );
}
