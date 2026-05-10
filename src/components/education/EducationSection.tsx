import { useInView } from "framer-motion";
import { useRef } from "react";

import { SectionGlow } from "../ui/SectionGlow";
import { EducationHeader } from "./EducationHeader";
import { EducationKnowledge } from "./EducationKnowledge";
import { EducationTimeline } from "./EducationTimeline";

export function EducationSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="educacion" className="relative py-20 lg:py-32">
      <SectionGlow accent="chart-2" anchor="right" />
      <div ref={containerRef} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <EducationHeader isInView={isInView} />

        <div className="mt-12 grid gap-12 lg:mt-16 lg:grid-cols-2">
          <EducationTimeline isInView={isInView} />
          <EducationKnowledge isInView={isInView} />
        </div>
      </div>
    </section>
  );
}
