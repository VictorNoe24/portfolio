import { motion } from "framer-motion";

import type { Locale } from "../../i18n/config";
import { getAboutHighlights } from "../../data/about";
import { aboutCardVariants, aboutContainerVariants } from "./about.motion";

interface AboutHighlightsGridProps {
  isInView: boolean;
  locale: Locale;
}

export function AboutHighlightsGrid({ isInView, locale }: AboutHighlightsGridProps) {
  const aboutHighlights = getAboutHighlights(locale);
  return (
    <motion.div
      className="grid gap-4 sm:grid-cols-2"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={aboutContainerVariants}
    >
      {aboutHighlights.map((item) => (
        <motion.div
          key={item.title}
          className="group cursor-pointer rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50"
          variants={aboutCardVariants}
          whileHover={{
            y: -5,
            scale: 1.02,
            transition: { duration: 0.2 }
          }}
          whileTap={{ scale: 0.98 }}
        >
          <motion.div
            className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20"
            whileHover={{ rotate: [0, -10, 10, 0] }}
            transition={{ duration: 0.5 }}
          >
            <item.icon className="h-6 w-6 text-primary" />
          </motion.div>

          <h3 className="mb-2 text-lg font-semibold text-foreground">{item.title}</h3>
          <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}
