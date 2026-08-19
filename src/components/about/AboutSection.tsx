import { useRef } from "react";
import { useInView } from "framer-motion";

import type { Locale } from "../../i18n/config";
import { SectionGlow } from "../ui/SectionGlow";
import { AboutBio } from "./AboutBio";
import { AboutHeader } from "./AboutHeader";
import { AboutHighlightsGrid } from "./AboutHighlightsGrid";

interface AboutSectionProps {
  locale: Locale;
}

export function AboutSection({ locale }: AboutSectionProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="sobre-mi" className="relative py-20 lg:py-32">
      <SectionGlow accent="chart-2" anchor="left" />
      <div ref={containerRef} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AboutHeader isInView={isInView} locale={locale} />

        <div className="mt-12 grid gap-12 lg:mt-16 lg:grid-cols-2 lg:gap-16">
          <AboutBio isInView={isInView} locale={locale} />
          <AboutHighlightsGrid isInView={isInView} locale={locale} />
        </div>
      </div>
    </section>
  );
}
