import { useRef } from "react";
import { useInView } from "framer-motion";

interface UseFooterStateResult {
  currentYear: number;
  footerRef: React.RefObject<HTMLElement | null>;
  isInView: boolean;
}

export function useFooterState(): UseFooterStateResult {
  const currentYear = new Date().getFullYear();
  const footerRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(footerRef, { once: true, margin: "-50px" });

  return {
    currentYear,
    footerRef,
    isInView
  };
}
