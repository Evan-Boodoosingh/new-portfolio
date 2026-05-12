// Hero section — centered, full viewport, no photo
// Name enlarged and centered, available pill matches nav styling

import { motion } from "framer-motion";
import { personalInfo } from "../../config/portfolioConfig";
import { RainbowButton } from "../ui/RainbowButton";

export function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "120px 40px 80px",
        position: "relative",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "900px", width: "100%" }}>
        {/* Available for Work pill - matches nav styling */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            padding: "10px 24px",
            borderRadius: "100px",
            background: "rgba(15,15,15,0.75)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            border: "1px solid rgba(255,255,255,0.1)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              background: "#00e676",
              boxShadow: "0 0 12px rgba(0,230,118,0.8)",
              animation: "pulse 2s ease-in-out infinite",
              flexShrink: 0,
            }}
          />
          <span
            style={{
              fontSize: "12px",
              fontWeight: 600,
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "#00e676",
            }}
          >
            Available for Work
          </span>
        </motion.div>

        {/* Name - large, centered, rainbow gradient with white glow */}
        <motion.h1
          className="rainbow-text"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
          style={{
            fontSize: "clamp(64px, 12vw, 140px)",
            letterSpacing: "2px",
            lineHeight: 1.05,
            marginBottom: "32px",
            paddingBottom: "8px",
            WebkitTextStroke: ".3px #555",
            paintOrder: "stroke fill",
          }}
        >
          {personalInfo.name.split(" ")[0]}
          <br />
          {personalInfo.name.split(" ")[1]}
        </motion.h1>

        {/* Frosted card behind role and tagline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.5 }}
          style={{
            background: "rgba(15,15,15,0.75)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "20px",
            padding: "24px 40px",
            marginBottom: "40px",
            display: "inline-block",
          }}
        >
          <p
            style={{
              fontSize: "18px",
              fontWeight: 300,
              color: "#ffffff",
              letterSpacing: "6px",
              textTransform: "uppercase",
              marginBottom: "12px",
            }}
          >
            {personalInfo.role}
          </p>
          <p
            style={{
              fontSize: "15px",
              color: "#aaa",
              lineHeight: 1.8,
              maxWidth: "520px",
              margin: "0 auto",
            }}
          >
            {personalInfo.tagline}
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.7 }}
          style={{
            display: "flex",
            gap: "16px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <RainbowButton onClick={() => scrollTo("projects")}>
            Explore My Work
          </RainbowButton>
          <RainbowButton onClick={() => scrollTo("contact")}>
            Let's Work Together
          </RainbowButton>
        </motion.div>
      </div>
    </section>
  );
}
