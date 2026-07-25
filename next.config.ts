import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export. This is what fixes the SEO problem on the old site: GitHub
  // Pages served a single 404.html SPA fallback for every route, so /about and
  // /services returned HTTP 404 to crawlers. Export emits real per-route HTML.
  output: "export",

  // GitHub Pages serves /about/ from /about/index.html, so directory-style URLs
  // are required — without this, every route 404s again.
  trailingSlash: true,

  // next/image's optimizer needs a server; there isn't one behind a static export.
  images: { unoptimized: true },
};

export default nextConfig;
