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
  eyebrow: "Educacion",
  title: "Formacion academica",
  description:
    "Mi camino educativo que me ha proporcionado las bases tecnicas y teoricas para mi carrera profesional.",
  knowledgeTitle: "Areas de Conocimiento",
  continuousLearningTitle: "Aprendizaje Continuo",
  continuousLearningDescription:
    "Ademas de mi formacion academica formal, mantengo un compromiso constante con el aprendizaje autodidacta, manteniendome actualizado con las ultimas tecnologias y mejores practicas de la industria del desarrollo de software.",
  academicTitle: "Titulos Academicos"
};

export const educationItems: EducationItem[] = [
  {
    degree: "Ingenieria en Desarrollo y Gestion de Software",
    institution: "Universidad Tecnologica Emiliano Zapata",
    period: "2023 - Abr 2025",
    location: "Cuernavaca, Morelos, Mexico",
    description:
      "Formacion avanzada en desarrollo de software, arquitectura de sistemas, gestion de proyectos y liderazgo tecnico.",
    type: "ING",
    note: "Proyecto escolar"
  },
  {
    degree: "TSU en Desarrollo de Software Multiplataforma",
    institution: "Universidad Tecnologica Emiliano Zapata",
    period: "2021 - Ago 2023",
    location: "Cuernavaca, Morelos, Mexico",
    description:
      "Fundamentos solidos en programacion, desarrollo web, aplicaciones moviles y bases de datos.",
    type: "TSU",
    note: "Proyecto escolar"
  }
];

export const certifications: string[] = [
  "Desarrollo Full Stack con Laravel",
  "React & Vue.js Frontend Development",
  "Flutter Mobile Development",
  "Bases de Datos SQL Avanzado",
  "Metodologias Agiles (Scrum)",
  "Diseño UX/UI con Figma"
];

export const educationStats: EducationStat[] = [
  { value: 100, suffix: "+", label: "Horas de cursos" },
  { value: 10, suffix: "+", label: "Tecnologias aprendidas" }
];
