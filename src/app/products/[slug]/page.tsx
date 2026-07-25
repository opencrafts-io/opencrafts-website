import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { CSSProperties } from "react";
import { products, getProduct } from "@/content/products";
import {
  ButtonLink,
  Container,
  Eyebrow,
  Section,
} from "@/components/primitives";
import { ProductCard } from "@/components/product-card";
import { StoreLinks } from "@/components/store-links";

/** Emits one static HTML file per product at build time. */
export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.blurb,
    alternates: { canonical: `/products/${product.slug}/` },
    openGraph: { title: product.name, description: product.blurb },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const siblings = products
    .filter((p) => p.slug !== product.slug && p.tier === product.tier)
    .slice(0, 4);
  const accentStyle = {
    "--accent": `var(--color-${product.accent})`,
  } as CSSProperties;

  const facts = [
    product.stack ? { label: "Built with", value: product.stack } : null,
    product.license ? { label: "Licence", value: product.license } : null,
    product.availability === "on-request"
      ? { label: "Access", value: "On request" }
      : null,
    {
      label: "Part of",
      value:
        product.tier === "platform" ? "The Academia platform" : "Our products",
    },
  ].filter(Boolean) as { label: string; value: string }[];

  return (
    <>
      <Container className="py-14 sm:py-20">
        <div
          style={accentStyle}
          className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr]"
        >
          <div>
            <Eyebrow>{product.category}</Eyebrow>
            <h1 className="text-4xl text-[var(--accent)] sm:text-5xl">
              {product.name}
            </h1>
            <p className="text-ink-soft mt-5 max-w-2xl text-lg">
              {product.description}
            </p>
            {product.stores ? (
              <div className="mt-8">
                <StoreLinks
                  stores={product.stores}
                  productName={product.name}
                />
              </div>
            ) : null}

            <div className="mt-4 flex flex-wrap gap-3">
              {product.href ? (
                <ButtonLink href={product.href}>Open {product.name}</ButtonLink>
              ) : null}
              {product.repo ? (
                <ButtonLink
                  href={product.repo}
                  variant={product.href || product.stores ? "secondary" : "primary"}
                >
                  View source
                </ButtonLink>
              ) : null}
              <ButtonLink href="/contact/" variant="secondary">
                Ask about {product.name}
              </ButtonLink>
            </div>

            <dl className="border-line mt-10 flex flex-wrap gap-x-10 gap-y-4 border-t pt-6">
              {facts.map((f) => (
                <div key={f.label}>
                  <dt className="eyebrow text-subtle">{f.label}</dt>
                  <dd className="mt-1 font-bold">{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          {product.image ? (
            <div className="flex items-start justify-center lg:justify-end">
              <Image
                src={product.image}
                alt={`${product.name} mascot`}
                width={480}
                height={480}
                priority
                className="h-auto w-44 sm:w-56"
              />
            </div>
          ) : null}
        </div>
      </Container>

      <Section band>
        <h2 className="text-2xl sm:text-3xl">What it does</h2>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {product.features.map((f) => (
            <li
              key={f}
              style={accentStyle}
              className="border-line bg-surface flex items-start gap-3 rounded-card border p-5"
            >
              <span
                aria-hidden="true"
                className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--accent)]"
              />
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <div className="flex flex-wrap items-baseline justify-between gap-4">
          <h2 className="text-2xl sm:text-3xl">
            {product.tier === "platform"
              ? "Other platform services"
              : "The rest of the range"}
          </h2>
          <Link
            href="/products/"
            className="text-subtle hover:text-ink underline underline-offset-4 transition-colors"
          >
            All products
          </Link>
        </div>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {siblings.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </ul>
      </Section>
    </>
  );
}
