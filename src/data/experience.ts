export interface ExperienceItem {
  achievements: string[];
  company: string;
  description: string;
  location: string;
  period: string;
  role: string;
  technologies: string[];
}

export const experienceContent = {
  eyebrow: "Experiencia",
  title: "Mi trayectoria profesional",
  description:
    "Un recorrido por las empresas y proyectos donde he contribuido a crear soluciones tecnologicas impactantes."
};

export const experiences: ExperienceItem[] = [
  {
    company: "Au Pair Mexico",
    role: "Desarrollador Full Stack",
    period: "Dic 2024 - Presente",
    location: "Cuernavaca, Morelos, Mexico",
    description:
      "Desarrollo de multiples plataformas internas y productos digitales enfocados en automatizacion de procesos, gestion de usuarios, pagos en linea e integracion de servicios externos.",
    achievements: [
      "Desarrolle plataforma de cursos educativos con Laravel e integracion de pagos con Conekta",
      "Construi plataforma tipo match para conectar Au Pairs con familias usando Spring Boot y Vue.js",
      "Lidere el desarrollo de dos CRM completos con Laravel (API REST) y React.js",
      "Integre pasarelas de pago (Stripe, OpenPay) mediante webhooks",
      "Implemente integracion con Dropbox usando OAuth para gestion de expedientes digitales",
      "Construi editor de documentos legales tipo Google Docs"
    ],
    technologies: ["Laravel", "React.js", "Vue.js", "Spring Boot", "Stripe", "OpenPay", "Conekta"]
  },
  {
    company: "Universidad Tecnologica Emiliano Zapata",
    role: "Desarrollador Full Stack / Lider Tecnico",
    period: "Ago 2024 - Dic 2024",
    location: "Cuernavaca, Morelos, Mexico",
    description:
      "Desarrollo de plataforma e-commerce para venta de productos de crochet, trabajando directamente con un cliente real y liderando un equipo multidisciplinario.",
    achievements: [
      "Lidere el desarrollo tecnico de un e-commerce completo: frontend web, app movil y backend",
      "Disene la experiencia UX/UI en Figma para web y movil",
      "Desarrolle la aplicacion movil con Flutter, construyendo arquitectura base y funcionalidades principales",
      "Implemente integracion de pagos con Stripe y notificaciones push con Firebase",
      "Gestione calidad del desarrollo como lider tecnico, revisando modulos antes de liberacion",
      "Coordine flujo de trabajo en Jira, validando tareas y gestionando incidencias"
    ],
    technologies: ["Flutter", "Figma", "Stripe", "Firebase", "Jira"]
  },
  {
    company: "Hospital del Nino Morelense",
    role: "Desarrollador Full Stack",
    period: "May 2023 - Ago 2023",
    location: "Cuernavaca, Morelos, Mexico",
    description:
      "Desarrollo de sistema IoT para monitoreo ambiental y control remoto de dispositivos mediante integracion con hardware ESP32 y automatizacion de procesos.",
    achievements: [
      "Desarrolle sistema web para monitoreo en tiempo real de temperatura y humedad con ESP32",
      "Implemente comunicacion mediante webhooks para sincronizacion de datos",
      "Construi funcionalidades para control remoto de dispositivos (aire acondicionado)",
      "Automatice reglas de control para gestion de temperatura segun umbrales definidos",
      "Integre sistema de alertas mediante Telegram para notificar eventos criticos"
    ],
    technologies: ["ESP32", "IoT", "Webhooks", "Telegram API", "PHP"]
  }
];
