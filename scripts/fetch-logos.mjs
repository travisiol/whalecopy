/**
 * Pulls one logo per ticker into public/logos/ so the site never depends on a
 * third-party image host at runtime — and so no visitor's IP is handed to one
 * just to draw a row in the feed.
 *
 *   node scripts/fetch-logos.mjs
 *
 * Re-run it after adding a ticker to src/data. Files already present are left
 * alone unless you pass --force.
 */
import { mkdir, writeFile, readFile, access } from "node:fs/promises";
import { join } from "node:path";

const SOURCE = (ticker) =>
  `https://financialmodelingprep.com/image-stock/${ticker}.png`;

const OUT = join(process.cwd(), "public", "logos");
const force = process.argv.includes("--force");

async function tickers() {
  const files = ["src/data/stocks.ts", "src/data/disclosures.ts"];
  const found = new Set();
  for (const file of files) {
    const src = await readFile(join(process.cwd(), file), "utf8");
    for (const m of src.matchAll(/ticker:\s*"([^"]+)"/g)) found.add(m[1]);
  }
  return [...found].sort();
}

/** BRK.B -> brk-b, so the filename survives every filesystem and URL. */
export const logoSlug = (ticker) => ticker.toLowerCase().replace(/\./g, "-");

async function exists(path) {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

const list = await tickers();
await mkdir(OUT, { recursive: true });

let written = 0;
let skipped = 0;
const missing = [];

for (const ticker of list) {
  const dest = join(OUT, `${logoSlug(ticker)}.png`);

  if (!force && (await exists(dest))) {
    skipped++;
    continue;
  }

  try {
    const res = await fetch(SOURCE(ticker), { redirect: "follow" });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = Buffer.from(await res.arrayBuffer());
    // A few hundred bytes is a placeholder or an error page, not a logo.
    if (buf.length < 500) throw new Error(`only ${buf.length} bytes`);
    await writeFile(dest, buf);
    written++;
    console.log(`  ${ticker.padEnd(6)} ${buf.length} bytes`);
  } catch (err) {
    missing.push(`${ticker} (${err.message})`);
  }
}

console.log(
  `\n${written} written, ${skipped} already present, ${missing.length} missing`,
);
if (missing.length) {
  console.log(`missing: ${missing.join(", ")}`);
  console.log("Those tickers fall back to the lettered chip. That is fine.");
}
