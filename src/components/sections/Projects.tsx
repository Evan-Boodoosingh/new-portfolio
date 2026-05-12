// Projects section — directional scroll animations per card
// Even index: video left, card slides in from left
// Odd index: video right, card slides in from right
// once: false means animation replays when scrolling back

import { motion } from "framer-motion"
import { projects } from "../../config/portfolioConfig"
import type { Project } from "../../types"

const TAG_COLORS: Record<string, { bg: string; color: string; border: string }> = {
  pink:   { bg: "rgba(255,45,120,0.12)",  color: "#ff2d78", border: "rgba(255,45,120,0.25)"  },
  blue:   { bg: "rgba(0,176,255,0.12)",   color: "#00b0ff", border: "rgba(0,176,255,0.25)"   },
  green:  { bg: "rgba(0,200,100,0.12)",   color: "#00e676", border: "rgba(0,200,100,0.25)"   },
  purple: { bg: "rgba(213,0,249,0.12)",   color: "#d500f9", border: "rgba(213,0,249,0.25)"   },
  orange: { bg: "rgba(255,149,0,0.12)",   color: "#ff9500", border: "rgba(255,149,0,0.25)"   },
}

function handleLinkEnter(e: React.MouseEvent<HTMLAnchorElement>) {
  e.currentTarget.style.borderColor = "#ff2d78"
  e.currentTarget.style.color = "#ff2d78"
}

function handleLinkLeave(e: React.MouseEvent<HTMLAnchorElement>) {
  e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"
  e.currentTarget.style.color = "#aaa"
}

function ProjectRow({ project, index }: { project: Project; index: number }) {
  const isEven = index % 2 === 0
  const tagStyle = TAG_COLORS[project.tagColor]

  // Direction based on layout — even slides from left, odd slides from right
  const xOffset = isEven ? -120 : 120

  const variants = {
    hidden: {
      opacity: 0,
      x: xOffset,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
        delay: index * 0.05,
      },
    },
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1 }}
      variants={variants}
      style={{
        background: "rgba(10,10,10,0.82)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderRadius: "24px",
        border: "1px solid rgba(255,255,255,0.08)",
        overflow: "hidden",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        marginBottom: "24px",
      }}
    >
      {/* Video panel */}
      <div style={{ order: isEven ? 0 : 1 }}>
        {project.videoUrl ? (
          <iframe
            src={project.videoUrl}
            style={{ width: "100%", height: "100%", minHeight: "300px", border: "none", display: "block" }}
            allowFullScreen
            title={project.name}
          />
        ) : (
          <div
            style={{
              width: "100%",
              height: "100%",
              minHeight: "300px",
              background: "linear-gradient(135deg,rgba(255,45,120,0.08),rgba(0,176,255,0.08))",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "11px",
              color: "#444",
              letterSpacing: "2px",
              textTransform: "uppercase",
            }}
          >
            Screenshot Coming Soon
          </div>
        )}
      </div>

      {/* Info panel */}
      <div
        style={{
          padding: "40px 48px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          order: isEven ? 1 : 0,
        }}
      >
        <h3
          style={{
            fontFamily: "'Righteous', sans-serif",
            fontSize: "24px",
            color: "#f0f0f0",
            marginBottom: "12px",
            lineHeight: 1.2,
          }}
        >
          {project.name}
        </h3>

        <p style={{ fontSize: "15px", color: "#888", lineHeight: 1.7, marginBottom: "20px" }}>
          {project.description}
        </p>

        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "28px" }}>
          {project.tags.map(tag => (
            <span
              key={tag}
              style={{
                fontSize: "10px",
                fontWeight: 600,
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                padding: "4px 12px",
                borderRadius: "100px",
                background: tagStyle.bg,
                color: tagStyle.color,
                border: `1px solid ${tagStyle.border}`,
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        <div style={{ display: "flex", gap: "12px" }}>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "#aaa",
                textDecoration: "none",
                padding: "10px 24px",
                borderRadius: "100px",
                border: "1px solid rgba(255,255,255,0.12)",
                transition: "all 0.2s",
              }}
              onMouseEnter={handleLinkEnter}
              onMouseLeave={handleLinkLeave}
            >
              Live
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "#aaa",
                textDecoration: "none",
                padding: "10px 24px",
                borderRadius: "100px",
                border: "1px solid rgba(255,255,255,0.12)",
                transition: "all 0.2s",
              }}
              onMouseEnter={handleLinkEnter}
              onMouseLeave={handleLinkLeave}
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export function Projects() {
  return (
    <section id="projects" style={{ position: "relative", zIndex: 2 }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", width: "100%", padding: "60px 40px" }}>
        <div style={{ marginBottom: "48px" }}>
          <p
            style={{
              fontSize: "10px",
              fontWeight: 500,
              letterSpacing: "5px",
              textTransform: "uppercase",
              marginBottom: "8px",
              background: "linear-gradient(90deg, #ff2d78, #d500f9)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            My Work
          </p>
          <h2
            style={{
              fontFamily: "'Righteous', sans-serif",
              fontSize: "clamp(36px, 5vw, 56px)",
              letterSpacing: "1px",
              color: "#f0f0f0",
              lineHeight: 1.1,
            }}
          >
            Projects
          </h2>
        </div>

        {projects.map((project, index) => (
          <ProjectRow key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}