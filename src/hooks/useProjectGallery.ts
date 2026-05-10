import { useEffect, useState } from "react";

import type { Project } from "../data/projects";

interface UseProjectGalleryResult {
  closeProject: () => void;
  currentImageIndex: number;
  goToImage: (index: number) => void;
  nextImage: () => void;
  openProject: (project: Project) => void;
  previousImage: () => void;
  selectedProject: Project | null;
}

export function useProjectGallery(): UseProjectGalleryResult {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (!selectedProject) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);

  const openProject = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeProject = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (!selectedProject || selectedProject.images.length === 0) return;

    setCurrentImageIndex((previous) => (previous + 1) % selectedProject.images.length);
  };

  const previousImage = () => {
    if (!selectedProject || selectedProject.images.length === 0) return;

    setCurrentImageIndex((previous) =>
      (previous - 1 + selectedProject.images.length) % selectedProject.images.length
    );
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  return {
    closeProject,
    currentImageIndex,
    goToImage,
    nextImage,
    openProject,
    previousImage,
    selectedProject
  };
}
