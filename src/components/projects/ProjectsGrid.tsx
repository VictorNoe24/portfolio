import type { Locale } from "../../i18n/config";
import { getProjects } from "../../data/projects";
import type { Project } from "../../data/projects";
import { ProjectCard } from "./ProjectCard";

interface ProjectsGridProps {
  locale: Locale;
  onSelectProject: (project: Project) => void;
}

export function ProjectsGrid({ locale, onSelectProject }: ProjectsGridProps) {
  const projects = getProjects(locale);
  const featuredProject = projects.find((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <div className="mt-12 grid gap-6 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
      {featuredProject ? (
        <ProjectCard
          project={featuredProject}
          onClick={() => onSelectProject(featuredProject)}
          featured
          locale={locale}
        />
      ) : null}

      {otherProjects.map((project, index) => (
        <ProjectCard
          key={project.id}
          project={project}
          onClick={() => onSelectProject(project)}
          index={index}
          locale={locale}
        />
      ))}
    </div>
  );
}
