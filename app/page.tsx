import Hero from "./components/hero/Hero";
import ToolsPreview from "./components/common/ToolsPreview";
import Features from "./components/hero/Features";
import CTA from "./components/hero/CTA";
import Footer from "./components/common/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <ToolsPreview />
      <Features />
      <CTA />
      <Footer />
    </>
  );
}
