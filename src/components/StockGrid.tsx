"use client";

import { useMemo, useState } from "react";
import clsx from "clsx";
import { stocks, sectors, type Sector } from "@/data/stocks";
import { StockCard } from "./StockCard";

type SectorFilter = "all" | Sector;

export function StockGrid() {
  const [sector, setSector] = useState<SectorFilter>("all");
  const [liveOnly, setLiveOnly] = useState(true);
  const [query, setQuery] = useState("");

  const shown = useMemo(() => {
    const q = query.trim().toLowerCase();
    return stocks.filter((s) => {
      if (liveOnly && s.live === false) return false;
      if (sector !== "all" && s.sector !== sector) return false;
      if (!q) return true;
      return (
        s.ticker.toLowerCase().includes(q) || s.name.toLowerCase().includes(q)
      );
    });
  }, [sector, liveOnly, query]);

  return (
    <div>
      <div className="flex flex-wrap items-center gap-4">
        <label htmlFor="stock-search" className="sr-only">
          Search a stock
        </label>
        <input
          id="stock-search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search a ticker or a company"
          className="h-11 flex-1 rounded-full border border-rule bg-deep-raised px-5 text-sm text-paper placeholder:text-paper-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint sm:max-w-xs"
        />

        <button
          type="button"
          onClick={() => setLiveOnly((v) => !v)}
          aria-pressed={liveOnly}
          className={clsx(
            "rounded-full border px-4 py-2.5 text-xs font-medium transition-colors",
            liveOnly
              ? "border-mint/40 bg-mint/12 text-mint"
              : "border-rule text-paper-soft hover:text-paper",
          )}
        >
          Live markets only
        </button>

        <span className="text-sm text-paper-muted">{shown.length} shown</span>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {(["all", ...sectors] as const).map((value) => (
          <button
            key={value}
            type="button"
            onClick={() => setSector(value as SectorFilter)}
            className={clsx(
              "rounded-full px-4 py-2 text-xs font-medium transition-colors",
              sector === value
                ? "bg-paper text-deep"
                : "border border-rule text-paper-soft hover:text-paper",
            )}
          >
            {value === "all" ? "Every sector" : value}
          </button>
        ))}
      </div>

      {shown.length ? (
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {shown.map((s) => (
            <StockCard key={s.ticker} stock={s} />
          ))}
        </div>
      ) : (
        <p className="panel mt-10 px-6 py-16 text-center text-sm text-paper-muted">
          Nothing in the universe matches that.
        </p>
      )}
    </div>
  );
}
