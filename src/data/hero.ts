import { Mail } from "lucide-react";
import type { ComponentType } from "react";

import { GitHubIcon, LinkedInIcon } from "../components/ui/icons";
import { CV_FILE_PATH, withBase } from "./site";

export interface HeroSocialLink {
  href: string;
  icon: ComponentType<{ className?: string }>;
  label: string;
}

export interface HeroActionLink {
  href: string;
  label: string;
  rel?: string;
  target?: "_blank" | "_self";
  variant: "primary" | "outline";
}

export const heroSocialLinks: HeroSocialLink[] = [
  { href: "https://github.com/VictorNoe24", icon: GitHubIcon, label: "GitHub" },
  {
    href: "https://www.linkedin.com/in/victor-noe-flores-toledo-3a30441a5",
    icon: LinkedInIcon,
    label: "LinkedIn"
  },
  { href: "mailto", icon: Mail, label: "Email" }
];

export const heroActionLinks: HeroActionLink[] = [
  { href: "#proyectos", label: "Ver Proyectos", variant: "primary" },
  {
    href: CV_FILE_PATH,
    label: "Ver CV",
    variant: "outline",
    target: "_blank",
    rel: "noopener noreferrer"
  }
];

export const heroProfile = {
  alt: "Victor Noe Flores Toledo - Desarrollador Full Stack",
  imageSrc: withBase("/images/profile.webp"),
  initials: "VF",
  status: "Disponible para proyectos",
  subtitle: "Desarrollador Full Stack / Lider Tecnico",
  title: "Hola, soy",
  highlightedName: "Victor Noe",
  summary:
    "Construyo aplicaciones web y moviles escalables con Laravel, React, Vue y Flutter. Enfocado en crear soluciones funcionales con codigo limpio y experiencia de usuario excepcional.",
  topBadge: "Full Stack",
  bottomBadge: "+3 años exp"
};
