import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#061247",
          padding: 72,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            fontSize: 22,
            color: "#8e9bd0",
            letterSpacing: 6,
          }}
        >
          {siteConfig.institutionCount} FUNDS · {siteConfig.tokenizedCount}{" "}
          TOKENIZED STOCKS
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 76,
              lineHeight: 1.05,
              color: "#ffffff",
              fontWeight: 600,
            }}
          >
            Copy the whales onto
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 76,
              lineHeight: 1.05,
              color: "#82e094",
              fontWeight: 600,
            }}
          >
            tokenized stocks.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 26,
            color: "#ccd3f2",
          }}
        >
          <div style={{ display: "flex" }}>{siteConfig.strapline}</div>
          <div style={{ display: "flex", color: "#8e9bd0" }}>
            {siteConfig.handle}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
