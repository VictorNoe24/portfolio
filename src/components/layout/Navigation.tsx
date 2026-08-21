import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Languages, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import type { Locale } from "../../i18n/config";
import {
  getAlternateLanguageOption,
  getCurrentLanguageOption,
  getCvFilePath,
  getNavLinks,
  getSectionIds,
  getSiteContent,
  getHomePagePath
} from "../../data/site";
import { useNavigationState } from "../../hooks/useNavigationState";
import { BrandLogo } from "../ui/BrandLogo";

const HEADER_TRANSITION = {
  duration: 0.6,
  ease: [0.25, 0.46, 0.45, 0.94] as const
};

interface NavigationProps {
  locale: Locale;
  switchLocaleHref: string;
}

export function Navigation({ locale, switchLocaleHref }: NavigationProps) {
  const navLinks = getNavLinks(locale);
  const sectionIds = getSectionIds(locale);
  const siteContent = getSiteContent(locale);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const languageMenuRef = useRef<HTMLDivElement | null>(null);
  const {
    activeSection,
    closeMobileMenu,
    isMobileMenuOpen,
    isScrolled,
    toggleMobileMenu
  } = useNavigationState(sectionIds);
  const currentLanguage = getCurrentLanguageOption(locale);
  const alternateLanguage = getAlternateLanguageOption(locale);

  useEffect(() => {
    if (!isLanguageMenuOpen) return;

    const handlePointerDown = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Node)) return;
      if (languageMenuRef.current?.contains(target)) return;
      setIsLanguageMenuOpen(false);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsLanguageMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isLanguageMenuOpen]);

  return (
    <motion.header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-border bg-background/88 backdrop-blur-xl"
          : "bg-transparent"
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={HEADER_TRANSITION}
    >
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-8"
        aria-label={siteContent.nav.primaryLabel}
      >
        <motion.a
          href={getHomePagePath(locale)}
          className="inline-flex max-w-[80px] items-center transition-opacity hover:opacity-90 sm:max-w-[220px] lg:max-w-none"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <BrandLogo size="navbar" className="w-full" />
        </motion.a>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link, index) => {
            const isActive = activeSection === link.sectionId;

            return (
              <motion.a
                key={link.href}
                href={link.href}
                className={`relative rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                initial={{ opacity: 0, y: -16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 + index * 0.04 }}
                whileHover={{ y: -2 }}
              >
                {link.label}
                {isActive ? (
                  <motion.span
                    className="absolute inset-x-2 bottom-0 h-0.5 rounded-full bg-primary"
                    layoutId="active-nav"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                ) : null}
              </motion.a>
            );
          })}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <div ref={languageMenuRef} className="relative">
            <motion.button
              type="button"
              onClick={() => setIsLanguageMenuOpen((current) => !current)}
              className="inline-flex items-center gap-3 rounded-xl border border-border bg-card/80 px-3 py-2 text-sm font-medium text-foreground shadow-sm backdrop-blur-sm transition-colors hover:border-primary/40 hover:bg-card"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              aria-haspopup="menu"
              aria-expanded={isLanguageMenuOpen}
              aria-label={siteContent.languageSwitcher.ariaLabel}
            >
              <img
                src={currentLanguage.flagSrc}
                alt={currentLanguage.flagAlt}
                className="h-5 w-6 rounded-[0.4rem] object-cover shadow-[0_2px_10px_rgba(0,0,0,0.2)]"
                loading="eager"
                decoding="async"
              />
              <span>{currentLanguage.code}</span>
              <ChevronDown
                className={`h-4 w-4 text-muted-foreground transition-transform ${
                  isLanguageMenuOpen ? "rotate-180" : ""
                }`}
              />
            </motion.button>

            <AnimatePresence>
              {isLanguageMenuOpen ? (
                <motion.div
                  className="absolute right-0 top-[calc(100%+0.75rem)] z-50 min-w-[180px] overflow-hidden rounded-2xl border border-border bg-card/95 p-2 shadow-2xl backdrop-blur-xl"
                  initial={{ opacity: 0, y: -8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.96 }}
                  transition={{ duration: 0.18 }}
                >
                  <div className="mb-1 flex items-center gap-2 px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    <Languages className="h-3.5 w-3.5" />
                    {siteContent.languageSwitcher.label}
                  </div>

                  <div className="rounded-xl bg-primary/8 px-3 py-3">
                    <div className="flex items-center gap-3">
                      <img
                        src={currentLanguage.flagSrc}
                        alt={currentLanguage.flagAlt}
                        className="h-6 w-8 rounded-[0.55rem] object-cover shadow-[0_4px_14px_rgba(0,0,0,0.22)]"
                        loading="eager"
                        decoding="async"
                      />
                      <div>
                        <p className="text-sm font-semibold text-foreground">
                          {currentLanguage.label}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {siteContent.languageSwitcher.current}
                        </p>
                      </div>
                    </div>
                  </div>

                  <motion.a
                    href={switchLocaleHref}
                    className="mt-2 flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                    whileHover={{ x: 2 }}
                    onClick={() => setIsLanguageMenuOpen(false)}
                  >
                    <img
                      src={alternateLanguage.flagSrc}
                      alt={alternateLanguage.flagAlt}
                      className="h-6 w-8 rounded-[0.55rem] object-cover shadow-[0_4px_14px_rgba(0,0,0,0.22)]"
                      loading="lazy"
                      decoding="async"
                    />
                    <div>
                      <p className="font-medium">{alternateLanguage.label}</p>
                      <p className="text-xs text-muted-foreground">
                        {siteContent.languageSwitcher.changeLanguage}
                      </p>
                    </div>
                  </motion.a>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>

          <motion.a
            href={getCvFilePath()}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[0_12px_30px_-18px_var(--color-primary)] transition-colors hover:bg-primary/90"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            {siteContent.nav.viewCv}
          </motion.a>
        </div>

        <motion.button
          type="button"
          className="inline-flex rounded-lg p-2 text-foreground lg:hidden"
          aria-label={siteContent.nav.openMenu}
          aria-expanded={isMobileMenuOpen}
          onClick={toggleMobileMenu}
          whileTap={{ scale: 0.92 }}
        >
          <AnimatePresence mode="wait" initial={false}>
            {isMobileMenuOpen ? (
              <motion.span
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="h-6 w-6" />
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="h-6 w-6" />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen ? (
          <motion.div
            className="overflow-hidden border-t border-border bg-card/95 backdrop-blur-xl lg:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
          >
            <motion.div
              className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 sm:px-6"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.05, delayChildren: 0.08 }
                }
              }}
            >
              {navLinks.map((link) => {
                const isActive = activeSection === link.sectionId;

                return (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={closeMobileMenu}
                    className={`rounded-xl px-4 py-3 text-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                    }`}
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 }
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {link.label}
                  </motion.a>
                );
              })}

              <motion.a
                href={getCvFilePath()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobileMenu}
                className="mt-3 inline-flex w-full items-center justify-center rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 }
                }}
              >
                {siteContent.nav.viewCv}
              </motion.a>

              <motion.a
                href={switchLocaleHref}
                onClick={closeMobileMenu}
                className="inline-flex w-full items-center justify-between rounded-xl border border-border px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 }
                }}
              >
                <span className="flex items-center gap-3">
                  <img
                    src={alternateLanguage.flagSrc}
                    alt={alternateLanguage.flagAlt}
                    className="h-5 w-6 rounded-[0.4rem] object-cover shadow-[0_2px_10px_rgba(0,0,0,0.2)]"
                    loading="lazy"
                    decoding="async"
                  />
                  <span>{alternateLanguage.label}</span>
                </span>
                <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {alternateLanguage.code}
                </span>
              </motion.a>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
