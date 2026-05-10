import { AnimatePresence, useInView } from "framer-motion";
import { useRef } from "react";

import { useProjectGallery } from "../../hooks/useProjectGallery";
import { ProjectModal } from "./ProjectModal";
import { ProjectsGrid } from "./ProjectsGrid";
import { ProjectsHeader } from "./ProjectsHeader";

export function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const {
    closeProject,
    currentImageIndex,
    goToImage,
    nextImage,
    openProject,
    previousImage,
    selectedProject
  } = useProjectGallery();

  return (
    <>
      <section id="proyectos" className="py-20 lg:py-32">
        <div ref={containerRef} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ProjectsHeader isInView={isInView} />
          <ProjectsGrid onSelectProject={openProject} />
        </div>
      </section>

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
