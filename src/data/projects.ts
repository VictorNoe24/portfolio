import { ExternalLink, Globe, Layers, Server, Smartphone } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import type { Locale } from "../i18n/config";
import { withBase } from "./site";
import { getProjectsPagePath as getLocalizedProjectsPagePath } from "./site";

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

interface ProjectsContent {
  description: string;
  eyebrow: string;
  title: string;
}

interface ProjectsArchiveContent {
  description: string;
  eyebrow: string;
  title: string;
}

interface ProjectsUiCopy {
  allCategory: string;
  archiveButton: string;
  archiveEyebrow: string;
  archiveExperienceButton: string;
  archiveExperienceMetric: string;
  archiveProjectsMetric: string;
  archiveText: string;
  archiveTitle: string;
  archiveTypesMetric: string;
  featuredBadge: string;
  modalClose: string;
  modalFeaturesTitle: string;
  modalGoToImage: (index: number) => string;
  modalNextImage: string;
  modalPreviousImage: string;
  modalSourceCode: string;
  modalTechnologiesTitle: string;
  modalViewProject: string;
  viewDetails: string;
}

const PROJECTS_CONTENT: Record<Locale, ProjectsContent> = {
  es: {
    eyebrow: "Proyectos",
    title: "Trabajo seleccionado",
    description:
      "Una selección de proyectos que demuestran mi experiencia en desarrollo web, móvil y sistemas IoT."
  },
  en: {
    eyebrow: "Projects",
    title: "Selected work",
    description:
      "A curated selection of projects that reflect my experience across web, mobile, and IoT development."
  }
};

const PROJECTS_ARCHIVE_CONTENT: Record<Locale, ProjectsArchiveContent> = {
  es: {
    eyebrow: "Archivo",
    title: "Explora más proyectos",
    description:
      "Una vista más completa de productos, plataformas y experimentos construidos para web, móvil e integraciones."
  },
  en: {
    eyebrow: "Archive",
    title: "Explore more projects",
    description:
      "A broader look at products, platforms, and experiments built for web, mobile, and integrations."
  }
};

const PROJECTS_UI: Record<Locale, ProjectsUiCopy> = {
  es: {
    allCategory: "Todos",
    archiveButton: "Ver más proyectos",
    archiveEyebrow: "Catálogo",
    archiveExperienceButton: "Ver experiencia relacionada",
    archiveExperienceMetric: "Enfoque en producto real",
    archiveProjectsMetric: "Proyectos publicados",
    archiveText:
      "Explora una selección más amplia de proyectos construidos para negocio, producto y operaciones. Cada uno muestra enfoque técnico, decisiones de implementación y resultados aplicados a escenarios reales.",
    archiveTitle: "Casos reales y soluciones completas",
    archiveTypesMetric: "Categorías activas",
    featuredBadge: "Proyecto destacado",
    modalClose: "Cerrar modal",
    modalFeaturesTitle: "Funcionalidades principales",
    modalGoToImage: (index) => `Ir a imagen ${index}`,
    modalNextImage: "Siguiente imagen",
    modalPreviousImage: "Imagen anterior",
    modalSourceCode: "Ver código",
    modalTechnologiesTitle: "Tecnologías utilizadas",
    modalViewProject: "Ver proyecto",
    viewDetails: "Ver detalles"
  },
  en: {
    allCategory: "All",
    archiveButton: "View more projects",
    archiveEyebrow: "Catalog",
    archiveExperienceButton: "View related experience",
    archiveExperienceMetric: "Real product focus",
    archiveProjectsMetric: "Published projects",
    archiveText:
      "Explore a broader selection of projects built for business, product, and operations. Each one highlights technical direction, implementation choices, and real-world outcomes.",
    archiveTitle: "Real cases and complete solutions",
    archiveTypesMetric: "Active categories",
    featuredBadge: "Featured project",
    modalClose: "Close modal",
    modalFeaturesTitle: "Key features",
    modalGoToImage: (index) => `Go to image ${index}`,
    modalNextImage: "Next image",
    modalPreviousImage: "Previous image",
    modalSourceCode: "View code",
    modalTechnologiesTitle: "Technologies used",
    modalViewProject: "View project",
    viewDetails: "View details"
  }
};

const PROJECTS: Record<Locale, Project[]> = {
  es: [
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
  ],
  en: [
    {
      id: "noe-flores-landing",
      title: "Landing Page - Noé Flores Avilés",
      description:
        "Professional landing page for a construction business with a modern design, Supabase contact form, and WhatsApp integration.",
      longDescription:
        "End-to-end development of a landing page for a construction contractor in Mexico. It includes a responsive design, a Supabase-powered contact form for lead capture, WhatsApp integration for direct communication, a services gallery, testimonials, and a quotation flow.",
      thumbnail: withBase("/images/projects/noe-flores-hero.webp"),
      images: [
        {
          src: withBase("/images/projects/noe-flores-hero.webp"),
          alt: "Hero section with stats"
        },
        {
          src: withBase("/images/projects/noe-flores-services.webp"),
          alt: "Services section"
        },
        {
          src: withBase("/images/projects/noe-flores-contact.webp"),
          alt: "Contact form"
        }
      ],
      icon: Globe,
      technologies: ["Astro", "Supabase", "TailwindCSS", "TypeScript"],
      category: "Landing Page",
      highlights: [
        "Dark/light mode design",
        "Supabase-connected contact form",
        "WhatsApp integration",
        "SEO optimized",
        "Fully responsive"
      ],
      liveUrl: "https://victornoe24.github.io/landing-page-noe/#inicio",
      featured: true
    },
    {
      id: "crm-empresarial",
      title: "Enterprise CRM - Au Pair México",
      description:
        "Complete customer relationship management system featuring user management, payment gateways, Dropbox integration, and a legal document editor.",
      longDescription:
        "CRM system developed for Au Pair México with multiple business management modules. It includes monetization through Stripe and OpenPay, a Google Docs-like document editor, advanced Excel exports, and OAuth-based Dropbox integration for file management.",
      thumbnail: withBase("/images/projects/noe-flores-hero.png"),
      images: [],
      icon: Layers,
      technologies: ["Laravel", "React.js", "Stripe", "OpenPay", "Dropbox OAuth", "MySQL"],
      category: "Web App",
      highlights: [
        "Stripe-based monetization system",
        "Google Docs-style document editor",
        "Advanced Excel export",
        "Dropbox OAuth integration",
        "Modular and scalable architecture"
      ]
    },
    {
      id: "match-au-pairs",
      title: "Match Au Pairs Platform",
      description:
        "Platform built to connect Au Pairs with host families through smart matching and integrated communication.",
      longDescription:
        "Complete web platform designed to connect Au Pairs with host families worldwide. It includes smart preference-based matching, credit-based monetization, real-time secure chat, and a full administration panel.",
      thumbnail: withBase("/images/projects/noe-flores-hero.png"),
      images: [],
      icon: Globe,
      technologies: ["Spring Boot", "Vue.js", "Stripe", "MySQL", "WebSockets"],
      category: "Web Platform",
      highlights: [
        "Smart matching system",
        "Credit-based monetization",
        "Real-time integrated chat",
        "Administration panel",
        "Automated notifications"
      ]
    },
    {
      id: "ecommerce-crochet",
      title: "Crochet E-commerce",
      description:
        "Complete e-commerce platform for handmade products, including web and mobile experiences with real-time notifications.",
      longDescription:
        "Complete e-commerce solution that includes a Flutter-based mobile app for iOS and Android, a web admin panel, real-time push notifications, Stripe payments, and professional UX/UI design in Figma.",
      thumbnail: withBase("/images/projects/noe-flores-hero.png"),
      images: [],
      icon: Smartphone,
      technologies: ["Flutter", "Firebase", "Stripe", "Node.js", "Figma"],
      category: "Mobile & Web",
      highlights: [
        "iOS and Android mobile app",
        "Real-time push notifications",
        "Stripe payment integration",
        "UX/UI design in Figma",
        "Web admin panel"
      ]
    },
    {
      id: "iot-hospitalario",
      title: "Hospital IoT System",
      description:
        "Environmental monitoring system for Hospital del Niño Morelense with real-time temperature and humidity control.",
      longDescription:
        "IoT system developed for Hospital del Niño Morelense and focused on environmental monitoring in critical areas. It uses ESP32 sensors to track temperature and humidity, with threshold-based automation and Telegram alerts.",
      thumbnail: withBase("/images/projects/noe-flores-hero.png"),
      images: [],
      icon: Server,
      technologies: ["ESP32", "PHP", "Webhooks", "Telegram API", "MySQL"],
      category: "IoT System",
      highlights: [
        "24/7 real-time monitoring",
        "Remote device control",
        "Automatic Telegram alerts",
        "Threshold-based automation",
        "Visualization dashboard"
      ]
    },
    {
      id: "app-presupuestos",
      title: "Quote Generator App",
      description:
        "Mobile application designed to generate professional quotes quickly and easily.",
      longDescription:
        "Mobile app designed for non-technical users who need to generate professional quotes. It includes automatic PDF generation, built-in calculations, customizable templates, and an intuitive interface.",
      thumbnail: withBase("/images/projects/noe-flores-hero.png"),
      images: [],
      icon: Smartphone,
      technologies: ["React Native", "Expo", "PDF Generation", "TypeScript"],
      category: "Mobile App",
      highlights: [
        "Automatic PDF generation",
        "Built-in calculations",
        "Customizable templates",
        "No technical knowledge required",
        "Export and share"
      ]
    }
  ]
};

export function getProjectsContent(locale: Locale): ProjectsContent {
  return PROJECTS_CONTENT[locale];
}

export function getProjectsArchiveContent(locale: Locale): ProjectsArchiveContent {
  return PROJECTS_ARCHIVE_CONTENT[locale];
}

export function getProjectsUiCopy(locale: Locale): ProjectsUiCopy {
  return PROJECTS_UI[locale];
}

export function getProjects(locale: Locale): Project[] {
  return PROJECTS[locale];
}

export function getProjectCategories(locale: Locale): string[] {
  const projects = getProjects(locale);
  const { allCategory } = getProjectsUiCopy(locale);

  return [allCategory, ...Array.from(new Set(projects.map((project) => project.category)))];
}

export function getProjectsPagePath(locale: Locale): string {
  return getLocalizedProjectsPagePath(locale);
}
