import { useRef } from "react";
import { useInView } from "framer-motion";

export function useFooterState() {
  const currentYear = new Date().getFullYear();
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, margin: "-50px" });

  return {
    currentYear,
    footerRef,
    isInView
  };
}
