import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

import { navLinks } from "../../data/site";
import { CV_FILE_PATH } from "../../data/site";
import { useNavigationState } from "../../hooks/useNavigationState";

const HEADER_TRANSITION = {
  duration: 0.6,
  ease: [0.25, 0.46, 0.45, 0.94] as const
};

export function Navigation() {
  const {
    activeSection,
    closeMobileMenu,
    isMobileMenuOpen,
    isScrolled,
    toggleMobileMenu
  } = useNavigationState();

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
        aria-label="Principal"
      >
        <motion.a
          href="#inicio"
          className="text-2xl font-black tracking-tight text-foreground transition-colors hover:text-primary"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          {"<VF />"}
        </motion.a>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link, index) => {
            const sectionId = link.href.replace("#", "");
            const isActive = activeSection === sectionId;

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

        <motion.a
          href={CV_FILE_PATH}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[0_12px_30px_-18px_var(--color-primary)] transition-colors hover:bg-primary/90 lg:inline-flex"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          Ver CV
        </motion.a>

        <motion.button
          type="button"
          className="inline-flex rounded-lg p-2 text-foreground lg:hidden"
          aria-label="Abrir menu"
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
                const sectionId = link.href.replace("#", "");
                const isActive = activeSection === sectionId;

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
                href={CV_FILE_PATH}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobileMenu}
                className="mt-3 inline-flex w-full items-center justify-center rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 }
                }}
              >
                Ver CV
              </motion.a>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
