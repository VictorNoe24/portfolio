import { Mail } from "lucide-react";
import type { ComponentType } from "react";

import type { Locale } from "../i18n/config";
import { GitHubIcon, LinkedInIcon } from "../components/ui/icons";
import { getCvFilePath, getHomePagePath, withBase } from "./site";

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

interface HeroProfile {
  alt: string;
  bottomBadge: string;
  highlightedName: string;
  imageSrc: string;
  initials: string;
  status: string;
  subtitle: string;
  summary: string;
  title: string;
  topBadge: string;
}

const HERO_PROFILE: Record<Locale, HeroProfile> = {
  es: {
    alt: "Víctor Noé Flores Toledo - Desarrollador Full Stack",
    imageSrc: withBase("/images/profile.webp"),
    initials: "VF",
    status: "Disponible para proyectos",
    subtitle: "Desarrollador Full Stack / Líder técnico",
    title: "Hola, soy",
    highlightedName: "Víctor Noé",
    summary:
      "Construyo aplicaciones web y móviles escalables con Laravel, React, Vue y Flutter. Enfocado en crear soluciones funcionales con código limpio y una experiencia de usuario excepcional.",
    topBadge: "Full Stack",
    bottomBadge: "+3 años de experiencia"
  },
  en: {
    alt: "Víctor Noé Flores Toledo - Full Stack Developer",
    imageSrc: withBase("/images/profile.webp"),
    initials: "VF",
    status: "Available for projects",
    subtitle: "Full Stack Developer / Technical Lead",
    title: "Hi, I'm",
    highlightedName: "Víctor Noé",
    summary:
      "I build scalable web and mobile applications with Laravel, React, Vue, and Flutter, focused on clean code and exceptional user experience.",
    topBadge: "Full Stack",
    bottomBadge: "3+ years of experience"
  }
};

export function getHeroSocialLinks(locale: Locale): HeroSocialLink[] {
  return [
    { href: "https://github.com/VictorNoe24", icon: GitHubIcon, label: "GitHub" },
    {
      href: "https://www.linkedin.com/in/victor-noe-flores-toledo-3a30441a5",
      icon: LinkedInIcon,
      label: "LinkedIn"
    },
    { href: "mailto:noeflo60@gmail.com", icon: Mail, label: locale === "es" ? "Correo" : "Email" }
  ];
}

export function getHeroActionLinks(locale: Locale): HeroActionLink[] {
  return [
    {
      href: `${getHomePagePath(locale)}#proyectos`,
      label: locale === "es" ? "Ver proyectos" : "View projects",
      variant: "primary"
    },
    {
      href: getCvFilePath(),
      label: locale === "es" ? "Ver CV" : "View resume",
      variant: "outline",
      target: "_blank",
      rel: "noopener noreferrer"
    }
  ];
}

export function getHeroProfile(locale: Locale): HeroProfile {
  return HERO_PROFILE[locale];
}
