import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  FolderGit2,
  X
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import type { Project } from "../../data/projects";
import { ButtonLink } from "../ui/Button";
import {
  projectModalListItemVariants,
  projectModalListVariants,
  projectsTechItemVariants,
  projectsTechVariants
} from "./projects.motion";
import { ProjectPreview } from "./ProjectPreview";

interface ProjectModalProps {
  currentImageIndex: number;
  goToImage: (index: number) => void;
  nextImage: () => void;
  onClose: () => void;
  previousImage: () => void;
  project: Project;
}

export function ProjectModal({
  currentImageIndex,
  goToImage,
  nextImage,
  onClose,
  previousImage,
  project
}: ProjectModalProps) {
  const hasImages = project.images.length > 0;
  const activeImage = hasImages ? project.images[currentImageIndex] : null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 p-4 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.button
        type="button"
        className="absolute inset-0 cursor-default"
        onClick={onClose}
        aria-label="Cerrar modal"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      <motion.div
        className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-2xl border border-border bg-card shadow-2xl"
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
      >
        <motion.button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full bg-background/80 p-2 transition-colors hover:bg-background"
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Cerrar"
        >
          <X className="h-5 w-5" />
        </motion.button>

        <div className="relative aspect-video overflow-hidden bg-secondary">
          {activeImage ? (
            <>
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${project.id}-${currentImageIndex}`}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0"
                >
                  <ProjectPreview
                    alt={activeImage.alt}
                    category={project.category}
                    icon={project.icon}
                    src={activeImage.src}
                    title={project.title}
                    className="h-full w-full object-cover"
                  />
                </motion.div>
              </AnimatePresence>

              {project.images.length > 1 ? (
                <>
                  <motion.button
                    type="button"
                    onClick={previousImage}
                    className="absolute left-4 top-1/2 rounded-full bg-background/80 p-2 transition-colors hover:bg-background"
                    whileHover={{ scale: 1.1, x: -2 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="Imagen anterior"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </motion.button>
                  <motion.button
                    type="button"
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 rounded-full bg-background/80 p-2 transition-colors hover:bg-background"
                    whileHover={{ scale: 1.1, x: 2 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="Siguiente imagen"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </motion.button>

                  <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
                    {project.images.map((image, index) => (
                      <motion.button
                        key={image.src}
                        type="button"
                        onClick={() => goToImage(index)}
                        className={`h-2 w-2 rounded-full transition-colors ${
                          index === currentImageIndex ? "bg-primary" : "bg-foreground/30"
                        }`}
                        whileHover={{ scale: 1.5 }}
                        animate={index === currentImageIndex ? { scale: 1.2 } : { scale: 1 }}
                        aria-label={`Ir a imagen ${index + 1}`}
                      />
                    ))}
                  </div>
                </>
              ) : null}

              <motion.div
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/80 to-transparent p-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <p className="text-sm text-foreground/80">{activeImage.alt}</p>
              </motion.div>
            </>
          ) : (
            <ProjectPreview
              alt={project.title}
              category={project.category}
              icon={project.icon}
              src={project.thumbnail}
              title={project.title}
              className="h-full w-full object-cover"
            />
          )}
        </div>

        <motion.div
          className="p-6 lg:p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="mb-4 flex items-center gap-3">
            <motion.span
              className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              {project.category}
            </motion.span>
          </div>

          <h3 className="mb-4 text-2xl font-bold text-foreground lg:text-3xl">{project.title}</h3>
          <p className="mb-6 text-muted-foreground">{project.longDescription}</p>

          <div className="mb-6">
            <h4 className="mb-3 text-sm font-semibold text-foreground">Funcionalidades Principales</h4>
            <motion.ul className="grid gap-2 sm:grid-cols-2" initial="hidden" animate="visible" variants={projectModalListVariants}>
              {project.highlights.map((highlight) => (
                <motion.li
                  key={highlight}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                  variants={projectModalListItemVariants}
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {highlight}
                </motion.li>
              ))}
            </motion.ul>
          </div>

          <div className="mb-6">
            <h4 className="mb-3 text-sm font-semibold text-foreground">Tecnologias Utilizadas</h4>
            <motion.div className="flex flex-wrap gap-2" initial="hidden" animate="visible" variants={projectsTechVariants}>
              {project.technologies.map((technology) => (
                <motion.span
                  key={technology}
                  className="rounded-full bg-secondary px-3 py-1 text-xs font-mono text-muted-foreground"
                  variants={projectsTechItemVariants}
                  whileHover={{ scale: 1.1 }}
                >
                  {technology}
                </motion.span>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="flex flex-wrap gap-3 border-t border-border pt-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {project.liveUrl ? (
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <ButtonLink href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Ver Proyecto
                </ButtonLink>
              </motion.div>
            ) : null}
            {project.githubUrl ? (
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <ButtonLink
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                >
                  <FolderGit2 className="mr-2 h-4 w-4" />
                  Ver Codigo
                </ButtonLink>
              </motion.div>
            ) : null}
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
