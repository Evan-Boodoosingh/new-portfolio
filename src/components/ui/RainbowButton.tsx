import type { ReactNode } from "react"

interface RainbowButtonProps {
  children: ReactNode
  onClick?: () => void
  size?: "sm" | "md"
  type?: "button" | "submit"
  fullWidth?: boolean
}

export function RainbowButton({
  children,
  onClick,
  size = "md",
  type = "button",
  fullWidth = false,
}: RainbowButtonProps) {
  const padding = size === "sm" ? "10px 22px" : "14px 36px"
  const fontSize = size === "sm" ? "10px" : "12px"
  const letterSpacing = size === "sm" ? "2px" : "3px"

  return (
    <button
      type={type}
      onClick={onClick}
      style={{
        padding,
        fontSize,
        letterSpacing,
        width: fullWidth ? "100%" : "auto",
        borderRadius: "100px",
        border: "none",
        background:
          "linear-gradient(90deg,#ff2d78,#ff9500,#ffe600,#00e676,#00b0ff,#d500f9,#ff2d78)",
        backgroundSize: "300% 100%",
        animation: "shimmerBtn 16s linear infinite",
        fontFamily: "'DM Sans', sans-serif",
        fontWeight: 800,
        textTransform: "uppercase",
        color: "#111",
        cursor: "pointer",
        boxShadow: "0 4px 24px rgba(255,45,120,0.35)",
        display: "inline-block",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-3px)"
        ;(e.currentTarget as HTMLButtonElement).style.boxShadow =
          "0 10px 36px rgba(255,45,120,0.5)"
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)"
        ;(e.currentTarget as HTMLButtonElement).style.boxShadow =
          "0 4px 24px rgba(255,45,120,0.35)"
      }}
    >
      {children}
    </button>
  )
}