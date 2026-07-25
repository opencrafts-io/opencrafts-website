import Link from "next/link";
import Image from "next/image";
import type { CSSProperties } from "react";
import type { Product } from "@/content/products";

/**
 * The accent is passed as a CSS custom property rather than an interpolated
 * class name, so Tailwind's scanner can still see every class it generates.
 */
export function ProductCard({ product }: { product: Product }) {
  return (
    <li>
      <Link
        href={`/products/${product.slug}/`}
        style={{ "--accent": `var(--color-${product.accent})` } as CSSProperties}
        className="border-line bg-surface hover:border-[var(--accent)] group flex h-full flex-col gap-3 rounded-card border border-t-2 border-t-[var(--accent)] p-6 transition-colors"
      >
        <div className="flex items-start justify-between gap-3">
          <span className="flex flex-wrap gap-1.5">
            <span className="eyebrow w-fit rounded-pill bg-[color-mix(in_srgb,var(--accent)_12%,transparent)] px-2.5 py-1 text-[var(--accent)]">
              {product.category}
            </span>
            {product.availability === "on-request" ? (
              <span className="eyebrow border-line text-subtle w-fit rounded-pill border px-2.5 py-1">
                On request
              </span>
            ) : null}
          </span>
          {product.image ? (
            <Image
              src={product.image}
              alt=""
              width={40}
              height={40}
              className="-mt-1 h-10 w-10 shrink-0"
            />
          ) : null}
        </div>
        <h3 className="font-display text-xl text-[var(--accent)]">
          {product.name}
        </h3>
        <p className="text-ink-soft text-sm">{product.blurb}</p>
        <span className="text-subtle group-hover:text-ink mt-auto pt-2 text-sm font-bold transition-colors">
          Learn more →
        </span>
      </Link>
    </li>
  );
}
