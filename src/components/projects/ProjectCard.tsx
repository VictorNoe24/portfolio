import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

import type { Project } from "../../data/projects";
import {
  projectsTechItemVariants,
  projectsTechVariants
} from "./projects.motion";
import { ProjectPreview } from "./ProjectPreview";

interface ProjectCardProps {
  featured?: boolean;
  index?: number;
  onClick: () => void;
  project: Project;
}

export function ProjectCard({
  featured = false,
  index = 0,
  onClick,
  project
}: ProjectCardProps) {
  const Icon = project.icon;

  if (featured) {
    return (
      <motion.div
        onClick={onClick}
        className="group relative col-span-full cursor-pointer overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:border-primary/50 lg:col-span-2"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        whileHover={{ y: -5 }}
      >
        <div className="grid lg:grid-cols-2">
          <div className="relative aspect-video overflow-hidden lg:h-full lg:aspect-auto">
            <motion.div className="absolute inset-0" whileHover={{ scale: 1.05 }} transition={{ duration: 0.5 }}>
              <ProjectPreview
                alt={project.title}
                category={project.category}
                icon={Icon}
                src={project.thumbnail}
                title={project.title}
                className="h-full w-full object-cover"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent lg:bg-gradient-to-r" />
            <motion.div
              className="absolute left-4 top-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <span className="rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                Proyecto Destacado
              </span>
            </motion.div>
          </div>

          <div className="flex flex-col justify-center p-6 lg:p-8">
            <motion.div
              className="mb-4 flex items-center gap-3"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <motion.div
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Icon className="h-5 w-5 text-primary" />
              </motion.div>
              <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
                {project.category}
              </span>
            </motion.div>

            <h3 className="mb-3 text-xl font-bold text-foreground transition-colors group-hover:text-primary lg:text-2xl">
              {project.title}
            </h3>
            <p className="mb-4 line-clamp-3 text-sm text-muted-foreground">{project.description}</p>

            <motion.div
              className="mb-4 flex flex-wrap gap-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={projectsTechVariants}
            >
              {project.technologies.slice(0, 4).map((technology) => (
                <motion.span
                  key={technology}
                  className="rounded bg-secondary px-2 py-1 text-xs font-mono text-muted-foreground"
                  variants={projectsTechItemVariants}
                >
                  {technology}
                </motion.span>
              ))}
            </motion.div>

            <motion.div className="flex items-center gap-2 text-sm font-medium text-primary" whileHover={{ x: 5 }}>
              <span>Ver detalles</span>
              <ExternalLink className="h-4 w-4" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      onClick={onClick}
      className="group relative flex cursor-pointer flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, boxShadow: "0 20px 40px -20px rgba(0,0,0,0.3)" }}
    >
      <div className="mb-4 flex items-center justify-between">
        <motion.span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary" whileHover={{ scale: 1.05 }}>
          {project.category}
        </motion.span>
        <motion.div
          className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
        >
          <Icon className="h-5 w-5 text-primary" />
        </motion.div>
      </div>

      <h3 className="mb-2 text-xl font-bold text-foreground transition-colors group-hover:text-primary">
        {project.title}
      </h3>
      <p className="mb-4 flex-grow line-clamp-3 text-sm text-muted-foreground">{project.description}</p>

      <ul className="mb-4 space-y-1.5">
        {project.highlights.slice(0, 3).map((highlight, highlightIndex) => (
          <motion.li
            key={highlight}
            className="flex items-center gap-2 text-xs text-muted-foreground"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + highlightIndex * 0.05 }}
          >
            <span className="h-1 w-1 rounded-full bg-primary" />
            {highlight}
          </motion.li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2 border-t border-border pt-4">
        {project.technologies.slice(0, 3).map((technology) => (
          <span key={technology} className="text-xs font-mono text-muted-foreground">
            {technology}
          </span>
        ))}
        {project.technologies.length > 3 ? (
          <span className="text-xs font-mono text-primary">+{project.technologies.length - 3}</span>
        ) : null}
      </div>
    </motion.div>
  );
}
