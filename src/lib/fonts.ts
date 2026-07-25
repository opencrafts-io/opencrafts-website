import localFont from "next/font/local";

/**
 * D-DIN and D-DIN Expanded, both under the SIL Open Font License.
 *
 * Self-hosted as WOFF2 and served with `display: "swap"`, so text paints in a
 * fallback face immediately rather than staying invisible while fonts load.
 */

export const din = localFont({
  src: [
    { path: "../fonts/D-DIN.woff2", weight: "400", style: "normal" },
    { path: "../fonts/D-DIN-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-din",
  display: "swap",
  fallback: ["ui-sans-serif", "system-ui", "sans-serif"],
});

export const dinExpanded = localFont({
  src: [{ path: "../fonts/D-DINExp.woff2", weight: "400", style: "normal" }],
  variable: "--font-din-exp",
  display: "swap",
  fallback: ["ui-sans-serif", "system-ui", "sans-serif"],
});
