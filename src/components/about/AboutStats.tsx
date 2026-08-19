import { motion } from "framer-motion";

import type { Locale } from "../../i18n/config";
import { getAboutStats } from "../../data/about";
import { AnimatedCounter } from "./AnimatedCounter";

interface AboutStatsProps {
  isInView: boolean;
  locale: Locale;
}

export function AboutStats({ isInView, locale }: AboutStatsProps) {
  const aboutStats = getAboutStats(locale);
  return (
    <motion.div
      className="grid grid-cols-3 gap-6 border-t border-border pt-6"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      {aboutStats.map((stat) => (
        <div key={stat.label}>
          <AnimatedCounter value={stat.value} suffix={stat.suffix} />
          <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
        </div>
      ))}
    </motion.div>
  );
}
