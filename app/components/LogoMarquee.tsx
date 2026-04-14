"use client";

import React from "react";

const BRANDS = [
  "LEGO",
  "HASBRO",
  "MATTEL",
  "BANDAI",
  "NINTENDO",
  "HOT WHEELS",
  "BARBIE",
  "FISHER-PRICE",
  "PLAY-DOH",
  "NERF",
];

export default function LogoMarquee() {
  return (
    <div style={{
      width: "100%",
      padding: "3rem 0",
      background: "#ffffff",
      borderTop: "1px solid rgba(0,0,0,0.03)",
      borderBottom: "1px solid rgba(0,0,0,0.03)",
      overflow: "hidden",
      position: "relative",
      display: "flex",
      alignItems: "center"
    }}>
      {/* Soft gradient fades on the left and right edges for a premium feel */}
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        bottom: 0,
        width: "15vw",
        background: "linear-gradient(to right, #ffffff, transparent)",
        zIndex: 2,
        pointerEvents: "none"
      }} />
      <div style={{
        position: "absolute",
        right: 0,
        top: 0,
        bottom: 0,
        width: "15vw",
        background: "linear-gradient(to left, #ffffff, transparent)",
        zIndex: 2,
        pointerEvents: "none"
      }} />

      {/* Infinite scrolling container */}
      <div className="marquee-container">
        <div className="marquee-content">
          {[...BRANDS, ...BRANDS].map((brand, index) => (
            <div
              key={index}
              style={{
                fontSize: "1.75rem",
                fontWeight: 800,
                color: "#81a0c3", // Inverse on-surface muted blue from design system
                opacity: 0.6,
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                margin: "0 3rem",
                whiteSpace: "nowrap",
                fontFamily: "system-ui, sans-serif"
              }}
            >
              {brand}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .marquee-container {
          display: flex;
          width: fit-content;
          animation: scroll 40s linear infinite;
        }

        .marquee-content {
          display: flex;
          align-items: center;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            /* Since the content is exactly half the total width, translating by -50% creates a perfect loop */
            transform: translateX(-50%);
          }n
        }
      `}</style>
    </div>
  );
}
