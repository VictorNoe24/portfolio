import { getAlternateLocale, type Locale } from "../i18n/config";

export interface NavLink {
  href: string;
  label: string;
  sectionId: string;
}

export type SectionKey =
  | "home"
  | "about"
  | "experience"
  | "projects"
  | "skills"
  | "education";

export interface LanguageOption {
  code: "ES" | "EN";
  flag: string;
  label: string;
}

interface SiteContent {
  description: string;
  footer: {
    backToTop: string;
    blurb: string;
    contactBody: string;
    contactLabel: string;
    contactSubject: string;
    linksTitle: string;
    moreTitle: string;
  };
  languageSwitcher: {
    ariaLabel: string;
    changeLanguage: string;
    current: string;
    label: string;
  };
  localeSwitcherLabel: string;
  meta: {
    homeDescription: string;
    homeTitle: string;
    projectsDescription: string;
    projectsTitle: string;
  };
  nav: {
    openMenu: string;
    primaryLabel: string;
    viewCv: string;
  };
  navLinks: Array<{ label: string; sectionKey: SectionKey }>;
}

type PageKey = "home" | "projects";

export interface AlternateLink {
  href: string;
  hreflang: string;
}

const BASE_PATH = import.meta.env.BASE_URL;
const SITE_NAME = "Víctor Noé Flores Toledo";

const SITE_CONTENT: Record<Locale, SiteContent> = {
  es: {
    description:
      "Portafolio profesional de Víctor Noé Flores Toledo, desarrollador full stack enfocado en crear productos digitales modernos y accesibles.",
    languageSwitcher: {
      ariaLabel: "Seleccionar idioma",
      changeLanguage: "Cambiar idioma",
      current: "Actual",
      label: "Idioma"
    },
    localeSwitcherLabel: "English",
    meta: {
      homeTitle: "Víctor Noé Flores Toledo | Full Stack Developer",
      homeDescription:
        "Portafolio profesional de Víctor Noé Flores Toledo, desarrollador full stack enfocado en crear productos digitales modernos y accesibles.",
      projectsTitle: "Proyectos | Víctor Noé Flores Toledo",
      projectsDescription:
        "Catálogo completo de proyectos web, móviles e IoT desarrollados por Víctor Noé Flores Toledo."
    },
    nav: {
      openMenu: "Abrir menú",
      primaryLabel: "Principal",
      viewCv: "Ver CV"
    },
    navLinks: [
      { label: "Inicio", sectionKey: "home" },
      { label: "Sobre mí", sectionKey: "about" },
      { label: "Experiencia", sectionKey: "experience" },
      { label: "Proyectos", sectionKey: "projects" },
      { label: "Habilidades", sectionKey: "skills" },
      { label: "Educación", sectionKey: "education" }
    ],
    footer: {
      backToTop: "Volver arriba",
      blurb:
        "Desarrollador Full Stack apasionado por crear soluciones digitales innovadoras y experiencias de usuario excepcionales.",
      contactLabel: "Correo",
      contactSubject: "Contacto profesional desde tu portafolio",
      contactBody: `Hola Victor,

Vi tu portafolio y me gustaría conversar contigo sobre una oportunidad.

Motivo del contacto:
[Vacante / Proyecto / Colaboración]

Empresa o cliente:
[Nombre]

Detalles:
[Cuéntame un poco más aquí]

Quedo atento(a) a tu respuesta.

Saludos,`,
      linksTitle: "Enlaces",
      moreTitle: "Más"
    }
  },
  en: {
    description:
      "Professional portfolio of Víctor Noé Flores Toledo, a full stack developer focused on modern and accessible digital products.",
    languageSwitcher: {
      ariaLabel: "Select language",
      changeLanguage: "Change language",
      current: "Current",
      label: "Language"
    },
    localeSwitcherLabel: "Español",
    meta: {
      homeTitle: "Víctor Noé Flores Toledo | Full Stack Developer",
      homeDescription:
        "Professional portfolio of Víctor Noé Flores Toledo, a full stack developer focused on modern and accessible digital products.",
      projectsTitle: "Projects | Víctor Noé Flores Toledo",
      projectsDescription:
        "Full catalog of web, mobile, and IoT projects built by Víctor Noé Flores Toledo."
    },
    nav: {
      openMenu: "Open menu",
      primaryLabel: "Primary",
      viewCv: "View resume"
    },
    navLinks: [
      { label: "Home", sectionKey: "home" },
      { label: "About", sectionKey: "about" },
      { label: "Experience", sectionKey: "experience" },
      { label: "Projects", sectionKey: "projects" },
      { label: "Skills", sectionKey: "skills" },
      { label: "Education", sectionKey: "education" }
    ],
    footer: {
      backToTop: "Back to top",
      blurb:
        "Full Stack Developer passionate about building innovative digital products and exceptional user experiences.",
      contactLabel: "Email",
      contactSubject: "Professional inquiry from your portfolio",
      contactBody: `Hi Victor,

I saw your portfolio and would love to talk with you about an opportunity.

Reason for contact:
[Role / Project / Collaboration]

Company or client:
[Name]

Details:
[Tell me a bit more here]

Looking forward to hearing from you.

Best regards,`,
      linksTitle: "Links",
      moreTitle: "More"
    }
  }
};

export function withBase(path: string): string {
  const normalizedBase = BASE_PATH === "/" ? "" : BASE_PATH.replace(/\/$/, "");
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  return `${normalizedBase}${normalizedPath}`;
}

export function getHomePagePath(locale: Locale): string {
  return withBase(locale === "en" ? "/en/" : "/");
}

export function getProjectsPagePath(locale: Locale): string {
  return withBase(locale === "en" ? "/en/projects/" : "/proyectos/");
}

export function getCvFilePath(): string {
  return withBase("/documents/cv/victor-noe-flores-toledo-cv.pdf");
}

export function withSectionHash(locale: Locale, sectionId: string): string {
  return `${getHomePagePath(locale)}#${sectionId}`;
}

const SECTION_IDS: Record<Locale, Record<SectionKey, string>> = {
  es: {
    home: "inicio",
    about: "sobre-mi",
    experience: "experiencia",
    projects: "proyectos",
    skills: "habilidades",
    education: "educacion"
  },
  en: {
    home: "home",
    about: "about",
    experience: "experience",
    projects: "projects",
    skills: "skills",
    education: "education"
  }
};

export function getSectionId(locale: Locale, sectionKey: SectionKey): string {
  return SECTION_IDS[locale][sectionKey];
}

export function getSectionIds(locale: Locale): string[] {
  return Object.values(SECTION_IDS[locale]);
}

export function getNavLinks(locale: Locale): NavLink[] {
  return SITE_CONTENT[locale].navLinks.map((link) => ({
    href: withSectionHash(locale, getSectionId(locale, link.sectionKey)),
    label: link.label,
    sectionId: getSectionId(locale, link.sectionKey)
  }));
}

export function getCurrentLanguageOption(locale: Locale): LanguageOption {
  return locale === "es"
    ? { code: "ES", flag: "🇲🇽", label: "Español" }
    : { code: "EN", flag: "🇺🇸", label: "English" };
}

export function getAlternateLanguageOption(locale: Locale): LanguageOption {
  return locale === "es"
    ? { code: "EN", flag: "🇺🇸", label: "Inglés" }
    : { code: "ES", flag: "🇲🇽", label: "Spanish" };
}

export function getSiteContent(locale: Locale): SiteContent {
  return SITE_CONTENT[locale];
}

export function getLocalizedPageMetadata(locale: Locale, page: PageKey) {
  const content = SITE_CONTENT[locale].meta;

  if (page === "projects") {
    return {
      title: content.projectsTitle,
      description: content.projectsDescription
    };
  }

  return {
    title: content.homeTitle,
    description: content.homeDescription
  };
}

export function getSwitchLocalePath(locale: Locale, page: PageKey): string {
  const alternateLocale = getAlternateLocale(locale);

  return page === "projects"
    ? getProjectsPagePath(alternateLocale)
    : getHomePagePath(alternateLocale);
}

export function getAlternateLinks(page: PageKey): AlternateLink[] {
  return [
    { hreflang: "es", href: page === "projects" ? getProjectsPagePath("es") : getHomePagePath("es") },
    { hreflang: "en", href: page === "projects" ? getProjectsPagePath("en") : getHomePagePath("en") },
    { hreflang: "x-default", href: page === "projects" ? getProjectsPagePath("es") : getHomePagePath("es") }
  ];
}

export { SITE_NAME };
