import { motion } from "framer-motion";

import { aboutContent } from "../../data/about";

interface AboutHeaderProps {
  isInView: boolean;
}

export function AboutHeader({ isInView }: AboutHeaderProps) {
  return (
    <motion.div
      className="max-w-3xl"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      <span className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
        {aboutContent.eyebrow}
      </span>
      <h2 className="mt-4 text-balance text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
        {aboutContent.title}
      </h2>
    </motion.div>
  );
}
