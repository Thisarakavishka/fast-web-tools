import { SITE_CONFIG } from "./metadata";

export interface FAQItem {
  question: string;
  answer: string;
}

interface SoftwareApplicationProps {
  name: string;
  description: string;
  url: string;
  category?: string;
}

interface BreadcrumbItem {
  name: string;
  url: string;
}

/**
 * Website Schema
 */
export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",

    name: SITE_CONFIG.name,

    url: SITE_CONFIG.url,

    description: SITE_CONFIG.description,

    inLanguage: "en",

    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
    },
  };
}

/**
 * Organization Schema
 */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",

    name: SITE_CONFIG.name,

    url: SITE_CONFIG.url,

    logo: `${SITE_CONFIG.url}/logo.png`,
  };
}

/**
 * Software Application Schema
 */
export function softwareApplicationSchema({
  name,
  description,
  url,
  category = "DeveloperApplication",
}: SoftwareApplicationProps) {
  return {
    "@context": "https://schema.org",

    "@type": "SoftwareApplication",

    name,

    applicationCategory: category,

    operatingSystem: "Any",

    isAccessibleForFree: true,

    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },

    description,

    url,
  };
}

/**
 * FAQ Schema
 */
export function faqSchema(items: FAQItem[]) {
  return {
    "@context": "https://schema.org",

    "@type": "FAQPage",

    mainEntity: items.map((item) => ({
      "@type": "Question",

      name: item.question,

      acceptedAnswer: {
        "@type": "Answer",

        text: item.answer,
      },
    })),
  };
}

/**
 * Breadcrumb Schema
 */
export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",

    "@type": "BreadcrumbList",

    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",

      position: index + 1,

      name: item.name,

      item: item.url,
    })),
  };
}
