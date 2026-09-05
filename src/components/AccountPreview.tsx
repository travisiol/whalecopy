import { siteConfig } from "@/lib/site-config";
import { Badge, Dot } from "./ui/Badge";

/**
 * A drawn account, not a screenshot and not a live balance. Labelled as an
 * illustration in the panel itself so nobody reads $500 as their own money.
 */
export function AccountPreview() {
  return (
    <div className="panel-raised relative overflow-hidden p-6 sm:p-8">
      <span className="text-xs tracking-widest text-paper-muted uppercase">
        Illustration
      </span>

      <div className="mt-6 flex items-baseline gap-3">
        <span className="font-display text-5xl font-semibold tracking-tight">
          $500.00
        </span>
        <span className="text-sm text-paper-muted">cash, ready to spend</span>
      </div>

      <dl className="mt-8 space-y-px overflow-hidden rounded-2xl border border-rule bg-rule">
        <div className="flex items-center justify-between gap-4 bg-deep px-5 py-4">
          <dt className="text-sm text-paper-muted">Following</dt>
          <dd className="text-right text-sm font-medium">
            ARK · Berkshire · Duquesne
          </dd>
        </div>
        <div className="flex items-center justify-between gap-4 bg-deep px-5 py-4">
          <dt className="text-sm text-paper-muted">Per copied buy</dt>
          <dd className="font-display text-lg font-semibold text-mint">
            $25.00
          </dd>
        </div>
        <div className="flex items-center justify-between gap-4 bg-deep px-5 py-4">
          <dt className="text-sm text-paper-muted">Lands in</dt>
          <dd className="text-sm font-medium">your wallet</dd>
        </div>
      </dl>

      <ol className="mt-8 space-y-4">
        {[
          "A fund you follow discloses a buy.",
          "That stock has a tokenized version with a live market.",
          "$25 of it is bought into your wallet, minutes later.",
        ].map((step, i) => (
          <li key={step} className="flex gap-4">
            <span
              className={
                i === 2
                  ? "grid size-7 shrink-0 place-items-center rounded-full bg-mint font-display text-xs font-semibold text-deep"
                  : "grid size-7 shrink-0 place-items-center rounded-full border border-rule-strong font-display text-xs font-semibold text-paper-soft"
              }
            >
              {i + 1}
            </span>
            <p className="pt-1 text-sm leading-relaxed text-paper-soft">
              {step}
            </p>
          </li>
        ))}
      </ol>

      <div className="mt-8 flex items-center gap-2 border-t border-rule pt-5 text-xs text-paper-muted">
        <Dot />
        Copying on · {siteConfig.chain.name}
      </div>

      <Badge tone="quiet" className="absolute top-6 right-6">
        Not a live balance
      </Badge>
    </div>
  );
}
