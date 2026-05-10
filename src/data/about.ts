import { Code2, Palette, Rocket, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface AboutHighlight {
  description: string;
  icon: LucideIcon;
  title: string;
}

export interface AboutStat {
  label: string;
  suffix?: string;
  value: number;
}

export const aboutContent = {
  eyebrow: "Sobre mí",
  title: "Construyendo soluciones digitales con pasión y precisión",
  paragraphs: [
    "Soy Víctor Noé Flores Toledo, desarrollador de software Full Stack con experiencia en el desarrollo de aplicaciones web, APIs REST y sistemas internos orientados a la optimización de procesos empresariales.",
    "Mi trabajo se centra en la intersección del diseño y el desarrollo, creando experiencias que no solo lucen bien, sino que están meticulosamente construidas para el rendimiento y la usabilidad.",
    "Actualmente me enfoco en construir soluciones escalables, mantenibles y funcionales, con atención a la calidad del código, el rendimiento y la experiencia de usuario. Me especializo en tecnologías como Laravel, React, Vue, Angular y Flutter."
  ]
};

export const aboutStats: AboutStat[] = [
  { value: 3, suffix: "+", label: "Años de experiencia" },
  { value: 10, suffix: "+", label: "Proyectos completados" },
  { value: 5, suffix: "+", label: "Tecnologías dominadas" }
];

export const aboutHighlights: AboutHighlight[] = [
  {
    icon: Code2,
    title: "Desarrollo Full Stack",
    description:
      "Backend con Laravel, PHP, Spring Boot y Node.js. Frontend con React, Vue, Angular y más."
  },
  {
    icon: Palette,
    title: "Diseño UX/UI",
    description:
      "Diseño de interfaces en Figma, creando flujos de usuario intuitivos y experiencias memorables."
  },
  {
    icon: Rocket,
    title: "Apps móviles",
    description:
      "Desarrollo de aplicaciones móviles con Flutter y React Native para iOS y Android."
  },
  {
    icon: Users,
    title: "Liderazgo técnico",
    description:
      "Experiencia liderando equipos multidisciplinarios y coordinando proyectos de software."
  }
];
