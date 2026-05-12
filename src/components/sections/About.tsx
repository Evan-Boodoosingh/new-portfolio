// About section — bio, photo, and stats
// Photo on left, text on right, stats row at the bottom

import { motion } from "framer-motion";
import { bio, stats } from "../../config/portfolioConfig";
import { Card } from "../ui/Card";
import { SectionHeader } from "../ui/SectionHeader";

export function About() {
  const hidden = { opacity: 0, y: 32 };
  const visible = { opacity: 1, y: 0 };

  return (
    <section id="about" style={{ position: "relative", zIndex: 2 }}>
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 40px",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <motion.div
          initial={hidden}
          whileInView={visible}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Card>
            <SectionHeader label="Who I Am" title="About Me" />

            <div
              style={{
                display: "grid",
                // Single column on mobile, photo + text on desktop
                gridTemplateColumns: "280px 1fr",
                gap: "56px",
                alignItems: "start",
              }}
            >
              {/* Photo with rainbow border */}
              <motion.div
                initial={hidden}
                whileInView={visible}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
              >
                <img
                  src="/profilepic.jpg"
                  alt="Evan Boodoosingh"
                  style={{
                    width: "100%",
                    aspectRatio: "3/4",
                    borderRadius: "20px",
                    objectFit: "cover",
                    objectPosition: "top",
                    border: "2px solid rgba(255,255,255,0.08)",
                  }}
                />
              </motion.div>

              {/* Bio text + stats */}
              <motion.div
                initial={hidden}
                whileInView={visible}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
              >
                {bio.paragraphs.map((paragraph, index) => (
                  <motion.p
                    key={index}
                    initial={hidden}
                    whileInView={visible}
                    viewport={{ once: false, amount: 0.1 }}
                    transition={{ duration: 0.55, ease: "easeOut", delay: 0.25 + index * 0.05 }}
                    style={{
                      fontSize: "15px",
                      lineHeight: 1.85,
                      color: "#aaa",
                      marginBottom: "16px",
                    }}
                  >
                    {paragraph}
                  </motion.p>
                ))}

                {/* Stats row */}
                <motion.div
                  initial={hidden}
                  whileInView={visible}
                  viewport={{ once: false, amount: 0.1 }}
                  transition={{ duration: 0.7, ease: "easeOut", delay: 0.35 }}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: "12px",
                    marginTop: "28px",
                  }}
                >
                  {stats.map((stat, statIndex) => (
                    <motion.div
                      key={stat.label}
                      initial={hidden}
                      whileInView={visible}
                      viewport={{ once: false, amount: 0.1 }}
                      transition={{ duration: 0.55, ease: "easeOut", delay: 0.4 + statIndex * 0.05 }}
                      style={{
                        padding: "20px 12px",
                        borderRadius: "14px",
                        textAlign: "center",
                        border: "1px solid rgba(255,255,255,0.08)",
                        background: "rgba(255,255,255,0.03)",
                      }}
                    >
                      <span
                        className="rainbow-text"
                        style={{
                          fontFamily: "'Righteous', sans-serif",
                          fontSize: "32px",
                          display: "block",
                        }}
                      >
                        {stat.value}
                      </span>
                      <span
                        style={{
                          fontSize: "10px",
                          fontWeight: 500,
                          letterSpacing: "2px",
                          color: "#aaa",
                          textTransform: "uppercase",
                          display: "block",
                          marginTop: "4px",
                        }}
                      >
                        {stat.label}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
