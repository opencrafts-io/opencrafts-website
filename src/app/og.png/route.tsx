import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/content/site";
import { tierProducts } from "@/content/products";


const size = { width: 1200, height: 630 };

/**
 * Social preview card, served at /og.png.
 *
 * This is a route handler rather than Next's `opengraph-image` convention
 * because that convention emits a file with no extension, and GitHub Pages
 * infers Content-Type from the extension — scrapers would receive
 * application/octet-stream and ignore the image.
 */
export const dynamic = "force-static";

/**
 * Satori cannot resolve CSS custom properties, so the hex values are read
 * straight out of globals.css at build time. That keeps one source of truth —
 * changing a token there changes this card too.
 */
function accentHex(slug: string): string {
  const css = readFileSync(
    join(process.cwd(), "src/app/globals.css"),
    "utf8",
  );
  const match = css.match(
    new RegExp(`--color-${slug}:\\s*(#[0-9a-fA-F]{3,8})`),
  );
  if (!match) throw new Error(`No --color-${slug} token in globals.css`);
  return match[1];
}

export function GET() {
  const hues = tierProducts.map((p) => accentHex(p.accent));

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#fbfbfa",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 22,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: "#767370",
            }}
          >
            {site.legalName}
          </div>
          <div
            style={{
              fontSize: 78,
              lineHeight: 1.08,
              color: "#1c1b19",
              marginTop: 28,
              maxWidth: 940,
              fontWeight: 700,
            }}
          >
            {site.tagline}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div style={{ display: "flex", gap: 12 }}>
            {hues.map((h) => (
              <div
                key={h}
                style={{ width: 168, height: 10, borderRadius: 999, background: h }}
              />
            ))}
          </div>
          <div style={{ display: "flex", gap: 28, fontSize: 26, color: "#46433f" }}>
            {tierProducts.map((p) => (
              <span key={p.slug}>{p.name}</span>
            ))}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
