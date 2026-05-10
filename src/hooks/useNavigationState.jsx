import { useEffect, useState } from "react";

import { navLinks } from "../data/site";

export function useNavigationState() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 32);

      const sections = navLinks.map((link) => link.href.replace("#", ""));
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
