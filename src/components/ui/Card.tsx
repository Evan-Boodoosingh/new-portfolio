import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={className}
      style={{
        background: "rgba(10, 10, 10, 0.82)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderRadius: "24px",
        border: "1px solid rgba(255, 255, 255, 0.08)",
        padding: "clamp(24px, 3vw, 56px)",
        boxShadow: "0 8px 60px rgba(0, 0, 0, 0.5)",
      }}
    >
      {children}
    </div>
  );
}
