import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

import type { Locale } from "../../i18n/config";
import { getEducationContent, getEducationItems } from "../../data/education";
import { EducationTimelineCard } from "./EducationTimelineCard";

interface EducationTimelineProps {
  isInView: boolean;
  locale: Locale;
}

export function EducationTimeline({ isInView, locale }: EducationTimelineProps) {
  const educationContent = getEducationContent(locale);
  const educationItems = getEducationItems(locale);
  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <h3 className="flex items-center gap-3 text-xl font-bold text-foreground">
        <motion.div
          animate={{ rotate: [0, -10, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 3 }}
        >
          <GraduationCap className="h-6 w-6 text-primary" />
        </motion.div>
        {educationContent.academicTitle}
      </h3>

      <div className="space-y-4">
        {educationItems.map((educationItem, index) => (
          <EducationTimelineCard
            key={`${educationItem.degree}-${educationItem.period}`}
            educationItem={educationItem}
            index={index}
          />
        ))}
      </div>
    </motion.div>
  );
}
