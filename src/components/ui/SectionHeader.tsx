// Reusable section header used across all sections
// Renders a small rainbow label above a large white title

interface SectionHeaderProps {
  label: string; // small uppercase label e.g. "Who I Am"
  title: string; // large section title e.g. "About Me"
}

export function SectionHeader({ label, title }: SectionHeaderProps) {
  return (
    <div style={{ marginBottom: "40px" }}>
      {/* Small gradient label */}
      <p
        style={{
          fontSize: "clamp(10px, 1.2vw, 12px)",
          fontWeight: 500,
          letterSpacing: "5px",
          textTransform: "uppercase",
          marginBottom: "clamp(8px, 1.2vw, 12px)",
          background: "linear-gradient(90deg, #ff2d78, #d500f9)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        {label}
      </p>

      {/* Large section title — clamp() makes it fluid across screen sizes */}
      <h2
        style={{
          fontFamily: "'Righteous', sans-serif",
          fontSize: "clamp(36px, 5vw, 56px)",
          letterSpacing: "1px",
          color: "#f0f0f0",
          lineHeight: 1.1,
        }}
      >
        {title}
      </h2>
    </div>
  );
}
