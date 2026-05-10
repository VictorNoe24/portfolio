import { projects } from "../../data/projects";
import type { Project } from "../../data/projects";
import { ProjectCard } from "./ProjectCard";

interface ProjectsGridProps {
  onSelectProject: (project: Project) => void;
}

export function ProjectsGrid({ onSelectProject }: ProjectsGridProps) {
  const featuredProject = projects.find((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <div className="mt-12 grid gap-6 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
      {featuredProject ? (
        <ProjectCard
          project={featuredProject}
          onClick={() => onSelectProject(featuredProject)}
          featured
        />
      ) : null}

      {otherProjects.map((project, index) => (
        <ProjectCard
          key={project.id}
          project={project}
          onClick={() => onSelectProject(project)}
          index={index}
        />
      ))}
    </div>
  );
}
