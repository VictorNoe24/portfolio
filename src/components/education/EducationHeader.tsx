import { motion } from "framer-motion";

import { educationContent } from "../../data/education";

interface EducationHeaderProps {
  isInView: boolean;
}

export function EducationHeader({ isInView }: EducationHeaderProps) {
  return (
    <motion.div
      className="max-w-3xl"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      <span className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
        {educationContent.eyebrow}
      </span>
      <h2 className="mt-4 text-balance text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
        {educationContent.title}
      </h2>
      <p className="mt-4 text-lg text-muted-foreground">{educationContent.description}</p>
    </motion.div>
  );
}
