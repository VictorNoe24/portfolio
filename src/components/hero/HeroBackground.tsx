import {
  motion,
  useScroll,
  useTransform,
  type MotionValue
} from "framer-motion";
import type { RefObject } from "react";

interface HeroBackgroundProps {
  target: RefObject<HTMLElement | null>;
}

export function HeroBackground({ target }: HeroBackgroundProps) {
  const { scrollYProgress } = useScroll({
    target,
    offset: ["start start", "end start"]
  });
  const leftBlobY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const rightBlobY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const gridOpacity = useTransform(scrollYProgress, [0, 1], [0.2, 0.05]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl"
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        style={{ y: leftBlobY }}
      />
      <motion.div
        className="absolute -right-32 bottom-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl"
        animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        style={{ y: rightBlobY }}
      />
      <motion.div
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] [mask-image:radial-gradient(circle_at_center,black,transparent_78%)]"
        style={{ opacity: gridOpacity }}
      />
    </div>
  );
}
