import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { institutions, institutionBySlug } from "@/data/institutions";
import { disclosuresFor, isCopyable } from "@/data/disclosures";
import { DisclosureRow } from "@/components/DisclosureRow";
import { Badge, Dot } from "@/components/ui/Badge";
import { Button, ButtonLink } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site-config";

export function generateStaticParams() {
  return institutions.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/institutions/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const institution = institutionBySlug(slug);
  if (!institution) return {};
  return {
    title: institution.name,
    description: `${institution.name} — ${institution.strategy}`,
  };
}

export default async function InstitutionPage({
  params,
}: PageProps<"/institutions/[slug]">) {
  const { slug } = await params;
  const institution = institutionBySlug(slug);
  if (!institution) notFound();

  const rows = disclosuresFor(slug);
  const copyableRows = rows.filter(isCopyable);
  const daily = institution.schedule === "daily";

  return (
    <>
      <section className="border-b border-rule">
        <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
          <Link
            href="/institutions"
            className="text-sm text-paper-muted transition-colors hover:text-paper"
          >
            ← All whales
          </Link>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Badge tone={daily ? "mint" : "neutral"}>
              {daily ? "Files daily" : "Files quarterly"}
            </Badge>
            <Badge tone="quiet">{institution.asOf}</Badge>
          </div>

          <h1 className="mt-6 font-display text-4xl leading-tight font-semibold tracking-tight sm:text-5xl">
            {institution.name}
          </h1>
          <p className="mt-3 text-lg text-paper-soft">
            {institution.manager}
            {institution.billing ? ` · ${institution.billing}` : ""}
          </p>

          <p className="mt-8 max-w-2xl leading-relaxed text-paper-soft">
            {institution.strategy}
          </p>

          <dl className="mt-10 grid gap-px overflow-hidden rounded-[var(--radius-card)] border border-rule bg-rule sm:grid-cols-3">
            <div className="bg-deep-raised px-6 py-5">
              <dt className="text-xs text-paper-muted">Disclosed book</dt>
              <dd className="mt-2 font-display text-2xl font-semibold">
                {institution.aum}
              </dd>
            </div>
            <div className="bg-deep-raised px-6 py-5">
              <dt className="text-xs text-paper-muted">
                Copyable buys · 90 days
              </dt>
              <dd className="mt-2 font-display text-2xl font-semibold">
                <span className={institution.copyable ? "text-mint" : undefined}>
                  {institution.copyable}
                </span>
                <span className="text-paper-muted">/{institution.buys}</span>
              </dd>
            </div>
            <div className="bg-deep-raised px-6 py-5">
              <dt className="text-xs text-paper-muted">Reporting lag</dt>
              <dd className="mt-2 font-display text-2xl font-semibold">
                {daily ? "Same evening" : "Up to 45 days"}
              </dd>
            </div>
          </dl>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button size="lg">Follow {institution.name}</Button>
            <ButtonLink href="/how-it-works" size="lg" variant="outline">
              How a copy works
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-16 sm:px-8">
        <h2 className="font-display text-2xl font-semibold sm:text-3xl">
          What to expect
        </h2>
        <p className="panel mt-6 p-7 leading-relaxed text-paper-soft">
          {institution.note}
        </p>
      </section>

      <section className="border-t border-rule bg-deep-panel/60">
        <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="font-display text-2xl font-semibold sm:text-3xl">
                Disclosed buys
              </h2>
              <p className="mt-2 flex items-center gap-2 text-sm text-paper-muted">
                <Dot on={copyableRows.length > 0} />
                {copyableRows.length} of {rows.length} shown here can be copied
                today
              </p>
            </div>
            <a
              href="https://www.sec.gov/edgar/searchedgar/companysearch"
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-mint transition-colors hover:text-mint-bright"
            >
              Read the filings on EDGAR →
            </a>
          </div>

          <ul className="panel mt-8 overflow-hidden">
            {rows.length ? (
              rows.map((d) => (
                <DisclosureRow
                  key={d.id}
                  disclosure={d}
                  showInstitution={false}
                />
              ))
            ) : (
              <li className="px-6 py-16 text-center text-sm leading-relaxed text-paper-muted">
                Nothing disclosed in the window we track. For a book this
                concentrated that is a normal quarter, not a missing feed.
              </li>
            )}
          </ul>

          <p className="mt-4 text-xs leading-relaxed text-paper-muted">
            {daily
              ? "Trade sheets are published after each close. A stock bought across several funds on one day counts once."
              : `Quarterly filings arrive up to 45 days after the quarter ends, and show the change between two snapshots rather than the trades themselves. ${siteConfig.name} never infers a trade the filing does not state.`}
          </p>
        </div>
      </section>
    </>
  );
}
