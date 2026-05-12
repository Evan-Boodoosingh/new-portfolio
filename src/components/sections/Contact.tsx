// Contact section — form slides in from left, info slides in from right
// Both panels animate simultaneously when section enters viewport

import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { contactInfo, socials } from "../../config/portfolioConfig";
import { Card } from "../ui/Card";
import { SectionHeader } from "../ui/SectionHeader";
import { RainbowButton } from "../ui/RainbowButton";

const contactItems = [
  {
    Icon: FaEnvelope,
    label: "Email",
    value: contactInfo.email,
    href: `mailto:${contactInfo.email}`,
  },
  {
    Icon: FaPhone,
    label: "Phone",
    value: contactInfo.phone,
    href: `tel:${contactInfo.phone}`,
  },
  {
    Icon: FaMapMarkerAlt,
    label: "Location",
    value: contactInfo.location,
    href: null,
  },
  {
    Icon: FaLinkedin,
    label: "LinkedIn",
    value: contactInfo.linkedin,
    href: socials.linkedin,
  },
  {
    Icon: FaGithub,
    label: "GitHub",
    value: contactInfo.github,
    href: socials.github,
  },
];

const inputStyle: React.CSSProperties = {
  width: "100%",
  background: "rgba(255,255,255,0.05)",
  border: "1.5px solid rgba(255,255,255,0.1)",
  borderRadius: "12px",
  padding: "12px 16px",
  fontSize: "14px",
  fontFamily: "'DM Sans', sans-serif",
  color: "#f0f0f0",
  outline: "none",
};

const labelStyle: React.CSSProperties = {
  fontSize: "10px",
  fontWeight: 500,
  letterSpacing: "3px",
  textTransform: "uppercase",
  color: "#555",
  marginBottom: "6px",
  display: "block",
};

function handleMouseEnter(e: React.MouseEvent<HTMLAnchorElement>) {
  e.currentTarget.style.color = "#ff2d78";
}

function handleMouseLeave(e: React.MouseEvent<HTMLAnchorElement>) {
  e.currentTarget.style.color = "#aaa";
}

export function Contact() {
  return (
    <section
      id="contact"
      style={{
        position: "relative",
        zIndex: 2,
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "120px clamp(24px, 4vw, 40px) 140px",
        boxSizing: "border-box",
      }}
      className="md:px-10 lg:px-40"
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto", width: "100%" }}>
        <Card>
          <SectionHeader label="Get In Touch" title="Contact" />

          <div
            style={{
              display: "grid",
              gap: "32px",
              alignItems: "start",
            }}
            className="grid-cols-1 md:grid-cols-2 md:gap-14"
          >
            {/* LEFT — form slides in from left and exits back left */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.6, ease: "easeOut" as const }}
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <form
                action="https://formsubmit.co/boodoosinghevan@gmail.com"
                method="POST"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                <input
                  type="hidden"
                  name="_next"
                  value="https://evan-boodoosingh.github.io/portfolio"
                />
                <div>
                  <label style={labelStyle}>Your Name</label>
                  <input
                    name="name"
                    type="text"
                    placeholder="Full name"
                    required
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Email</label>
                  <input
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    required
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Inquiry Type</label>
                  <select
                    name="inquiryType"
                    style={{ ...inputStyle, cursor: "pointer" }}
                  >
                    <option value="General">General</option>
                    <option value="Job Opportunity">Job Opportunity</option>
                    <option value="Freelance Project">Freelance Project</option>
                    <option value="Collaboration">Collaboration</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label style={labelStyle}>Message</label>
                  <textarea
                    name="message"
                    placeholder="Tell me what you are working on..."
                    required
                    style={{
                      ...inputStyle,
                      resize: "vertical",
                      minHeight: "120px",
                    }}
                  />
                </div>
                <div style={{ marginTop: "4px" }}>
                  <RainbowButton type="submit">Send Message</RainbowButton>
                </div>
              </form>
            </motion.div>

            {/* RIGHT — info slides in from right and exits back right */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.6, ease: "easeOut" as const }}
            >
              <p
                style={{
                  fontFamily: "'Righteous', sans-serif",
                  fontSize: "22px",
                  color: "#f0f0f0",
                  marginBottom: "8px",
                }}
              >
                Let's build something great.
              </p>
              <p
                style={{
                  fontSize: "14px",
                  color: "#666",
                  lineHeight: 1.7,
                  marginBottom: "32px",
                }}
              >
                Whether you are looking to hire, collaborate, or need a website
                built for your business, I would love to hear from you.
              </p>
              {contactItems.map(({ Icon, label, value, href }) => (
                <div
                  key={label}
                  style={{
                    padding: "16px 0",
                    borderBottom: "1px solid rgba(255,255,255,0.06)",
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                  }}
                >
                  <div
                    className="rainbow-text"
                    style={{ fontSize: "18px", flexShrink: 0 }}
                  >
                    <Icon />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "2px",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "10px",
                        fontWeight: 700,
                        letterSpacing: "3px",
                        textTransform: "uppercase",
                        color: "#555",
                      }}
                    >
                      {label}
                    </span>
                    {href ? (
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          fontSize: "14px",
                          color: "#aaa",
                          textDecoration: "none",
                          transition: "color 0.2s",
                        }}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      >
                        {value}
                      </a>
                    ) : (
                      <span style={{ fontSize: "14px", color: "#aaa" }}>
                        {value}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </Card>
      </div>
    </section>
  );
}
