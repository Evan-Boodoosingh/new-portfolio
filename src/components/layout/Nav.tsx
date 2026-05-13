import { useState, useEffect } from "react";
import { personalInfo } from "../../config/portfolioConfig";
import { RainbowButton } from "../ui/RainbowButton";
import { X } from "lucide-react"; 

export function Nav() {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Handle responsive detection for tablet/mobile
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      if (!mobile) setIsOpen(false);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <>
      {/* --- DESKTOP NAV PILL --- */}
      {!isMobile && (
        <nav
          style={{
            position: "fixed",
            top: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 200,
            display: "flex",
            alignItems: "center",
            gap: "16px",
            padding: "12px 20px",
            background: "rgba(15, 15, 15, 0.75)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            borderRadius: "100px",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.4), 0 0 0 0.5px rgba(255,255,255,0.05)",
            whiteSpace: "nowrap",
          }}
        >
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
          >
            <span 
              className="rainbow-text" 
              style={{ fontFamily: "'Righteous', sans-serif", fontSize: "18px", letterSpacing: "2px" }}
            >
              {personalInfo.initials}
            </span>
          </button>

          <div style={{ width: "1px", height: "16px", background: "rgba(255,255,255,0.15)" }} />

          <ul style={{ display: "flex", gap: "16px", listStyle: "none", alignItems: "center", padding: 0, margin: 0 }}>
            {[
              { label: "About", id: "about" },
              { label: "Projects", id: "projects" },
              { label: "Stack", id: "stack" },
              { label: "Contact", id: "contact" }
            ].map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => scrollTo(link.id)}
                  style={{
                    background: "none",
                    border: "none",
                    fontSize: "11px",
                    fontWeight: 500,
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.7)",
                    cursor: "pointer",
                    fontFamily: "'DM Sans', sans-serif",
                    padding: 0
                  }}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          <div style={{ width: "1px", height: "16px", background: "rgba(255,255,255,0.15)" }} />

          <a href={personalInfo.resumeUrl} target="_blank" rel="noopener noreferrer">
            <RainbowButton size="sm">Resume</RainbowButton>
          </a>
        </nav>
      )}

      {/* --- MOBILE HAMBURGER ICON --- */}
      {isMobile && (
        <button
          onClick={() => setIsOpen(true)}
          style={{
            position: "fixed",
            top: "10px",
            right: "7px",
            zIndex: 250,
            background: "none",
            border: "none",
            padding: "5px",
            display: "flex",
            flexDirection: "column",
            gap: "4px",
            cursor: "pointer",
          }}
        >
          <div style={{ width: "20px", height: "2px", background: "white", borderRadius: "2px", boxShadow: "0 2px 4px rgba(0,0,0,0.3)" }} />
          <div style={{ width: "20px", height: "2px", background: "white", borderRadius: "2px", boxShadow: "0 2px 4px rgba(0,0,0,0.3)" }} />
          <div style={{ width: "20px", height: "2px", background: "white", borderRadius: "2px", boxShadow: "0 2px 4px rgba(0,0,0,0.3)" }} />
        </button>
      )}

      {/* --- SLIDE-OUT DRAWER OVERLAY --- */}
      <div
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0, 0, 0, 0.6)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          zIndex: 300,
          visibility: isOpen ? "visible" : "hidden",
          opacity: isOpen ? 1 : 0,
          transition: "all 0.4s ease",
        }}
        onClick={() => setIsOpen(false)}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "280px",
            height: "100%",
            background: "#0f0e0d",
            borderLeft: "1px solid rgba(255, 255, 255, 0.1)",
            display: "flex",
            flexDirection: "column",
            padding: "20px",
            transform: isOpen ? "translateX(0)" : "translateX(100%)",
            transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          {/* Header Container with Tightened Margins */}
          <div style={{ 
            display: "flex", 
            justifyContent: "space-between", 
            alignItems: "center", 
            marginBottom: "24px", 
            height: "40px" 
          }}>
            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                setIsOpen(false);
              }}
              style={{ 
                background: "none", 
                border: "none", 
                cursor: "pointer", 
                padding: 0,
                display: "flex",
                alignItems: "center"
              }}
            >
              <span 
                className="rainbow-text" 
                style={{ 
                  fontFamily: "'Righteous', sans-serif", 
                  fontSize: "24px", 
                  letterSpacing: "2px",
                  lineHeight: "1"
                }}
              >
                {personalInfo.initials}
              </span>
            </button>

            {/* Close Button with Visual Balancing Nudge */}
            <button
              onClick={() => setIsOpen(false)}
              style={{
                background: "none",
                border: "none",
                color: "white",
                cursor: "pointer",
                padding: "4px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transform: "translateY(-2px)" 
              }}
            >
              <X size={28} strokeWidth={1.5} />
            </button>
          </div>
          
          <nav style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            {[
              { label: "About", id: "about" },
              { label: "Projects", id: "projects" },
              { label: "Stack", id: "stack" },
              { label: "Contact", id: "contact" }
            ].map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                style={{
                  background: "none",
                  border: "none",
                  color: "white",
                  fontSize: "18px",
                  fontWeight: 600,
                  textAlign: "left",
                  textTransform: "uppercase",
                  letterSpacing: "3px",
                  cursor: "pointer",
                  fontFamily: "'DM Sans', sans-serif"
                }}
              >
                {link.label}
              </button>
            ))}
            
            <div style={{ marginTop: "20px" }}>
              <a href={personalInfo.resumeUrl} target="_blank" rel="noopener noreferrer">
                <RainbowButton size="md">Resume</RainbowButton>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}