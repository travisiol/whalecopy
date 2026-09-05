import type { Metadata } from "next";
import { Faq } from "@/components/Faq";
import { ButtonLink } from "@/components/ui/Button";
import { Badge, Dot } from "@/components/ui/Badge";
import { siteConfig } from "@/lib/site-config";
import { shortAddress, usd } from "@/lib/format";

export const metadata: Metadata = {
  title: "How it works",
  description: `Every step between a fund's filing and a tokenized stock arriving in your wallet.`,
};

const steps = [
  {
    n: "01",
    title: "Open and fund",
    body: "Sign in with X, and back up the wallet key you are shown. Send ETH on the chain to that wallet, then move it into cash inside the account. Anything you have not spent can leave the same way it came in.",
  },
  {
    n: "02",
    title: "Choose who to follow",
    body: "Pick your funds and set one amount per copied buy. Only disclosures published after you follow count. Unfollow or pause whenever you like — it takes effect on the next check, not retroactively.",
  },
  {
    n: "03",
    title: "They file",
    body: "A daily filer publishes its trade sheet after the close. A quarterly filer reports within 45 days of quarter end, and what you see is the difference between two snapshots rather than a list of trades.",
  },
  {
    n: "04",
    title: "The stock is matched",
    body: `Security identifiers from the filing are matched against the token registry. ${siteConfig.tokenizedCount} of about ${siteConfig.tokenizedUniverse} tokens have markets deep enough to fill against. Anything else stays in the tracker and is never bought.`,
  },
  {
    n: "05",
    title: "The purchase runs",
    body: `Your cash buys the token on the open market, or from inventory the treasury already holds. A fill more than ${siteConfig.copy.slippagePct}% above the reference price is refused rather than pushed through.`,
  },
  {
    n: "06",
    title: "You own it",
    body: `The token arrives in your wallet and stays there. Copies stop when your cash runs out and start again when you top up, with a floor of ${usd(siteConfig.copy.min, 0)} per copy.`,
  },
];

const sources = [
  {
    cadence: "Every trading day, after the close",
    title: "Daily trade disclosures",
    body: "A handful of active managers publish every buy and sell across their funds the same evening they trade. This is the shortest gap on the roster between a decision and a copy. One stock bought across several of a manager's funds on one day is one disclosure, and one copy.",
  },
  {
    cadence: "Quarterly, within 45 days of quarter end",
    title: "SEC Form 13F-HR",
    body: "Any manager holding more than $100 million in US equities has to report those holdings every quarter. Comparing two consecutive filings reveals new positions, adds, trims and exits. Only share positions count — options, bonds and short exposure are outside what the form covers, so a filing is never the whole book.",
  },
];

const guarantees = [
  "You choose the fund and the amount. Nothing here picks a stock for you.",
  "Only a stock with a live market is ever bought, checked against a reference price before every fill.",
  "Only buys disclosed after you followed are copied. Nothing is back-filled.",
  "Every copy is one row with one status: queued, buying, bought, or skipped with a reason.",
  "Deposits are verified onchain and must come from your own wallet, so the cash can only ever be yours.",
  "Network fees on copies and withdrawals are covered by the treasury.",
  "Your wallet key is exportable, and never leaves your side of the connection.",
  "The roster is public filings only. A fund that stops filing comes off it.",
];

export default function HowItWorksPage() {
  return (
    <>
      <section className="bloom relative overflow-hidden border-b border-rule">
        <div className="relative mx-auto max-w-4xl px-5 py-20 sm:px-8 sm:py-28">
          <span className="text-xs tracking-widest text-paper-muted uppercase">
            The mechanism
          </span>
          <h1 className="mt-4 font-display text-4xl leading-tight font-semibold tracking-tight sm:text-5xl">
            From their filing.
            <br />
            To your wallet.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-paper-soft">
            Follow {siteConfig.institutionCount} funds and copy their supported
            public buys into tokenized stocks, using cash you deposited
            yourself. Here is every step, including the ones that stop a copy
            from happening.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="mx-auto max-w-5xl px-5 py-20 sm:px-8">
        <h2 className="font-display text-3xl font-semibold sm:text-4xl">
          How a copy happens
        </h2>
        <ol className="mt-10 grid gap-px overflow-hidden rounded-[var(--radius-panel)] border border-rule bg-rule sm:grid-cols-2">
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
      </section>

      {/* Sources */}
      <section className="border-y border-rule bg-deep-panel/60">
        <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            Where the trades come from
          </h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-paper-soft">
            Nobody publishes institutional trades in real time. The schedule is
            set by law, and it is different for different managers.{" "}
            {siteConfig.name} reads only the public record, re-checks it every{" "}
            {siteConfig.copy.checkMinutes} minutes, and always shows you both
            when a trade happened and when it became public.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {sources.map((s) => (
              <article key={s.title} className="panel p-7">
                <Badge tone="quiet">{s.cadence}</Badge>
                <h3 className="mt-5 font-display text-lg font-semibold">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-paper-soft">
                  {s.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Treasury */}
      <section className="mx-auto max-w-5xl px-5 py-20 sm:px-8">
        <h2 className="font-display text-3xl font-semibold sm:text-4xl">
          The treasury
        </h2>
        <p className="mt-5 max-w-2xl leading-relaxed text-paper-soft">
          Between a deposit and a copy, your cash sits in one wallet on{" "}
          {siteConfig.chain.name}. When a copy fires, that wallet spends the ETH
          on the open market — or hands over a token it already holds — sends
          the result to the follower&apos;s wallet, and pays the network fee. The
          address is public, so anyone can follow every movement in and out of it
          without taking our word for anything.
        </p>

        <div className="panel-raised mt-10 p-7">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs tracking-widest text-paper-muted uppercase">
                Treasury · {siteConfig.chain.name}
              </p>
              <p className="mt-3 font-display text-lg font-semibold break-all">
                {shortAddress(siteConfig.treasury, 10, 8)}
              </p>
            </div>
            <a
              href={`${siteConfig.chain.explorer}/address/${siteConfig.treasury}`}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-rule-strong px-5 py-2.5 text-sm transition-colors hover:border-paper-soft"
            >
              View on the explorer
            </a>
          </div>

          <dl className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-rule bg-rule sm:grid-cols-3">
            <div className="bg-deep px-5 py-4">
              <dt className="text-xs text-paper-muted">Network</dt>
              <dd className="mt-2 text-sm font-medium">
                {siteConfig.chain.name} · id {siteConfig.chain.id}
              </dd>
            </div>
            <div className="bg-deep px-5 py-4">
              <dt className="text-xs text-paper-muted">Funded in</dt>
              <dd className="mt-2 text-sm font-medium">
                ETH · buys tokens and pays their gas
              </dd>
            </div>
            <div className="bg-deep px-5 py-4">
              <dt className="text-xs text-paper-muted">Held outright</dt>
              <dd className="mt-2 text-sm font-medium">
                Inventory handed over when a copy calls for it
              </dd>
            </div>
          </dl>

          <p className="mt-6 flex items-center gap-2 text-xs text-paper-muted">
            <Dot />
            Purchases settle automatically while the signer is online
          </p>
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {guarantees.map((line) => (
            <li key={line} className="flex gap-3.5">
              <span
                aria-hidden
                className="mt-2 size-1.5 shrink-0 rounded-full bg-mint"
              />
              <span className="text-sm leading-relaxed text-paper-soft">
                {line}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* Fees */}
      <section className="border-y border-rule bg-deep-panel/60">
        <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            Sizing, settlement and fees
          </h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-paper-soft">
            Your cash is a dollar amount from the moment it lands until the
            moment a copy spends it. Each copy settles in the tokenized stock
            itself: the treasury buys your per-buy amount at the live market
            price, checks it against the stock&apos;s reference price, and
            refuses the fill if it would cost more than{" "}
            {siteConfig.copy.slippagePct}% above it. The token goes straight to
            your wallet.
          </p>

          <dl className="mt-10 divide-y divide-[var(--rule)] overflow-hidden rounded-[var(--radius-card)] border border-rule">
            {[
              [`${siteConfig.name} fee`, "None"],
              ["Deposit network fee", "Paid by you when you send"],
              ["Copy and withdrawal fees", "Paid by the treasury"],
              [
                "Per copied buy",
                `Your setting, ${usd(siteConfig.copy.min, 0)} to ${usd(siteConfig.copy.max, 0)}`,
              ],
              [
                "Purchase price",
                `The live market price, never more than ${siteConfig.copy.slippagePct}% above the reference`,
              ],
            ].map(([label, value]) => (
              <div
                key={label}
                className="flex flex-wrap items-center justify-between gap-4 bg-deep px-6 py-5"
              >
                <dt className="text-sm text-paper-muted">{label}</dt>
                <dd className="text-sm font-medium">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Custody */}
      <section className="mx-auto max-w-5xl px-5 py-20 sm:px-8">
        <h2 className="font-display text-3xl font-semibold sm:text-4xl">
          Keys and custody
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            {
              title: "The treasury key",
              body: "Held server-side and used only to sign purchases and withdrawals. It is never sent to a browser and never appears in this site's code.",
            },
            {
              title: "Your wallet",
              body: "Created for your login and unlocked by it. You are asked to export the private key the day you open the account, and you can export it again at any time. Signing in on its own moves nothing.",
            },
            {
              title: "Your cash",
              body: "Credited only from a transfer that left your own wallet, so nobody else can claim your deposit. Unspent cash withdraws back to that same wallet.",
            },
          ].map((card) => (
            <article key={card.title} className="panel p-7">
              <h3 className="font-display text-lg font-semibold">
                {card.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-paper-soft">
                {card.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-rule bg-deep-panel/60">
        <div className="mx-auto max-w-4xl px-5 py-20 sm:px-8">
          <Faq />
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-5 py-20 text-center sm:px-8">
        <h2 className="font-display text-3xl font-semibold sm:text-4xl">
          Ready to copy?
        </h2>
        <p className="mt-5 leading-relaxed text-paper-soft">
          Open an account, add cash, follow the funds you rate. The next
          supported buy any of them discloses is your next position.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <ButtonLink href="/account" size="lg">
            Open an account
          </ButtonLink>
          <ButtonLink href="/institutions" size="lg" variant="outline">
            See the roster
          </ButtonLink>
        </div>

        <p className="mx-auto mt-14 max-w-3xl text-xs leading-relaxed text-paper-muted">
          {siteConfig.name} copies public disclosures. It is not an investment
          adviser, and nothing here is a recommendation to buy or sell any
          security or digital asset. Copying a disclosed buy is not the same as
          matching a fund&apos;s returns: filings lag the trades they describe,
          a fund&apos;s reasons and hedges are never disclosed, and prices move.
          A stock can be worth less than what was paid for it at any time.
        </p>
      </section>
    </>
  );
}
