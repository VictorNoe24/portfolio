import { motion } from "framer-motion";

import type { SkillCategory } from "../../data/skills";
import { AnimatedSkillBar } from "./AnimatedSkillBar";

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

      <div className="space-y-4">
        {category.skills.map((skill, skillIndex) => (
          <AnimatedSkillBar
            key={skill.name}
            name={skill.name}
            level={skill.level}
            delay={categoryIndex + skillIndex}
          />
        ))}
      </div>
    </motion.div>
  );
}
