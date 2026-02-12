// @/app/data/pricing-data.ts
export interface Feature {
  text: string;
  highlighted?: boolean;
}

export interface PricingTier {
  title: string;
  duration: string;
  description: string;
  price: string;
  ctaText: string;
  featured: boolean;
  accentColor: string;
  features: Feature[];
}

export const pricingTiers: PricingTier[] = [
  {
    title: "Landing Page",
    duration: "1 week",
    description:
      "A high-impact single-page website designed to convert, impress, and launch fast.",
    price: "700€",
    ctaText: "Schedule a call",
    featured: false,
    accentColor: "#9FB3D9",
    features: [
      { text: "1 page", highlighted: true },
      { text: "Responsive Design" },
      { text: "SEO Ready" },
      { text: "Fast Loading" },
      { text: "Smooth Animations", highlighted: true },
      { text: "Launch Included" },
    ],
  },
  {
    title: "Multi Page Website",
    duration: "2-3 weeks",
    description:
      "A complete multi-page website with cohesive design and advanced animations.",
    price: "1800€",
    ctaText: "Schedule a call",
    featured: true,
    accentColor: "#E0C27A",
    features: [
      { text: "Multi-page (5-6 pages)", highlighted: true },
      { text: "Responsive Design" },
      { text: "SEO Ready" },
      { text: "Fast Loading" },
      { text: "Advanced Animations", highlighted: true },
      { text: "Launch Included" },
    ],
  },
];
