import Link from "next/link";
import {
  isCopyable,
  institutionName,
  type Disclosure,
} from "@/data/disclosures";
import { Badge } from "./ui/Badge";
import { Button } from "./ui/Button";
import { StockLogo } from "./StockLogo";

/**
 * One line of the public record. The mint treatment on the right is the only
 * thing separating "you can act on this" from "this is just news", so the row
 * never uses mint anywhere else.
 */
export function DisclosureRow({
  disclosure,
  showInstitution = true,
}: {
  disclosure: Disclosure;
  showInstitution?: boolean;
}) {
  const copyable = isCopyable(disclosure);

  return (
    <li className="flex flex-wrap items-center gap-x-4 gap-y-3 border-b border-rule px-5 py-4 last:border-0 sm:px-6">
      <StockLogo
        ticker={disclosure.ticker}
        copyable={copyable}
        className="size-11"
      />

      <div className="min-w-0 flex-1">
        <p className="truncate text-sm">
          {showInstitution ? (
            <Link
              href={`/institutions/${disclosure.from}`}
              className="font-medium transition-colors hover:text-mint"
            >
              {institutionName(disclosure.from)}
            </Link>
          ) : null}
          <span className="text-paper-soft">
            {showInstitution ? " bought " : "Bought "}
          </span>
          <span className="font-medium">{disclosure.company}</span>
        </p>
        <p className="mt-1 truncate text-xs text-paper-muted">
          {[
            disclosure.shares,
            disclosure.value,
            disclosure.weight,
            disclosure.date,
            disclosure.funds?.join(", "),
          ]
            .filter(Boolean)
            .join(" · ")}
        </p>
      </div>

      {copyable ? (
        <Button size="md" className="h-9 px-4 text-xs">
          Copy this
        </Button>
      ) : (
        <Badge tone="quiet">No market</Badge>
      )}
    </li>
  );
}
