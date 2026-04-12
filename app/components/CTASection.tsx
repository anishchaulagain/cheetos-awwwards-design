"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section
      id="discover"
      ref={sectionRef}
      style={{
        position: "relative",
        padding: "10rem 2rem 8rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        background: "#FFFFFF",
        overflow: "hidden",
      }}
    >
      {/* Background glow - softened for light theme */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "600px",
          background:
            "radial-gradient(ellipse at center, rgba(0,80,255,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        style={{ position: "relative", zIndex: 1, maxWidth: "700px" }}
      >
        <div className="caption" style={{ marginBottom: "1.5rem", color: "#0050FF" }}>
          The Complete Experience
        </div>

        <h2
          className="heading-lg"
          style={{
            marginBottom: "1.5rem",
            color: "#050505",
            textShadow: "none",
          }}
        >
          Every second, elevated.
        </h2>

        <p
          className="body-text"
          style={{
            marginBottom: "3rem",
            maxWidth: "480px",
            margin: "0 auto 3rem",
            color: "rgba(0,0,0,0.7)",
          }}
        >
          Built with purpose. Designed for legacy. The ANISH Chrono X1
          represents the pinnacle of mechanical watchmaking — where engineering
          precision meets timeless design.
        </p>

        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a href="#" className="btn-primary">
            <span>Discover the Watch</span>
          </a>
          <a 
            href="#specs" 
            className="btn-secondary"
            style={{ 
              borderColor: "rgba(0,0,0,0.15)", 
              color: "#050505"
            }}
          >
            View Specifications
          </a>
        </div>
      </motion.div>
    </section>
  );
}
