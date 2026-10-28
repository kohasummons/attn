import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };

const appDir = path.join(process.cwd(), "app");

/** Share card in the house style: the field artwork, the wordmark, and the page's own line. */
export async function pageOgImage(headline: string) {
  const [background, goga] = await Promise.all([
    readFile(path.join(appDir, "opengraph-image.jpg")),
    readFile(path.join(appDir, "fonts/goga/Goga-Medium.otf")),
  ]);
  const src = `data:image/jpeg;base64,${background.toString("base64")}`;

  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", position: "relative", fontFamily: "Goga" }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      {/* The artwork has the wordmark baked in, so show its clean top-right corner at 2.2x. */}
      <img src={src} width={2640} height={1386} alt="" style={{ position: "absolute", top: 0, left: -1440 }} />
      <div style={{ position: "absolute", top: 0, left: 0, width: 1200, height: 630, background: "rgba(0,0,0,0.3)", display: "flex" }} />
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          width: "100%",
          color: "#fff",
        }}
      >
        <div style={{ fontSize: 36, letterSpacing: -1, lineHeight: 1 }}>attention factory.</div>
        <div style={{ fontSize: 72, letterSpacing: -2.5, lineHeight: 1.02, maxWidth: 960 }}>{headline}</div>
      </div>
    </div>,
    { ...ogSize, fonts: [{ name: "Goga", data: goga, weight: 500, style: "normal" }] },
  );
}
