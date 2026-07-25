import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/primitives";
import { site } from "@/content/site";

/**
 * Legacy path kept so existing inbound links and bookmarks still resolve. The
 * canonical tag points at `/` so ranking consolidates on one URL rather than
 * splitting across two.
 *
 * Static export cannot emit HTTP redirects, hence the meta refresh.
 */
export const metadata: Metadata = {
  title: "Home",
  alternates: { canonical: "/" },
  robots: { index: false, follow: true },
  other: { refresh: "0; url=/" },
};

export default function HomeRedirect() {
  return (
    <Container className="py-24">
      <h1 className="text-3xl">Redirecting…</h1>
      <p className="text-ink-soft mt-4">
        {site.name} now lives at{" "}
        <Link href="/" className="font-bold underline underline-offset-4">
          opencrafts.io
        </Link>
        .
      </p>
    </Container>
  );
}
