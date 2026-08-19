import { Code2, Database, Server, Smartphone, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import type { Locale } from "../i18n/config";

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

interface SkillsContent {
  description: string;
  eyebrow: string;
  title: string;
}

const SKILLS_CONTENT: Record<Locale, SkillsContent> = {
  es: {
    description:
      "Las tecnologías y herramientas que domino para construir soluciones completas de principio a fin.",
    eyebrow: "Habilidades",
    title: "Stack tecnológico"
  },
  en: {
    description:
      "The technologies and tools I use to build complete end-to-end solutions.",
    eyebrow: "Skills",
    title: "Technology stack"
  }
};

const BASE_SKILL_ITEMS = {
  backend: [
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
  ],
  frontend: [
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
  ],
  mobile: [
    { name: "Flutter", iconSlug: "flutter" },
    { name: "React Native", iconSlug: "react" },
    { name: "Dart", iconSlug: "dart" },
    { name: "Android", iconSlug: "android" }
  ],
  data: [
    { name: "MySQL", iconSlug: "mysql" },
    { name: "PostgreSQL", iconSlug: "postgresql" },
    { name: "Firebase", iconSlug: "firebase" },
    { name: "SQLite", iconSlug: "sqlite" }
  ],
  tools: [
    { name: "Git", iconSlug: "git" },
    { name: "Docker", iconSlug: "docker" },
    { name: "Jira", iconSlug: "jira" },
    { name: "Figma", iconSlug: "figma" },
    { name: "Postman", iconSlug: "postman" },
    { name: "n8n", iconSlug: "n8n" }
  ]
};

const SKILL_CATEGORIES: Record<Locale, SkillCategory[]> = {
  es: [
    { title: "Backend", icon: Server, skills: BASE_SKILL_ITEMS.backend },
    { title: "Frontend", icon: Code2, skills: BASE_SKILL_ITEMS.frontend },
    { title: "Mobile", icon: Smartphone, skills: BASE_SKILL_ITEMS.mobile },
    { title: "Bases de datos", icon: Database, skills: BASE_SKILL_ITEMS.data },
    { title: "Herramientas", icon: Wrench, skills: BASE_SKILL_ITEMS.tools }
  ],
  en: [
    { title: "Backend", icon: Server, skills: BASE_SKILL_ITEMS.backend },
    { title: "Frontend", icon: Code2, skills: BASE_SKILL_ITEMS.frontend },
    { title: "Mobile", icon: Smartphone, skills: BASE_SKILL_ITEMS.mobile },
    { title: "Databases", icon: Database, skills: BASE_SKILL_ITEMS.data },
    { title: "Tools", icon: Wrench, skills: BASE_SKILL_ITEMS.tools }
  ]
};

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

export function getSkillsContent(locale: Locale): SkillsContent {
  return SKILLS_CONTENT[locale];
}

export function getSkillCategories(locale: Locale): SkillCategory[] {
  return SKILL_CATEGORIES[locale];
}
