import { projects } from "../../data/projects";
import type { Project } from "../../data/projects";
import { ProjectsArchivePanel } from "./ProjectsArchivePanel";
import { ProjectCard } from "./ProjectCard";

interface ProjectsLandingGridProps {
  onSelectProject: (project: Project) => void;
}

export function ProjectsLandingGrid({
  onSelectProject
}: ProjectsLandingGridProps) {
  const featuredProject = projects.find((project) => project.featured);
  const supportingProjects = projects
    .filter((project) => !project.featured)
    .slice(0, 2);

  return (
    <div className="mt-12 grid gap-6 lg:mt-16 lg:grid-cols-[minmax(0,1.65fr)_minmax(320px,0.95fr)]">
      <div className="grid">
        {featuredProject ? (
          <ProjectCard
            project={featuredProject}
            onClick={() => onSelectProject(featuredProject)}
            featured
          />
        ) : null}

        <div className="grid gap-6 md:grid-cols-2 mt-6">
          {supportingProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => onSelectProject(project)}
              index={index}
            />
          ))}
        </div>
      </div>

      <div className="lg:sticky lg:top-28 lg:self-start">
        <ProjectsArchivePanel />
      </div>
    </div>
  );
}
