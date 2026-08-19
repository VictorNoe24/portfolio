import { useInView } from "framer-motion";
import { useRef } from "react";

import type { Locale } from "../../i18n/config";
import { getSectionId } from "../../data/site";
import { SectionGlow } from "../ui/SectionGlow";
import { EducationHeader } from "./EducationHeader";
import { EducationKnowledge } from "./EducationKnowledge";
import { EducationTimeline } from "./EducationTimeline";

interface EducationSectionProps {
  locale: Locale;
}

export function EducationSection({ locale }: EducationSectionProps) {
  const sectionId = getSectionId(locale, "education");
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id={sectionId} className="relative py-20 lg:py-32">
      <SectionGlow accent="chart-2" anchor="right" />
      <div ref={containerRef} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <EducationHeader isInView={isInView} locale={locale} />

        <div className="mt-12 grid gap-12 lg:mt-16 lg:grid-cols-2">
          <EducationTimeline isInView={isInView} locale={locale} />
          <EducationKnowledge isInView={isInView} locale={locale} />
        </div>
      </div>
    </section>
  );
}
