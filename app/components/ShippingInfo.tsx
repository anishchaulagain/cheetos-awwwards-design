"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function ShippingInfo() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3, margin: "-50px" });

  return (
    <section
      id="shipping"
      ref={ref}
      style={{
        padding: "8rem 2rem",
        background: "#ffffff",
        position: "relative",
      }}
    >
      <div style={{
        maxWidth: "1280px",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
        gap: "4rem",
        alignItems: "center"
      }}>
        {/* Left Side: Content */}
        <motion.div
           initial={{ opacity: 0, x: -40 }}
           animate={isInView ? { opacity: 1, x: 0 } : {}}
           transition={{ duration: 0.8, ease: "easeOut" }}
           style={{ paddingRight: "2rem" }}
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
            marginBottom: "1.5rem"
          }}>
            Shipping & Delivery
          </div>
          
          <h2 style={{ 
            fontSize: "clamp(2.5rem, 4vw, 3.5rem)", 
            fontWeight: 800, 
            color: "#0d314e", 
            marginBottom: "1.5rem",
            lineHeight: 1.1,
            letterSpacing: "-0.02em"
          }}>
            Fast Delivery in <br/>
            <span style={{ color: "#00618d" }}>Kathmandu Valley.</span>
          </h2>
          
          <p style={{ 
            fontSize: "1.1rem", 
            color: "#405e7e", 
            lineHeight: 1.6, 
            marginBottom: "2.5rem" 
          }}>
            We're currently offering exclusive rapid delivery services strictly within the <strong>Kathmandu Valley</strong>. Receive your premium playroom additions without the wait.
          </p>

          <ul style={{ 
            listStyle: "none", 
            padding: 0, 
            margin: 0, 
            display: "flex", 
            flexDirection: "column", 
            gap: "1.5rem" 
          }}>
            {[
              "Same-Day Delivery inside Ring Road",
              "Real-time GPS tracking on all orders",
              "Safe, contactless premium packaging"
            ].map((text, i) => (
              <motion.li 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + (i * 0.15) }}
                style={{ display: "flex", alignItems: "center", gap: "1rem" }}
              >
                <div style={{ 
                  width: "40px", height: "40px", 
                  borderRadius: "50%", 
                  background: "#e9f1ff", 
                  color: "#00618d", 
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0
                }}>
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M5 12l5 5L20 7"></path>
                  </svg>
                </div>
                <span style={{ fontSize: "1.1rem", color: "#0d314e", fontWeight: 600 }}>{text}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Right Side: Mock Map Visual */}
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           animate={isInView ? { opacity: 1, scale: 1 } : {}}
           transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
           style={{ 
             position: "relative", 
             width: "100%", 
             aspectRatio: "1/1", 
             background: "#f3f6ff", 
             borderRadius: "2.5rem", 
             overflow: "hidden", 
             border: "1px solid rgba(0,0,0,0.03)",
             boxShadow: "0 20px 40px rgba(13, 49, 78, 0.05)"
           }}
        >
          {/* Abstract Grid background */}
          <div style={{ 
            position: "absolute", inset: 0, 
            background: "url('data:image/svg+xml;utf8,<svg width=\"30\" height=\"30\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"2\" cy=\"2\" r=\"1.5\" fill=\"rgba(0,97,141,0.06)\"/></svg>')", 
          }} />
          
          {/* Soft Glow */}
          <motion.div 
            animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.7, 0.5] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            style={{ 
              position: "absolute", top: "10%", left: "40%", 
              width: "100%", height: "100%", 
              background: "radial-gradient(circle, rgba(117,198,255,0.2) 0%, transparent 60%)" 
            }}
          />
          
          {/* Abstract Topographic circles */}
          <div style={{ 
            position: "absolute", top: "50%", left: "55%", 
            width: "65%", height: "65%", 
            background: "transparent", 
            borderRadius: "50%", 
            transform: "translate(-50%, -50%)", 
            border: "2px dashed rgba(0,97,141,0.1)" 
          }} />

          {/* Map & Path Drawing */}
          <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice">
            {/* The Path */}
            <motion.path 
              d="M 60 340 Q 150 250 200 200 T 290 140" 
              fill="none" 
              stroke="#00618d" 
              strokeWidth="4" 
              strokeDasharray="8 8" 
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : {}}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.6 }}
            />
            {/* Start point */}
            <motion.circle 
              cx="60" cy="340" r="8" fill="#ffffff" stroke="#00618d" strokeWidth="4"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ type: "spring", bounce: 0.5, delay: 0.3 }}
            />
          </svg>

          {/* Map Pin Area */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ type: "spring", bounce: 0.6, delay: 2.2, duration: 0.8 }}
            style={{
              position: "absolute",
              top: "35%", // Corresponds to y=140 on a 400x400 space (140/400 = 35%)
              left: "72.5%", // Corresponds to x=290 (290/400 = 72.5%)
              transform: "translate(-50%, -100%)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              zIndex: 10
            }}
          >
            {/* Bounce animation for the pin itself */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
            >
              <div style={{ 
                background: "#ffca4d", 
                color: "#5c4400", 
                fontWeight: 800, 
                padding: "0.6rem 1.2rem", 
                borderRadius: "99px", 
                fontSize: "0.9rem", 
                boxShadow: "0 8px 24px rgba(102,75,0,0.15)", 
                marginBottom: "0.5rem", 
                whiteSpace: "nowrap" 
              }}>
                Kathmandu Valley
              </div>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="#a0373b" style={{ filter: "drop-shadow(0px 8px 8px rgba(0,0,0,0.15))" }}>
                <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/>
              </svg>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
