export interface NavLink {
  href: `#${string}`;
  label: string;
}

const BASE_PATH = import.meta.env.BASE_URL;

export function withBase(path: string): string {
  const normalizedBase = BASE_PATH === "/" ? "" : BASE_PATH.replace(/\/$/, "");
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  return `${normalizedBase}${normalizedPath}`;
}

export const navLinks: NavLink[] = [
  { href: "#inicio", label: "Inicio" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#experiencia", label: "Experiencia" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#habilidades", label: "Habilidades" },
  { href: "#educacion", label: "Educación" }
];

export const SITE_NAME = "Víctor Noé Flores Toledo";
export const SITE_TITLE = "Víctor Noé Flores Toledo | Full Stack Developer";
export const SITE_DESCRIPTION =
  "Portafolio profesional de Víctor Noé Flores Toledo, desarrollador full stack enfocado en crear productos digitales modernos y accesibles.";
export const CV_FILE_PATH = withBase("/documents/cv/victor-noe-flores-toledo-cv.pdf");
export const PROJECTS_PAGE_PATH = withBase("/proyectos/");
