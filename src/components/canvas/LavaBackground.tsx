// Fixed full-screen canvas that renders the animated lava lamp background
// Uses 'screen' blend mode on a black base so colors glow like neon lights
// Blobs bounce off invisible walls so color coverage is always edge to edge

import { useEffect, useRef } from "react";

// Each blob has its own color, position, velocity, and pulse rhythm
interface Blob {
  x: number;
  y: number;
  vx: number;
  vy: number;
  sizeRatio: number;
  color: [number, number, number];
  phase: number;
  pulseSpeed: number;
}

// Full rainbow palette — one blob per color
const PALETTE: [number, number, number][] = [
  [255, 45, 120],
  [255, 149, 0],
  [255, 220, 0],
  [0, 220, 100],
  [0, 176, 255],
  [180, 0, 255],
  [255, 80, 180],
  [0, 240, 200],
  [255, 100, 0],
  [100, 0, 255],
  [0, 200, 80],
  [255, 200, 0],
];

// Spread blobs across a 3x4 grid at startup so every corner is covered immediately
const START_POSITIONS: [number, number][] = [
  [0.15, 0.15],
  [0.5, 0.1],
  [0.85, 0.15],
  [0.1, 0.4],
  [0.5, 0.35],
  [0.9, 0.4],
  [0.15, 0.65],
  [0.5, 0.62],
  [0.85, 0.65],
  [0.1, 0.88],
  [0.5, 0.88],
  [0.9, 0.88],
];

export function LavaBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Resize canvas to fill the viewport
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Initialize blobs with random directions but fixed starting positions
    const blobs: Blob[] = PALETTE.map((color, i) => {
      const angle = Math.random() * Math.PI * 2;
      const speed = 0.28 + Math.random() * 0.22;
      return {
        x: START_POSITIONS[i][0],
        y: START_POSITIONS[i][1],
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        sizeRatio: 0.58 + Math.random() * 0.22,
        color,
        phase: Math.random() * Math.PI * 2,
        pulseSpeed: 0.4 + Math.random() * 0.4,
      };
    });

    let t = 0;
    let animationId: number;

    const draw = () => {
      t += 0.016;
      const w = canvas.width;
      const h = canvas.height;

      // Black base — screen blend mode makes colors glow on top of this
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, w, h);

      // Screen blend makes overlapping colors brighten like light mixing
      ctx.globalCompositeOperation = "screen";

      blobs.forEach((b) => {
        // Bounce off walls so blobs never leave the canvas
        const m = 0.05;
        if (b.x < m) {
          b.x = m;
          b.vx = Math.abs(b.vx);
        }
        if (b.x > 1 - m) {
          b.x = 1 - m;
          b.vx = -Math.abs(b.vx);
        }
        if (b.y < m) {
          b.y = m;
          b.vy = Math.abs(b.vy);
        }
        if (b.y > 1 - m) {
          b.y = 1 - m;
          b.vy = -Math.abs(b.vy);
        }

        // Move blob — normalized coords keep it resolution independent
        b.x += b.vx * 0.00045;
        b.y += b.vy * 0.00045;

        // Gentle wobble makes paths curve organically like a lava lamp
        b.vx += Math.sin(t * 0.7 + b.phase) * 0.012;
        b.vy += Math.cos(t * 0.6 + b.phase * 1.4) * 0.012;

        // Cap speed to keep movement slow and dreamy
        const spd = Math.sqrt(b.vx * b.vx + b.vy * b.vy);
        if (spd > 0.55) {
          b.vx = (b.vx / spd) * 0.55;
          b.vy = (b.vy / spd) * 0.55;
        }

        // Subtle pulsing makes each blob feel alive
        const pulse = 1 + Math.sin(t * b.pulseSpeed + b.phase) * 0.06;
        const bx = b.x * w;
        const by = b.y * h;
        const br = b.sizeRatio * Math.min(w, h) * pulse;

        // Radial gradient fades color from full opacity at center to transparent at edge
        const g = ctx.createRadialGradient(bx, by, 0, bx, by, br);
        g.addColorStop(
          0,
          `rgba(${b.color[0]},${b.color[1]},${b.color[2]},0.9)`,
        );
        g.addColorStop(
          0.35,
          `rgba(${b.color[0]},${b.color[1]},${b.color[2]},0.6)`,
        );
        g.addColorStop(
          0.65,
          `rgba(${b.color[0]},${b.color[1]},${b.color[2]},0.3)`,
        );
        g.addColorStop(1, `rgba(${b.color[0]},${b.color[1]},${b.color[2]},0)`);

        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(bx, by, br, 0, Math.PI * 2);
        ctx.fill();
      });

      // Reset blend mode so everything else renders normally on top
      ctx.globalCompositeOperation = "source-over";
      animationId = requestAnimationFrame(draw);
    };

    draw();

    // Cleanup — cancel animation and remove resize listener when component unmounts
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
}
