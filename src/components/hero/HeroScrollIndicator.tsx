import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export function HeroScrollIndicator() {
  return (
    <motion.div
      className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 lg:block"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 0.5 }}
    >
      <motion.a
        href="#sobre-mi"
        className="flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      >
        <span className="text-sm">Scroll</span>
        <ArrowDown className="h-5 w-5" />
      </motion.a>
    </motion.div>
  );
}
