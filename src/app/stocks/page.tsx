import type { Metadata } from "next";
import { StockGrid } from "@/components/StockGrid";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Stocks",
  description: `The tokenized stocks a ${siteConfig.name} copy can land in, and the ones it never will.`,
};

export default function StocksPage() {
  return (
    <>
      <section className="border-b border-rule">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
          <span className="text-xs tracking-widest text-paper-muted uppercase">
            Where a copy can land
          </span>
          <h1 className="mt-4 max-w-3xl font-display text-4xl leading-tight font-semibold tracking-tight sm:text-5xl">
            Real companies.
            <br />
            Tokenized.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-paper-soft">
            A disclosed buy only becomes a copy if the stock behind it has a
            tokenized version with a market deep enough to fill against. That is{" "}
            {siteConfig.tokenizedCount} of roughly {siteConfig.tokenizedUniverse}{" "}
            tokens today. The rest are listed here too, so you can see exactly
            what a copy will skip.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <StockGrid />
      </section>

      <section className="border-t border-rule bg-deep-panel/60">
        <div className="mx-auto max-w-3xl px-5 py-16 text-sm leading-relaxed text-paper-soft sm:px-8">
          <h2 className="font-display text-xl font-semibold text-paper">
            One more thing about tickers
          </h2>
          <p className="mt-4">
            Only the canonical token contract for a stock is ever bought. A
            look-alike token carrying the same three letters is not the same
            asset, and matching on the ticker alone would be how you end up
            holding one. Matching runs on the security identifier in the filing,
            then on the registry — never on the label.
          </p>
        </div>
      </section>
    </>
  );
}
