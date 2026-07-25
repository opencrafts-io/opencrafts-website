"use client";

import { Suspense, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import posthog from "posthog-js";

const KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY;
const HOST = process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://eu.i.posthog.com";

/**
 * App Router client navigations do not trigger PostHog's automatic pageview
 * capture, so each route change is sent explicitly. `capture_pageview` is
 * disabled to stop the initial load being counted twice.
 */
function PageViews() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!KEY) return;
    const query = searchParams.toString();
    posthog.capture("$pageview", {
      $current_url: window.origin + pathname + (query ? `?${query}` : ""),
    });
  }, [pathname, searchParams]);

  return null;
}

export function Analytics() {
  useEffect(() => {
    // Without a key configured, analytics stays off rather than failing loudly.
    if (!KEY) return;
    posthog.init(KEY, {
      api_host: HOST,
      capture_pageview: false,
      capture_pageleave: true,
      persistence: "localStorage+cookie",
    });
  }, []);

  // useSearchParams suspends during prerender, so it needs its own boundary.
  return (
    <Suspense fallback={null}>
      <PageViews />
    </Suspense>
  );
}
