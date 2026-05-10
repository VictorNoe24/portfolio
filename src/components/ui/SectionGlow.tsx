import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface SectionGlowProps {
  accent?: "primary" | "chart-2" | "chart-4";
  anchor?: "left" | "right" | "center";
  className?: string;
}

const ANCHOR_STYLES = {
  left: "left-[-10%]",
  right: "right-[-10%]",
  center: "left-1/2 -translate-x-1/2"
} as const;

const ACCENT_STYLES = {
  primary: "bg-primary/10",
  "chart-2": "bg-chart-2/10",
  "chart-4": "bg-chart-4/10"
} as const;

export function SectionGlow({
  accent = "primary",
  anchor = "center",
  className = ""
}: SectionGlowProps) {
  const glowRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: glowRef,
    offset: ["start end", "end start"]
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [70, -70]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.15, 0.4, 0.4, 0.15]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1.05, 0.9]);

  return (
    <div ref={glowRef} className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <motion.div
        className={`absolute top-16 h-72 w-72 rounded-full blur-3xl lg:h-96 lg:w-96 ${ANCHOR_STYLES[anchor]} ${ACCENT_STYLES[accent]}`}
        style={{
          opacity,
          scale,
          y: translateY
        }}
      />
    </div>
  );
}
