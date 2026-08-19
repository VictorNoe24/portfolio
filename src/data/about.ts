import { Code2, Palette, Rocket, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import type { Locale } from "../i18n/config";

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

interface AboutContent {
  eyebrow: string;
  paragraphs: string[];
  title: string;
}

const ABOUT_CONTENT: Record<Locale, AboutContent> = {
  es: {
    eyebrow: "Sobre mí",
    title: "Construyendo soluciones digitales con pasión y precisión",
    paragraphs: [
      "Soy Víctor Noé Flores Toledo, desarrollador de software Full Stack con experiencia en el desarrollo de aplicaciones web, APIs REST y sistemas internos orientados a la optimización de procesos empresariales.",
      "Mi trabajo se centra en la intersección del diseño y el desarrollo, creando experiencias que no solo lucen bien, sino que están meticulosamente construidas para el rendimiento y la usabilidad.",
      "Actualmente me enfoco en construir soluciones escalables, mantenibles y funcionales, con atención a la calidad del código, el rendimiento y la experiencia de usuario. Me especializo en tecnologías como Laravel, React, Vue, Angular y Flutter."
    ]
  },
  en: {
    eyebrow: "About me",
    title: "Building digital solutions with passion and precision",
    paragraphs: [
      "I'm Víctor Noé Flores Toledo, a Full Stack software developer with experience building web applications, REST APIs, and internal systems focused on optimizing business processes.",
      "My work sits at the intersection of design and development, creating experiences that not only look great but are meticulously crafted for performance and usability.",
      "I'm currently focused on building scalable, maintainable, and functional solutions with strong attention to code quality, performance, and user experience. I specialize in technologies such as Laravel, React, Vue, Angular, and Flutter."
    ]
  }
};

const ABOUT_STATS: Record<Locale, AboutStat[]> = {
  es: [
    { value: 3, suffix: "+", label: "Años de experiencia" },
    { value: 10, suffix: "+", label: "Proyectos completados" },
    { value: 5, suffix: "+", label: "Tecnologías dominadas" }
  ],
  en: [
    { value: 3, suffix: "+", label: "Years of experience" },
    { value: 10, suffix: "+", label: "Completed projects" },
    { value: 5, suffix: "+", label: "Core technologies" }
  ]
};

const ABOUT_HIGHLIGHTS: Record<Locale, AboutHighlight[]> = {
  es: [
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
  ],
  en: [
    {
      icon: Code2,
      title: "Full Stack development",
      description:
        "Backend with Laravel, PHP, Spring Boot, and Node.js. Frontend with React, Vue, Angular, and more."
    },
    {
      icon: Palette,
      title: "UX/UI design",
      description:
        "Interface design in Figma, crafting intuitive user flows and memorable product experiences."
    },
    {
      icon: Rocket,
      title: "Mobile apps",
      description:
        "Mobile application development with Flutter and React Native for iOS and Android."
    },
    {
      icon: Users,
      title: "Technical leadership",
      description:
        "Experience leading multidisciplinary teams and coordinating software delivery."
    }
  ]
};

export function getAboutContent(locale: Locale): AboutContent {
  return ABOUT_CONTENT[locale];
}

export function getAboutStats(locale: Locale): AboutStat[] {
  return ABOUT_STATS[locale];
}

export function getAboutHighlights(locale: Locale): AboutHighlight[] {
  return ABOUT_HIGHLIGHTS[locale];
}
