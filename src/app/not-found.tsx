import { ButtonLink, Container } from "@/components/primitives";

/** Builds to out/404.html, which GitHub Pages serves for unmatched paths. */
export default function NotFound() {
  return (
    <Container className="py-24 sm:py-32">
      <p className="eyebrow text-subtle mb-3">404</p>
      <h1 className="text-4xl sm:text-5xl">This page doesn&rsquo;t exist</h1>
      <p className="text-ink-soft mt-5 max-w-md text-lg">
        The link may be out of date, or we may have moved something. The
        products are all still here.
      </p>
      <div className="mt-9 flex flex-wrap gap-3">
        <ButtonLink href="/">Back to home</ButtonLink>
        <ButtonLink href="/products/" variant="secondary">
          Browse products
        </ButtonLink>
      </div>
    </Container>
  );
}
