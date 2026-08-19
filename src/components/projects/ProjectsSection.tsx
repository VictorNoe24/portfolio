import { AnimatePresence, useInView } from "framer-motion";
import { useRef } from "react";

import type { Locale } from "../../i18n/config";
import { getSectionId } from "../../data/site";
import { useProjectGallery } from "../../hooks/useProjectGallery";
import { SectionGlow } from "../ui/SectionGlow";
import { ProjectModal } from "./ProjectModal";
import { ProjectsHeader } from "./ProjectsHeader";
import { ProjectsLandingGrid } from "./ProjectsLandingGrid";

interface ProjectsSectionProps {
  locale: Locale;
}

export function ProjectsSection({ locale }: ProjectsSectionProps) {
  const sectionId = getSectionId(locale, "projects");
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
      <section id={sectionId} className="relative py-20 lg:py-32">
        <SectionGlow accent="chart-4" anchor="left" />
        <div ref={containerRef} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ProjectsHeader isInView={isInView} locale={locale} />
          <ProjectsLandingGrid locale={locale} onSelectProject={openProject} />
        </div>
      </section>

      <AnimatePresence>
        {selectedProject ? (
          <ProjectModal
            locale={locale}
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
