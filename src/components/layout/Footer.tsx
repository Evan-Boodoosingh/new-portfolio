// White footer — anchors the bottom of the page
// Social links use react-icons with hover color transition

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"
import { personalInfo, socials } from "../../config/portfolioConfig"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const linkStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    fontSize: "22px",
    color: "#aaa",
    textDecoration: "none",
    transition: "color 0.2s",
  }

  const handleEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.color = "#ff2d78"
  }

  const handleLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.color = "#aaa"
  }

  return (
    <footer
      style={{
        background: "rgba(255, 255, 255, 0.96)",
        borderTop: "4px solid transparent",
        borderImage: "linear-gradient(90deg,#ff2d78,#ff9500,#ffe600,#00e676,#00b0ff,#d500f9) 1",
        padding: "40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "20px",
        position: "relative",
        zIndex: 2,
      }}
    >
      {/* Name */}
      <span
        className="rainbow-text"
        style={{
          fontFamily: "'Righteous', sans-serif",
          fontSize: "18px",
          letterSpacing: "1px",
        }}
      >
        {personalInfo.name}
      </span>

      {/* Social icons */}
      <ul style={{ display: "flex", gap: "24px", listStyle: "none", alignItems: "center" }}>
        <li>
          <a href={socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" style={linkStyle} onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
            <FaGithub />
          </a>
        </li>
        <li>
          <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={linkStyle} onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a href={socials.email} target="_blank" rel="noopener noreferrer" aria-label="Email" style={linkStyle} onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
            <FaEnvelope />
          </a>
        </li>
      </ul>

      {/* Copyright */}
      <span style={{ fontSize: "11px", color: "#bbb", letterSpacing: "1px" }}>
        © {currentYear} {personalInfo.name}
      </span>
    </footer>
  )
}