import type { Locale } from "../i18n/config";

export interface ExperienceItem {
  achievements: string[];
  company: string;
  description: string;
  location: string;
  period: string;
  role: string;
  technologies: string[];
}

interface ExperienceContent {
  description: string;
  eyebrow: string;
  title: string;
}

const EXPERIENCE_CONTENT: Record<Locale, ExperienceContent> = {
  es: {
    eyebrow: "Experiencia",
    title: "Mi trayectoria profesional",
    description:
      "Un recorrido por las empresas y proyectos donde he contribuido a crear soluciones tecnológicas de alto impacto."
  },
  en: {
    eyebrow: "Experience",
    title: "My professional journey",
    description:
      "A look at the companies and projects where I have helped build impactful technology solutions."
  }
};

const EXPERIENCES: Record<Locale, ExperienceItem[]> = {
  es: [
    {
      company: "Au Pair México",
      role: "Desarrollador Full Stack",
      period: "Dic 2024 - Presente",
      location: "Cuernavaca, Morelos, México",
      description:
        "Desarrollo de múltiples plataformas internas y productos digitales enfocados en automatización de procesos, gestión de usuarios, pagos en línea e integración de servicios externos.",
      achievements: [
        "Desarrollé una plataforma de cursos educativos con Laravel e integración de pagos con Conekta",
        "Construí una plataforma tipo match para conectar Au Pairs con familias usando Spring Boot y Vue.js",
        "Lideré el desarrollo de dos CRM completos con Laravel (API REST) y React.js",
        "Integré pasarelas de pago (Stripe y OpenPay) mediante webhooks",
        "Implementé integración con Dropbox usando OAuth para la gestión de expedientes digitales",
        "Construí un editor de documentos legales tipo Google Docs"
      ],
      technologies: ["Laravel", "React.js", "Vue.js", "Spring Boot", "Stripe", "OpenPay", "Conekta"]
    },
    {
      company: "Universidad Tecnológica Emiliano Zapata",
      role: "Desarrollador Full Stack / Líder técnico",
      period: "Ago 2024 - Dic 2024",
      location: "Cuernavaca, Morelos, México",
      description:
        "Desarrollo de plataforma e-commerce para venta de productos de crochet, trabajando directamente con un cliente real y liderando un equipo multidisciplinario.",
      achievements: [
        "Lideré el desarrollo técnico de un e-commerce completo: frontend web, app móvil y backend",
        "Diseñé la experiencia UX/UI en Figma para web y móvil",
        "Desarrollé la aplicación móvil con Flutter, construyendo la arquitectura base y las funcionalidades principales",
        "Implementé integración de pagos con Stripe y notificaciones push con Firebase",
        "Gestioné la calidad del desarrollo como líder técnico, revisando módulos antes de su liberación",
        "Coordiné el flujo de trabajo en Jira, validando tareas y gestionando incidencias"
      ],
      technologies: ["Flutter", "Figma", "Stripe", "Firebase", "Jira"]
    },
    {
      company: "Hospital del Niño Morelense",
      role: "Desarrollador Full Stack",
      period: "May 2023 - Ago 2023",
      location: "Cuernavaca, Morelos, México",
      description:
        "Desarrollo de un sistema IoT para monitoreo ambiental y control remoto de dispositivos mediante integración con hardware ESP32 y automatización de procesos.",
      achievements: [
        "Desarrollé un sistema web para monitoreo en tiempo real de temperatura y humedad con ESP32",
        "Implementé comunicación mediante webhooks para sincronización de datos",
        "Construí funcionalidades para el control remoto de dispositivos (aire acondicionado)",
        "Automaticé reglas de control para la gestión de temperatura según umbrales definidos",
        "Integré un sistema de alertas mediante Telegram para notificar eventos críticos"
      ],
      technologies: ["ESP32", "IoT", "Webhooks", "Telegram API", "PHP"]
    }
  ],
  en: [
    {
      company: "Au Pair México",
      role: "Full Stack Developer",
      period: "Dec 2024 - Present",
      location: "Cuernavaca, Morelos, Mexico",
      description:
        "Built multiple internal platforms and digital products focused on process automation, user management, online payments, and third-party integrations.",
      achievements: [
        "Built an educational courses platform with Laravel and Conekta payment integration",
        "Created a matching platform to connect Au Pairs with host families using Spring Boot and Vue.js",
        "Led development of two complete CRMs with Laravel REST APIs and React.js",
        "Integrated payment gateways such as Stripe and OpenPay using webhooks",
        "Implemented Dropbox OAuth integration for digital records management",
        "Built a Google Docs-like legal document editor"
      ],
      technologies: ["Laravel", "React.js", "Vue.js", "Spring Boot", "Stripe", "OpenPay", "Conekta"]
    },
    {
      company: "Universidad Tecnológica Emiliano Zapata",
      role: "Full Stack Developer / Technical Lead",
      period: "Aug 2024 - Dec 2024",
      location: "Cuernavaca, Morelos, Mexico",
      description:
        "Developed an e-commerce platform for handmade crochet products while working with a real client and leading a multidisciplinary team.",
      achievements: [
        "Led the technical delivery of a full e-commerce solution: web frontend, mobile app, and backend",
        "Designed the UX/UI experience in Figma for both web and mobile",
        "Built the mobile app with Flutter, including base architecture and core features",
        "Integrated Stripe payments and Firebase push notifications",
        "Oversaw development quality as technical lead, reviewing modules before release",
        "Coordinated workflow in Jira, validating tasks and managing issues"
      ],
      technologies: ["Flutter", "Figma", "Stripe", "Firebase", "Jira"]
    },
    {
      company: "Hospital del Niño Morelense",
      role: "Full Stack Developer",
      period: "May 2023 - Aug 2023",
      location: "Cuernavaca, Morelos, Mexico",
      description:
        "Developed an IoT system for environmental monitoring and remote device control through ESP32 hardware integration and process automation.",
      achievements: [
        "Built a real-time temperature and humidity monitoring system powered by ESP32",
        "Implemented webhook-based communication for data synchronization",
        "Created remote device control features for air conditioning systems",
        "Automated temperature control rules based on defined thresholds",
        "Integrated Telegram alerts to notify critical events"
      ],
      technologies: ["ESP32", "IoT", "Webhooks", "Telegram API", "PHP"]
    }
  ]
};

export function getExperienceContent(locale: Locale): ExperienceContent {
  return EXPERIENCE_CONTENT[locale];
}

export function getExperiences(locale: Locale): ExperienceItem[] {
  return EXPERIENCES[locale];
}
