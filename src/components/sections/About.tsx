import { motion } from "framer-motion";
import { bio, stats } from "../../config/portfolioConfig";
import { Card } from "../ui/Card";

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
        // Added scrollMarginTop to fix the navigation overlap issue
        scrollMarginTop: "100px", 
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 20px",
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
            {/* The main layout container */}
            <div
              style={{
                display: "grid",
                gap: "48px",
                width: "100%",
                // Forces both columns to be the exact same height
                alignItems: "stretch", 
              }}
              className="grid-cols-1 md:grid-cols-[320px_1fr]"
            >
              {/* LEFT COLUMN: The Photo */}
              <motion.div
                initial={hidden}
                whileInView={visible}
                transition={{ duration: 0.7, delay: 0.2 }}
                style={{ height: "100%" }}
              >
                <img
                  src="/profilepic.jpg"
                  alt="Evan Boodoosingh"
                  style={{
                    width: "100%",
                    height: "100%", // Fills the grid cell height
                    borderRadius: "24px",
                    objectFit: "cover",
                    objectPosition: "top",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                />
              </motion.div>

              {/* RIGHT COLUMN: The Text + Stats */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  // Spaces the Bio (top) and Stats (bottom) relative to photo
                  justifyContent: "space-between",
                  height: "100%", 
                }}
              >
                {/* Text Group */}
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span style={{ 
                    fontSize: "10px", 
                    fontWeight: 700, 
                    letterSpacing: "3px", 
                    color: "#c4622d", 
                    textTransform: "uppercase",
                    marginBottom: "8px"
                  }}>
                    Who I Am
                  </span>
                  <h2 style={{ 
                    fontSize: "48px", 
                    color: "#fff", 
                    margin: "0 0 24px 0",
                    fontFamily: "'Righteous', sans-serif",
                    lineHeight: 1
                  }}>
                    About Me
                  </h2>
                  
                  <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                    {bio.paragraphs.map((paragraph, index) => (
                      <motion.p
                        key={index}
                        initial={hidden}
                        whileInView={visible}
                        transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                        style={{
                          fontSize: "15px",
                          lineHeight: "1.7",
                          color: "rgba(255,255,255,0.6)",
                          margin: 0,
                        }}
                      >
                        {paragraph}
                      </motion.p>
                    ))}
                  </div>
                </div>

                {/* Stats Row */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
                    gap: "16px",
                    marginTop: "32px"
                  }}
                >
                  {stats.map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      initial={hidden}
                      whileInView={visible}
                      transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                      style={{
                        padding: "20px 12px",
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
                          marginBottom: "4px"
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