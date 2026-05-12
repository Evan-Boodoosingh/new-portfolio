// Contact section — form slides in from left, info slides in from right
// Both panels animate simultaneously when section enters viewport

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa"
import { contactInfo, socials } from "../../config/portfolioConfig"
import { Card } from "../ui/Card"
import { SectionHeader } from "../ui/SectionHeader"
import { RainbowButton } from "../ui/RainbowButton"
import type { ContactFormData } from "../../types"

const contactItems = [
  { Icon: FaEnvelope,     label: "Email",    value: contactInfo.email,    href: `mailto:${contactInfo.email}` },
  { Icon: FaPhone,        label: "Phone",    value: contactInfo.phone,    href: `tel:${contactInfo.phone}`    },
  { Icon: FaMapMarkerAlt, label: "Location", value: contactInfo.location, href: null                         },
  { Icon: FaLinkedin,     label: "LinkedIn", value: contactInfo.linkedin, href: socials.linkedin              },
  { Icon: FaGithub,       label: "GitHub",   value: contactInfo.github,   href: socials.github               },
]

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
}

const labelStyle: React.CSSProperties = {
  fontSize: "10px",
  fontWeight: 500,
  letterSpacing: "3px",
  textTransform: "uppercase",
  color: "#555",
  marginBottom: "6px",
  display: "block",
}

function handleMouseEnter(e: React.MouseEvent<HTMLAnchorElement>) {
  e.currentTarget.style.color = "#ff2d78"
}

function handleMouseLeave(e: React.MouseEvent<HTMLAnchorElement>) {
  e.currentTarget.style.color = "#aaa"
}

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    once: false,
    margin: "0px 0px -80px 0px",
  })

  const [form, setForm] = useState<ContactFormData>({
    name: "",
    email: "",
    inquiryType: "fan",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) return
    console.log("Form submitted:", form)
    setSubmitted(true)
  }

  return (
    <section
      id="contact"
      ref={ref}
      style={{
        position: "relative",
        zIndex: 2,
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "0 40px",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto", width: "100%" }}>
        <Card>
          <SectionHeader label="Get In Touch" title="Contact" />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "56px",
              alignItems: "start",
            }}
          >
            {/* LEFT — form slides in from left */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
              transition={{ duration: 0.6, ease: "easeOut" as const }}
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              {submitted ? (
                <div
                  style={{
                    padding: "40px",
                    textAlign: "center",
                    border: "1px solid rgba(0,230,118,0.2)",
                    borderRadius: "16px",
                    background: "rgba(0,230,118,0.05)",
                  }}
                >
                  <p style={{ fontFamily: "'Righteous', sans-serif", fontSize: "22px", color: "#00e676", marginBottom: "8px" }}>
                    Message Sent!
                  </p>
                  <p style={{ fontSize: "14px", color: "#666" }}>
                    Thanks for reaching out. I will get back to you soon.
                  </p>
                </div>
              ) : (
                <>
                  <div>
                    <label style={labelStyle}>Your Name</label>
                    <input name="name" type="text" placeholder="Full name" value={form.name} onChange={handleChange} style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Email</label>
                    <input name="email" type="email" placeholder="your@email.com" value={form.email} onChange={handleChange} style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Inquiry Type</label>
                    <select name="inquiryType" value={form.inquiryType} onChange={handleChange} style={{ ...inputStyle, cursor: "pointer" }}>
                      <option value="fan">General</option>
                      <option value="booking">Job Opportunity</option>
                      <option value="press">Freelance Project</option>
                      <option value="collaboration">Collaboration</option>
                      <option value="label">Other</option>
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle}>Message</label>
                    <textarea name="message" placeholder="Tell me what you are working on..." value={form.message} onChange={handleChange} style={{ ...inputStyle, resize: "vertical", minHeight: "120px" }} />
                  </div>
                  <div style={{ marginTop: "4px" }}>
                    <RainbowButton type="submit" onClick={handleSubmit}>
                      Send Message
                    </RainbowButton>
                  </div>
                </>
              )}
            </motion.div>

            {/* RIGHT — info slides in from right */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
              transition={{ duration: 0.6, ease: "easeOut" as const }}
            >
              <p style={{ fontFamily: "'Righteous', sans-serif", fontSize: "22px", color: "#f0f0f0", marginBottom: "8px" }}>
                Let's build something great.
              </p>
              <p style={{ fontSize: "14px", color: "#666", lineHeight: 1.7, marginBottom: "32px" }}>
                Whether you are looking to hire, collaborate, or need a website built for your business, I would love to hear from you.
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
                  <div className="rainbow-text" style={{ fontSize: "18px", flexShrink: 0 }}>
                    <Icon />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                    <span style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", color: "#555" }}>
                      {label}
                    </span>
                    {href ? (
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ fontSize: "14px", color: "#aaa", textDecoration: "none", transition: "color 0.2s" }}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      >
                        {value}
                      </a>
                    ) : (
                      <span style={{ fontSize: "14px", color: "#aaa" }}>{value}</span>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </Card>
      </div>
    </section>
  )
}