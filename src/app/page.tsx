import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { products, tierProducts, tierPlatform } from "@/content/products";
import { capabilities } from "@/content/services";
import { site } from "@/content/site";
import {
  ButtonLink,
  Container,
  Eyebrow,
  Section,
  SectionHeading,
} from "@/components/primitives";
import { ProductCard } from "@/components/product-card";

export default function HomePage() {
  return (
    <>
      <Container className="py-16 sm:py-24 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <Eyebrow>Six products · one studio</Eyebrow>
            <h1 className="text-4xl sm:text-5xl">{site.tagline}</h1>
            <p className="text-ink-soft mt-6 max-w-lg text-lg">
              Payments, messaging, events, campus life. Each one shipped,
              maintained and open source — not a roadmap.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <ButtonLink href="/products/">Browse products</ButtonLink>
              <ButtonLink href="/contact/" variant="secondary">
                Work with us
              </ButtonLink>
            </div>

            {/* The product hues, stated up front as a family. */}
            <ul className="mt-12 flex gap-2" aria-hidden="true">
              {products.map((p) => (
                <li
                  key={p.slug}
                  className="h-1.5 flex-1 rounded-full"
                  style={{ background: `var(--color-${p.accent})` }}
                />
              ))}
            </ul>
          </div>

          <div className="flex justify-center lg:justify-end">
            <Image
              src="/images/logo.png"
              alt="The Opencrafts mascot mark"
              width={512}
              height={512}
              priority
              className="h-auto w-56 sm:w-72 lg:w-80"
            />
          </div>
        </div>
      </Container>

      <Section band>
        <SectionHeading
          eyebrow="The range"
          title="What we build"
          lede="Four products in the wild, each with a page and a link to the running thing."
        />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {tierProducts.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </ul>

        <div className="border-line mt-14 border-t pt-10">
          <h3 className="text-xl">And the platform underneath</h3>
          <p className="text-ink-soft mt-2 max-w-xl">
            The open source services that hold Academia up. Documented
            separately, and reusable on their own.
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {tierPlatform.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/products/${p.slug}/`}
                  style={
                    { "--accent": `var(--color-${p.accent})` } as CSSProperties
                  }
                  className="border-line bg-surface hover:border-[var(--accent)] inline-flex items-center gap-2 rounded-pill border px-4 py-2 text-sm font-bold transition-colors"
                >
                  <span
                    aria-hidden="true"
                    className="h-2 w-2 rounded-full bg-[var(--accent)]"
                  />
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Services"
          title="And what we'll build for you"
          lede="Beyond our own products, we take on client work across the same stack."
        />
        <ul className="mt-10 grid gap-4 md:grid-cols-3">
          {capabilities.map((c) => (
            <li
              key={c.title}
              className="border-line bg-surface rounded-card border p-6"
            >
              <h3 className="text-xl">{c.title}</h3>
              <p className="text-ink-soft mt-3">{c.blurb}</p>
            </li>
          ))}
        </ul>
        <div className="mt-10">
          <ButtonLink href="/services/">See services and pricing</ButtonLink>
        </div>
      </Section>

      <Section band>
        <div className="max-w-2xl">
          <Eyebrow>Open source</Eyebrow>
          <h2 className="text-3xl sm:text-4xl">We love open source</h2>
          <p className="text-ink-soft mt-5 text-lg">
            The Opencrafts ecosystem is built on open source technologies and we
            maintain a commitment to open sourcing our own work in turn. We do
            this partially because we believe it&rsquo;s the right thing to do,
            but mostly because open source is cool.
          </p>
          <div className="mt-8">
            <ButtonLink href="https://github.com/opencrafts-io" variant="secondary">
              Read the source
            </ButtonLink>
          </div>
        </div>
      </Section>

      <Section>
        <div className="border-line bg-surface rounded-card border p-8 sm:p-12">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-lg">
              <h2 className="text-2xl sm:text-3xl">
                Got something you need built?
              </h2>
              <p className="text-ink-soft mt-3">
                Tell us what you&rsquo;re working on. We&rsquo;ll tell you
                honestly whether we&rsquo;re the right studio for it.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <ButtonLink href="/contact/">Start a project</ButtonLink>
              <Link
                href="/about/"
                className="text-subtle hover:text-ink self-center underline underline-offset-4 transition-colors"
              >
                Meet the team
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
