import { useEffect, useState } from "react";

interface UseNavigationStateResult {
  activeSection: string;
  closeMobileMenu: () => void;
  isMobileMenuOpen: boolean;
  isScrolled: boolean;
  toggleMobileMenu: () => void;
}

export function useNavigationState(): UseNavigationStateResult {
  const sections = ["inicio", "sobre-mi", "experiencia", "proyectos", "habilidades", "educacion"];
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 32);

      for (const section of [...sections].reverse()) {
        const element = document.getElementById(section);
        if (!element) continue;

        const rect = element.getBoundingClientRect();
        if (rect.top <= 140) {
          setActiveSection(section);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((current) => !current);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return {
    activeSection,
    closeMobileMenu,
    isMobileMenuOpen,
    isScrolled,
    toggleMobileMenu
  };
}
