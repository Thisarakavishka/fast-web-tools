import type { Metadata } from "next";
import "./globals.css";

import Navbar from "./components/common/Navbar";
import { defaultMetadata } from "../app/lib/metadata";

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <div className="animated-bg" />

        <Navbar />

        <main>{children}</main>
      </body>
    </html>
  );
}
