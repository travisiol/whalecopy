import Link from "next/link";
import type { Institution } from "@/data/institutions";
import { Badge } from "./ui/Badge";
import { Button } from "./ui/Button";

/** Initials stand in for a portrait: two letters, one panel, no stock photos. */
function Monogram({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .filter((w) => /^[A-Z]/.test(w))
    .slice(0, 2)
    .map((w) => w[0])
    .join("");

  return (
    <span className="grid size-12 shrink-0 place-items-center rounded-2xl border border-rule bg-deep-raised font-display text-sm font-semibold text-paper-soft">
      {initials}
    </span>
  );
}

export function InstitutionCard({ institution }: { institution: Institution }) {
  const daily = institution.schedule === "daily";

  return (
    <article className="panel flex flex-col p-6">
      <div className="flex items-start gap-4">
        <Monogram name={institution.name} />
        <div className="min-w-0">
          <Badge tone={daily ? "mint" : "neutral"}>
            {daily ? "Files daily" : "Files quarterly"}
          </Badge>
          <h3 className="mt-3 font-display text-lg leading-tight font-semibold">
            {institution.name}
          </h3>
          <p className="mt-1 text-sm text-paper-muted">
            {institution.manager}
            {institution.billing ? ` · ${institution.billing}` : ""}
          </p>
        </div>
      </div>

      <p className="mt-5 flex-1 text-sm leading-relaxed text-paper-soft">
        {institution.strategy}
      </p>

      <dl className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-rule bg-rule">
        <div className="bg-deep-raised px-4 py-3">
          <dt className="text-xs text-paper-muted">Disclosed book</dt>
          <dd className="mt-1 font-display text-lg font-semibold">
            {institution.aum}
          </dd>
        </div>
        <div className="bg-deep-raised px-4 py-3">
          <dt className="text-xs text-paper-muted">Copyable · 90d</dt>
          <dd className="mt-1 font-display text-lg font-semibold">
            <span className={institution.copyable ? "text-mint" : undefined}>
              {institution.copyable}
            </span>
            <span className="text-paper-muted">/{institution.buys}</span>
          </dd>
        </div>
      </dl>

      <p className="mt-4 text-xs text-paper-muted">{institution.asOf}</p>

      <div className="mt-5 flex items-center gap-3">
        <Button className="h-10 flex-1 text-sm">Follow</Button>
        <Link
          href={`/institutions/${institution.slug}`}
          className="rounded-full border border-rule-strong px-4 py-2.5 text-sm text-paper-soft transition-colors hover:border-paper-soft hover:text-paper"
        >
          Activity
        </Link>
      </div>
    </article>
  );
}
