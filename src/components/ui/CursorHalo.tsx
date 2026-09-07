import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

const CURSOR_MEDIA_QUERY =
  "(pointer: fine) and (hover: hover) and (prefers-reduced-motion: no-preference)";
const INTERACTIVE_SELECTOR = "a, button, summary, [role='button']";
const TEXT_INPUT_SELECTOR =
  "input, textarea, select, [contenteditable='true']";

export function CursorHalo() {
  const pointerX = useMotionValue(-100);
  const pointerY = useMotionValue(-100);
  const smoothX = useSpring(pointerX, { stiffness: 520, damping: 36, mass: 0.18 });
  const smoothY = useSpring(pointerY, { stiffness: 520, damping: 36, mass: 0.18 });
  const [isEnabled, setIsEnabled] = useState(false);
  const [isInteractive, setIsInteractive] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cursorMedia = window.matchMedia(CURSOR_MEDIA_QUERY);

    const updateAvailability = () => {
      setIsEnabled(cursorMedia.matches);

      if (!cursorMedia.matches) {
        setIsVisible(false);
        setIsInteractive(false);
      }
    };

    updateAvailability();
    cursorMedia.addEventListener("change", updateAvailability);

    return () => cursorMedia.removeEventListener("change", updateAvailability);
  }, []);

  useEffect(() => {
    if (!isEnabled) return;

    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;

      pointerX.set(event.clientX);
      pointerY.set(event.clientY);

      const target = event.target instanceof Element ? event.target : null;
      const isOverTextInput = Boolean(target?.closest(TEXT_INPUT_SELECTOR));

      setIsVisible(!isOverTextInput);
      setIsInteractive(Boolean(target?.closest(INTERACTIVE_SELECTOR)));
    };

    const hideHalo = () => {
      setIsVisible(false);
      setIsInteractive(false);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("blur", hideHalo);
    document.documentElement.addEventListener("pointerleave", hideHalo);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("blur", hideHalo);
      document.documentElement.removeEventListener("pointerleave", hideHalo);
    };
  }, [isEnabled, pointerX, pointerY]);

  if (!isEnabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[100]"
      style={{ x: smoothX, y: smoothY }}
    >
      <span
        className={`block -translate-x-1/2 -translate-y-1/2 rounded-full border shadow-[0_0_24px_color-mix(in_oklab,var(--color-primary)_28%,transparent)] backdrop-blur-[1px] transition-[width,height,opacity,background-color,border-color] duration-200 ease-out ${
          isInteractive
            ? "h-11 w-11 border-primary/85 bg-primary/18"
            : "h-7 w-7 border-primary/60 bg-primary/8"
        } ${isVisible ? "opacity-100" : "opacity-0"}`}
      />
    </motion.div>
  );
}
