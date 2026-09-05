# WHALECOPY

Copy the whales onto tokenized stocks.

Follow the funds you rate. Their public filings are read on a schedule, and
when a disclosed buy resolves to a tokenized stock with a live market, cash
you deposited buys that token into a wallet you hold the key to. Nothing is
ever sold for you.

## What's here

Front end only. Every number, filing and balance on the site comes from
`src/data/` — nothing is wired to a chain, a wallet, or a filings API, and the
site is careful never to imply otherwise (the treasury panel is labelled as an
address, the account panel is labelled as an illustration, the token is `SOON`).

| Route                   | What it is                                                     |
| ----------------------- | -------------------------------------------------------------- |
| `/`                     | Hero, latest disclosures, the four steps, roster, stocks, account |
| `/institutions`         | The full roster with filters, plus the disclosure tracker       |
| `/institutions/[slug]`  | One fund: its book, its lag, and everything it has disclosed    |
| `/stocks`               | The tokenized universe, filterable, live markets flagged        |
| `/how-it-works`         | The mechanism end to end: sources, treasury, fees, custody, FAQ |
| `/account`              | Opening an account and what you control afterwards              |

## Design

Deep navy ground (`#061247`), white for information, and mint (`#82e094`)
reserved for exactly one idea: a disclosure that can actually be copied. A feed
row goes mint when the stock behind it has a tokenized market and stays grey
when it does not; copy buttons are mint and nothing else is. On a page that is
mostly a list of other people's trades, that reservation is what separates the
part you can act on from the part you can only read.

Poppins carries headlines, Inter does everything read closely. Corners are
1.5rem — the product is a consumer account, not a trading desk.

Tokens live in `src/app/globals.css`, mapped through Tailwind v4's `@theme`.
Custom classes sit inside `@layer components` so plain utilities still win
over them.

## Running it

```bash
npm install
npm run dev
```

Fonts load from a runtime `<link>` rather than `next/font/google`, which fetches
and self-hosts at build time and so needs outbound network access wherever
`next build` runs.

## Before this ships

- The token does not exist. `contractAddress` in `src/lib/site-config.ts` is
  `null` and renders as `SOON` everywhere.
- The treasury address is illustrative. Replace it before pointing anyone at an
  explorer.
- `@usewhalecopy` and `whalecopy.fun` are placeholders in the same file.
- Nothing here is investment advice, and the disclaimers on `/how-it-works` and
  in the footer say so. Have someone check them against the jurisdictions you
  intend to be available in.
