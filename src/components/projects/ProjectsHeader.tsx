import { motion } from "framer-motion";

import type { Locale } from "../../i18n/config";
import { getProjectsContent } from "../../data/projects";

interface ProjectsHeaderProps {
  isInView: boolean;
  locale: Locale;
}

export function ProjectsHeader({ isInView, locale }: ProjectsHeaderProps) {
  const projectsContent = getProjectsContent(locale);
  return (
    <motion.div
      className="max-w-3xl"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      <span className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
        {projectsContent.eyebrow}
      </span>
      <h2 className="mt-4 text-balance text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
        {projectsContent.title}
      </h2>
      <p className="mt-4 text-lg text-muted-foreground">{projectsContent.description}</p>
    </motion.div>
  );
}
