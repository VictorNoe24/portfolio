import { useEffect, useState } from "react";

interface UseDelayedProgressOptions {
  delay: number;
  isActive: boolean;
  value: number;
}

export function useDelayedProgress({
  delay,
  isActive,
  value
}: UseDelayedProgressOptions): number {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isActive) return;

    const timer = window.setTimeout(() => {
      setProgress(value);
    }, delay * 100);

    return () => window.clearTimeout(timer);
  }, [delay, isActive, value]);

  return progress;
}
