"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { nav, site } from "@/content/site";
import { Container } from "./primitives";

export function Header() {
  const pathname = usePathname();
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Open state is scoped to the route it was opened on, so navigating closes
  // the menu as a consequence of the path changing. Derived rather than an
  // effect calling setState, which would trigger a cascading re-render.
  const [openAt, setOpenAt] = useState<string | null>(null);
  const open = openAt === pathname;
  const setOpen = (next: boolean) => setOpenAt(next ? pathname : null);

  // Escape closes and returns focus to the toggle.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenAt(null); // the state setter, not the wrapper — stable identity
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href: string) => pathname.startsWith(href.replace(/\/$/, ""));

  return (
    <header className="border-line bg-paper/85 sticky top-0 z-40 border-b backdrop-blur">
      <Container>
        <div className="flex h-16 items-center gap-6">
          <Link
            href="/"
            className="mr-auto flex items-center gap-2.5 font-display text-lg"
          >
            <Image
              src="/images/logo.png"
              alt=""
              width={32}
              height={32}
              priority
              className="h-8 w-8"
            />
            <span>{site.name}</span>
          </Link>

          <nav aria-label="Main" className="hidden items-center gap-7 md:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={
                  isActive(item.href)
                    ? "text-ink font-bold"
                    : "text-subtle hover:text-ink transition-colors"
                }
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact/"
              className="bg-ink text-paper hover:bg-ink-soft rounded-card px-4 py-2 text-sm font-bold transition-colors"
            >
              Start a project
            </Link>
          </nav>

          <button
            ref={toggleRef}
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="border-line hover:border-ink -mr-1 rounded-md border p-2 transition-colors md:hidden"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
              {open ? (
                <path
                  d="M5 5l10 10M15 5L5 15"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M3 6h14M3 10h14M3 14h14"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </Container>

      {open ? (
        <nav
          id="mobile-nav"
          aria-label="Main"
          className="border-line bg-paper border-t md:hidden"
        >
          <Container>
            <ul className="flex flex-col py-2">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className="border-line hover:text-subtle block border-b py-3.5 text-lg font-bold transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact/"
                  className="block py-3.5 text-lg font-bold"
                >
                  Start a project
                </Link>
              </li>
            </ul>
          </Container>
        </nav>
      ) : null}
    </header>
  );
}
