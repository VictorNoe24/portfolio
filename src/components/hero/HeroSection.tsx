import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import type { Locale } from "../../i18n/config";
import { getSectionId } from "../../data/site";
import { HeroBackground } from "./HeroBackground";
import { HeroContent } from "./HeroContent";
import { HeroProfile } from "./HeroProfile";
import { HeroScrollIndicator } from "./HeroScrollIndicator";

interface HeroSectionProps {
  locale: Locale;
}

export function HeroSection({ locale }: HeroSectionProps) {
  const sectionId = getSectionId(locale, "home");
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -48]);

  return (
    <section
      ref={sectionRef}
      id={sectionId}
      className="relative flex min-h-[calc(100svh-4rem)] items-center justify-center overflow-hidden lg:min-h-[calc(100svh-5rem)]"
    >
      <HeroBackground target={sectionRef} />

      <motion.div
        className="relative z-10 mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-32"
        style={{ y: contentY }}
      >
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <HeroContent locale={locale} />
          <HeroProfile locale={locale} />
        </div>

        <HeroScrollIndicator locale={locale} />
      </motion.div>
    </section>
  );
}
