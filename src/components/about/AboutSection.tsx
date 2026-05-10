import { useRef } from "react";
import { useInView } from "framer-motion";

import { AboutBio } from "./AboutBio";
import { AboutHeader } from "./AboutHeader";
import { AboutHighlightsGrid } from "./AboutHighlightsGrid";

export function AboutSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="sobre-mi" className="relative py-20 lg:py-32">
      <div ref={containerRef} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AboutHeader isInView={isInView} />

        <div className="mt-12 grid gap-12 lg:mt-16 lg:grid-cols-2 lg:gap-16">
          <AboutBio isInView={isInView} />
          <AboutHighlightsGrid isInView={isInView} />
        </div>
      </div>
    </section>
  );
}
