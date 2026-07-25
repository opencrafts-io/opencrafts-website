import Link from "next/link";
import { site, socials, nav } from "@/content/site";
import { tierProducts, tierPlatform } from "@/content/products";
import { Container, ExternalLink } from "./primitives";

export function Footer() {
  return (
    <footer className="border-line bg-band mt-auto border-t">
      <Container>
        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <p className="font-display text-lg">{site.name}</p>
            <p className="text-ink-soft mt-3 max-w-xs">{site.tagline}.</p>
            <a
              href={`mailto:${site.email}`}
              className="mt-5 inline-block font-bold underline underline-offset-4"
            >
              {site.email}
            </a>
          </div>

          <nav aria-label="Products">
            <h2 className="eyebrow text-subtle mb-4">Products</h2>
            <ul className="flex flex-col gap-2.5">
              {tierProducts.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/products/${p.slug}/`}
                    className="text-ink-soft hover:text-ink transition-colors"
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Platform">
            <h2 className="eyebrow text-subtle mb-4">Platform</h2>
            <ul className="flex flex-col gap-2.5">
              {tierPlatform.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/products/${p.slug}/`}
                    className="text-ink-soft hover:text-ink transition-colors"
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Company">
            <h2 className="eyebrow text-subtle mb-4">Company</h2>
            <ul className="flex flex-col gap-2.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-ink-soft hover:text-ink transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/policy/"
                  className="text-ink-soft hover:text-ink transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="border-line text-subtle flex flex-wrap items-center gap-x-6 gap-y-3 border-t py-6 text-sm">
          <p>
            © {new Date().getFullYear()} {site.legalName}
          </p>
          <ul className="flex gap-5 sm:ml-auto">
            {socials.map((s) => (
              <li key={s.name}>
                <ExternalLink
                  href={s.href}
                  className="hover:text-ink transition-colors"
                >
                  {s.name}
                </ExternalLink>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
