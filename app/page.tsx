"use client";

import Navbar from "./components/Navbar";
import ScrollCanvas from "./components/ScrollCanvas";
import LogoMarquee from "./components/LogoMarquee";
import CTASection from "./components/CTASection";
import SpecsSection from "./components/SpecsSection";
import ProductGrid from "./components/ProductGrid";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "var(--bg-primary)",
        position: "relative",
      }}
    >
      {/* Ambient radial glow */}
      <div className="radial-glow" />

      {/* Navigation */}
      <Navbar />

      {/* Scroll-linked image sequence + story overlays */}
      <ScrollCanvas />

      {/* Infinite scrolling brand logos */}
      <LogoMarquee />

      {/* Product Grid */}
      <ProductGrid />

      {/* Specifications */}
      <SpecsSection />

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
