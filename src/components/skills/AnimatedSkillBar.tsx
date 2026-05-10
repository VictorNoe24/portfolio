import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import { useDelayedProgress } from "../../hooks/useDelayedProgress";

interface AnimatedSkillBarProps {
  delay: number;
  level: number;
  name: string;
}

export function AnimatedSkillBar({
  delay,
  level,
  name
}: AnimatedSkillBarProps) {
  const barRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(barRef, { once: true, margin: "-50px" });
  const width = useDelayedProgress({ delay, isActive: isInView, value: level });

  return (
    <div ref={barRef}>
      <div className="mb-1.5 flex items-center justify-between">
        <span className="text-sm font-medium text-foreground">{name}</span>
        <motion.span
          className="text-xs text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: delay * 0.1 + 0.5 }}
        >
          {level}%
        </motion.span>
      </div>

      <div className="h-1.5 overflow-hidden rounded-full bg-secondary">
        <motion.div
          className="h-full rounded-full bg-primary"
          initial={{ width: 0 }}
          animate={{ width: `${width}%` }}
          transition={{ duration: 1, ease: "easeOut", delay: delay * 0.1 }}
        />
      </div>
    </div>
  );
}
