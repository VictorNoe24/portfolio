import {
  Code2,
  Database,
  Server,
  Smartphone,
  Wrench
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface SkillItem {
  iconSlug: string;
  iconWrapperClassName?: string;
  name: string;
}

export interface SkillCategory {
  icon: LucideIcon;
  skills: SkillItem[];
  title: string;
}

export const skillsContent = {
  description:
    "Las tecnologías y herramientas que domino para construir soluciones completas de principio a fin.",
  eyebrow: "Habilidades",
  title: "Stack tecnológico"
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Backend",
    icon: Server,
    skills: [
      { name: "Laravel", iconSlug: "laravel" },
      { name: "PHP", iconSlug: "php" },
      { name: "Node.js", iconSlug: "nodedotjs" },
      { name: "Spring Boot", iconSlug: "springboot" },
      {
        name: "Express",
        iconSlug: "express",
        iconWrapperClassName: "rounded-xl bg-white/90 p-2"
      },
      { name: "NestJS", iconSlug: "nestjs" }
    ]
  },
  {
    title: "Frontend",
    icon: Code2,
    skills: [
      { name: "Astro", iconSlug: "astro" },
      {
        name: "Next.js",
        iconSlug: "nextdotjs",
        iconWrapperClassName: "rounded-xl bg-white/90 p-2"
      },
      { name: "React", iconSlug: "react" },
      { name: "Vue.js", iconSlug: "vuedotjs" },
      { name: "JavaScript", iconSlug: "javascript" },
      { name: "TypeScript", iconSlug: "typescript" }
    ]
  },
  {
    title: "Mobile",
    icon: Smartphone,
    skills: [
      { name: "Flutter", iconSlug: "flutter" },
      { name: "React Native", iconSlug: "react" },
      { name: "Dart", iconSlug: "dart" },
      { name: "Android", iconSlug: "android" }
    ]
  },
  {
    title: "Bases de Datos",
    icon: Database,
    skills: [
      { name: "MySQL", iconSlug: "mysql" },
      { name: "PostgreSQL", iconSlug: "postgresql" },
      { name: "Firebase", iconSlug: "firebase" },
      { name: "SQLite", iconSlug: "sqlite" }
    ]
  },
  {
    title: "Herramientas",
    icon: Wrench,
    skills: [
      { name: "Git", iconSlug: "git" },
      { name: "Docker", iconSlug: "docker" },
      { name: "Jira", iconSlug: "jira" },
      { name: "Figma", iconSlug: "figma" },
      { name: "Postman", iconSlug: "postman" },
      { name: "n8n", iconSlug: "n8n" }
    ]
  },
];

export const techLogos: string[] = [
  "Laravel",
  "NestJS",
  "Astro",
  "Next.js",
  "React",
  "Vue.js",
  "Flutter",
  "Node.js",
  "PHP",
  "JavaScript",
  "TypeScript",
  "MySQL",
  "PostgreSQL",
  "Git",
  "Docker",
  "Figma",
  "Spring Boot",
  "Firebase"
];
