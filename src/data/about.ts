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
  eyebrow: "Sobre Mi",
  title: "Construyendo soluciones digitales con pasion y precision",
  paragraphs: [
    "Soy Victor Noe Flores Toledo, Desarrollador de Software Full Stack con experiencia en el desarrollo de aplicaciones web, APIs REST y sistemas internos orientados a la optimizacion de procesos empresariales.",
    "Mi trabajo se centra en la interseccion del diseno y el desarrollo, creando experiencias que no solo lucen bien sino que estan meticulosamente construidas para el rendimiento y la usabilidad.",
    "Actualmente me enfoco en construir soluciones escalables, mantenibles y funcionales, con atencion a la calidad del codigo, rendimiento y experiencia de usuario. Me especializo en tecnologias como Laravel, React, Vue, Angular y Flutter."
  ]
};

export const aboutStats: AboutStat[] = [
  { value: 3, suffix: "+", label: "Años de experiencia" },
  { value: 10, suffix: "+", label: "Proyectos completados" },
  { value: 5, suffix: "+", label: "Tecnologias dominadas" }
];

export const aboutHighlights: AboutHighlight[] = [
  {
    icon: Code2,
    title: "Desarrollo Full Stack",
    description:
      "Backend con Laravel, PHP, Spring Boot y Node.js. Frontend con React, Vue, Angular y mas."
  },
  {
    icon: Palette,
    title: "Diseno UX/UI",
    description:
      "Diseno de interfaces en Figma, creando flujos de usuario intuitivos y experiencias memorables."
  },
  {
    icon: Rocket,
    title: "Apps Moviles",
    description:
      "Desarrollo de aplicaciones moviles con Flutter y React Native para iOS y Android."
  },
  {
    icon: Users,
    title: "Liderazgo Tecnico",
    description:
      "Experiencia liderando equipos multidisciplinarios y coordinando proyectos de software."
  }
];
