import { MetadataRoute } from "next";

import { SITE_CONFIG } from "../app/lib/metadata";

const toolRoutes = [
  "/",

  "/tools",

  "/tools/word-counter",

  "/tools/json-formatter",

  "/tools/base64",

  "/tools/jwt",

  "/tools/regex",

  "/tools/uuid",

  "/tools/hash-generator",

  "/tools/url-encoder",

  "/about",

  "/privacy",

  "/terms",

  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return toolRoutes.map((route) => ({
    url: `${SITE_CONFIG.url}${route}`,

    lastModified: now,

    changeFrequency: route === "/" ? "daily" : "weekly",

    priority:
      route === "/"
        ? 1
        : route === "/tools"
          ? 0.95
          : route.startsWith("/tools/")
            ? 0.9
            : 0.7,
  }));
}
