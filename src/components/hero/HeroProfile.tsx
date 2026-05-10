import { motion } from "framer-motion";

import { heroProfile } from "../../data/hero";
import { useProfileImage } from "../../hooks/useProfileImage";
import { heroFloatingBadgeVariants, heroImageVariants } from "./hero.motion";

export function HeroProfile() {
  const { hasImageError, imageSrc, onImageError } = useProfileImage(heroProfile.imageSrc);

  return (
    <motion.div className="order-1 flex justify-center lg:order-2" initial="hidden" animate="visible">
      <div className="relative">
        <motion.div
          className="absolute inset-0 scale-110 rounded-full bg-gradient-to-br from-primary/20 to-transparent blur-xl"
          animate={{ scale: [1.1, 1.15, 1.1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />

        <motion.div
          className="relative flex h-64 w-64 items-center justify-center overflow-hidden rounded-full border-4 border-primary/20 bg-card sm:h-80 sm:w-80 lg:h-96 lg:w-96"
          variants={heroImageVariants}
        >
          {imageSrc && !hasImageError ? (
            <img
              src={imageSrc}
              alt={heroProfile.alt}
              className="h-full w-full object-cover object-center"
              loading="eager"
              onError={onImageError}
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_top,_rgba(44,211,197,0.25),_transparent_55%),linear-gradient(180deg,rgba(8,14,24,0.96),rgba(16,24,36,0.96))] text-7xl font-black tracking-tight text-primary sm:text-8xl">
              {heroProfile.initials}
            </div>
          )}
        </motion.div>

        <motion.div
          className="absolute -bottom-4 -left-4 rounded-full border border-border bg-card px-4 py-2 shadow-lg"
          variants={heroFloatingBadgeVariants}
          animate={{ y: [0, -8, 0] }}
          transition={{ y: { duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" } }}
        >
          <span className="text-sm font-medium text-foreground">{heroProfile.bottomBadge}</span>
        </motion.div>

        <motion.div
          className="absolute -right-4 -top-4 rounded-full border border-border bg-card px-4 py-2 shadow-lg"
          variants={heroFloatingBadgeVariants}
          animate={{ y: [0, 8, 0] }}
          transition={{
            y: {
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 0.5
            }
          }}
        >
          <span className="text-sm font-medium text-foreground">{heroProfile.topBadge}</span>
        </motion.div>
      </div>
    </motion.div>
  );
}
