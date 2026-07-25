import type { Metadata } from "next";
import { site } from "@/content/site";
import { ButtonLink, Container, SectionHeading } from "@/components/primitives";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${site.name} products and services.`,
  alternates: { canonical: "/policy/" },
};

const PDF = "/files/privacy_policy_academia.pdf";

/** The PDF is the source of truth; `object` renders it inline where supported
 *  and falls back to a download link where it isn't. */
export default function PolicyPage() {
  return (
    <Container className="py-14 sm:py-20">
      <SectionHeading
        eyebrow="Legal"
        title="Privacy Policy"
        lede="How we handle your data across Opencrafts products."
      />

      <div className="mt-8 flex flex-wrap gap-3">
        <ButtonLink href={PDF}>Download PDF</ButtonLink>
      </div>

      <div className="border-line bg-surface mt-10 overflow-hidden rounded-card border">
        <object
          data={PDF}
          type="application/pdf"
          aria-label="Opencrafts privacy policy"
          className="h-[75vh] w-full"
        >
          <p className="p-8">
            Your browser can&rsquo;t display PDFs inline.{" "}
            <a href={PDF} className="font-bold underline underline-offset-4">
              Download the privacy policy
            </a>{" "}
            instead.
          </p>
        </object>
      </div>
    </Container>
  );
}
