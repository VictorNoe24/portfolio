import { useRef } from "react";
import { useInView } from "framer-motion";

import { ExperienceHeader } from "./ExperienceHeader";
import { ExperienceTimeline } from "./ExperienceTimeline";

export function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="experiencia" className="bg-card/50 py-20 lg:py-32">
      <div ref={containerRef} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ExperienceHeader isInView={isInView} />
        <ExperienceTimeline isInView={isInView} />
      </div>
    </section>
  );
}
