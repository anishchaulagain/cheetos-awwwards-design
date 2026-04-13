"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const allProducts = [
  {
    id: 1,
    name: "Aero-Whiz Drone",
    description: "Silent rotors and smart sensors for indoor flight fun.",
    price: "$49.99",
    image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&q=80&w=400&h=400",
  },
  {
    id: 2,
    name: "Magical Forest Set",
    description: "Hand-carved wooden wonders that grow with their imagination.",
    price: "$34.50",
    image: "https://images.unsplash.com/photo-1587654780288-6600c74e8d38?auto=format&fit=crop&q=80&w=400&h=400",
  },
  {
    id: 3,
    name: "Cosmo Buddy",
    description: "An AI companion designed for teaching coding basics to kids.",
    price: "$89.00",
    image: "https://images.unsplash.com/photo-1566576721346-d46dd89ba6e1?auto=format&fit=crop&q=80&w=400&h=400",
  },
  {
    id: 4,
    name: "Neon Architect",
    description: "Bioluminescent building blocks that glow in the dark.",
    price: "$29.99",
    image: "https://images.unsplash.com/photo-1500995617113-cf78940737ce?auto=format&fit=crop&q=80&w=400&h=400",
  },
  {
    id: 5,
    name: "Stellar Rover",
    description: "All-terrain remote control vehicle for Martian backyard explorations.",
    price: "$59.90",
    image: "https://images.unsplash.com/photo-1618842676088-c4d48a6a7c9d?auto=format&fit=crop&q=80&w=400&h=400",
  },
  {
    id: 6,
    name: "Snuggle Bear Plus",
    description: "Ultra-soft companion made from hypoallergenic materials.",
    price: "$22.00",
    image: "https://images.unsplash.com/photo-1558066160-c3d31fe96996?auto=format&fit=crop&q=80&w=400&h=400",
  },
  {
    id: 7,
    name: "Puzzle Cube Master",
    description: "Speed-cube with magnetic alignment for professional solving.",
    price: "$18.50",
    image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&q=80&w=400&h=400",
  },
  {
    id: 8,
    name: "Crystal Cave Dig",
    description: "Educational excavation kit featuring real gem specimens.",
    price: "$27.99",
    image: "https://images.unsplash.com/photo-1531693251408-22bd18973cd7?auto=format&fit=crop&q=80&w=400&h=400",
  },
];

export default function ProductGrid() {
  const [visibleCount, setVisibleCount] = useState(4);
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const isInView = useInView(containerRef, { once: true, amount: 0.1, margin: "-50px" });

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + 4, allProducts.length));
  };

  const visibleProducts = allProducts.slice(0, visibleCount);

  return (
    <section
      id="products"
      ref={sectionRef}
      style={{
        padding: "6rem 2rem 10rem",
        background: "#f3f6ff", // Clean surface from design system
        position: "relative",
        zIndex: 10,
      }}
    >
      <div
        ref={containerRef}
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ textAlign: "center", marginBottom: "4rem" }}
        >
          <div style={{
            display: "inline-block",
            padding: "0.5rem 1.5rem",
            background: "#e9f1ff",
            color: "#00618d",
            borderRadius: "9999px",
            fontSize: "0.85rem",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            marginBottom: "1rem"
          }}>
            The Digital Playroom
          </div>
          <h2 style={{
            fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
            fontWeight: 800,
            color: "#0d314e",
            letterSpacing: "-0.02em",
            margin: 0
          }}>
            Curated wonders for <span style={{ color: "#00618d" }}>endless joy</span>.
          </h2>
        </motion.div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "2.5rem",
          marginBottom: "4rem"
        }}>
          {visibleProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover="hover"
              style={{
                background: "#ffffff",
                borderRadius: "1.5rem",
                padding: "1.5rem",
                display: "flex",
                flexDirection: "column",
                boxShadow: "0 8px 32px rgba(13, 49, 78, 0.05)",
                position: "relative",
                cursor: "pointer",
                border: "1px solid rgba(0,0,0,0.02)"
              }}
              variants={{
                hover: { y: -8, boxShadow: "0 16px 48px rgba(13, 49, 78, 0.08)" }
              }}
            >
              <div style={{
                position: "relative",
                width: "100%",
                paddingTop: "100%",
                borderRadius: "1rem",
                overflow: "hidden",
                marginBottom: "1.5rem",
                background: "#f8f9fa"
              }}>
                <motion.img
                  variants={{
                    hover: { scale: 1.05 }
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  src={product.image}
                  alt={product.name}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
                
                {/* Floating Price Tag */}
                <div style={{
                  position: "absolute",
                  bottom: "1rem",
                  right: "1rem",
                  background: "rgba(255, 255, 255, 0.85)",
                  backdropFilter: "blur(12px)",
                  padding: "0.5rem 1rem",
                  borderRadius: "9999px",
                  fontWeight: 700,
                  color: "#0d314e",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.05)"
                }}>
                  {product.price}
                </div>
              </div>

              <h3 style={{
                fontSize: "1.4rem",
                fontWeight: 700,
                color: "#0d314e",
                marginBottom: "0.5rem",
                lineHeight: 1.2
              }}>
                {product.name}
              </h3>
              
              <p style={{
                fontSize: "0.95rem",
                color: "#405e7e",
                lineHeight: 1.5,
                marginBottom: "2rem",
                flexGrow: 1
              }}>
                {product.description}
              </p>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  width: "100%",
                  background: "linear-gradient(to right, #00618d, #75c6ff)",
                  color: "#ffffff",
                  fontSize: "1rem",
                  fontWeight: 600,
                  padding: "1rem",
                  borderRadius: "9999px",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "0.5rem",
                  boxShadow: "0 4px 12px rgba(0, 97, 141, 0.2)"
                }}
              >
                Add to Cart
              </motion.button>
            </motion.div>
          ))}
        </div>

        {visibleCount < allProducts.length && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <motion.button
              onClick={loadMore}
              whileHover={{ scale: 1.05, background: "#00557c" }}
              whileTap={{ scale: 0.95 }}
              style={{
                background: "#00618d",
                color: "#ffffff",
                padding: "1rem 2.5rem",
                borderRadius: "9999px",
                fontSize: "1.1rem",
                fontWeight: 600,
                border: "none",
                cursor: "pointer",
                boxShadow: "0 8px 24px rgba(0, 97, 141, 0.25)",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem"
              }}
            >
              View More Products
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 9l6 6 6-6"/>
              </svg>
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
