import { motion } from "framer-motion";

import type { Locale } from "../../i18n/config";
import { getHeroActionLinks } from "../../data/hero";
import { ButtonLink } from "../ui/Button";

interface HeroActionsProps {
  locale: Locale;
}

export function HeroActions({ locale }: HeroActionsProps) {
  const heroActionLinks = getHeroActionLinks(locale);
  return (
    <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
      {heroActionLinks.map((link) => (
        <motion.div key={link.href} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <ButtonLink
            href={link.href}
            size="lg"
            variant={link.variant}
            className="w-full sm:w-auto"
            target={link.target}
            rel={link.rel}
          >
            {link.label}
          </ButtonLink>
        </motion.div>
      ))}
    </div>
  );
}
