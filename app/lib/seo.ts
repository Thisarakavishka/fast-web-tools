import { Metadata } from "next";
import { SITE_CONFIG } from "./metadata";

interface ToolMetadataProps {
  title: string;

  description: string;

  path: string;

  keywords?: string[];
}

export function createToolMetadata({
  title,
  description,
  path,
  keywords = [],
}: ToolMetadataProps): Metadata {
  const url = `${SITE_CONFIG.url}${path}`;

  return {
    title,

    description,

    keywords: [...SITE_CONFIG.keywords, ...keywords],

    alternates: {
      canonical: url,
    },

    openGraph: {
      type: "website",

      url,

      title,

      description,

      siteName: SITE_CONFIG.name,

      images: [
        {
          url: SITE_CONFIG.ogImage,

          width: 1200,

          height: 630,

          alt: title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",

      title,

      description,

      images: [SITE_CONFIG.ogImage],
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}
