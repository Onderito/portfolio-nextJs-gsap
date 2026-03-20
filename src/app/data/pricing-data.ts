// @/app/data/pricing-data.ts
import type { Locale } from "../i18n/locales";

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

const pricingTiersByLocale: Record<Locale, PricingTier[]> = {
  fr: [
    {
      title: "Essentiel",
      duration: "1 semaine",
      description:
        "Une landing page à fort impact, pensée pour convertir et être mise en ligne rapidement.",
      price: "900€",
      ctaText: "Réserve ton appel",
      featured: false,
      accentColor: "#9FB3D9",
      features: [
        { text: "1 page", highlighted: true },
        { text: "Design responsive" },
        { text: "SEO prêt" },
        { text: "Performance" },
        { text: "Animations fluides", highlighted: true },
        { text: "Mise en ligne incluse" },
      ],
    },
    {
      title: "Refonte",
      duration: "1 semaine",
      description:
        "Modernisation de votre site existant pour améliorer la clarté, l’UX et la crédibilité.",
      price: "1200€",
      ctaText: "Réserve ton appel",
      featured: false,
      accentColor: "#C4C4C4",
      features: [
        { text: "Refresh UX & UI", highlighted: true },
        { text: "On garde votre contenu existant" },
        { text: "Corrections responsive" },
        { text: "Optimisation performance" },
        { text: "Nettoyage SEO", highlighted: true },
        { text: "Mise en ligne incluse" },
      ],
    },
    {
      title: "Site complet",
      duration: "2–3 semaines",
      description:
        "Un site multi-pages complet, design cohérent et animations avancées incluses.",
      price: "1800€",
      ctaText: "Réserve ton appel",
      featured: true,
      accentColor: "#E0C27A",
      features: [
        { text: "Multi-pages (5–6 pages)", highlighted: true },
        { text: "Design responsive" },
        { text: "SEO prêt" },
        { text: "Performance" },
        { text: "Animations avancées", highlighted: true },
        { text: "Mise en ligne incluse" },
      ],
    },
  ],
  en: [
    {
      title: "One",
      duration: "1 week",
      description:
        "A high-impact single-page website designed to convert, impress, and launch fast.",
      price: "900€",
      ctaText: "Schedule your call",
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
      title: "Rework",
      duration: "1 week",
      description:
        "A modern refresh of your existing site to improve clarity, UX, and overall polish.",
      price: "1200€",
      ctaText: "Schedule your call",
      featured: false,
      accentColor: "#C4C4C4",
      features: [
        { text: "UX & UI refresh", highlighted: true },
        { text: "Keep your existing content" },
        { text: "Responsive fixes" },
        { text: "Performance pass" },
        { text: "SEO cleanup", highlighted: true },
        { text: "Launch Included" },
      ],
    },
    {
      title: "Suite",
      duration: "2-3 weeks",
      description:
        "A complete multi-page website with cohesive design and advanced animations.",
      price: "1800€",
      ctaText: "Schedule your call",
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
  ],
};

export function getPricingTiers(locale: Locale): PricingTier[] {
  return pricingTiersByLocale[locale];
}
