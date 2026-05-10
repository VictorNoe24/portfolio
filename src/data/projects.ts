import {
  ExternalLink,
  Globe,
  Layers,
  Server,
  Smartphone
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { withBase } from "./site";

export interface ProjectImage {
  alt: string;
  src: string;
}

export interface Project {
  category: string;
  description: string;
  featured?: boolean;
  githubUrl?: string;
  highlights: string[];
  icon: LucideIcon;
  id: string;
  images: ProjectImage[];
  liveUrl?: string;
  longDescription: string;
  technologies: string[];
  thumbnail: string;
  title: string;
}

export const projectsContent = {
  eyebrow: "Proyectos",
  title: "Trabajo seleccionado",
  description:
    "Una selección de proyectos que demuestran mi experiencia en desarrollo web, móvil y sistemas IoT."
};

export const projectsArchiveContent = {
  eyebrow: "Archivo",
  title: "Explora más proyectos",
  description:
    "Una vista más completa de productos, plataformas y experimentos construidos para web, móvil e integraciones."
};

export const projects: Project[] = [
  {
    id: "noe-flores-landing",
    title: "Landing Page - Noé Flores Avilés",
    description:
      "Landing page profesional para un negocio de construcción, con diseño moderno, formulario de contacto con Supabase e integración con WhatsApp.",
    longDescription:
      "Desarrollo completo de una landing page para un maestro de obra en México. Incluye diseño responsivo, formulario de contacto conectado con Supabase para almacenamiento de leads, integración con WhatsApp para comunicación directa, sección de servicios con galería, testimonios y sistema de cotizaciones.",
    thumbnail: withBase("/images/projects/noe-flores-hero.webp"),
    images: [
      {
        src: withBase("/images/projects/noe-flores-hero.webp"),
        alt: "Hero section con estadísticas"
      },
      {
        src: withBase("/images/projects/noe-flores-services.webp"),
        alt: "Sección de servicios"
      },
      {
        src: withBase("/images/projects/noe-flores-contact.webp"),
        alt: "Formulario de contacto"
      }
    ],
    icon: Globe,
    technologies: ["Astro", "Supabase", "TailwindCSS", "TypeScript"],
    category: "Landing Page",
    highlights: [
      "Diseño dark/light mode",
      "Formulario conectado con Supabase",
      "Integración con WhatsApp",
      "SEO optimizado",
      "100% responsivo"
    ],
    liveUrl: "https://victornoe24.github.io/landing-page-noe/#inicio",
    featured: true
  },
  {
    id: "crm-empresarial",
    title: "CRM Empresarial - Au Pair México",
    description:
      "Sistema completo de gestión de relaciones con clientes. Incluye gestión de usuarios, pasarelas de pago, integración con Dropbox y editor de documentos legales.",
    longDescription:
      "Sistema CRM desarrollado para Au Pair México con múltiples módulos de gestión empresarial. Implementa un sistema de monetización con Stripe y OpenPay, editor de documentos similar a Google Docs, exportación avanzada a Excel y conexión OAuth con Dropbox para la gestión de archivos.",
    thumbnail: withBase("/images/projects/noe-flores-hero.png"),
    images: [],
    icon: Layers,
    technologies: ["Laravel", "React.js", "Stripe", "OpenPay", "Dropbox OAuth", "MySQL"],
    category: "Web App",
    highlights: [
      "Sistema de monetización con Stripe",
      "Editor de documentos tipo Google Docs",
      "Exportación avanzada a Excel",
      "Integración OAuth con Dropbox",
      "Arquitectura modular y escalable"
    ]
  },
  {
    id: "match-au-pairs",
    title: "Plataforma Match Au Pairs",
    description:
      "Plataforma para conectar Au Pairs con familias anfitrionas. Sistema de matching inteligente y comunicación integrada.",
    longDescription:
      "Plataforma web completa para conectar Au Pairs con familias anfitrionas en todo el mundo. Incluye un sistema de matching inteligente basado en preferencias, monetización mediante créditos, chat integrado para comunicación segura y panel de administración completo.",
    thumbnail: withBase("/images/projects/noe-flores-hero.png"),
    images: [],
    icon: Globe,
    technologies: ["Spring Boot", "Vue.js", "Stripe", "MySQL", "WebSockets"],
    category: "Web Platform",
    highlights: [
      "Sistema de matching inteligente",
      "Monetización con créditos",
      "Chat integrado en tiempo real",
      "Panel de administración",
      "Notificaciones automáticas"
    ]
  },
  {
    id: "ecommerce-crochet",
    title: "E-commerce Crochet",
    description:
      "Plataforma completa de comercio electrónico para venta de productos artesanales. App móvil y web con notificaciones en tiempo real.",
    longDescription:
      "Solución e-commerce completa que incluye una aplicación móvil para iOS y Android desarrollada en Flutter, panel web de administración, sistema de notificaciones push en tiempo real, integración de pagos con Stripe y diseño UX/UI profesional en Figma.",
    thumbnail: withBase("/images/projects/noe-flores-hero.png"),
    images: [],
    icon: Smartphone,
    technologies: ["Flutter", "Firebase", "Stripe", "Node.js", "Figma"],
    category: "Mobile & Web",
    highlights: [
      "App móvil para iOS y Android",
      "Notificaciones push en tiempo real",
      "Integración de pagos con Stripe",
      "Diseño UX/UI en Figma",
      "Panel de administración web"
    ]
  },
  {
    id: "iot-hospitalario",
    title: "Sistema IoT Hospitalario",
    description:
      "Sistema de monitoreo ambiental para el Hospital del Niño Morelense. Control de temperatura y humedad en tiempo real.",
    longDescription:
      "Sistema IoT desarrollado para el Hospital del Niño Morelense, enfocado en el monitoreo ambiental de áreas críticas. Utiliza sensores ESP32 para medir temperatura y humedad, con automatización inteligente por umbrales y alertas vía Telegram.",
    thumbnail: withBase("/images/projects/noe-flores-hero.png"),
    images: [],
    icon: Server,
    technologies: ["ESP32", "PHP", "Webhooks", "Telegram API", "MySQL"],
    category: "IoT System",
    highlights: [
      "Monitoreo en tiempo real 24/7",
      "Control remoto de dispositivos",
      "Alertas automáticas vía Telegram",
      "Automatización por umbrales",
      "Dashboard de visualización"
    ]
  },
  {
    id: "app-presupuestos",
    title: "App Generador de Presupuestos",
    description:
      "Aplicación móvil para generar presupuestos profesionales de forma sencilla y rápida.",
    longDescription:
      "Aplicación móvil diseñada para usuarios sin conocimientos técnicos que necesitan generar presupuestos profesionales. Incluye generación automática de PDF, cálculos automatizados, plantillas personalizables e interfaz intuitiva.",
    thumbnail: withBase("/images/projects/noe-flores-hero.png"),
    images: [],
    icon: Smartphone,
    technologies: ["React Native", "Expo", "PDF Generation", "TypeScript"],
    category: "Mobile App",
    highlights: [
      "Generación automática de PDF",
      "Cálculos automatizados",
      "Plantillas personalizables",
      "Sin conocimientos técnicos requeridos",
      "Exportación y compartir"
    ]
  }
];

export const projectCategories = [
  "Todos",
  ...Array.from(new Set(projects.map((project) => project.category)))
];
