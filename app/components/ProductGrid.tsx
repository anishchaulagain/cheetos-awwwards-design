"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

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
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Trigger reveal animations when scrolling past
  const isInView = useInView(containerRef, { once: true, amount: 0.15, margin: "-50px" });

  // Add scroll-linked parallax for the decorative background
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  
  const bgTransformY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const cardsParallaxY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section
      id="products"
      ref={sectionRef}
      style={{
        padding: "10rem 2rem",
        background: "var(--bg-primary-light, #F8F9FA)",
        position: "relative",
        zIndex: 10,
        overflow: "hidden"
      }}
    >
      {/* Decorative Parallax Background Layer */}
      <motion.div 
        style={{
          position: "absolute",
          top: "10%",
          right: "-10%",
          width: "60vw",
          height: "60vw",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0, 123, 255, 0.03) 0%, transparent 70%)",
          y: bgTransformY,
          pointerEvents: "none",
          zIndex: 0
        }}
      />

      <div
        ref={containerRef}
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
          perspective: "2000px" // Perspective for 3D card flips
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: "center", marginBottom: "6rem" }}
        >
          <motion.div 
            initial={{ opacity: 0, letterSpacing: "0em" }}
            animate={isInView ? { opacity: 1, letterSpacing: "0.1em" } : {}}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
            style={{ color: "#007BFF", fontSize: "0.875rem", textTransform: "uppercase", marginBottom: "1.5rem", fontWeight: 700 }}
          >
            The Collection
          </motion.div>
          
          <div style={{ overflow: "hidden", display: "inline-block" }}>
            <motion.h2 
              initial={{ y: "100%" }}
              animate={isInView ? { y: "0%" } : {}}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 300, letterSpacing: "-0.03em", margin: 0, color: "#111" }}
            >
              Curated Excellence.
            </motion.h2>
          </div>
        </motion.div>

        <motion.div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2.5rem",
            y: cardsParallaxY // Adds a very subtle scroll push to the grid as a whole
          }}
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 80, rotateX: 15, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0, scale: 1 } : {}}
              transition={{ 
                duration: 1.2, 
                delay: index * 0.15 + 0.3, 
                ease: [0.16, 1, 0.3, 1] 
              }}
              whileHover={{
                y: -12,
                borderColor: "rgba(0,0,0,0.12)",
                boxShadow: `0 25px 50px -12px ${product.glow}`,
                transition: { duration: 0.5, ease: "easeOut" }
              }}
              style={{
                position: "relative",
                background: "#ffffff",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                borderRadius: "24px",
                padding: "3.5rem 2rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                overflow: "hidden",
                cursor: "pointer",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.02)",
                transformStyle: "preserve-3d"
              }}
            >
              {/* Animated bottom border reveal */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{
                  duration: 1,
                  delay: index * 0.15 + 0.8,
                  ease: [0.16, 1, 0.3, 1],
                }}
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  height: "2px",
                  background: `linear-gradient(90deg, transparent, ${product.glow}, transparent)`,
                  transformOrigin: "center center",
                }}
              />

              {/* Abstract decorative element in place of product image */}
              <motion.div
                className="product-abstract-circle"
                style={{
                  width: "140px",
                  height: "140px",
                  borderRadius: "50%",
                  background: `linear-gradient(135deg, ${product.glow}, transparent)`,
                  marginBottom: "3rem",
                  boxShadow: `inset 0 0 30px ${product.color}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative"
                }}
                whileHover={{ rotate: 180, scale: 1.05 }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <div style={{
                  width: "70%",
                  height: "70%",
                  borderRadius: "50%",
                  background: "#ffffff",
                  opacity: 0.95
                }} />
              </motion.div>

              <h3 style={{ fontSize: "1.6rem", fontWeight: 500, color: "#222", marginBottom: "1.2rem", letterSpacing: "-0.02em" }}>
                {product.name}
              </h3>
              <p style={{ fontSize: "1rem", color: "rgba(0,0,0,0.6)", lineHeight: 1.6, marginBottom: "3rem", flexGrow: 1 }}>
                {product.description}
              </p>
              
              <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                borderTop: "1px solid rgba(0,0,0,0.06)",
                paddingTop: "2rem"
              }}>
                <span style={{ fontSize: "1.3rem", color: "#111", fontWeight: 500, letterSpacing: "0.01em" }}>
                  {product.price}
                </span>
                <motion.button
                  whileHover={{ scale: 1.05, background: "#111", color: "#fff" }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    background: "rgba(0,0,0,0.02)",
                    border: "1px solid rgba(0,0,0,0.1)",
                    color: "#222",
                    padding: "0.7rem 1.4rem",
                    borderRadius: "50px",
                    fontSize: "0.85rem",
                    fontWeight: 600,
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
        </motion.div>
      </div>
    </section>
  );
}
