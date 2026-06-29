import "./globals.css";
import Navbar from "./components/common/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Background */}
        <div className="animated-bg" />

        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
