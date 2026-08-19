import { motion } from "framer-motion";

import type { Locale } from "../../i18n/config";
import { getExperienceContent } from "../../data/experience";

interface ExperienceHeaderProps {
  isInView: boolean;
  locale: Locale;
}

export function ExperienceHeader({ isInView, locale }: ExperienceHeaderProps) {
  const experienceContent = getExperienceContent(locale);
  return (
    <motion.div
      className="max-w-3xl"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      <span className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
        {experienceContent.eyebrow}
      </span>
      <h2 className="mt-4 text-balance text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
        {experienceContent.title}
      </h2>
      <p className="mt-4 text-lg text-muted-foreground">{experienceContent.description}</p>
    </motion.div>
  );
}
