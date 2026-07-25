import type { Metadata } from "next";
import { tierProducts, tierPlatform } from "@/content/products";
import { Container, Section, SectionHeading } from "@/components/primitives";
import { ProductCard } from "@/components/product-card";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Rizzit, Academia, Chirp and the SMS API — plus the open source platform services underneath them.",
  alternates: { canonical: "/products/" },
};

export default function ProductsPage() {
  return (
    <>
      <Container className="py-14 sm:py-20">
        <SectionHeading
          eyebrow="The range"
          title="Everything we've shipped"
          lede="Four products in the wild, and the open source services that hold them up. Nothing on this page is a roadmap item."
        />
      </Container>

      <Section band className="!pt-0 sm:!pt-0 lg:!pt-0">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {tierProducts.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </ul>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Platform"
          title="What Academia runs on"
          lede="The services behind the student app. Open source, separately documented, and reusable on their own."
        />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {tierPlatform.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </ul>
      </Section>
    </>
  );
}
