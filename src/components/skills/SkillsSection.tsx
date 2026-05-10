import { useInView } from "framer-motion";
import { useRef } from "react";

import { SectionGlow } from "../ui/SectionGlow";
import { SkillsGrid } from "./SkillsGrid";
import { SkillsHeader } from "./SkillsHeader";
import { SkillsMarquee } from "./SkillsMarquee";

export function SkillsSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="habilidades" className="relative overflow-hidden bg-card/50 py-20 lg:py-32">
      <SectionGlow accent="primary" anchor="center" />
      <div ref={containerRef} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SkillsHeader isInView={isInView} />
        <SkillsGrid isInView={isInView} />
        <SkillsMarquee />
      </div>
    </section>
  );
}
