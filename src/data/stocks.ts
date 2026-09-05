export type Sector =
  | "Technology"
  | "Semiconductors"
  | "Consumer"
  | "Communication"
  | "Financials"
  | "Healthcare"
  | "Industrials"
  | "Energy"
  | "ETFs";

export type Stock = {
  ticker: string;
  name: string;
  sector: Sector;
  /** One line on what the company actually does. */
  blurb: string;
  /** False when the token exists but has no market deep enough to copy into. */
  live?: boolean;
};

/**
 * The tokenized universe. `live` stocks are the ones a copy can land in;
 * the rest exist as tokens but have no market to fill against, so a
 * disclosure that names them shows in the feed and is never bought.
 */
export const stocks: Stock[] = [
  {
    ticker: "NVDA",
    name: "NVIDIA",
    sector: "Semiconductors",
    blurb: "The chips underneath every model you have heard of.",
  },
  {
    ticker: "AAPL",
    name: "Apple",
    sector: "Technology",
    blurb: "The phone in their pocket, and a piece of the company that made it.",
  },
  {
    ticker: "TSLA",
    name: "Tesla",
    sector: "Consumer",
    blurb: "Electric cars, grid storage, and a robot that may never ship.",
  },
  {
    ticker: "MSFT",
    name: "Microsoft",
    sector: "Technology",
    blurb: "Windows, Office, Azure, and a very large stake in OpenAI.",
  },
  {
    ticker: "AMZN",
    name: "Amazon",
    sector: "Consumer",
    blurb: "The everything store, sitting on top of the cloud that funds it.",
  },
  {
    ticker: "GOOGL",
    name: "Alphabet",
    sector: "Communication",
    blurb: "Search, YouTube, Android, Gemini — and the ad machine behind them.",
  },
  {
    ticker: "META",
    name: "Meta",
    sector: "Communication",
    blurb: "Instagram, WhatsApp, and three billion people checking in daily.",
  },
  {
    ticker: "SPY",
    name: "SPDR S&P 500 ETF Trust",
    sector: "ETFs",
    blurb: "The whole index in one line. Still the classic first position.",
  },
  {
    ticker: "AMD",
    name: "Advanced Micro Devices",
    sector: "Semiconductors",
    blurb: "The other name in the room whenever data-centre compute comes up.",
  },
  {
    ticker: "AVGO",
    name: "Broadcom",
    sector: "Semiconductors",
    blurb: "Custom silicon and infrastructure software, quietly enormous.",
  },
  {
    ticker: "TSM",
    name: "TSMC",
    sector: "Semiconductors",
    blurb: "Almost every advanced chip on earth is made in its fabs.",
  },
  {
    ticker: "MU",
    name: "Micron",
    sector: "Semiconductors",
    blurb: "Memory — the part of an AI server nobody thinks about until it runs out.",
  },
  {
    ticker: "ARM",
    name: "Arm Holdings",
    sector: "Semiconductors",
    blurb: "The instruction set inside most of the world's processors.",
  },
  {
    ticker: "INTC",
    name: "Intel",
    sector: "Semiconductors",
    blurb: "The incumbent, mid-turnaround, building fabs on home soil.",
  },
  {
    ticker: "QCOM",
    name: "Qualcomm",
    sector: "Semiconductors",
    blurb: "Modems and mobile chips, plus a patent book that prints.",
  },
  {
    ticker: "NFLX",
    name: "Netflix",
    sector: "Communication",
    blurb: "Streaming's first mover, now profitable and selling ads.",
  },
  {
    ticker: "DIS",
    name: "Disney",
    sector: "Communication",
    blurb: "A century of characters, parks, and a streaming bill to pay.",
  },
  {
    ticker: "CRM",
    name: "Salesforce",
    sector: "Technology",
    blurb: "The system of record for how companies sell things.",
  },
  {
    ticker: "ORCL",
    name: "Oracle",
    sector: "Technology",
    blurb: "Databases for forty years, now renting GPUs to model labs.",
  },
  {
    ticker: "ADBE",
    name: "Adobe",
    sector: "Technology",
    blurb: "The tools every designer opens, on a subscription.",
  },
  {
    ticker: "NOW",
    name: "ServiceNow",
    sector: "Technology",
    blurb: "Workflow software that large enterprises find hard to leave.",
  },
  {
    ticker: "PLTR",
    name: "Palantir",
    sector: "Technology",
    blurb: "Data platforms for governments and, increasingly, everyone else.",
  },
  {
    ticker: "SNOW",
    name: "Snowflake",
    sector: "Technology",
    blurb: "The warehouse companies pile their data into.",
  },
  {
    ticker: "NET",
    name: "Cloudflare",
    sector: "Technology",
    blurb: "A large slice of the internet passes through its edge.",
  },
  {
    ticker: "SHOP",
    name: "Shopify",
    sector: "Technology",
    blurb: "The storefront behind a few million independent merchants.",
  },
  {
    ticker: "UBER",
    name: "Uber",
    sector: "Industrials",
    blurb: "Rides and food, finally making money on both.",
  },
  {
    ticker: "ABNB",
    name: "Airbnb",
    sector: "Consumer",
    blurb: "Someone else's spare room, turned into an asset class.",
  },
  {
    ticker: "COIN",
    name: "Coinbase",
    sector: "Financials",
    blurb: "The regulated on-ramp, and the one most institutions use.",
  },
  {
    ticker: "HOOD",
    name: "Robinhood Markets",
    sector: "Financials",
    blurb: "The broker that put tokenized stocks on a chain in the first place.",
  },
  {
    ticker: "CRCL",
    name: "Circle",
    sector: "Financials",
    blurb: "The company behind USDC, now public and audited quarterly.",
  },
  {
    ticker: "SQ",
    name: "Block",
    sector: "Financials",
    blurb: "Square terminals, Cash App, and a bitcoin position on the balance sheet.",
  },
  {
    ticker: "PYPL",
    name: "PayPal",
    sector: "Financials",
    blurb: "Checkout buttons everywhere, defending them against everyone.",
  },
  {
    ticker: "V",
    name: "Visa",
    sector: "Financials",
    blurb: "A toll on a very large share of the world's spending.",
  },
  {
    ticker: "MA",
    name: "Mastercard",
    sector: "Financials",
    blurb: "The other rail, on much the same terms.",
  },
  {
    ticker: "JPM",
    name: "JPMorgan Chase",
    sector: "Financials",
    blurb: "The biggest US bank, and the one everyone else is compared to.",
  },
  {
    ticker: "BAC",
    name: "Bank of America",
    sector: "Financials",
    blurb: "A deposit franchise with a very long history of being held here.",
  },
  {
    ticker: "GS",
    name: "Goldman Sachs",
    sector: "Financials",
    blurb: "Advisory, trading, and the reputation that comes with both.",
  },
  {
    ticker: "BRK.B",
    name: "Berkshire Hathaway",
    sector: "Financials",
    blurb: "A conglomerate that is really a portfolio with an insurer attached.",
  },
  {
    ticker: "LLY",
    name: "Eli Lilly",
    sector: "Healthcare",
    blurb: "The weight-loss drug that reorganised an entire sector.",
  },
  {
    ticker: "NVO",
    name: "Novo Nordisk",
    sector: "Healthcare",
    blurb: "The other side of that same trade, out of Denmark.",
  },
  {
    ticker: "UNH",
    name: "UnitedHealth",
    sector: "Healthcare",
    blurb: "Insurance and care delivery, at the scale of a small country.",
  },
  {
    ticker: "JNJ",
    name: "Johnson & Johnson",
    sector: "Healthcare",
    blurb: "Pharma and medtech, split apart and still very large.",
  },
  {
    ticker: "PFE",
    name: "Pfizer",
    sector: "Healthcare",
    blurb: "Post-pandemic, rebuilding a pipeline by acquisition.",
  },
  {
    ticker: "MRK",
    name: "Merck",
    sector: "Healthcare",
    blurb: "One oncology franchise carrying an enormous amount of weight.",
  },
  {
    ticker: "ABBV",
    name: "AbbVie",
    sector: "Healthcare",
    blurb: "Immunology, aesthetics, and life after a patent cliff.",
  },
  {
    ticker: "TMO",
    name: "Thermo Fisher",
    sector: "Healthcare",
    blurb: "The instruments and reagents every lab runs on.",
  },
  {
    ticker: "COST",
    name: "Costco",
    sector: "Consumer",
    blurb: "A membership business wearing a warehouse as a disguise.",
  },
  {
    ticker: "WMT",
    name: "Walmart",
    sector: "Consumer",
    blurb: "The largest retailer in the world, now a real advertising business.",
  },
  {
    ticker: "HD",
    name: "Home Depot",
    sector: "Consumer",
    blurb: "Where every American renovation starts and overruns.",
  },
  {
    ticker: "NKE",
    name: "Nike",
    sector: "Consumer",
    blurb: "The swoosh, working through a long inventory hangover.",
  },
  {
    ticker: "SBUX",
    name: "Starbucks",
    sector: "Consumer",
    blurb: "Coffee, real estate, and a very effective loyalty scheme.",
  },
  {
    ticker: "MCD",
    name: "McDonald's",
    sector: "Consumer",
    blurb: "Franchising and property, with a menu attached.",
  },
  {
    ticker: "KO",
    name: "Coca-Cola",
    sector: "Consumer",
    blurb: "A brand and a distribution network, sold by the case.",
  },
  {
    ticker: "PEP",
    name: "PepsiCo",
    sector: "Consumer",
    blurb: "Drinks, but the snacks are the better business.",
  },
  {
    ticker: "PG",
    name: "Procter & Gamble",
    sector: "Consumer",
    blurb: "The cupboard under every sink, priced accordingly.",
  },
  {
    ticker: "BA",
    name: "Boeing",
    sector: "Industrials",
    blurb: "Half of a duopoly, working its way back to trust.",
  },
  {
    ticker: "CAT",
    name: "Caterpillar",
    sector: "Industrials",
    blurb: "The yellow machines behind every construction cycle.",
  },
  {
    ticker: "GE",
    name: "GE Aerospace",
    sector: "Industrials",
    blurb: "Jet engines and the service contracts that follow them.",
  },
  {
    ticker: "RTX",
    name: "RTX",
    sector: "Industrials",
    blurb: "Defence and aerospace, on multi-decade programmes.",
  },
  {
    ticker: "XOM",
    name: "Exxon Mobil",
    sector: "Energy",
    blurb: "Integrated oil at scale, disciplined about capital again.",
  },
  {
    ticker: "CVX",
    name: "Chevron",
    sector: "Energy",
    blurb: "The other US supermajor, and a dividend people plan around.",
  },
  {
    ticker: "QQQ",
    name: "Invesco QQQ Trust",
    sector: "ETFs",
    blurb: "The Nasdaq-100, which is mostly a bet on eight companies.",
  },
  {
    ticker: "VOO",
    name: "Vanguard S&P 500 ETF",
    sector: "ETFs",
    blurb: "The same index as SPY, at a lower fee.",
  },
  {
    ticker: "IWM",
    name: "iShares Russell 2000 ETF",
    sector: "ETFs",
    blurb: "Small caps, for when the rally is supposed to broaden out.",
  },

  // Tokens without a market deep enough to copy into.
  {
    ticker: "SPCX",
    name: "SpaceX",
    sector: "Industrials",
    blurb: "Private, and disclosed by the funds that hold it.",
    live: false,
  },
  {
    ticker: "NTLA",
    name: "Intellia Therapeutics",
    sector: "Healthcare",
    blurb: "Gene editing in the clinic. A recurring name in daily filings.",
    live: false,
  },
  {
    ticker: "VCYT",
    name: "Veracyte",
    sector: "Healthcare",
    blurb: "Genomic diagnostics, small and frequently traded.",
    live: false,
  },
  {
    ticker: "TEM",
    name: "Tempus AI",
    sector: "Healthcare",
    blurb: "Clinical data and sequencing, newly public.",
    live: false,
  },
  {
    ticker: "RKLB",
    name: "Rocket Lab",
    sector: "Industrials",
    blurb: "Small launch, moving up to a bigger vehicle.",
    live: false,
  },
  {
    ticker: "IONQ",
    name: "IonQ",
    sector: "Technology",
    blurb: "Trapped-ion quantum computing, priced on a long horizon.",
    live: false,
  },
];

export const liveStocks = stocks.filter((s) => s.live !== false);

export const sectors: Sector[] = [
  "Technology",
  "Semiconductors",
  "Consumer",
  "Communication",
  "Financials",
  "Healthcare",
  "Industrials",
  "Energy",
  "ETFs",
];

export const stockByTicker = (ticker: string) =>
  stocks.find((s) => s.ticker === ticker);
