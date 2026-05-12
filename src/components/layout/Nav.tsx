// Floating pill navigation — fixed at the top center of the screen
// Glassmorphism dark blur effect with rainbow resume button

import { personalInfo } from "../../config/portfolioConfig";
import { RainbowButton } from "../ui/RainbowButton";

export function Nav() {
  // Smooth scroll to a section by its id
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: "20px",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 200,
        display: "flex",
        alignItems: "center",
        gap: "16px",
        padding: "12px 20px",
        background: "rgba(15, 15, 15, 0.75)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        borderRadius: "100px",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        boxShadow:
          "0 8px 32px rgba(0,0,0,0.4), 0 0 0 0.5px rgba(255,255,255,0.05)",
        whiteSpace: "nowrap",
      }}
      className="md:gap-8 md:px-7"
    >
      {/* Initials — left side of pill */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: 0,
        }}
      >
        <span
          className="rainbow-text"
          style={{
            fontFamily: "'Righteous', sans-serif",
            fontSize: "18px",
            letterSpacing: "2px",
          }}
        >
          {personalInfo.initials}
        </span>
      </button>

      {/* Divider */}
      <div
        style={{
          width: "1px",
          height: "16px",
          background: "rgba(255,255,255,0.15)",
        }}
      />

      {/* Nav links */}
      <ul
        style={{
          display: "flex",
          gap: "16px",
          listStyle: "none",
          alignItems: "center",
        }}
        className="md:gap-6"
      >
        {[
          { label: "About", id: "about" },
          { label: "Projects", id: "projects" },
          { label: "Stack", id: "stack" },
          { label: "Contact", id: "contact" },
        ].map((link) => (
          <li key={link.id}>
            <button
              onClick={() => scrollTo(link.id)}
              style={{
                background: "none",
                border: "none",
                fontSize: "11px",
                fontWeight: 500,
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.7)",
                cursor: "pointer",
                fontFamily: "'DM Sans', sans-serif",
                transition: "color 0.2s",
                padding: 0,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.color =
                  "rgba(255,255,255,0.7)";
              }}
            >
              {link.label}
            </button>
          </li>
        ))}
      </ul>

      {/* Divider */}
      <div
        style={{
          width: "1px",
          height: "16px",
          background: "rgba(255,255,255,0.15)",
        }}
      />

      {/* Resume button */}
      <a
        href={personalInfo.resumeUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <RainbowButton size="sm">Resume</RainbowButton>
      </a>
    </nav>
  );
}
