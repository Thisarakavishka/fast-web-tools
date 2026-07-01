import { Metadata } from "next";

export const SITE_CONFIG = {
  name: "FastWebTools",
  shortName: "FastWebTools",
  description:
    "FastWebTools provides free online developer tools including JSON Formatter, Base64 Encoder, JWT Decoder, Regex Tester, UUID Generator, Hash Generator, URL Encoder and more.",

  url: "https://fastwebtools.dev",

  ogImage: "/og-image.png",

  creator: "FastWebTools",

  keywords: [
    "Developer Tools",
    "Online Tools",
    "JSON Formatter",
    "Base64 Encoder",
    "JWT Decoder",
    "Regex Tester",
    "UUID Generator",
    "Hash Generator",
    "URL Encoder",
    "Word Counter",
  ],
};

export const defaultMetadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),

  title: {
    default: SITE_CONFIG.name,
    template: `%s | ${SITE_CONFIG.name}`,
  },

  description: SITE_CONFIG.description,

  keywords: SITE_CONFIG.keywords,

  applicationName: SITE_CONFIG.name,

  authors: [
    {
      name: SITE_CONFIG.creator,
    },
  ],

  creator: SITE_CONFIG.creator,

  publisher: SITE_CONFIG.creator,

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: SITE_CONFIG.url,
  },

  openGraph: {
    type: "website",

    locale: "en_US",

    url: SITE_CONFIG.url,

    title: SITE_CONFIG.name,

    description: SITE_CONFIG.description,

    siteName: SITE_CONFIG.name,

    images: [
      {
        url: SITE_CONFIG.ogImage,

        width: 1200,

        height: 630,

        alt: SITE_CONFIG.name,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: SITE_CONFIG.name,

    description: SITE_CONFIG.description,

    images: [SITE_CONFIG.ogImage],
  },

  icons: {
    icon: "/favicon.ico",

    shortcut: "/favicon.ico",

    apple: "/apple-touch-icon.png",
  },
};
