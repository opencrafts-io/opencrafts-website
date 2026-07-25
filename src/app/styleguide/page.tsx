import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { products } from "@/content/products";
import {
  ButtonLink,
  Container,
  Eyebrow,
  Section,
  SectionHeading,
} from "@/components/primitives";
import { ProductCard } from "@/components/product-card";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Styleguide",
  description: "Design tokens and component catalogue.",
  robots: { index: false, follow: false },
};

const neutrals = [
  { token: "ink", hex: "#1c1b19", use: "Body text, primary buttons" },
  { token: "ink-soft", hex: "#46433f", use: "Secondary text" },
  { token: "subtle", hex: "#767370", use: "Captions, metadata, nav rest" },
  { token: "line", hex: "#e5e3e0", use: "Hairlines, card borders" },
  { token: "band", hex: "#f2f1ee", use: "Alternating section ground" },
  { token: "paper", hex: "#fbfbfa", use: "Page ground" },
  { token: "surface", hex: "#ffffff", use: "Cards lifted off the ground" },
];

const scale = [
  { name: "text-5xl", size: "3.5rem" },
  { name: "text-4xl", size: "2.875rem" },
  { name: "text-3xl", size: "2.25rem" },
  { name: "text-2xl", size: "1.75rem" },
  { name: "text-xl", size: "1.375rem" },
  { name: "text-lg", size: "1.125rem" },
  { name: "text-base", size: "1rem" },
  { name: "text-sm", size: "0.875rem" },
];

function Swatch({ token, hex }: { token: string; hex: string }) {
  return (
    <div>
      <div
        className="border-line h-16 rounded-card border"
        style={{ background: `var(--color-${token})` }}
      />
      <p className="mt-2 font-bold">{token}</p>
      <p className="text-subtle font-mono text-xs uppercase">{hex}</p>
    </div>
  );
}

export default function StyleguidePage() {
  return (
    <>
      <Container className="py-14 sm:py-20">
        <SectionHeading
          eyebrow="Internal"
          title="Styleguide"
          lede="Every token and component available in this codebase. Check here before building something new."
        />
        <div className="border-line bg-surface mt-8 rounded-card border p-6">
          <p className="font-bold">How this is organised</p>
          <ul className="text-ink-soft mt-3 flex list-disc flex-col gap-2 pl-5 text-sm">
            <li>
              <code className="font-mono">components/ui/</code> is the shadcn/ui
              catalogue, built on Base UI primitives. Add more with{" "}
              <code className="font-mono">bunx shadcn@latest add &lt;name&gt;</code>.
              Treat these files as vendored — restyle through tokens rather than
              editing them.
            </li>
            <li>
              <code className="font-mono">components/primitives.tsx</code> holds
              the layout and brand pieces: Container, Section, Eyebrow,
              SectionHeading, ButtonLink, ExternalLink.
            </li>
            <li>
              All colour, type and radius live in{" "}
              <code className="font-mono">app/globals.css</code>. That is the only
              place to change how things look.
            </li>
          </ul>
        </div>
      </Container>

      <Section band>
        <h2 className="text-2xl sm:text-3xl">Neutrals</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-4 lg:grid-cols-7">
          {neutrals.map((n) => (
            <Swatch key={n.token} token={n.token} hex={n.hex} />
          ))}
        </div>

        <h2 className="mt-14 text-2xl sm:text-3xl">Product hues</h2>
        <p className="text-ink-soft mt-2 max-w-xl">
          One per product, tuned to near-equal perceived weight. Reach for these
          through <code className="font-mono">var(--color-&lt;slug&gt;)</code>, never
          as a hardcoded hex.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-4 lg:grid-cols-8">
          {products.map((p) => (
            <Swatch key={p.slug} token={p.accent} hex={p.name} />
          ))}
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl sm:text-3xl">Type</h2>
        <p className="text-ink-soft mt-2">
          D-DIN Expanded sets headings, D-DIN sets everything else.
        </p>
        <div className="mt-8 flex flex-col gap-4">
          {scale.map((s) => (
            <div
              key={s.name}
              className="border-line flex flex-wrap items-baseline gap-x-6 border-b pb-4"
            >
              <code className="text-subtle w-28 shrink-0 font-mono text-xs">
                {s.name}
              </code>
              <span className="text-subtle w-20 shrink-0 font-mono text-xs">
                {s.size}
              </span>
              <span className={`font-display ${s.name}`}>Industrial grade</span>
            </div>
          ))}
          <div className="flex flex-wrap items-baseline gap-x-6">
            <code className="text-subtle w-28 shrink-0 font-mono text-xs">
              eyebrow
            </code>
            <span className="text-subtle w-20 shrink-0 font-mono text-xs">
              0.6875rem
            </span>
            <span className="eyebrow">Section label</span>
          </div>
        </div>
      </Section>

      <Section band>
        <h2 className="text-2xl sm:text-3xl">Buttons</h2>
        <p className="text-ink-soft mt-2 max-w-xl">
          <code className="font-mono">ButtonLink</code> navigates and renders an
          anchor. <code className="font-mono">Button</code> from{" "}
          <code className="font-mono">components/ui</code> is a real button for
          actions that are not navigation.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <ButtonLink href="/styleguide/">Primary link</ButtonLink>
          <ButtonLink href="/styleguide/" variant="secondary">
            Secondary link
          </ButtonLink>
          <Button>Default button</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl sm:text-3xl">Cards</h2>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.slice(0, 3).map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </ul>
      </Section>

      <Section band>
        <h2 className="text-2xl sm:text-3xl">Applying a product hue</h2>
        <p className="text-ink-soft mt-2 max-w-xl">
          Set <code className="font-mono">--accent</code> on a wrapper, then use{" "}
          <code className="font-mono">[var(--accent)]</code> inside it. Interpolated
          class names such as{" "}
          <code className="font-mono">{"text-${slug}"}</code> will not work,
          because Tailwind cannot see them when it scans.
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {products.slice(0, 3).map((p) => (
            <div
              key={p.slug}
              style={{ "--accent": `var(--color-${p.accent})` } as CSSProperties}
              className="rounded-card border border-[var(--accent)] p-4"
            >
              <Eyebrow>{p.category}</Eyebrow>
              <p className="font-display text-lg text-[var(--accent)]">
                {p.name}
              </p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
