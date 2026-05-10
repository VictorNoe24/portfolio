import { motion } from "framer-motion";

import { skillCategories } from "../../data/skills";
import { SkillsCategoryCard } from "./SkillsCategoryCard";
import { skillsCardVariants, skillsGridVariants } from "./skills.motion";

interface SkillsGridProps {
  isInView: boolean;
}

export function SkillsGrid({ isInView }: SkillsGridProps) {
  return (
    <motion.div
      className="mt-12 grid items-stretch gap-6 md:grid-cols-2 lg:mt-16 lg:grid-cols-3"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={skillsGridVariants}
    >
      {skillCategories.map((category, categoryIndex) => (
        <motion.div key={category.title} variants={skillsCardVariants} className="h-full">
          <SkillsCategoryCard category={category} categoryIndex={categoryIndex} />
        </motion.div>
      ))}
    </motion.div>
  );
}
