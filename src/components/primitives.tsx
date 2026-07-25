import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

/** Page gutter. One place to change the site's measure. */
export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}

/**
 * A page section. Sets vertical rhythm and an optional banded ground, but
 * never a height — padding scales with the breakpoint and content decides the
 * rest.
 */
export function Section({
  children,
  band = false,
  className = "",
  ...rest
}: { children: ReactNode; band?: boolean; className?: string } & ComponentProps<"section">) {
  return (
    <section
      className={`py-16 sm:py-20 lg:py-28 ${band ? "bg-band" : ""} ${className}`}
      {...rest}
    >
      <Container>{children}</Container>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="eyebrow text-subtle mb-3">{children}</p>;
}

export function SectionHeading({
  eyebrow,
  title,
  lede,
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
}) {
  return (
    <header className="max-w-2xl">
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 className="text-3xl sm:text-4xl">{title}</h2>
      {lede ? <p className="text-ink-soft mt-4 text-lg">{lede}</p> : null}
    </header>
  );
}

type ButtonLinkProps = {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary";
  className?: string;
};

/** Renders as `Link` for internal routes and `a` for external and mailto. */
export function ButtonLink({
  children,
  href,
  variant = "primary",
  className = "",
}: ButtonLinkProps) {
  const base =
    "inline-flex items-center justify-center rounded-card px-6 py-3 font-bold transition-colors";
  const styles =
    variant === "primary"
      ? "bg-ink text-paper hover:bg-ink-soft"
      : "border border-line bg-surface text-ink hover:border-ink";

  const external = href.startsWith("http") || href.startsWith("mailto:");
  if (external) {
    return (
      <a
        href={href}
        className={`${base} ${styles} ${className}`}
        {...(href.startsWith("http")
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {children}
    </Link>
  );
}

/** Outbound link, always with `rel="noopener noreferrer"`. */
export function ExternalLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}
