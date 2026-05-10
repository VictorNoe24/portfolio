export interface NavLink {
  href: `#${string}`;
  label: string;
}

export const navLinks: NavLink[] = [
  { href: "#inicio", label: "Inicio" },
  { href: "#sobre-mi", label: "Sobre Mi" },
  { href: "#experiencia", label: "Experiencia" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#habilidades", label: "Habilidades" },
  { href: "#educacion", label: "Educacion" },
  { href: "#contacto", label: "Contacto" }
];

export const SITE_NAME = "Victor Noe Flores Toledo";
export const SITE_TITLE = "Victor Noe Flores Toledo | Full Stack Developer";
export const SITE_DESCRIPTION =
  "Portafolio profesional de Victor Noe Flores Toledo, desarrollador full stack enfocado en crear productos digitales modernos y accesibles.";
