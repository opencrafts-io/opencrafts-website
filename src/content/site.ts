/**
 * Site-wide constants.
 *
 * Two names, used deliberately:
 *   `name`      — display spelling, used in the header, nav and body copy
 *   `legalName` — full registered name, used in the copyright line, structured
 *                 data and anywhere the company is named officially
 * Both spellings appear in `searchTerms` so either one finds the site.
 */
export const site = {
  name: "Opencrafts",
  legalName: "Open Crafts Interactive",
  url: "https://opencrafts.io",
  tagline: "We build the software Kenyan teams actually use",
  description:
    "Open Crafts Interactive is a Nairobi software studio building receipt compliance, campus and messaging products — Rizzit, Academia, Chirp and the SMS API.",
  email: "info@opencrafts.io",
  salesEmail: "operations@opencrafts.io",
  founded: 2025,
  searchTerms: [
    "Open Crafts Interactive",
    "Opencrafts",
    "Open Crafts",
    "opencrafts.io",
  ],
} as const;

export const socials = [
  { name: "GitHub", href: "https://github.com/opencrafts-io" },
  { name: "Instagram", href: "https://www.instagram.com/opencrafts.io" },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/opencrafts-io-a10339368/",
  },
  // X omitted until there is a real profile URL to point at.
] as const;

export const nav = [
  { label: "Products", href: "/products/" },
  { label: "Services", href: "/services/" },
  { label: "About", href: "/about/" },
] as const;
