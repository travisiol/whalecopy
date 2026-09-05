import { siteConfig } from "@/lib/site-config";

const faqs = [
  {
    q: "How long after a fund actually trades does my copy fire?",
    a: "It depends entirely on who you follow, and the gap is set by law rather than by us. A daily filer publishes the evening it trades, so a copy usually lands the same night. A quarterly filer can take up to 45 days after the quarter closes, which means the trade you are copying may be several weeks old. Every row in the tracker shows both dates so you can see the lag rather than guess at it.",
  },
  {
    q: "What do I actually end up holding?",
    a: "A tokenized stock, in your own wallet, on the chain. It is a token that tracks the share — not the share itself, not a contract with us, and not a balance on our books. You can move it out at any time because the key is yours.",
  },
  {
    q: "How is each copy sized?",
    a: `You set one number: the amount to spend per copied buy, anywhere from ${siteConfig.copy.min} to ${siteConfig.copy.max} dollars. Every copy spends exactly that, regardless of how large the fund's own position was. You are copying the decision, not the size of the cheque.`,
  },
  {
    q: "Where does my cash sit between copies?",
    a: "In a single treasury wallet whose address is published on every page of this site. It is one address on a public chain, so you can watch every deposit, every purchase and every fee leave it without asking us for anything. Unspent cash withdraws back to the wallet it came from.",
  },
  {
    q: "Why aren't all of a fund's buys copyable?",
    a: `Most of what these funds buy has no tokenized version, and some of what does have one has no market deep enough to fill against. Of roughly ${siteConfig.tokenizedUniverse} tokens in the universe, ${siteConfig.tokenizedCount} currently have live markets. Everything else appears in the tracker, marked, and is never bought.`,
  },
  {
    q: "What happens if the market can't fill at a fair price?",
    a: `The copy is refused and told to you. A fill more than ${siteConfig.copy.slippagePct}% above the reference price does not go through, and your cash stays where it was. A skipped copy always carries its reason.`,
  },
  {
    q: "Can I copy something that was disclosed before I followed?",
    a: "No. Only buys disclosed after you start following are copied. Nothing is back-filled, because back-filling would be us picking an entry price for you.",
  },
  {
    q: "Does anything ever sell on my behalf?",
    a: "Never. Copies only buy. Selling is yours to do, from your own wallet, whenever and wherever you like.",
  },
  {
    q: "Why sign in with X?",
    a: "It is the shortest path to a wallet without a seed phrase ceremony: the login creates one for you, you export the key when you open the account, and you can export it again any time. Signing in moves nothing on its own.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-24">
      <h2 className="font-display text-3xl font-semibold sm:text-4xl">
        Questions worth asking
      </h2>
      <div className="panel mt-8 divide-y divide-[var(--rule)] overflow-hidden">
        {faqs.map((item) => (
          <details key={item.q} className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-6 py-5 text-left text-base font-medium transition-colors hover:text-mint [&::-webkit-details-marker]:hidden">
              {item.q}
              <span
                aria-hidden
                className="grid size-7 shrink-0 place-items-center rounded-full border border-rule-strong text-paper-soft transition-transform group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="px-6 pb-6 text-sm leading-relaxed text-paper-soft">
              {item.a}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
