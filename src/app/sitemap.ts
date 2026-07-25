import type { MetadataRoute } from "next";
import { products } from "@/content/products";
import { site } from "@/content/site";

/** Required under `output: export` — evaluates once at build time. */
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    { path: "/", priority: 1 },
    { path: "/products/", priority: 0.9 },
    { path: "/services/", priority: 0.9 },
    { path: "/about/", priority: 0.7 },
    { path: "/contact/", priority: 0.7 },
    { path: "/policy/", priority: 0.3 },
  ];

  return [
    ...staticRoutes.map((r) => ({
      url: `${site.url}${r.path}`,
      lastModified: now,
      priority: r.priority,
    })),
    ...products.map((p) => ({
      url: `${site.url}/products/${p.slug}/`,
      lastModified: now,
      priority: 0.8,
    })),
  ];
}
