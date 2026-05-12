import { motion } from "framer-motion";
import { bio, stats } from "../../config/portfolioConfig";
import { Card } from "../ui/Card";
import { SectionHeader } from "../ui/SectionHeader";

export function About() {
  const hidden = { opacity: 0, y: 20 };
  const visible = { opacity: 1, y: 0 };

  return (
    <section
      id="about"
      style={{
        position: "relative",
        zIndex: 2,
        padding: "80px clamp(24px, 4vw, 40px)",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 20px",
          minHeight: "fit-content", // Prevents overhang from previous screenshots
          display: "flex",
          alignItems: "center",
        }}
      >
        <motion.div
          initial={hidden}
          whileInView={visible}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          style={{ width: "100%" }}
        >
          <Card>
            <SectionHeader label="Who I Am" title="About Me" />

            <div
              style={{
                display: "grid",
                gap: "48px",
                width: "100%",
              }}
              className="grid-cols-1 md:grid-cols-[320px_1fr]"
            >
              {/* --- LEFT: PHOTO --- */}
              <motion.div
                initial={hidden}
                whileInView={visible}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <img
                  src="/profilepic.jpg"
                  alt="Evan Boodoosingh"
                  style={{
                    width: "100%",
                    aspectRatio: "3/4", // Keeps photo height consistent
                    borderRadius: "24px",
                    objectFit: "cover",
                    objectPosition: "top",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                />
              </motion.div>

              {/* --- RIGHT: THE FLEX COLUMN --- */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between", // Anchors top and bottom items
                  height: "100%", // Matches the height of the photo grid cell
                  gap: "32px", // Fallback gap for mobile stacking
                }}
              >
                {/* Top: Bio text */}
                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  {bio.paragraphs.map((paragraph, index) => (
                    <motion.p
                      key={index}
                      initial={hidden}
                      whileInView={visible}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      style={{
                        fontSize: "15px",
                        lineHeight: "1.8",
                        color: "rgba(255,255,255,0.6)",
                        margin: 0,
                      }}
                    >
                      {paragraph}
                    </motion.p>
                  ))}
                </div>

                {/* Bottom: Stats Row */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
                    gap: "16px",
                  }}
                >
                  {stats.map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      initial={hidden}
                      whileInView={visible}
                      transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                      style={{
                        padding: "24px 16px",
                        borderRadius: "20px",
                        textAlign: "center",
                        background: "rgba(255,255,255,0.03)",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }}
                    >
                      <span
                        className="rainbow-text"
                        style={{
                          fontFamily: "'Righteous', sans-serif",
                          fontSize: "32px",
                          display: "block",
                          lineHeight: 1,
                          marginBottom: "8px"
                        }}
                      >
                        {stat.value}
                      </span>
                      <span
                        style={{
                          fontSize: "10px",
                          fontWeight: 700,
                          letterSpacing: "2px",
                          color: "rgba(255,255,255,0.4)",
                          textTransform: "uppercase",
                        }}
                      >
                        {stat.label}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}