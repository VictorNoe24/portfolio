import { BriefcaseBusiness, FolderGit2, Mail } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface HeroSocialLink {
  href: string;
  icon: LucideIcon;
  label: string;
}

export interface HeroActionLink {
  href: `#${string}`;
  label: string;
  variant: "primary" | "outline";
}

export const heroSocialLinks: HeroSocialLink[] = [
  { href: "https://github.com/victornoe", icon: FolderGit2, label: "GitHub" },
  {
    href: "https://linkedin.com/in/victornoe",
    icon: BriefcaseBusiness,
    label: "LinkedIn"
  },
  { href: "mailto:noeflo60@gmail.com", icon: Mail, label: "Email" }
];

export const heroActionLinks: HeroActionLink[] = [
  { href: "#proyectos", label: "Ver Proyectos", variant: "primary" },
  { href: "#contacto", label: "Contactame", variant: "outline" }
];

export const heroProfile = {
  alt: "Victor Noe Flores Toledo - Desarrollador Full Stack",
  imageSrc: "/images/profile.jpg",
  initials: "VF",
  status: "Disponible para proyectos",
  subtitle: "Desarrollador Full Stack / Lider Tecnico",
  title: "Hola, soy",
  highlightedName: "Victor Noe",
  summary:
    "Construyo aplicaciones web y moviles escalables con Laravel, React, Vue y Flutter. Enfocado en crear soluciones funcionales con codigo limpio y experiencia de usuario excepcional.",
  topBadge: "Full Stack",
  bottomBadge: "+3 anios exp"
};
