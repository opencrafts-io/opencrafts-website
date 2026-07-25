import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { services, capabilities, kes, kesPrecise } from "@/content/services";
import { site } from "@/content/site";
import {
  ButtonLink,
  Container,
  Eyebrow,
  Section,
  SectionHeading,
} from "@/components/primitives";

export const metadata: Metadata = {
  title: "Services & Pricing",
  description:
    "SMS infrastructure, custom software, cloud integration and ongoing maintenance. Transparent pricing in KES.",
  alternates: { canonical: "/services/" },
};

const mailto = `mailto:${site.salesEmail}?subject=${encodeURIComponent(
  "SMS API access request",
)}&body=${encodeURIComponent(
  "Hello,\n\nI would like to use the SMS Backend API. Here is roughly what we need:\n\n- What we would send:\n- Rough monthly volume:\n- Systems it needs to plug into:\n\nThank you!",
)}`;

export default function ServicesPage() {
  return (
    <>
      <Container className="py-14 sm:py-20">
        <SectionHeading
          eyebrow="Our solutions"
          title="Empower your software with Opencrafts"
          lede="Scalable services and infrastructure designed for startups and enterprises alike."
        />
      </Container>

      {/* Pricing is inline rather than behind a dialog so it is crawlable,
          linkable, and readable without JavaScript. */}
      {services.map((service) => (
        <Section key={service.id} band>
          <div
            style={{ "--accent": `var(--color-${service.accent})` } as CSSProperties}
          >
            <Eyebrow>Service</Eyebrow>
            <h2 className="text-3xl text-[var(--accent)] sm:text-4xl">
              {service.title}
            </h2>
            <p className="text-ink-soft mt-4 max-w-2xl text-lg">
              {service.description}
            </p>
            {service.accessNote ? (
              <p className="border-line bg-surface text-ink-soft mt-6 max-w-2xl rounded-card border border-l-2 border-l-[var(--accent)] px-5 py-4 text-sm">
                <strong className="text-ink">Access is on request.</strong>{" "}
                {service.accessNote}
              </p>
            ) : null}

            <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1.6fr]">
              <div>
                <h3 className="eyebrow text-subtle mb-4">Included features</h3>
                <ul className="flex flex-col gap-3">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--accent)]"
                      />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <p className="border-line text-subtle mt-6 border-t pt-4 text-sm">
                  One-off setup fee{" "}
                  <strong className="text-ink tabular">
                    {kes(service.pricing.setupFee)}
                  </strong>
                </p>
              </div>

              <div>
                <h3 className="eyebrow text-subtle mb-4">Monthly plans</h3>
                <div className="border-line bg-surface overflow-x-auto rounded-card border">
                  <table className="w-full min-w-[34rem] text-left text-sm">
                    <caption className="sr-only">
                      {service.title} monthly pricing tiers, in Kenyan shillings
                    </caption>
                    <thead className="border-line text-subtle border-b">
                      <tr>
                        <th scope="col" className="px-5 py-3 font-bold">
                          Tier
                        </th>
                        <th scope="col" className="px-5 py-3 font-bold">
                          Monthly fee
                        </th>
                        <th scope="col" className="px-5 py-3 font-bold">
                          SMS bundle
                        </th>
                        <th scope="col" className="px-5 py-3 font-bold">
                          Overage
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {service.pricing.tiers.map((t) => (
                        <tr
                          key={t.name}
                          className="border-line border-b last:border-0"
                        >
                          <th scope="row" className="px-5 py-4 font-bold">
                            {t.name}
                          </th>
                          <td className="tabular px-5 py-4">{kes(t.fee)}</td>
                          <td className="tabular px-5 py-4">
                            {t.included === 0
                              ? "Pay as you go"
                              : `${t.included.toLocaleString("en-KE")} SMS`}
                          </td>
                          <td className="tabular px-5 py-4">
                            {kesPrecise(t.perSMS)} / sms
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <ButtonLink href={mailto}>Request access</ButtonLink>
                  <span className="text-subtle text-sm">
                    We&rsquo;ll come back to you with next steps.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Section>
      ))}

      <Section>
        <SectionHeading
          eyebrow="Client work"
          title="What else we take on"
          lede="Beyond our own products, we build and maintain software for other teams."
        />
        <ul className="mt-10 grid gap-4 md:grid-cols-3">
          {capabilities.map((c) => (
            <li
              key={c.title}
              className="border-line bg-surface rounded-card border p-6"
            >
              <h3 className="text-xl">{c.title}</h3>
              <p className="text-ink-soft mt-3 text-sm">{c.blurb}</p>
            </li>
          ))}
        </ul>
        <div className="mt-10">
          <ButtonLink href="/contact/">Start a project</ButtonLink>
        </div>
      </Section>
    </>
  );
}
