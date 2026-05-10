export interface NavLink {
  href: string;
  label: string;
  sectionId: string;
}

const BASE_PATH = import.meta.env.BASE_URL;

export function withBase(path: string): string {
  const normalizedBase = BASE_PATH === "/" ? "" : BASE_PATH.replace(/\/$/, "");
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  return `${normalizedBase}${normalizedPath}`;
}

export const HOME_PAGE_PATH = withBase("/");

export function withSectionHash(sectionId: string): string {
  return `${HOME_PAGE_PATH}#${sectionId}`;
}

export const navLinks: NavLink[] = [
  { href: withSectionHash("inicio"), label: "Inicio", sectionId: "inicio" },
  { href: withSectionHash("sobre-mi"), label: "Sobre mí", sectionId: "sobre-mi" },
  { href: withSectionHash("experiencia"), label: "Experiencia", sectionId: "experiencia" },
  { href: withSectionHash("proyectos"), label: "Proyectos", sectionId: "proyectos" },
  { href: withSectionHash("habilidades"), label: "Habilidades", sectionId: "habilidades" },
  { href: withSectionHash("educacion"), label: "Educación", sectionId: "educacion" }
];

export const SITE_NAME = "Víctor Noé Flores Toledo";
export const SITE_TITLE = "Víctor Noé Flores Toledo | Full Stack Developer";
export const SITE_DESCRIPTION =
  "Portafolio profesional de Víctor Noé Flores Toledo, desarrollador full stack enfocado en crear productos digitales modernos y accesibles.";
export const CV_FILE_PATH = withBase("/documents/cv/victor-noe-flores-toledo-cv.pdf");
export const PROJECTS_PAGE_PATH = withBase("/proyectos/");
