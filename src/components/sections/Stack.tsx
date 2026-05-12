// Stack section — tech skills organized by category
// Each group animates in from the left with a stagger between groups

import { motion } from "framer-motion";
import { stack } from "../../config/portfolioConfig";
import { Card } from "../ui/Card";
import { SectionHeader } from "../ui/SectionHeader";

export function Stack() {
  const groupHidden = { opacity: 0, y: 40 };
  const pillHidden = { opacity: 0, scale: 0.85, y: 10 };

  return (
    <section
      id="stack"
      style={{
        position: "relative",
        zIndex: 2,
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "120px clamp(24px, 4vw, 40px) 80px",
        boxSizing: "border-box",
      }}
      className="md:px-10 lg:px-40"
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto", width: "100%" }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
        >
          <Card>
            <SectionHeader label="What I Use" title="Tech Stack" />

            <div
              style={{
                display: "grid",
                gap: "32px",
              }}
              className="grid-cols-1 md:grid-cols-2 md:gap-10"
            >
              {stack.map((group, groupIndex) => (
                <motion.div
                  key={group.title}
                  initial={groupHidden}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut" as const,
                    // Each group staggers in after the previous
                    delay: groupIndex * 0.12,
                  }}
                >
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

                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "8px",
                      marginBottom: "28px",
                    }}
                  >
                    {group.items.map((item, itemIndex) => (
                      <motion.span
                        key={item.name}
                        initial={pillHidden}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{
                          duration: 0.3,
                          ease: "easeOut" as const,
                          // Pills stagger in after their group
                          delay: groupIndex * 0.12 + itemIndex * 0.04,
                        }}
                        style={{
                          padding:
                            "clamp(6px, 2vw, 12px) clamp(10px, 3vw, 16px)",
                          borderRadius: "10px",
                          background: "rgba(255,255,255,0.04)",
                          border: "1px solid rgba(255,255,255,0.08)",
                          fontSize: "clamp(10px, 2.5vw, 12px)",
                          fontWeight: 500,
                          color: "#aaa",
                          letterSpacing: "0.5px",
                          cursor: "default",
                          display: "inline-block",
                        }}
                      >
                        {item.name}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
