import { useRef } from "react";
import { useInView } from "framer-motion";

import type { Locale } from "../../i18n/config";
import { getSectionId } from "../../data/site";
import { SectionGlow } from "../ui/SectionGlow";
import { ExperienceHeader } from "./ExperienceHeader";
import { ExperienceTimeline } from "./ExperienceTimeline";

interface ExperienceSectionProps {
  locale: Locale;
}

export function ExperienceSection({ locale }: ExperienceSectionProps) {
  const sectionId = getSectionId(locale, "experience");
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id={sectionId} className="relative bg-card/50 py-20 lg:py-32">
      <SectionGlow accent="primary" anchor="right" />
      <div ref={containerRef} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ExperienceHeader isInView={isInView} locale={locale} />
        <ExperienceTimeline isInView={isInView} locale={locale} />
      </div>
    </section>
  );
}
