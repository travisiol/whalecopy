import type { Metadata } from "next";
import { AccountPreview } from "@/components/AccountPreview";
import { ButtonLink } from "@/components/ui/Button";
import { XIcon } from "@/components/Navbar";
import { Badge } from "@/components/ui/Badge";
import { siteConfig } from "@/lib/site-config";
import { usd } from "@/lib/format";

export const metadata: Metadata = {
  title: "Your account",
  description: `Open a ${siteConfig.name} account, add cash, and set one amount per copied buy.`,
};

const checklist = [
  {
    title: "Sign in",
    body: "One login creates the wallet. No seed phrase to invent, no extension to install.",
  },
  {
    title: "Export your key",
    body: "You are shown the private key the moment the account exists, and can export it again whenever you want.",
  },
  {
    title: "Send cash",
    body: `Transfer ETH from your own wallet on ${siteConfig.chain.name}, then move it into cash inside the account.`,
  },
  {
    title: "Set your size",
    body: `Choose what every copy spends, anywhere from ${usd(siteConfig.copy.min, 0)} to ${usd(siteConfig.copy.max, 0)}. Change it whenever you like.`,
  },
];

export default function AccountPage() {
  return (
    <>
      <section className="bloom relative overflow-hidden border-b border-rule">
        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <Badge tone="quiet">Nothing is connected yet</Badge>
              <h1 className="mt-6 font-display text-4xl leading-tight font-semibold tracking-tight sm:text-5xl">
                Your account.
                <br />
                Your wallet.
                <br />
                Your rules.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-paper-soft">
                Four steps, none of them longer than a minute, and you keep the
                key at the end of all of them.
              </p>

              <ol className="mt-10 space-y-px overflow-hidden rounded-[var(--radius-card)] border border-rule bg-rule">
                {checklist.map((item, i) => (
                  <li key={item.title} className="flex gap-5 bg-deep px-6 py-5">
                    <span className="grid size-8 shrink-0 place-items-center rounded-full border border-rule-strong font-display text-xs font-semibold text-paper-soft">
                      {i + 1}
                    </span>
                    <div>
                      <h2 className="font-display text-base font-semibold">
                        {item.title}
                      </h2>
                      <p className="mt-1.5 text-sm leading-relaxed text-paper-soft">
                        {item.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="mt-10 flex flex-wrap gap-4">
                <ButtonLink href={siteConfig.x} size="lg">
                  <XIcon className="size-4" />
                  Continue with X
                </ButtonLink>
                <ButtonLink href="/how-it-works" size="lg" variant="outline">
                  Read how it works first
                </ButtonLink>
              </div>

              <p className="mt-6 text-sm text-paper-muted">
                Signing in creates a wallet and moves nothing else.
              </p>
            </div>

            <AccountPreview />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-20 sm:px-8">
        <h2 className="font-display text-3xl font-semibold sm:text-4xl">
          What you control
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            {
              title: "Who you follow",
              body: "Add or drop a fund at any time. A change applies from the next check onward and never reaches back into disclosures you have already seen.",
            },
            {
              title: "What each copy spends",
              body: "One number, applied to every copy regardless of how large the fund's own position was. Copies pause when the cash runs out.",
            },
            {
              title: "When to stop",
              body: "Pause everything, unfollow everyone, or withdraw whatever hasn't been spent back to the wallet it came from.",
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

        <p className="mt-12 text-xs leading-relaxed text-paper-muted">
          Copies only ever buy. Nothing on this site sells a position for you,
          and no part of it constitutes investment advice.
        </p>
      </section>
    </>
  );
}
