"use client";

import { useState } from "react";
import clsx from "clsx";
import { logoSlug } from "@/lib/format";

/**
 * The company mark, on a paper chip so logos drawn in dark ink stay legible
 * against the navy.
 *
 * The chip can no longer carry the copyable/not signal in its fill — a logo
 * needs that space — so it carries it in the ring instead: mint ring when a
 * copy can land here, plain rule when it cannot. The lettered chip is still
 * the fallback for a ticker with no file on disk, and there it goes back to
 * signalling in the fill.
 */
export function StockLogo({
  ticker,
  copyable,
  className,
}: {
  ticker: string;
  copyable: boolean;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span
        className={clsx(
          "grid shrink-0 place-items-center rounded-xl border px-1 text-center font-display text-[11px] leading-none font-semibold",
          copyable
            ? "border-mint/40 bg-mint/12 text-mint"
            : "border-rule bg-deep-raised text-paper-muted",
          className,
        )}
      >
        {ticker}
      </span>
    );
  }

  return (
    <span
      className={clsx(
        "grid shrink-0 place-items-center overflow-hidden rounded-xl border bg-paper p-1.5",
        copyable ? "border-mint/50" : "border-rule",
        className,
      )}
    >
      {/* Plain <img>: these are small, fixed, already-local files, so the
          optimizer would only add a round trip. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`/logos/${logoSlug(ticker)}.png`}
        alt=""
        loading="lazy"
        decoding="async"
        onError={() => setFailed(true)}
        className="size-full object-contain"
      />
    </span>
  );
}
