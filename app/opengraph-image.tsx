import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Saka Jawa - Web Budaya Jawa";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(to right, #1e1b4b, #312e81)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "#facc15",
          fontFamily: "sans-serif",
          padding: "40px",
        }}
      >
        <div
          style={{
            fontSize: 100,
            fontWeight: 800,
            marginBottom: 20,
            textAlign: "center",
            textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
          }}
        >
          Saka Jawa
        </div>
        <div
          style={{
            fontSize: 40,
            fontWeight: 400,
            color: "#ffffff",
            textAlign: "center",
            maxWidth: "800px",
            lineHeight: 1.5,
          }}
        >
          Jelajahi kekayaan budaya Jawa: Batik, Wayang, Gamelan, dan Kuliner Tradisional.
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
