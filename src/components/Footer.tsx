import Link from "next/link";
import { nav, siteConfig } from "@/lib/site-config";
import { shortAddress } from "@/lib/format";
import { Wordmark } from "./Wordmark";
import { XIcon } from "./Navbar";
import { Badge } from "./ui/Badge";

export function Footer() {
  return (
    <footer className="border-t border-rule bg-deep">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <Wordmark className="h-7 w-7 text-mint" />
              <span className="font-display text-lg font-semibold">
                {siteConfig.name}
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-paper-soft">
              {siteConfig.tagline}. Public filings in, tokenized stock out,
              into a wallet only you hold the key to.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Badge tone="quiet">
                Treasury {shortAddress(siteConfig.treasury)}
              </Badge>
              <Badge tone="quiet">Contract address · SOON</Badge>
            </div>
          </div>

          <nav aria-label="Footer">
            <h2 className="text-xs tracking-widest text-paper-muted uppercase">
              Site
            </h2>
            <ul className="mt-4 space-y-3 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-paper-soft transition-colors hover:text-mint"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/account"
                  className="text-paper-soft transition-colors hover:text-mint"
                >
                  Your account
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <h2 className="text-xs tracking-widest text-paper-muted uppercase">
              Elsewhere
            </h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={siteConfig.x}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-paper-soft transition-colors hover:text-mint"
                >
                  <XIcon className="size-3.5" />
                  {siteConfig.handle}
                </a>
              </li>
              <li>
                <a
                  href={`${siteConfig.chain.explorer}/address/${siteConfig.treasury}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-paper-soft transition-colors hover:text-mint"
                >
                  Treasury on the explorer
                </a>
              </li>
              <li>
                <a
                  href="https://www.sec.gov/edgar/searchedgar/companysearch"
                  target="_blank"
                  rel="noreferrer"
                  className="text-paper-soft transition-colors hover:text-mint"
                >
                  Filings on SEC EDGAR
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-14 border-t border-rule pt-8 text-xs leading-relaxed text-paper-muted">
          © {new Date().getFullYear()} {siteConfig.name}. Information only, not
          investment advice. Everything shown here is read from filings that are
          published on a delay and can lag the trades they describe — by a day
          for daily filers, by as much as 45 days for quarterly ones. Copying a
          disclosed buy is not the same as matching a fund&apos;s return.
        </p>
      </div>
    </footer>
  );
}
