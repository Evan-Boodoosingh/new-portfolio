export function RainbowBar() {
  return (
    <div
      style={{
        height: "4px",
        background:
          "linear-gradient(90deg,#ff2d78,#ff9500,#ffe600,#00e676,#00b0ff,#d500f9,#ff2d78)",
        backgroundSize: "300%",
        animation: "shimmer 12s linear infinite",
        position: "relative",
        zIndex: 2,
      }}
    />
  )
}