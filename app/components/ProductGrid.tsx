"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const products = [
  {
    id: 1,
    name: "AX1 Stealth",
    description: "Matte black titanium case with a skeletonized dial.",
    price: "$12,500",
    color: "rgba(255, 255, 255, 0.03)",
    glow: "rgba(255, 255, 255, 0.15)",
  },
  {
    id: 2,
    name: "Oceanic Blue",
    description: "Deep sea blue ceramic bezel with a sunburst dial.",
    price: "$14,200",
    color: "rgba(0, 180, 255, 0.03)",
    glow: "rgba(0, 180, 255, 0.3)",
  },
  {
    id: 3,
    name: "Rose Gold Apex",
    description: "18k Rose gold accents with carbon fiber composite.",
    price: "$18,900",
    color: "rgba(255, 120, 50, 0.03)",
    glow: "rgba(255, 120, 50, 0.3)",
  },
];

export default function ProductGrid() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  return (
    <section
      id="products"
      style={{
        padding: "8rem 2rem",
        background: "var(--bg-primary, #0A0A0A)",
        position: "relative",
        zIndex: 10,
      }}
    >
      <div
        ref={containerRef}
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ textAlign: "center", marginBottom: "5rem" }}
        >
          <div style={{ color: "#00D6FF", fontSize: "0.875rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem" }}>
            The Collection
          </div>
          <h2 style={{ fontSize: "3rem", fontWeight: 300, letterSpacing: "-0.02em", margin: 0, color: "#fff" }}>
            Curated Excellence.
          </h2>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2.5rem",
          }}
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 + 0.2, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{
                y: -10,
                borderColor: product.glow,
                boxShadow: `0 20px 40px -10px ${product.glow}`,
                transition: { duration: 0.4, ease: "easeOut" }
              }}
              style={{
                position: "relative",
                background: product.color,
                border: "1px solid rgba(255, 255, 255, 0.05)",
                borderRadius: "24px",
                padding: "3rem 2rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                overflow: "hidden",
                cursor: "pointer",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
              }}
            >
              {/* Abstract decorative element in place of product image */}
              <motion.div
                className="product-abstract-circle"
                style={{
                  width: "140px",
                  height: "140px",
                  borderRadius: "50%",
                  background: `linear-gradient(135deg, ${product.glow}, transparent)`,
                  marginBottom: "2.5rem",
                  boxShadow: `inset 0 0 30px ${product.color}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative"
                }}
                whileHover={{ rotate: 180, scale: 1.05 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              >
                <div style={{
                  width: "70%",
                  height: "70%",
                  borderRadius: "50%",
                  background: "var(--bg-primary, #0A0A0A)",
                  opacity: 0.8
                }} />
              </motion.div>

              <h3 style={{ fontSize: "1.5rem", fontWeight: 400, color: "#fff", marginBottom: "1rem", letterSpacing: "0.02em" }}>
                {product.name}
              </h3>
              <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.6, marginBottom: "2.5rem", flexGrow: 1 }}>
                {product.description}
              </p>
              
              <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                borderTop: "1px solid rgba(255,255,255,0.1)",
                paddingTop: "1.5rem"
              }}>
                <span style={{ fontSize: "1.25rem", color: "rgba(255,255,255,0.9)", fontWeight: 400, letterSpacing: "0.05em" }}>
                  {product.price}
                </span>
                <motion.button
                  whileHover={{ scale: 1.05, background: "rgba(255,255,255,1)", color: "#000" }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    color: "#fff",
                    padding: "0.6rem 1.2rem",
                    borderRadius: "50px",
                    fontSize: "0.8rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    cursor: "pointer",
                    transition: "background 0.3s ease, color 0.3s ease"
                  }}
                >
                  Explore
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
