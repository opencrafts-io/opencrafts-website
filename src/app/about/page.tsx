import type { Metadata } from "next";
import { team } from "@/content/team";
import { site } from "@/content/site";
import {
  Container,
  ExternalLink,
  Section,
  SectionHeading,
} from "@/components/primitives";

export const metadata: Metadata = {
  title: "About",
  description: `The six people behind ${site.name}, a software studio in Nairobi.`,
  alternates: { canonical: "/about/" },
};

export default function AboutPage() {
  return (
    <>
      <Container className="py-14 sm:py-20">
        <SectionHeading
          eyebrow="Want to stalk us?"
          title="The Opencrafts team"
          lede="Six people in Nairobi who build software, argue about programming languages, and open source most of it."
        />
      </Container>

      <Section band className="!pt-0 sm:!pt-0 lg:!pt-0">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m) => (
            <li
              key={m.name}
              className="border-line bg-surface flex flex-col rounded-card border p-6"
            >
              <h2 className="font-display text-xl">{m.name}</h2>
              <p className="eyebrow text-subtle mt-2">{m.role}</p>
              <p className="text-ink-soft mt-4 flex-1 text-sm">{m.bio}</p>
              <ul className="text-subtle mt-5 flex gap-4 text-sm">
                {m.github ? (
                  <li>
                    <ExternalLink
                      href={m.github}
                      className="hover:text-ink transition-colors"
                    >
                      GitHub
                    </ExternalLink>
                  </li>
                ) : null}
                {m.linkedin ? (
                  <li>
                    <ExternalLink
                      href={m.linkedin}
                      className="hover:text-ink transition-colors"
                    >
                      LinkedIn
                    </ExternalLink>
                  </li>
                ) : null}
                {m.instagram ? (
                  <li>
                    <ExternalLink
                      href={m.instagram}
                      className="hover:text-ink transition-colors"
                    >
                      Instagram
                    </ExternalLink>
                  </li>
                ) : null}
              </ul>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
