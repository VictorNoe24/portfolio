import {
  Code2,
  Database,
  Server,
  Smartphone,
  Sparkles,
  Wrench
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface SkillItem {
  level: number;
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
      { name: "Laravel", level: 95 },
      { name: "PHP", level: 90 },
      { name: "Node.js", level: 80 },
      { name: "Spring Boot", level: 75 },
      { name: "APIs REST", level: 95 }
    ]
  },
  {
    title: "Frontend",
    icon: Code2,
    skills: [
      { name: "React", level: 90 },
      { name: "Vue.js", level: 85 },
      { name: "Angular", level: 80 },
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 85 }
    ]
  },
  {
    title: "Mobile",
    icon: Smartphone,
    skills: [
      { name: "Flutter", level: 85 },
      { name: "React Native", level: 75 },
      { name: "Dart", level: 85 }
    ]
  },
  {
    title: "Bases de Datos",
    icon: Database,
    skills: [
      { name: "MySQL", level: 90 },
      { name: "PostgreSQL", level: 85 },
      { name: "Firebase", level: 80 },
      { name: "SQLite", level: 80 }
    ]
  },
  {
    title: "Herramientas",
    icon: Wrench,
    skills: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 75 },
      { name: "Jira", level: 85 },
      { name: "Figma", level: 80 },
      { name: "Postman", level: 90 }
    ]
  },
  {
    title: "Buenas prácticas",
    icon: Sparkles,
    skills: [
      { name: "Código limpio", level: 90 },
      { name: "MVC Architecture", level: 95 },
      { name: "Testing", level: 75 },
      { name: "Documentación", level: 85 }
    ]
  }
];

export const techLogos: string[] = [
  "Laravel",
  "React",
  "Vue.js",
  "Angular",
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
