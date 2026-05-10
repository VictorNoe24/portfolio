import { useRef } from "react";
import { useInView } from "framer-motion";

import { useAnimatedCounter } from "../../hooks/useAnimatedCounter";

interface AnimatedCounterProps {
  suffix?: string;
  value: number;
}

export function AnimatedCounter({ value, suffix = "" }: AnimatedCounterProps) {
  const counterRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(counterRef, { once: true, margin: "-100px" });
  const count = useAnimatedCounter({ isActive: isInView, value });

  return (
    <div ref={counterRef} className="text-3xl font-bold text-primary lg:text-4xl">
      {count}
      {suffix}
    </div>
  );
}
