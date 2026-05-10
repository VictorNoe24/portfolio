import { motion } from "framer-motion";

import {
  certifications,
  educationContent,
  educationStats
} from "../../data/education";
import { AnimatedCounter } from "../ui/AnimatedCounter";
import {
  educationCertificationItemVariants,
  educationCertificationsVariants
} from "./education.motion";

interface EducationKnowledgeProps {
  isInView: boolean;
}

export function EducationKnowledge({ isInView }: EducationKnowledgeProps) {
  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0, x: 30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <h3 className="text-xl font-bold text-foreground">{educationContent.knowledgeTitle}</h3>

      <motion.div
        className="rounded-2xl border border-border bg-card p-6"
        whileHover={{ borderColor: "rgba(44, 211, 197, 0.5)" }}
      >
        <motion.div
          className="flex flex-wrap gap-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={educationCertificationsVariants}
        >
          {certifications.map((certification) => (
            <motion.span
              key={certification}
              className="cursor-default rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/20"
              variants={educationCertificationItemVariants}
              whileHover={{ scale: 1.05, y: -2 }}
            >
              {certification}
            </motion.span>
          ))}
        </motion.div>

        <div className="mt-8 border-t border-border pt-6">
          <h4 className="mb-4 text-lg font-semibold text-foreground">
            {educationContent.continuousLearningTitle}
          </h4>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {educationContent.continuousLearningDescription}
          </p>

          <div className="mt-6 grid grid-cols-2 gap-4">
            {educationStats.map((stat) => (
              <motion.div
                key={stat.label}
                className="rounded-xl bg-secondary/50 p-4"
                whileHover={{ scale: 1.02 }}
              >
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  className="text-2xl font-bold text-primary"
                />
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
