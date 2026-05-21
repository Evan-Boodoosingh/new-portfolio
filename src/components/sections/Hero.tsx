// Hero section — centered, full viewport, no photo
// Name enlarged and centered, available pill matches nav styling

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
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "clamp(80px, 15vh, 120px) clamp(16px, 4vw, 40px) clamp(60px, 10vh, 80px)",
        position: "relative",
        textAlign: "center",
        boxSizing: "border-box",
      }}
      className="md:px-10 lg:px-40"
    >
      <div
        style={{
          maxWidth: "900px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Available for Work pill - matches nav styling */}
        <div
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
            opacity: 0,
            animation: "fadeUp 0.8s 0.1s forwards",
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
              fontSize: "clamp(10px, 1.4vw, 12px)",
              fontWeight: 600,
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "#00e676",
            }}
          >
            Available for Work
          </span>
        </div>

        {/* Name - large, centered, plain white version */}
        <h1
          style={{
            fontSize: "clamp(42px, 10vw, 92px)",
            letterSpacing: "2px",
            lineHeight: 1.05,
            margin: "0 auto 32px",
            maxWidth: "min(100%, 760px)",
            paddingBottom: "8px",
            WebkitTextStroke: ".3px #555",
            paintOrder: "stroke fill",
            color: "#fff",
            opacity: 0,
            animation: "fadeUp 0.8s 0.3s forwards",
          }}
        >
          {personalInfo.name.split(" ")[0]}
          <br />
          {personalInfo.name.split(" ")[1]}
        </h1>

        {/* Frosted card behind role and tagline */}
        <div
          style={{
            background: "rgba(15,15,15,0.75)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "20px",
            padding: "clamp(20px, 3vw, 30px)",
            marginBottom: "40px",
            width: "100%",
            maxWidth: "min(520px, 90vw)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginLeft: "auto",
            marginRight: "auto",
            opacity: 0,
            animation: "fadeUp 0.8s 0.5s forwards",
          }}
        >
          <p
            style={{
              fontSize: "clamp(14px, 2vw, 18px)",
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
              fontSize: "clamp(13px, 1.4vw, 15px)",
              color: "#aaa",
              lineHeight: 1.8,
              maxWidth: "520px",
              margin: "0 auto",
            }}
          >
            {personalInfo.tagline}
          </p>
        </div>

        {/* CTAs */}
        <div
          style={{
            display: "flex",
            gap: "16px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            width: "100%",
            maxWidth: "520px",
            margin: "0 auto",
            opacity: 0,
            animation: "fadeUp 0.8s 0.7s forwards",
          }}
          className="flex-col sm:flex-row gap-4 sm:gap-16"
        >
          <RainbowButton onClick={() => scrollTo("projects")}>
            Explore My Work
          </RainbowButton>
          <RainbowButton onClick={() => scrollTo("contact")}>
            Let's Work Together
          </RainbowButton>
        </div>
      </div>
    </section>
  );
}