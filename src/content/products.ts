/**
 * The product catalogue. Drives the products index, the per-product pages,
 * the home page grid and the footer.
 *
 * Two tiers:
 *   "product"  — things a customer uses or buys directly
 *   "platform" — services that sit underneath Academia
 *
 * Copy is derived from each repository's own README. Worth a read-through
 * before launch, but the facts come from the source.
 */

export type ProductSlug =
  | "rizzit"
  | "academia"
  | "chirp"
  | "sms"
  | "verisafe"
  | "veribroke"
  | "sherehe"
  | "magnet";

export type Tier = "product" | "platform";

export interface Product {
  slug: ProductSlug;
  name: string;
  tier: Tier;
  category: string;
  /** One line, used on cards and the products index. */
  blurb: string;
  /** Two or three sentences, used on the product page. */
  description: string;
  /** Tailwind token name — maps to --color-<slug> in globals.css. */
  accent: string;
  /** Public repository, where there is one. */
  repo?: string;
  /** Live product URL, if it has one. */
  href?: string;
  stack?: string;
  license?: string;
  /** Product mascot or logo, served from public/images/products. */
  image?: string;
  /** App store listings, for products shipped as mobile apps. */
  stores?: { ios?: string; android?: string };
  /**
   * "general"    — anyone can sign up or download
   * "on-request" — we onboard customers case by case rather than self-serve
   */
  availability?: "general" | "on-request";
  features: string[];
}

export const products: Product[] = [
  {
    slug: "rizzit",
    name: "Rizzit",
    tier: "product",
    category: "Compliance",
    blurb: "Every receipt, defended.",
    description:
      "Rizzit checks every receipt against KRA eTIMS in real time, so disallowed expenses and fraudulent transactions surface before they cost you a deduction. Field teams capture receipts on a phone; accountants see the whole picture from one panel.",
    accent: "rizzit",
    href: "https://rizzit.cloud",
    image: "/images/products/rizzit-happy.webp",
    stack: "Closed source",
    features: [
      "Real-time eTIMS QR code validation",
      "Mobile receipt capture from the field",
      "Fraud detection and leakage analytics",
      "Accountant control panel with exports",
    ],
  },
  {
    slug: "academia",
    name: "Academia",
    tier: "product",
    category: "Campus",
    blurb: "If school's meh, Academia's yeah.",
    description:
      "Academia is our student app: coursework, exam timetables, campus events and payments in one place. It is the platform the rest of our services are built to support.",
    accent: "academia",
    repo: "https://github.com/opencrafts-io/academia",
    stack: "Flutter",
    image: "/images/products/academia.webp",
    stores: {
      ios: "https://apps.apple.com/us/app/academia-for-campus-students/id6753922995",
      android:
        "https://play.google.com/store/apps/details?id=io.opencrafts.academia",
    },
    features: [
      "Coursework and deadline tracking",
      "Exam timetables pulled straight from the institution",
      "Campus events and ticketing",
      "In-app payments to campus merchants",
    ],
  },
  {
    slug: "chirp",
    name: "Chirp",
    tier: "product",
    category: "Social",
    blurb:
      "Short-form social for communities that want their own room, not a public timeline.",
    description:
      "Chirp is a social platform built around groups rather than a global feed. Posts are short, communities run themselves with role-based permissions, and direct messages stay private.",
    accent: "chirp",
    repo: "https://github.com/opencrafts-io/chirp_backend",
    stack: "Django REST Framework · PostgreSQL",
    features: [
      "Short-form posts with character limits",
      "Communities with role-based access and invitations",
      "Direct messaging with privacy controls",
      "JWT authentication",
    ],
  },
  {
    slug: "sms",
    name: "SMS",
    tier: "product",
    category: "API",
    blurb: "The messaging layer behind Academia, opened up on request.",
    description:
      "The SMS Backend API handles every OTP, alert and bulk send across Academia — proven at campus scale before anyone else touches it. We open it to other businesses on request rather than as self-serve signup, so each integration gets set up properly and supported.",
    accent: "sms",
    image: "/images/products/sms.webp",
    stack: "Closed source",
    availability: "on-request",
    features: [
      "High-speed bulk SMS sending",
      "Transactional API for OTPs and alerts",
      "Real-time delivery reports",
      "Sender ID customisation",
    ],
  },
  {
    slug: "verisafe",
    name: "Verisafe",
    tier: "platform",
    category: "Identity",
    blurb: "Authentication built for humans, not pure profits.",
    description:
      "Verisafe handles sign-in, sessions and permissions across Academia and everything connected to it. One account carries a student through the whole platform.",
    accent: "verisafe",
    image: "/images/products/verisafe.webp",
    repo: "https://github.com/opencrafts-io/verisafe",
    stack: "Go",
    license: "Apache-2.0",
    features: [
      "Single sign-on across the Academia platform",
      "Session and device management",
      "Role and permission handling",
    ],
  },
  {
    slug: "veribroke",
    name: "Veribroke",
    tier: "platform",
    category: "Payments",
    blurb: "The payment gateway connecting Academia to merchants.",
    description:
      "Veribroke brokers transactions between Academia and merchant systems, so purchases and disbursements settle without a student ever leaving the app.",
    accent: "veribroke",
    repo: "https://github.com/opencrafts-io/veribroke",
    stack: "Python",
    features: [
      "Merchant integration for campus vendors",
      "In-app purchases and disbursements",
      "Transaction records tied to a student account",
    ],
  },
  {
    slug: "sherehe",
    name: "Sherehe",
    tier: "platform",
    category: "Events",
    blurb: "The events service behind everything happening on campus.",
    description:
      "Sherehe is the events API for Academia — a REST service over PostgreSQL covering how campus events get created, listed and managed.",
    accent: "sherehe",
    repo: "https://github.com/opencrafts-io/sherehe",
    stack: "Express · PostgreSQL",
    features: [
      "REST API with full CRUD over events",
      "PostgreSQL storage",
      "Covered by an automated test suite",
    ],
  },
  {
    slug: "magnet",
    name: "Magnet",
    tier: "platform",
    category: "Data",
    blurb: "One interface for student data, whatever shape the institution keeps it in.",
    description:
      "Magnet feeds student records into Academia through a single interface, so data from different institutions arrives in one consistent shape.",
    accent: "magnet",
    repo: "https://github.com/opencrafts-io/magnet",
    stack: "Dart",
    license: "GPL-3.0",
    features: [
      "Single interface over varied institution systems",
      "Normalised student records",
      "Feeds the Academia platform directly",
    ],
  },
];

export const tierProducts = products.filter((p) => p.tier === "product");
export const tierPlatform = products.filter((p) => p.tier === "platform");

export const getProduct = (slug: string): Product | undefined =>
  products.find((p) => p.slug === slug);
