import { motion } from "framer-motion";

import { heroProfile } from "../../data/hero";
import { HeroActions } from "./HeroActions";
import { HeroSocialLinks } from "./HeroSocialLinks";
import { heroContainerVariants, heroItemVariants } from "./hero.motion";

export function HeroContent() {
  return (
    <motion.div
      className="order-2 text-center lg:order-1 lg:text-left"
      variants={heroContainerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary"
        variants={heroItemVariants}
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
        </span>
        {heroProfile.status}
      </motion.div>

      <motion.h1
        className="text-balance text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl"
        variants={heroItemVariants}
      >
        {heroProfile.title} <span className="text-primary">{heroProfile.highlightedName}</span>
      </motion.h1>

      <motion.h2
        className="mt-4 text-xl font-medium text-muted-foreground sm:text-2xl lg:text-3xl"
        variants={heroItemVariants}
      >
        {heroProfile.subtitle}
      </motion.h2>

      <motion.p
        className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground lg:mx-0 lg:text-lg"
        variants={heroItemVariants}
      >
        Construyo aplicaciones web y móviles escalables con{" "}
        <span className="font-medium text-foreground">Laravel</span>,{" "}
        <span className="font-medium text-foreground">React</span>,{" "}
        <span className="font-medium text-foreground">Vue</span> y{" "}
        <span className="font-medium text-foreground">Flutter</span>. Enfocado en crear
        soluciones funcionales con código limpio y una experiencia de usuario excepcional.
      </motion.p>

      <motion.div variants={heroItemVariants}>
        <HeroSocialLinks />
      </motion.div>

      <motion.div variants={heroItemVariants}>
        <HeroActions />
      </motion.div>
    </motion.div>
  );
}
