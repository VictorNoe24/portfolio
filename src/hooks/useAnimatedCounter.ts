import { useEffect, useState } from "react";

interface UseAnimatedCounterOptions {
  duration?: number;
  isActive: boolean;
  steps?: number;
  value: number;
}

export function useAnimatedCounter({
  duration = 2000,
  isActive,
  steps = 60,
  value
}: UseAnimatedCounterOptions): number {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isActive) return;

    const increment = value / steps;
    let current = 0;

    const timer = window.setInterval(() => {
      current += increment;

      if (current >= value) {
        setCount(value);
        window.clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => window.clearInterval(timer);
  }, [duration, isActive, steps, value]);

  return count;
}
