import type { Metadata } from "next";
import { InstitutionRoster } from "@/components/InstitutionRoster";
import { DisclosureFeed } from "@/components/DisclosureFeed";
import { ButtonLink } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Whales",
  description: `The ${siteConfig.institutionCount} funds ${siteConfig.name} tracks, and every buy they have disclosed in the last 90 days.`,
};

export default function InstitutionsPage() {
  return (
    <>
      <section className="border-b border-rule">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
          <span className="text-xs tracking-widest text-paper-muted uppercase">
            The roster
          </span>
          <h1 className="mt-4 max-w-3xl font-display text-4xl leading-tight font-semibold tracking-tight sm:text-5xl">
            Follow the book.
            <br />
            Not the headline.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-paper-soft">
            {siteConfig.institutionCount} funds, every one of them filing on the
            public record. What you see here is what they told a regulator — no
            rumours, no screenshots of someone&apos;s brokerage app.
          </p>
          <div className="mt-9">
            <ButtonLink href="#disclosures" variant="outline" size="lg">
              Jump to the tracker
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <InstitutionRoster />
      </section>

      <section className="border-t border-rule bg-deep-panel/60">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
          <DisclosureFeed />
        </div>
      </section>
    </>
  );
}
