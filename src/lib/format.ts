/** 0x9E4c02…C63B10 — long enough to recognise, short enough to sit in a row. */
export function shortAddress(address: string, lead = 6, tail = 6) {
  if (address.length <= lead + tail + 1) return address;
  return `${address.slice(0, lead)}…${address.slice(-tail)}`;
}

export function usd(amount: number, fractionDigits = 2) {
  return amount.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: fractionDigits,
    maximumFractionDigits: fractionDigits,
  });
}

/**
 * BRK.B -> brk-b. Mirrors `logoSlug` in scripts/fetch-logos.mjs, which is
 * standalone ESM and can't import this file — keep the two in step.
 */
export const logoSlug = (ticker: string) =>
  ticker.toLowerCase().replace(/\./g, "-");
