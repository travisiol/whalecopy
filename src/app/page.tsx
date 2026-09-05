import Link from "next/link";
import { ButtonLink } from "@/components/ui/Button";
import { Badge, Dot } from "@/components/ui/Badge";
import { DisclosureRow } from "@/components/DisclosureRow";
import { InstitutionCard } from "@/components/InstitutionCard";
import { StockCard } from "@/components/StockCard";
import { AccountPreview } from "@/components/AccountPreview";
import { XIcon } from "@/components/Navbar";
import { disclosures } from "@/data/disclosures";
import { institutions } from "@/data/institutions";
import { liveStocks } from "@/data/stocks";
import { siteConfig } from "@/lib/site-config";

const steps = [
  {
    n: "01",
    title: "Pick your whales",
    body: "Choose the funds you rate, add cash, and set one amount to spend per copied buy.",
  },
  {
    n: "02",
    title: "We watch the filings",
    body: `Public sources are re-read every ${siteConfig.copy.checkMinutes} minutes. Daily filers publish after the close; quarterly ones on their own schedule.`,
  },
  {
    n: "03",
    title: "The stock has to exist onchain",
    body: "Only a disclosed buy whose stock has a tokenized version with a live market is ever copied.",
  },
  {
    n: "04",
    title: "It lands in your wallet",
    body: "Your cash buys the token. It arrives in a wallet you hold the key to, and nothing sells it but you.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bloom relative overflow-hidden">
        <div
          aria-hidden
          className="rule-grid pointer-events-none absolute inset-0 opacity-40"
        />
        <div className="relative mx-auto max-w-7xl px-5 pt-20 pb-24 sm:px-8 sm:pt-28 sm:pb-32">
          <div className="flex flex-wrap items-center gap-3">
            <Badge tone="quiet">
              Contract address · {siteConfig.contractAddress ?? "SOON"}
            </Badge>
            <Badge tone="mint">
              <Dot />
              {siteConfig.institutionCount} whales tracked
            </Badge>
          </div>

          <h1 className="mt-8 max-w-4xl font-display text-4xl leading-[1.05] font-semibold tracking-tight sm:text-6xl lg:text-7xl">
            Copy the whales
            <br />
            onto tokenized stocks.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-paper-soft">
            Follow the funds you rate. We read their public filings and spend
            the cash you deposited on the tokenized version of what they bought
            — delivered to a wallet only you hold the key to.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <ButtonLink href="/account" size="lg">
              <XIcon className="size-4" />
              Continue with X
            </ButtonLink>
            <ButtonLink href="/institutions" size="lg" variant="outline">
              See the roster
            </ButtonLink>
          </div>

          <p className="mt-8 text-sm text-paper-muted">
            Your wallet. Your stocks. Nothing is ever sold for you.
          </p>
        </div>
      </section>

      {/* Latest disclosures */}
      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="text-xs tracking-widest text-paper-muted uppercase">
              The public record
            </span>
            <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
              What they just told the world
            </h2>
            <p className="mt-3 max-w-xl text-paper-soft">
              Real filings, matched against the tokenized universe. Mint means a
              copy can land; grey means the stock has nowhere onchain to go.
            </p>
          </div>
          <Link
            href="/institutions#disclosures"
            className="text-sm font-medium text-mint transition-colors hover:text-mint-bright"
          >
            Open the tracker →
          </Link>
        </div>

        <ul className="panel mt-8 overflow-hidden">
          {disclosures.slice(0, 6).map((d) => (
            <DisclosureRow key={d.id} disclosure={d} />
          ))}
        </ul>

        <p className="mt-4 flex items-center gap-2 text-xs text-paper-muted">
          <Dot />
          Sources checked every {siteConfig.copy.checkMinutes} minutes · last
          pass 4 min ago
        </p>
      </section>

      {/* How it works */}
      <section className="border-y border-rule bg-deep-panel/60">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
          <h2 className="max-w-2xl font-display text-3xl leading-tight font-semibold sm:text-4xl">
            Their public move.
            <br />
            Your position, onchain.
          </h2>

          <ol className="mt-14 grid gap-px overflow-hidden rounded-[var(--radius-panel)] border border-rule bg-rule sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <li key={step.n} className="bg-deep p-7">
                <span className="font-display text-sm font-semibold text-mint">
                  {step.n}
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-paper-soft">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>

          <p className="mt-8 max-w-2xl text-sm text-paper-muted">
            None of this is a live trade feed. Filings are published on a delay
            that the law sets, not us — same evening for daily filers, up to 45
            days after quarter end for the rest.
          </p>
        </div>
      </section>

      {/* Whales */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="text-xs tracking-widest text-paper-muted uppercase">
              The roster
            </span>
            <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
              Big books. Public moves.
            </h2>
            <p className="mt-3 max-w-xl text-paper-soft">
              {siteConfig.institutionCount} funds, from a daily filer that
              publishes every trade to a family office that moves twice a year.
            </p>
          </div>
          <Link
            href="/institutions"
            className="text-sm font-medium text-mint transition-colors hover:text-mint-bright"
          >
            All {siteConfig.institutionCount} →
          </Link>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {institutions.slice(0, 8).map((i) => (
            <InstitutionCard key={i.slug} institution={i} />
          ))}
        </div>
      </section>

      {/* Stocks */}
      <section className="border-t border-rule bg-deep-panel/60">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="text-xs tracking-widest text-paper-muted uppercase">
                Where a copy can land
              </span>
              <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
                Real companies. Tokenized.
              </h2>
              <p className="mt-3 max-w-xl text-paper-soft">
                {siteConfig.tokenizedCount} tokens with live markets, out of{" "}
                {siteConfig.tokenizedUniverse} that exist. Everything else shows
                in the tracker and is never bought.
              </p>
            </div>
            <Link
              href="/stocks"
              className="text-sm font-medium text-mint transition-colors hover:text-mint-bright"
            >
              See all {siteConfig.tokenizedCount} →
            </Link>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {liveStocks.slice(0, 8).map((s) => (
              <StockCard key={s.ticker} stock={s} />
            ))}
          </div>
        </div>
      </section>

      {/* Account */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-display text-3xl leading-tight font-semibold sm:text-4xl">
              Your account.
              <br />
              Your wallet.
              <br />
              Your rules.
            </h2>
            <ul className="mt-8 space-y-5">
              {[
                "Deposit once, then set a single amount for every copied buy.",
                "Hold your stocks in a wallet whose key you can export at any time.",
                "Watch your cash in a treasury address published on every page.",
                "Pause, unfollow, or withdraw whatever hasn't been spent.",
              ].map((line) => (
                <li key={line} className="flex gap-4">
                  <span
                    aria-hidden
                    className="mt-2 size-1.5 shrink-0 rounded-full bg-mint"
                  />
                  <span className="leading-relaxed text-paper-soft">
                    {line}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap gap-4">
              <ButtonLink href="/account" size="lg">
                <XIcon className="size-4" />
                Open an account
              </ButtonLink>
              <ButtonLink href="/how-it-works" size="lg" variant="outline">
                Read how it works
              </ButtonLink>
            </div>
          </div>

          <AccountPreview />
        </div>
      </section>

      {/* Strapline */}
      <section className="border-t border-rule">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-5 py-16 sm:px-8">
          <p className="font-display text-2xl font-semibold sm:text-3xl">
            {siteConfig.strapline}
          </p>
          <a
            href={siteConfig.x}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm text-paper-soft transition-colors hover:text-mint"
          >
            <XIcon className="size-4" />
            {siteConfig.handle}
          </a>
        </div>
      </section>
    </>
  );
}
