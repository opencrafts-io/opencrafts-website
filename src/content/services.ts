/** Services and pricing. All figures in KES. */

export interface PricingTier {
  name: string;
  /** Monthly fee in KES. */
  fee: number;
  /** SMS included per month. 0 means pay as you go. */
  included: number;
  /** Overage cost per SMS in KES. */
  perSMS: number;
}

export interface Service {
  id: string;
  title: string;
  overview: string;
  description: string;
  accent: string;
  /** Shown above the pricing table when access is not self-serve. */
  accessNote?: string;
  features: string[];
  pricing: {
    setupFee: number;
    tiers: PricingTier[];
  };
}

export const services: Service[] = [
  {
    id: "sms-backend-api",
    title: "SMS Backend API",
    overview:
      "Reliable transactional and marketing SMS infrastructure for your business.",
    description:
      "Our SMS Backend API allows businesses to send bulk or individual SMS messages programmatically. It allows for seamless integration into your existing CRM or ERP systems with high throughput and low latency.",
    accent: "sms",
    accessNote:
      "The API currently runs Academia's messaging. We open it to other businesses on request rather than self-serve, so talk to us first and we'll get you set up.",
    features: [
      "High-speed Bulk SMS sending",
      "Transactional API (OTP, Alerts)",
      "Real-time delivery reports",
      "Sender ID Customization",
    ],
    pricing: {
      setupFee: 30000,
      tiers: [
        { name: "Standard", fee: 5000, included: 0, perSMS: 0.85 },
        { name: "Professional", fee: 15000, included: 20000, perSMS: 0.75 },
        { name: "Enterprise", fee: 40000, included: 100000, perSMS: 0.6 },
      ],
    },
  },
];

/** Client-work capabilities, shown on both the home and services pages. */
export const capabilities = [
  {
    title: "Custom Software",
    blurb:
      "We design custom-built software tailored to your organization's specific goals and processes. From student apps to business platforms, our solutions are intuitive, scalable, and built to drive long-term growth.",
  },
  {
    title: "Cloud Integration",
    blurb:
      "Connect your systems and data securely in the cloud. Our integrations enable remote access, improved collaboration, and cost-effective scalability. Ideal for schools, students, and fast-growing teams.",
  },
  {
    title: "Maintenance & Support",
    blurb:
      "We provide continuous support and proactive maintenance to keep your software secure, updated, and optimized. From fixing bugs to evolving your features, we ensure your solution keeps up with your users and your mission.",
  },
];

/** KES, whole shillings. */
export const kes = (n: number) => `KES ${n.toLocaleString("en-KE")}`;

/** KES with 2 decimals, for per-SMS rates. */
export const kesPrecise = (n: number) =>
  `KES ${n.toLocaleString("en-KE", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
