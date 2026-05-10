import { useRef } from "react";
import { useInView } from "framer-motion";

import { useAnimatedCounter } from "../../hooks/useAnimatedCounter";

interface AnimatedCounterProps {
  className?: string;
  suffix?: string;
  value: number;
}

export function AnimatedCounter({
  className = "text-3xl font-bold text-primary lg:text-4xl",
  suffix = "",
  value
}: AnimatedCounterProps) {
  const counterRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(counterRef, { once: true, margin: "-100px" });
  const count = useAnimatedCounter({ isActive: isInView, value });

  return (
    <div ref={counterRef} className={className}>
      {count}
      {suffix}
    </div>
  );
}
