import { motion } from "framer-motion";

import type { SkillCategory } from "../../data/skills";

interface SkillsCategoryCardProps {
  category: SkillCategory;
  categoryIndex: number;
}

export function SkillsCategoryCard({
  category,
  categoryIndex
}: SkillsCategoryCardProps) {
  const Icon = category.icon;

  return (
    <motion.div
      className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50"
      whileHover={{ y: -5, boxShadow: "0 20px 40px -20px rgba(0,0,0,0.3)" }}
      transition={{ duration: 0.2 }}
    >
      <div className="mb-6 flex items-center gap-3">
        <motion.div
          className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
        >
          <Icon className="h-5 w-5 text-primary" />
        </motion.div>
        <h3 className="text-lg font-bold text-foreground">{category.title}</h3>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {category.skills.map((skill, skillIndex) => (
          <motion.div
            key={skill.name}
            className="group flex cursor-default flex-col items-center text-center"
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.4,
              delay: (categoryIndex * 0.06) + skillIndex * 0.06,
              type: "spring",
              stiffness: 220
            }}
            whileHover={{
              scale: 1.08,
              y: -6,
              boxShadow: "0 12px 30px -10px rgba(0,0,0,0.35)"
            }}
          >
            <motion.div
              className="flex min-h-24 w-full items-center justify-center rounded-2xl border border-border/70 bg-background/70 p-4 transition-colors duration-300 group-hover:border-primary/40 group-hover:bg-background"
              whileHover={{ rotate: 3 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
            >
              <img
                src={`https://cdn.simpleicons.org/${skill.iconSlug}`}
                alt={`${skill.name} logo`}
                className="h-12 w-12 object-contain"
                loading="lazy"
                decoding="async"
              />
            </motion.div>
            <span className="mt-2 text-sm font-medium text-muted-foreground transition-colors group-hover:text-foreground">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
