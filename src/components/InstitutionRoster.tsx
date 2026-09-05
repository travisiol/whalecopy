"use client";

import { useMemo, useState } from "react";
import clsx from "clsx";
import { institutions, type Schedule } from "@/data/institutions";
import { InstitutionCard } from "./InstitutionCard";

type Filter = "all" | Schedule;

export function InstitutionRoster() {
  const [filter, setFilter] = useState<Filter>("all");
  const [query, setQuery] = useState("");

  const shown = useMemo(() => {
    const q = query.trim().toLowerCase();
    return institutions.filter((i) => {
      if (filter !== "all" && i.schedule !== filter) return false;
      if (!q) return true;
      return (
        i.name.toLowerCase().includes(q) ||
        i.manager.toLowerCase().includes(q) ||
        (i.billing?.toLowerCase().includes(q) ?? false)
      );
    });
  }, [filter, query]);

  return (
    <div>
      <div className="flex flex-wrap items-center gap-4">
        <div className="flex rounded-full border border-rule p-1">
          {(
            [
              ["all", "Every schedule"],
              ["daily", "Daily"],
              ["quarterly", "Quarterly"],
            ] as const
          ).map(([value, label]) => (
            <button
              key={value}
              type="button"
              onClick={() => setFilter(value)}
              className={clsx(
                "rounded-full px-4 py-2 text-xs font-medium transition-colors",
                filter === value
                  ? "bg-paper text-deep"
                  : "text-paper-soft hover:text-paper",
              )}
            >
              {label}
            </button>
          ))}
        </div>

        <label htmlFor="roster-search" className="sr-only">
          Search the roster
        </label>
        <input
          id="roster-search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search a fund or a manager"
          className="h-11 flex-1 rounded-full border border-rule bg-deep-raised px-5 text-sm text-paper placeholder:text-paper-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint sm:max-w-xs"
        />

        <span className="text-sm text-paper-muted">
          {shown.length} of {institutions.length}
        </span>
      </div>

      {shown.length ? (
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((i) => (
            <InstitutionCard key={i.slug} institution={i} />
          ))}
        </div>
      ) : (
        <p className="panel mt-10 px-6 py-16 text-center text-sm text-paper-muted">
          Nobody on the roster matches that.
        </p>
      )}
    </div>
  );
}
