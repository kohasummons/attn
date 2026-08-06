import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        margin: 0,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#2400ff",
        flexDirection: "column",
        gap: 1,
        fontFamily:
          "ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif",
      }}
    >
      <p
        style={{
          margin: 0,
          fontSize: 32,
          color: "#ffffff",
          fontWeight: 600,
          letterSpacing: 1,
        }}
      >
        ai swiss army knife
      </p>
      <p
        style={{
          marginTop: 0,
          marginLeft: 140,
          fontSize: 32,
          color: "#ffffff",
          fontWeight: 600,
          letterSpacing: 1,
        }}
      >
        for modern brands
      </p>
    </div>,
    {
      ...size,
    }
  );
}
