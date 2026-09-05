"use client";

import { useMemo, useState } from "react";
import clsx from "clsx";
import { disclosures, isCopyable } from "@/data/disclosures";
import { institutions } from "@/data/institutions";
import { siteConfig } from "@/lib/site-config";
import { DisclosureRow } from "./DisclosureRow";
import { Dot } from "./ui/Badge";

type Scope = "copyable" | "all";

export function DisclosureFeed() {
  const [scope, setScope] = useState<Scope>("copyable");
  const [from, setFrom] = useState<string>("all");

  const rows = useMemo(
    () =>
      disclosures.filter((d) => {
        if (scope === "copyable" && !isCopyable(d)) return false;
        if (from !== "all" && d.from !== from) return false;
        return true;
      }),
    [scope, from],
  );

  return (
    <section id="disclosures" className="scroll-mt-24">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="font-display text-2xl font-semibold sm:text-3xl">
            The tracker
          </h2>
          <p className="mt-2 flex items-center gap-2 text-sm text-paper-muted">
            <Dot />
            Sources re-read every {siteConfig.copy.checkMinutes} minutes · last
            pass 4 min ago
          </p>
        </div>

        <div className="flex rounded-full border border-rule p-1">
          {(
            [
              ["copyable", "Copyable"],
              ["all", "Everything"],
            ] as const
          ).map(([value, label]) => (
            <button
              key={value}
              type="button"
              onClick={() => setScope(value)}
              className={clsx(
                "rounded-full px-4 py-1.5 text-xs font-medium transition-colors",
                scope === value
                  ? "bg-paper text-deep"
                  : "text-paper-soft hover:text-paper",
              )}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <label
          htmlFor="feed-institution"
          className="text-xs tracking-widest text-paper-muted uppercase"
        >
          Filter by fund
        </label>
        <select
          id="feed-institution"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          className="mt-2 h-11 w-full rounded-full border border-rule bg-deep-raised px-5 text-sm text-paper focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint sm:max-w-xs"
        >
          <option value="all">Every fund on the roster</option>
          {institutions.map((i) => (
            <option key={i.slug} value={i.slug}>
              {i.name}
            </option>
          ))}
        </select>
      </div>

      <ul className="panel mt-6 overflow-hidden">
        {rows.length ? (
          rows.map((d) => <DisclosureRow key={d.id} disclosure={d} />)
        ) : (
          <li className="px-6 py-14 text-center text-sm text-paper-muted">
            Nothing in the last 90 days matches that. A quiet quarter is a real
            result here, not an error.
          </li>
        )}
      </ul>

      <p className="mt-4 text-xs leading-relaxed text-paper-muted">
        These are disclosures, not live trades. Daily filers publish after the
        close; quarterly filers can take up to 45 days after quarter end.
      </p>
    </section>
  );
}
