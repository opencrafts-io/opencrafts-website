import type { Metadata } from "next";
import { site } from "@/content/site";
import { products } from "@/content/products";
import {
  ButtonLink,
  Container,
  Eyebrow,
  Section,
  SectionHeading,
} from "@/components/primitives";

export const metadata: Metadata = {
  title: "Contact",
  description: `Talk to ${site.name} about a project, a product, or the SMS API.`,
  alternates: { canonical: "/contact/" },
};

/**
 * Static export has no API routes, so there is no form handler yet — this page
 * routes to email until one is chosen (Formspree, Web3Forms and Resend are all
 * viable). Everything else about the page is final; only the mechanism changes.
 */
export default function ContactPage() {
  return (
    <>
      <Container className="py-14 sm:py-20">
        <SectionHeading
          eyebrow="Get in touch"
          title="Tell us what you're building"
          lede="We'll tell you honestly whether we're the right studio for it — and if we're not, who is."
        />
      </Container>

      <Section band className="!pt-0 sm:!pt-0 lg:!pt-0">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="border-line bg-surface rounded-card border p-8">
            <Eyebrow>New projects</Eyebrow>
            <h2 className="text-2xl">Start a project</h2>
            <p className="text-ink-soft mt-3">
              Client work, integrations, or something built from scratch. Tell us
              roughly what you need and when you need it.
            </p>
            <div className="mt-6">
              <ButtonLink href={`mailto:${site.salesEmail}`}>
                {site.salesEmail}
              </ButtonLink>
            </div>
          </div>

          <div className="border-line bg-surface rounded-card border p-8">
            <Eyebrow>Everything else</Eyebrow>
            <h2 className="text-2xl">General enquiries</h2>
            <p className="text-ink-soft mt-3">
              Questions about a product, press, partnerships, or joining the
              team.
            </p>
            <div className="mt-6">
              <ButtonLink href={`mailto:${site.email}`} variant="secondary">
                {site.email}
              </ButtonLink>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl sm:text-3xl">Asking about a specific product?</h2>
        <ul className="text-ink-soft mt-6 flex flex-wrap gap-x-6 gap-y-3">
          {products.map((p) => (
            <li key={p.slug}>
              <a
                href={`mailto:${site.email}?subject=${encodeURIComponent(`Question about ${p.name}`)}`}
                className="hover:text-ink underline underline-offset-4 transition-colors"
              >
                {p.name}
              </a>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
