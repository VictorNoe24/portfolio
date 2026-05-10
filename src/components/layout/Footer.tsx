import { ArrowUp, Mail } from "lucide-react";
import { motion } from "framer-motion";

import { GitHubIcon, LinkedInIcon } from "../ui/icons";
import { BrandLogo } from "../ui/BrandLogo";
import { SITE_NAME, navLinks } from "../../data/site";
import { useFooterState } from "../../hooks/useFooterState";

const socialLinks = [
  { icon: GitHubIcon, href: "https://github.com/VictorNoe24", label: "GitHub" },
  { icon: LinkedInIcon, href: "https://www.linkedin.com/in/victor-noe-flores-toledo-3a30441a5", label: "LinkedIn" },
  { icon: Mail, href: "mailto:", label: "Email" }
];

export function Footer() {
  const { currentYear, footerRef, isInView } = useFooterState();

  return (
    <footer ref={footerRef} className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <motion.a
              href="#inicio"
              className="inline-flex items-center transition-opacity hover:opacity-90"
              whileHover={{ scale: 1.03 }}
            >
              <BrandLogo size="footer" />
            </motion.a>

            <p className="mt-4 max-w-md text-lg leading-8 text-muted-foreground">
              Desarrollador Full Stack apasionado por crear soluciones digitales
              innovadoras y experiencias de usuario excepcionales.
            </p>

            <motion.div
              className="mt-6 flex items-center gap-3"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1, delayChildren: 0.25 }
                }
              }}
            >
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.label}
                  className="flex h-11 w-11 items-center justify-center rounded-2xl bg-secondary text-muted-foreground transition-all duration-200 hover:bg-primary/10 hover:text-primary"
                  variants={{
                    hidden: { opacity: 0, scale: 0.7 },
                    visible: { opacity: 1, scale: 1 }
                  }}
                  whileHover={{ scale: 1.08, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <link.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="mb-4 text-lg font-semibold text-foreground">Enlaces</h2>
            <ul className="space-y-3">
              {navLinks.slice(0, 4).map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.05 }}
                >
                  <motion.a
                    href={link.href}
                    className="text-lg text-muted-foreground transition-colors hover:text-foreground"
                    whileHover={{ x: 3 }}
                  >
                    {link.label}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="mb-4 text-lg font-semibold text-foreground">Mas</h2>
            <ul className="space-y-3">
              {navLinks.slice(4).map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.05 }}
                >
                  <motion.a
                    href={link.href}
                    className="text-lg text-muted-foreground transition-colors hover:text-foreground"
                    whileHover={{ x: 3 }}
                  >
                    {link.label}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-center sm:flex-row sm:text-left"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
        >
          <p className="text-sm text-muted-foreground">
            {currentYear} {SITE_NAME}.
          </p>

          <motion.a
            href="#inicio"
            className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            whileHover={{ y: -2 }}
          >
            Volver arriba
            <motion.span
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            >
              <ArrowUp className="h-4 w-4" />
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </footer>
  );
}
