import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

/** A mint fluke on the navy — the mark reduced to the one shape that survives 16px. */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#061247",
        }}
      >
        <svg width="40" height="40" viewBox="0 0 32 32" fill="none">
          <path
            d="M3 20c3.4 0 5-2.5 7.2-5.2C12.7 11.5 15.9 9 19.8 9c4.3 0 7.2 2.7 8.4 5.9"
            stroke="#82e094"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M22 16c-1 3.7-4.6 6.6-9.2 6.6-4.2 0-7.7-2-9.6-4.7"
            stroke="#82e094"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </div>
    ),
    size,
  );
}
