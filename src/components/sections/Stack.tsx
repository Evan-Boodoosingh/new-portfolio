// Stack section — displays tech skills organized by category
// Pulls all stack data from portfolioConfig

import { motion } from "framer-motion"
import { stack } from "../../config/portfolioConfig"
import { Card } from "../ui/Card"
import { SectionHeader } from "../ui/SectionHeader"
import { useScrollAnimation } from "../../hooks/useScrollAnimation"

export function Stack() {
  const { ref, isInView, variants } = useScrollAnimation()

  return (
    <section id="stack" style={{ position: "relative", zIndex: 2 }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 40px",
minHeight: "100vh",
display: "flex",
alignItems: "center", }}>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={variants}
        >
          <Card>
            <SectionHeader label="What I Use" title="Tech Stack" />

            {/* Two column layout — languages/frontend left, backend/tools right */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "40px",
              }}
            >
              {stack.map(group => (
                <div key={group.title}>
                  {/* Group title with rainbow underline */}
                  <div
                    style={{
                      fontSize: "10px",
                      fontWeight: 700,
                      letterSpacing: "4px",
                      textTransform: "uppercase",
                      color: "#555",
                      marginBottom: "14px",
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    {group.title}
                    <div
                      style={{
                        flex: 1,
                        height: "1px",
                        background:
                          "linear-gradient(90deg, rgba(255,45,120,0.3), transparent)",
                      }}
                    />
                  </div>

                  {/* Skill pills */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "28px" }}>
                    {group.items.map(item => (
                      <span
                        key={item.name}
                        style={{
                          padding: "8px 16px",
                          borderRadius: "10px",
                          background: "rgba(255,255,255,0.04)",
                          border: "1px solid rgba(255,255,255,0.08)",
                          fontSize: "12px",
                          fontWeight: 500,
                          color: "#aaa",
                          letterSpacing: "0.5px",
                          transition: "all 0.2s",
                          cursor: "default",
                        }}
                        onMouseEnter={e => {
                          const el = e.currentTarget as HTMLSpanElement
                          el.style.borderColor = "rgba(255,45,120,0.3)"
                          el.style.color = "#f0f0f0"
                          el.style.background = "rgba(255,45,120,0.06)"
                        }}
                        onMouseLeave={e => {
                          const el = e.currentTarget as HTMLSpanElement
                          el.style.borderColor = "rgba(255,255,255,0.08)"
                          el.style.color = "#aaa"
                          el.style.background = "rgba(255,255,255,0.04)"
                        }}
                      >
                        {item.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}