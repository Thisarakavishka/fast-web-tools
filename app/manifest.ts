import { MetadataRoute } from "next";

import { SITE_CONFIG } from "../app/lib/metadata";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_CONFIG.name,

    short_name: SITE_CONFIG.shortName,

    description: SITE_CONFIG.description,

    start_url: "/",

    display: "standalone",

    background_color: "#ffffff",

    theme_color: "#000000",

    orientation: "portrait",

    lang: "en",

    scope: "/",

    categories: ["developer", "productivity", "utilities"],

    icons: [
      {
        src: "/icons/icon-192.png",

        sizes: "192x192",

        type: "image/png",
      },

      {
        src: "/icons/icon-512.png",

        sizes: "512x512",

        type: "image/png",
      },

      {
        src: "/icons/maskable-icon-512.png",

        sizes: "512x512",

        type: "image/png",

        purpose: "maskable",
      },
    ],
  };
}
