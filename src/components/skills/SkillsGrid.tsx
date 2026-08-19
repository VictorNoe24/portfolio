import { motion } from "framer-motion";

import type { Locale } from "../../i18n/config";
import { getSkillCategories } from "../../data/skills";
import { SkillsCategoryCard } from "./SkillsCategoryCard";
import { skillsCardVariants, skillsGridVariants } from "./skills.motion";

interface SkillsGridProps {
  isInView: boolean;
  locale: Locale;
}

export function SkillsGrid({ isInView, locale }: SkillsGridProps) {
  const skillCategories = getSkillCategories(locale);
  const gridItemClassName =
    skillCategories.length === 4
      ? "lg:col-span-6"
      : (categoryIndex: number) => (categoryIndex < 3 ? "lg:col-span-4" : "lg:col-span-6");

  return (
    <motion.div
      className="mt-12 grid items-stretch gap-6 md:grid-cols-2 lg:mt-16 lg:grid-cols-12"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={skillsGridVariants}
    >
      {skillCategories.map((category, categoryIndex) => (
        <motion.div
          key={category.title}
          variants={skillsCardVariants}
          className={`h-full ${
            typeof gridItemClassName === "string"
              ? gridItemClassName
              : gridItemClassName(categoryIndex)
          }`}
        >
          <SkillsCategoryCard category={category} categoryIndex={categoryIndex} />
        </motion.div>
      ))}
    </motion.div>
  );
}
