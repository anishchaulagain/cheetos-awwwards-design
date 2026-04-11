"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const products = [
  {
    id: 1,
    name: "AX1 Stealth",
    description: "Matte black titanium case with a skeletonized dial.",
    price: "$12,500",
    color: "rgba(0, 0, 0, 0.03)",
    glow: "rgba(0, 0, 0, 0.1)",
  },
  {
    id: 2,
    name: "Oceanic Blue",
    description: "Deep sea blue ceramic bezel with a sunburst dial.",
    price: "$14,200",
    color: "rgba(0, 120, 255, 0.04)",
    glow: "rgba(0, 120, 255, 0.2)",
  },
  {
    id: 3,
    name: "Rose Gold Apex",
    description: "18k Rose gold accents with carbon fiber composite.",
    price: "$18,900",
    color: "rgba(255, 80, 0, 0.04)",
    glow: "rgba(255, 80, 0, 0.2)",
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
        background: "var(--bg-primary-light, #F8F9FA)",
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
          <div style={{ color: "#007BFF", fontSize: "0.875rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem", fontWeight: 600 }}>
            The Collection
          </div>
          <h2 style={{ fontSize: "3rem", fontWeight: 400, letterSpacing: "-0.02em", margin: 0, color: "#111" }}>
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
                borderColor: "rgba(0,0,0,0.15)",
                boxShadow: `0 20px 40px -10px ${product.glow}`,
                transition: { duration: 0.4, ease: "easeOut" }
              }}
              style={{
                position: "relative",
                background: "#ffffff",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                borderRadius: "24px",
                padding: "3rem 2rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                overflow: "hidden",
                cursor: "pointer",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.02)",
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
                  background: "#ffffff",
                  opacity: 0.95
                }} />
              </motion.div>

              <h3 style={{ fontSize: "1.5rem", fontWeight: 500, color: "#222", marginBottom: "1rem", letterSpacing: "0.01em" }}>
                {product.name}
              </h3>
              <p style={{ fontSize: "0.95rem", color: "rgba(0,0,0,0.6)", lineHeight: 1.6, marginBottom: "2.5rem", flexGrow: 1 }}>
                {product.description}
              </p>
              
              <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                borderTop: "1px solid rgba(0,0,0,0.08)",
                paddingTop: "1.5rem"
              }}>
                <span style={{ fontSize: "1.25rem", color: "rgba(0,0,0,0.9)", fontWeight: 500, letterSpacing: "0.02em" }}>
                  {product.price}
                </span>
                <motion.button
                  whileHover={{ scale: 1.05, background: "#111", color: "#fff" }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    background: "rgba(0,0,0,0.03)",
                    border: "1px solid rgba(0,0,0,0.15)",
                    color: "#222",
                    padding: "0.6rem 1.2rem",
                    borderRadius: "50px",
                    fontSize: "0.8rem",
                    fontWeight: 500,
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
