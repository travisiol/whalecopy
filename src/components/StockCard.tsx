import type { Stock } from "@/data/stocks";
import { Badge } from "./ui/Badge";
import { StockLogo } from "./StockLogo";

export function StockCard({ stock }: { stock: Stock }) {
  const live = stock.live !== false;

  return (
    <article className="panel flex flex-col p-5">
      <div className="flex items-start justify-between gap-3">
        <StockLogo ticker={stock.ticker} copyable={live} className="size-12" />
        <span className="text-xs text-paper-muted">{stock.sector}</span>
      </div>

      <h3 className="mt-4 font-display text-base font-semibold">{stock.name}</h3>
      <p
        className={
          live
            ? "mt-1 font-display text-xs font-semibold text-mint"
            : "mt-1 font-display text-xs font-semibold text-paper-muted"
        }
      >
        {stock.ticker}
      </p>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-paper-soft">
        {stock.blurb}
      </p>

      <div className="mt-5 border-t border-rule pt-4">
        {live ? (
          <Badge tone="mint">Market live · a copy can land here</Badge>
        ) : (
          <Badge tone="quiet">No market · shown, never bought</Badge>
        )}
      </div>
    </article>
  );
}
