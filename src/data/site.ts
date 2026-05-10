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
  { href: "#sobre-mi", label: "Sobre Mi" },
  { href: "#experiencia", label: "Experiencia" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#habilidades", label: "Habilidades" },
  { href: "#educacion", label: "Educacion" }
];

export const SITE_NAME = "Victor Noe Flores Toledo";
export const SITE_TITLE = "Victor Noe Flores Toledo | Full Stack Developer";
export const SITE_DESCRIPTION =
  "Portafolio profesional de Victor Noe Flores Toledo, desarrollador full stack enfocado en crear productos digitales modernos y accesibles.";
export const CV_FILE_PATH = withBase("/documents/cv/victor-noe-flores-toledo-cv.pdf");
