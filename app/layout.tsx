import type { Metadata } from "next";
import "./globals.css";

import Navbar from "./components/common/Navbar";
import { defaultMetadata } from "./lib/metadata";
import WebsiteSchema from "./components/seo/WebsiteSchema";
import OrganizationSchema from "./components/seo/OrganizationSchema";
import GoogleAnalytics from "./components/analytics/GoogleAnalytics";

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <GoogleAnalytics />
        <WebsiteSchema />
        <OrganizationSchema />

        <div className="animated-bg" />

        <Navbar />

        <main>{children}</main>
      </body>
    </html>
  );
}
