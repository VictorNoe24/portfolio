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

export const educationContent = {
  eyebrow: "Educación",
  title: "Formación académica",
  description:
    "Mi camino educativo me ha proporcionado las bases técnicas y teóricas para mi carrera profesional.",
  knowledgeTitle: "Áreas de conocimiento",
  continuousLearningTitle: "Aprendizaje continuo",
  continuousLearningDescription:
    "Además de mi formación académica formal, mantengo un compromiso constante con el aprendizaje autodidacta, manteniéndome actualizado con las últimas tecnologías y mejores prácticas de la industria del desarrollo de software.",
  academicTitle: "Títulos académicos"
};

export const educationItems: EducationItem[] = [
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
];

export const certifications: string[] = [
  "Desarrollo Full Stack con Laravel",
  "React & Vue.js Frontend Development",
  "Flutter Mobile Development",
  "Bases de Datos SQL Avanzado",
  "Metodologías ágiles (Scrum)",
  "Diseño UX/UI con Figma"
];

export const educationStats: EducationStat[] = [
  { value: 100, suffix: "+", label: "Horas de cursos" },
  { value: 10, suffix: "+", label: "Tecnologías aprendidas" }
];
