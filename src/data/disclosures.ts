import { institutions } from "./institutions";
import { stocks } from "./stocks";

export type Disclosure = {
  id: string;
  /** Institution slug. */
  from: string;
  ticker: string;
  company: string;
  /** Shares added, already formatted. */
  shares: string;
  /** Approximate dollar value of the add, when the source publishes one. */
  value?: string;
  /** Share of the fund the add represents, when published. */
  weight?: string;
  /** The date the trade was disclosed, not necessarily the date it happened. */
  date: string;
  /** ARK publishes which of its ETFs traded; 13F filers do not. */
  funds?: string[];
};

/**
 * The public record as the tracker last read it. A row is copyable when its
 * ticker resolves to a tokenized stock with a live market — that check lives
 * in `isCopyable` rather than in the data, so the feed and the stock list can
 * never disagree about what can actually be bought.
 */
export const disclosures: Disclosure[] = [
  {
    id: "d1",
    from: "ark",
    ticker: "CRCL",
    company: "Circle",
    shares: "+35,192 sh",
    value: "≈ $3.6M",
    weight: "0.40% of fund",
    date: "Sep 4",
    funds: ["ARKF"],
  },
  {
    id: "d2",
    from: "ark",
    ticker: "NTLA",
    company: "Intellia Therapeutics",
    shares: "+31,186 sh",
    value: "≈ $395K",
    weight: "0.01% of fund",
    date: "Sep 4",
    funds: ["ARKK", "ARKG"],
  },
  {
    id: "d3",
    from: "ark",
    ticker: "NVDA",
    company: "NVIDIA",
    shares: "+243,707 sh",
    value: "≈ $56M",
    weight: "2.54% of fund",
    date: "Sep 3",
    funds: ["ARKK", "ARKW", "ARKQ", "ARKF", "ARKX"],
  },
  {
    id: "d4",
    from: "ark",
    ticker: "VCYT",
    company: "Veracyte",
    shares: "+22,144 sh",
    weight: "0.01% of fund",
    date: "Sep 3",
    funds: ["ARKK"],
  },
  {
    id: "d5",
    from: "ark",
    ticker: "NET",
    company: "Cloudflare",
    shares: "+47,794 sh",
    value: "≈ $14M",
    weight: "0.45% of fund",
    date: "Sep 2",
    funds: ["ARKK", "ARKW", "ARKF"],
  },
  {
    id: "d6",
    from: "ark",
    ticker: "SPCX",
    company: "SpaceX",
    shares: "+205,031 sh",
    value: "≈ $31M",
    weight: "1.01% of fund",
    date: "Sep 1",
    funds: ["ARKK", "ARKW", "ARKQ", "ARKX"],
  },
  {
    id: "d7",
    from: "ark",
    ticker: "COIN",
    company: "Coinbase",
    shares: "+18,402 sh",
    value: "≈ $5.1M",
    weight: "0.33% of fund",
    date: "Aug 29",
    funds: ["ARKK", "ARKF", "ARKW"],
  },
  {
    id: "d8",
    from: "ark",
    ticker: "TSLA",
    company: "Tesla",
    shares: "+62,940 sh",
    value: "≈ $21M",
    weight: "1.12% of fund",
    date: "Aug 28",
    funds: ["ARKK", "ARKQ", "ARKW"],
  },
  {
    id: "d9",
    from: "coatue",
    ticker: "MSFT",
    company: "Microsoft",
    shares: "+1,140,000 sh",
    value: "≈ $520M",
    weight: "1.06% of fund",
    date: "Aug 14",
  },
  {
    id: "d10",
    from: "coatue",
    ticker: "AMD",
    company: "Advanced Micro Devices",
    shares: "+2,310,000 sh",
    value: "≈ $340M",
    weight: "0.69% of fund",
    date: "Aug 14",
  },
  {
    id: "d11",
    from: "bridgewater",
    ticker: "GOOGL",
    company: "Alphabet",
    shares: "+884,300 sh",
    value: "≈ $160M",
    weight: "0.67% of fund",
    date: "Aug 14",
  },
  {
    id: "d12",
    from: "bridgewater",
    ticker: "SPY",
    company: "SPDR S&P 500 ETF Trust",
    shares: "+412,600 sh",
    value: "≈ $255M",
    weight: "1.06% of fund",
    date: "Aug 14",
  },
  {
    id: "d13",
    from: "berkshire",
    ticker: "COST",
    company: "Costco",
    shares: "+1,180,000 sh",
    value: "≈ $1.1B",
    weight: "0.37% of fund",
    date: "Aug 14",
  },
  {
    id: "d14",
    from: "duquesne",
    ticker: "LLY",
    company: "Eli Lilly",
    shares: "+96,400 sh",
    value: "≈ $84M",
    weight: "1.91% of fund",
    date: "Aug 14",
  },
  {
    id: "d15",
    from: "appaloosa",
    ticker: "NVDA",
    company: "NVIDIA",
    shares: "+1,050,000 sh",
    value: "≈ $242M",
    weight: "3.23% of fund",
    date: "Aug 14",
  },
  {
    id: "d16",
    from: "viking",
    ticker: "UNH",
    company: "UnitedHealth",
    shares: "+540,200 sh",
    value: "≈ $167M",
    weight: "0.48% of fund",
    date: "Aug 14",
  },
  {
    id: "d17",
    from: "altimeter",
    ticker: "SNOW",
    company: "Snowflake",
    shares: "+1,420,000 sh",
    value: "≈ $290M",
    weight: "2.96% of fund",
    date: "Aug 14",
  },
  {
    id: "d18",
    from: "d1",
    ticker: "META",
    company: "Meta",
    shares: "+310,500 sh",
    value: "≈ $228M",
    weight: "0.65% of fund",
    date: "Aug 14",
  },
  {
    id: "d19",
    from: "soros",
    ticker: "TEM",
    company: "Tempus AI",
    shares: "+740,000 sh",
    value: "≈ $46M",
    weight: "0.75% of fund",
    date: "Aug 14",
  },
  {
    id: "d20",
    from: "tiger",
    ticker: "NOW",
    company: "ServiceNow",
    shares: "+128,900 sh",
    value: "≈ $126M",
    weight: "0.52% of fund",
    date: "Aug 14",
  },
  {
    id: "d21",
    from: "third-point",
    ticker: "AMZN",
    company: "Amazon",
    shares: "+602,000 sh",
    value: "≈ $138M",
    weight: "3.00% of fund",
    date: "Aug 14",
  },
  {
    id: "d22",
    from: "elliott",
    ticker: "PYPL",
    company: "PayPal",
    shares: "+2,900,000 sh",
    value: "≈ $198M",
    weight: "1.41% of fund",
    date: "Aug 14",
  },
  {
    id: "d23",
    from: "baupost",
    ticker: "GOOGL",
    company: "Alphabet",
    shares: "+215,000 sh",
    value: "≈ $39M",
    weight: "0.72% of fund",
    date: "Aug 13",
  },
  {
    id: "d24",
    from: "fundsmith",
    ticker: "V",
    company: "Visa",
    shares: "+186,300 sh",
    value: "≈ $63M",
    weight: "0.45% of fund",
    date: "Aug 14",
  },
];

const liveTickers = new Set(
  stocks.filter((s) => s.live !== false).map((s) => s.ticker),
);

export const isCopyable = (d: Disclosure) => liveTickers.has(d.ticker);

export const institutionName = (slug: string) =>
  institutions.find((i) => i.slug === slug)?.name ?? slug;

export const disclosuresFor = (slug: string) =>
  disclosures.filter((d) => d.from === slug);
