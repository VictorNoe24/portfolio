import { motion } from "framer-motion";

import { techLogos } from "../../data/skills";

export function SkillsMarquee() {
  const repeatedTechLogos = [...techLogos, ...techLogos, ...techLogos];

  return (
    <div className="relative mt-16 overflow-hidden">
      <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-20 bg-gradient-to-r from-card/50 to-transparent" />
      <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-20 bg-gradient-to-l from-card/50 to-transparent" />

      <motion.div
        className="flex gap-4"
        animate={{ x: [0, -1200] }}
        transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      >
        {repeatedTechLogos.map((technology, index) => (
          <motion.div
            key={`${technology}-${index}`}
            className="shrink-0 cursor-default rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
            whileHover={{ scale: 1.05, y: -2 }}
          >
            {technology}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
