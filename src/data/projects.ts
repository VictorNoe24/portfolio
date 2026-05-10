import {
  ExternalLink,
  Globe,
  Layers,
  Server,
  Smartphone
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

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
    "Una seleccion de proyectos que demuestran mi experiencia en desarrollo web, movil y sistemas IoT."
};

export const projects: Project[] = [
  {
    id: "noe-flores-landing",
    title: "Landing Page - Noe Flores Aviles",
    description:
      "Landing page profesional para negocio de construccion con diseno moderno, formulario de contacto con Supabase y WhatsApp integration.",
    longDescription:
      "Desarrollo completo de una landing page para un maestro de obra en Mexico. Incluye diseno responsivo, formulario de contacto conectado con Supabase para almacenamiento de leads, integracion con WhatsApp para comunicacion directa, seccion de servicios con galeria, testimonios y sistema de cotizaciones.",
    thumbnail: "/images/projects/noe-flores-hero.png",
    images: [
      { src: "/images/projects/noe-flores-hero.png", alt: "Hero Section con estadisticas" },
      { src: "/images/projects/noe-flores-services.png", alt: "Seccion de Servicios" },
      { src: "/images/projects/noe-flores-contact.png", alt: "Formulario de Contacto" }
    ],
    icon: Globe,
    technologies: ["Astro", "Supabase", "TailwindCSS", "TypeScript"],
    category: "Landing Page",
    highlights: [
      "Diseno dark/light mode",
      "Formulario conectado con Supabase",
      "Integracion WhatsApp",
      "SEO optimizado",
      "100% responsivo"
    ],
    liveUrl: "https://victornoe24.github.io/landing-page-noe/#inicio",
    featured: true
  },
  {
    id: "crm-empresarial",
    title: "CRM Empresarial - Au Pair Mexico",
    description:
      "Sistema completo de gestion de relaciones con clientes. Incluye gestion de usuarios, pasarelas de pago, integracion con Dropbox y editor de documentos legales.",
    longDescription:
      "Sistema CRM desarrollado para Au Pair Mexico con multiples modulos de gestion empresarial. Implementa sistema de monetizacion con Stripe y OpenPay, editor de documentos similar a Google Docs, exportacion avanzada a Excel y conexion OAuth con Dropbox para gestion de archivos.",
    thumbnail: "/images/projects/noe-flores-hero.png",
    images: [],
    icon: Layers,
    technologies: ["Laravel", "React.js", "Stripe", "OpenPay", "Dropbox OAuth", "MySQL"],
    category: "Web App",
    highlights: [
      "Sistema de monetizacion con Stripe",
      "Editor de documentos tipo Google Docs",
      "Exportacion avanzada a Excel",
      "Integracion OAuth con Dropbox",
      "Arquitectura modular y escalable"
    ]
  },
  {
    id: "match-au-pairs",
    title: "Plataforma Match Au Pairs",
    description:
      "Plataforma para conectar Au Pairs con familias anfitrionas. Sistema de matching inteligente y comunicacion integrada.",
    longDescription:
      "Plataforma web completa para conectar Au Pairs con familias anfitrionas en todo el mundo. Incluye sistema de matching inteligente basado en preferencias, monetizacion mediante creditos, chat integrado para comunicacion segura y panel de administracion completo.",
    thumbnail: "/images/projects/noe-flores-hero.png",
    images: [],
    icon: Globe,
    technologies: ["Spring Boot", "Vue.js", "Stripe", "MySQL", "WebSockets"],
    category: "Web Platform",
    highlights: [
      "Sistema de matching inteligente",
      "Monetizacion con creditos",
      "Chat integrado en tiempo real",
      "Panel de administracion",
      "Notificaciones automaticas"
    ]
  },
  {
    id: "ecommerce-crochet",
    title: "E-commerce Crochet",
    description:
      "Plataforma completa de comercio electronico para venta de productos artesanales. App movil y web con notificaciones en tiempo real.",
    longDescription:
      "Solucion e-commerce completa que incluye aplicacion movil para iOS y Android desarrollada en Flutter, panel web de administracion, sistema de notificaciones push en tiempo real, integracion de pagos con Stripe y diseno UX/UI profesional en Figma.",
    thumbnail: "/images/projects/noe-flores-hero.png",
    images: [],
    icon: Smartphone,
    technologies: ["Flutter", "Firebase", "Stripe", "Node.js", "Figma"],
    category: "Mobile & Web",
    highlights: [
      "App movil iOS y Android",
      "Notificaciones push en tiempo real",
      "Integracion de pagos Stripe",
      "Diseno UX/UI en Figma",
      "Panel de administracion web"
    ]
  },
  {
    id: "iot-hospitalario",
    title: "Sistema IoT Hospitalario",
    description:
      "Sistema de monitoreo ambiental para el Hospital del Nino Morelense. Control de temperatura y humedad en tiempo real.",
    longDescription:
      "Sistema IoT desarrollado para el Hospital del Nino Morelense enfocado en el monitoreo ambiental de areas criticas. Utiliza sensores ESP32 para medir temperatura y humedad, con automatizacion inteligente por umbrales y alertas via Telegram.",
    thumbnail: "/images/projects/noe-flores-hero.png",
    images: [],
    icon: Server,
    technologies: ["ESP32", "PHP", "Webhooks", "Telegram API", "MySQL"],
    category: "IoT System",
    highlights: [
      "Monitoreo en tiempo real 24/7",
      "Control remoto de dispositivos",
      "Alertas automaticas via Telegram",
      "Automatizacion por umbrales",
      "Dashboard de visualizacion"
    ]
  },
  {
    id: "app-presupuestos",
    title: "App Generador de Presupuestos",
    description:
      "Aplicacion movil para generacion de presupuestos profesionales de forma sencilla y rapida.",
    longDescription:
      "Aplicacion movil disenada para usuarios sin conocimientos tecnicos que necesitan generar presupuestos profesionales. Incluye generacion automatica de PDF, calculos automatizados, plantillas personalizables e interfaz intuitiva.",
    thumbnail: "/images/projects/noe-flores-hero.png",
    images: [],
    icon: Smartphone,
    technologies: ["React Native", "Expo", "PDF Generation", "TypeScript"],
    category: "Mobile App",
    highlights: [
      "Generacion automatica de PDF",
      "Calculos automatizados",
      "Plantillas personalizables",
      "Sin conocimientos tecnicos requeridos",
      "Exportacion y compartir"
    ]
  }
];
