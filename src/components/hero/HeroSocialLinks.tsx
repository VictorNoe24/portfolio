import { motion } from "framer-motion";

import { heroSocialLinks } from "../../data/hero";

export function HeroSocialLinks() {
  return (
    <div className="mt-8 flex items-center justify-center gap-4 lg:justify-start">
      {heroSocialLinks.map((social, index) => (
        <motion.a
          key={social.label}
          href={social.href}
          target={social.label !== "Email" ? "_blank" : undefined}
          rel={social.label !== "Email" ? "noopener noreferrer" : undefined}
          className="rounded-full bg-secondary p-3 text-muted-foreground transition-all duration-200 hover:bg-secondary/80 hover:text-foreground"
          aria-label={social.label}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 + index * 0.1 }}
        >
          <social.icon className="h-5 w-5" />
        </motion.a>
      ))}
    </div>
  );
}
