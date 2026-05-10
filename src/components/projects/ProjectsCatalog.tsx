import { AnimatePresence } from "framer-motion";
import { startTransition, useDeferredValue, useMemo, useState } from "react";

import { projectCategories, projects } from "../../data/projects";
import type { Project } from "../../data/projects";
import { useProjectGallery } from "../../hooks/useProjectGallery";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";

export function ProjectsCatalog() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const deferredCategory = useDeferredValue(selectedCategory);
  const {
    closeProject,
    currentImageIndex,
    goToImage,
    nextImage,
    openProject,
    previousImage,
    selectedProject
  } = useProjectGallery();

  const filteredProjects = useMemo(() => {
    if (deferredCategory === "Todos") return projects;

    return projects.filter((project) => project.category === deferredCategory);
  }, [deferredCategory]);

  return (
    <>
      <div className="mt-10 flex flex-wrap gap-3 lg:mt-12">
        {projectCategories.map((category) => {
          const isActive = category === selectedCategory;

          return (
            <button
              key={category}
              type="button"
              onClick={() => {
                startTransition(() => {
                  setSelectedCategory(category);
                });
              }}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200 ${
                isActive
                  ? "border-primary bg-primary/12 text-primary"
                  : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => openProject(project)}
            featured={project.featured && deferredCategory === "Todos"}
            index={index}
          />
        ))}
      </div>

      <AnimatePresence>
        {selectedProject ? (
          <ProjectModal
            project={selectedProject}
            onClose={closeProject}
            currentImageIndex={currentImageIndex}
            goToImage={goToImage}
            nextImage={nextImage}
            previousImage={previousImage}
          />
        ) : null}
      </AnimatePresence>
    </>
  );
}
