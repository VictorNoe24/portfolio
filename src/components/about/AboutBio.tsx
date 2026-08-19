import { motion } from "framer-motion";

import type { Locale } from "../../i18n/config";
import { getAboutContent } from "../../data/about";
import { AboutStats } from "./AboutStats";

interface AboutBioProps {
  isInView: boolean;
  locale: Locale;
}

export function AboutBio({ isInView, locale }: AboutBioProps) {
  const aboutContent = getAboutContent(locale);
  const [firstParagraph, secondParagraph] = aboutContent.paragraphs;

  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <p className="text-lg leading-relaxed text-muted-foreground">{firstParagraph}</p>

      <p className="text-lg leading-relaxed text-muted-foreground">{secondParagraph}</p>

      <p className="text-lg leading-relaxed text-muted-foreground">{aboutContent.paragraphs[2]}</p>

      <AboutStats isInView={isInView} locale={locale} />
    </motion.div>
  );
}
