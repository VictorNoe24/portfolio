import { motion } from "framer-motion";

import { projectsContent } from "../../data/projects";

interface ProjectsHeaderProps {
  isInView: boolean;
}

export function ProjectsHeader({ isInView }: ProjectsHeaderProps) {
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
