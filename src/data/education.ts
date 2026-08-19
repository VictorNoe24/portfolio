import type { Locale } from "../i18n/config";

export interface EducationItem {
  degree: string;
  description: string;
  institution: string;
  location: string;
  note?: string;
  period: string;
  type: string;
}

export interface EducationStat {
  label: string;
  suffix?: string;
  value: number;
}

interface EducationContent {
  academicTitle: string;
  continuousLearningDescription: string;
  continuousLearningTitle: string;
  description: string;
  eyebrow: string;
  knowledgeTitle: string;
  title: string;
}

const EDUCATION_CONTENT: Record<Locale, EducationContent> = {
  es: {
    eyebrow: "Educación",
    title: "Formación académica",
    description:
      "Mi camino educativo me ha proporcionado las bases técnicas y teóricas para mi carrera profesional.",
    knowledgeTitle: "Áreas de conocimiento",
    continuousLearningTitle: "Aprendizaje continuo",
    continuousLearningDescription:
      "Además de mi formación académica formal, mantengo un compromiso constante con el aprendizaje autodidacta, manteniéndome actualizado con las últimas tecnologías y mejores prácticas de la industria del desarrollo de software.",
    academicTitle: "Títulos académicos"
  },
  en: {
    eyebrow: "Education",
    title: "Academic background",
    description:
      "My educational path has given me the technical and theoretical foundations for my professional career.",
    knowledgeTitle: "Knowledge areas",
    continuousLearningTitle: "Continuous learning",
    continuousLearningDescription:
      "Beyond my formal academic background, I maintain a constant commitment to self-directed learning, staying current with the latest technologies and software development best practices.",
    academicTitle: "Academic degrees"
  }
};

const EDUCATION_ITEMS: Record<Locale, EducationItem[]> = {
  es: [
    {
      degree: "Ingeniería en Desarrollo y Gestión de Software",
      institution: "Universidad Tecnológica Emiliano Zapata",
      period: "2023 - Abr 2025",
      location: "Cuernavaca, Morelos, México",
      description:
        "Formación avanzada en desarrollo de software, arquitectura de sistemas, gestión de proyectos y liderazgo técnico.",
      type: "ING",
      note: "Proyecto escolar"
    },
    {
      degree: "TSU en Desarrollo de Software Multiplataforma",
      institution: "Universidad Tecnológica Emiliano Zapata",
      period: "2021 - Ago 2023",
      location: "Cuernavaca, Morelos, México",
      description:
        "Fundamentos sólidos en programación, desarrollo web, aplicaciones móviles y bases de datos.",
      type: "TSU",
      note: "Proyecto escolar"
    }
  ],
  en: [
    {
      degree: "Software Development and Management Engineering",
      institution: "Universidad Tecnológica Emiliano Zapata",
      period: "2023 - Apr 2025",
      location: "Cuernavaca, Morelos, Mexico",
      description:
        "Advanced training in software development, systems architecture, project management, and technical leadership.",
      type: "ENG",
      note: "Academic project"
    },
    {
      degree: "Higher University Technician in Multiplatform Software Development",
      institution: "Universidad Tecnológica Emiliano Zapata",
      period: "2021 - Aug 2023",
      location: "Cuernavaca, Morelos, Mexico",
      description:
        "Strong foundations in programming, web development, mobile applications, and databases.",
      type: "TSU",
      note: "Academic project"
    }
  ]
};

const CERTIFICATIONS: Record<Locale, string[]> = {
  es: [
    "Desarrollo Full Stack con Laravel",
    "React & Vue.js Frontend Development",
    "Flutter Mobile Development",
    "Bases de Datos SQL Avanzado",
    "Metodologías ágiles (Scrum)",
    "Diseño UX/UI con Figma"
  ],
  en: [
    "Full Stack Development with Laravel",
    "React & Vue.js Frontend Development",
    "Flutter Mobile Development",
    "Advanced SQL Databases",
    "Agile methodologies (Scrum)",
    "UX/UI Design with Figma"
  ]
};

const EDUCATION_STATS: Record<Locale, EducationStat[]> = {
  es: [
    { value: 100, suffix: "+", label: "Horas de cursos" },
    { value: 10, suffix: "+", label: "Tecnologías aprendidas" }
  ],
  en: [
    { value: 100, suffix: "+", label: "Learning hours" },
    { value: 10, suffix: "+", label: "Technologies learned" }
  ]
};

export function getEducationContent(locale: Locale): EducationContent {
  return EDUCATION_CONTENT[locale];
}

export function getEducationItems(locale: Locale): EducationItem[] {
  return EDUCATION_ITEMS[locale];
}

export function getCertifications(locale: Locale): string[] {
  return CERTIFICATIONS[locale];
}

export function getEducationStats(locale: Locale): EducationStat[] {
  return EDUCATION_STATS[locale];
}
