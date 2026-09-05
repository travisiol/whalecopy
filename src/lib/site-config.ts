export const siteConfig = {
  name: "Whalecopy",
  wordmark: "WHALECOPY",
  tagline: "Copy the whales onto tokenized stocks",
  seoDescription:
    "Follow the funds you rate. Whalecopy reads their public filings and spends the cash you deposited on the tokenized version of the stock they bought — straight into your own wallet.",
  strapline: "Hedge fund buys in. Tokenized stock out.",
  url: "https://whalecopy.fun",
  handle: "@usewhalecopy",
  x: "https://x.com/usewhalecopy",

  // Placeholder. No token is deployed; nothing on the site should imply one is.
  contractAddress: null as string | null,

  // Illustrative treasury address used across the site. Not a live wallet.
  treasury: "0x9E4c02f7Ad51a3D6b1B0e2C4aA7d5F8319C63B10",
  chain: {
    name: "Robinhood Chain",
    id: 4663,
    explorer: "https://explorer.robinhood.com",
  },

  institutionCount: 21,
  tokenizedCount: 64,
  tokenizedUniverse: 194,

  copy: {
    min: 5,
    max: 1000,
    slippagePct: 5,
    checkMinutes: 10,
  },
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/institutions", label: "Whales" },
  { href: "/stocks", label: "Stocks" },
  { href: "/how-it-works", label: "How it works" },
] as const;
