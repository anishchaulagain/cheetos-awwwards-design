"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Overview", href: "#overview" },
    { label: "Craftsmanship", href: "#craftsmanship" },
    { label: "Movement", href: "#movement" },
    { label: "Materials", href: "#materials" },
    { label: "Specs", href: "#specs" },
  ];

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        display: "flex",
        justifyContent: "center",
        padding: scrolled ? "1.5rem 1rem" : "0",
        pointerEvents: "none",
        transition: "padding 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      <nav
        style={{
          height: scrolled ? "64px" : "80px",
          width: "100%",
          maxWidth: scrolled ? "1280px" : "100%", // max-w-7xl
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: scrolled ? "0 2rem" : "0 clamp(1.5rem, 4vw, 4rem)",
          transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
          background: scrolled ? "rgba(10, 10, 10, 0.6)" : "transparent",
          backdropFilter: scrolled ? "blur(32px) saturate(200%)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(32px) saturate(200%)" : "none",
          border: scrolled ? "1px solid rgba(255, 255, 255, 0.1)" : "1px solid transparent",
          borderBottom: !scrolled ? "1px solid rgba(255, 255, 255, 0.05)" : "1px solid rgba(255, 255, 255, 0.1)",
          borderRadius: scrolled ? "9999px" : "0", // Fully rounded capsule
          boxShadow: scrolled ? "0 10px 40px rgba(0, 0, 0, 0.3)" : "none",
          pointerEvents: "auto",
        }}
      >
        {/* Brand */}
        <a
          href="#"
          style={{
            fontSize: "1.2rem",
            fontWeight: 600,
            letterSpacing: "0.08em",
            color: "rgba(255,255,255,0.95)",
            textDecoration: "none",
            textTransform: "uppercase",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem"
          }}
        >
          <span style={{ 
            display: "inline-block", 
            width: "10px", 
            height: "10px", 
            background: "var(--accent)", 
            borderRadius: "50%",
            boxShadow: "0 0 10px var(--accent)"
          }}></span>
          Chrono X1
        </a>

        {/* Center Links — Desktop */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2.5rem",
          }}
          className="nav-links-desktop"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                fontSize: "0.85rem",
                fontWeight: 500,
                letterSpacing: "0.05em",
                color: "rgba(255,255,255,0.7)",
                textDecoration: "none",
                transition: "all 0.3s ease",
                textTransform: "uppercase",
                position: "relative",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "rgba(255,255,255,1)";
                e.currentTarget.style.textShadow = "0 0 8px rgba(255,255,255,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "rgba(255,255,255,0.7)";
                e.currentTarget.style.textShadow = "none";
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA — Desktop */}
        <a
          href="#discover"
          className="btn-primary nav-cta-desktop"
          style={{
            padding: "0.6rem 1.8rem",
            fontSize: "0.8rem",
            borderRadius: "9999px",
            background: "rgba(255, 255, 255, 0.05)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            color: "white",
            textDecoration: "none",
            transition: "all 0.3s ease",
            fontWeight: 500,
            textTransform: "uppercase",
            letterSpacing: "0.05em"
          }}
          onMouseEnter={(e) => {
             e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
             e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.2)";
          }}
          onMouseLeave={(e) => {
             e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
             e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
          }}
        >
          Order Now
        </a>

        {/* Mobile menu button */}
        <button
          className="nav-mobile-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          style={{
            display: "none",
            background: "rgba(255, 255, 255, 0.05)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "50%",
            cursor: "pointer",
            padding: "10px",
            transition: "all 0.3s ease"
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="rgba(255,255,255,0.9)"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {mobileOpen ? (
              <>
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="6" y1="18" x2="18" y2="6" />
              </>
            ) : (
              <>
                <line x1="4" y1="8" x2="20" y2="8" />
                <line x1="4" y1="16" x2="20" y2="16" />
              </>
            )}
          </svg>
        </button>

        {/* Mobile dropdown */}
        {mobileOpen && (
          <div
            className="nav-mobile-menu"
            style={{
              position: "absolute",
              top: "calc(100% + 1rem)",
              left: "1rem",
              right: "1rem",
              background: "rgba(10, 10, 10, 0.8)",
              backdropFilter: "blur(24px) saturate(200%)",
              WebkitBackdropFilter: "blur(24px) saturate(200%)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "24px",
              padding: "1.5rem 2rem",
              display: "flex",
              flexDirection: "column",
              gap: "1.25rem",
              boxShadow: "0 10px 40px rgba(0, 0, 0, 0.2)",
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  fontSize: "1rem",
                  fontWeight: 500,
                  color: "rgba(255,255,255,0.8)",
                  textDecoration: "none",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  padding: "0.5rem 0",
                  borderBottom: "1px solid rgba(255,255,255,0.05)"
                }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#discover"
              style={{
                padding: "1rem 1.5rem",
                fontSize: "0.9rem",
                fontWeight: 600,
                textAlign: "center",
                marginTop: "0.5rem",
                background: "white",
                color: "black",
                borderRadius: "9999px",
                textDecoration: "none",
                textTransform: "uppercase",
                letterSpacing: "0.05em"
              }}
              onClick={() => setMobileOpen(false)}
            >
              Order Now
            </a>
          </div>
        )}
      </nav>

      {/* Responsive styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          .nav-links-desktop {
            display: none !important;
          }
          .nav-cta-desktop {
            display: none !important;
          }
          .nav-mobile-toggle {
            display: block !important;
          }
        }
      `}</style>
    </div>
  );
}
