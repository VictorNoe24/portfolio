import { Building2, Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";

import type { ExperienceItem } from "../../data/experience";
import {
  experienceTechItemVariants,
  experienceTechVariants
} from "./experience.motion";

interface ExperienceTimelineItemProps {
  experience: ExperienceItem;
  index: number;
}

export function ExperienceTimelineItem({
  experience,
  index
}: ExperienceTimelineItemProps) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      className={`relative grid gap-8 lg:grid-cols-2 ${isEven ? "" : "lg:direction-rtl"}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <motion.div
        className="absolute left-0 top-0 hidden h-4 w-4 rounded-full border-4 border-background bg-primary lg:left-1/2 lg:block lg:-translate-x-1/2"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 + index * 0.15, type: "spring" }}
      />

      <div className={isEven ? "lg:pr-12" : "lg:col-start-2 lg:pl-12"}>
        <motion.article
          className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50 lg:p-8"
          whileHover={{
            y: -5,
            boxShadow: "0 20px 40px -20px rgba(0,0,0,0.3)"
          }}
          transition={{ duration: 0.2 }}
        >
          <div className="mb-4 flex flex-wrap items-start justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold text-foreground">{experience.role}</h3>
              <div className="mt-1 flex items-center gap-2 text-primary">
                <Building2 className="h-4 w-4" />
                <span className="font-medium">{experience.company}</span>
              </div>
              <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>{experience.location}</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>{experience.period}</span>
            </div>
          </div>

          <p className="mb-4 text-muted-foreground">{experience.description}</p>

          <ul className="mb-6 space-y-2">
            {experience.achievements.slice(0, 4).map((achievement, achievementIndex) => (
              <motion.li
                key={achievement}
                className="flex items-start gap-3 text-sm text-muted-foreground"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + achievementIndex * 0.1 }}
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>{achievement}</span>
              </motion.li>
            ))}
          </ul>

          <motion.div
            className="flex flex-wrap gap-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={experienceTechVariants}
          >
            {experience.technologies.map((technology) => (
              <motion.span
                key={technology}
                className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                variants={experienceTechItemVariants}
                whileHover={{ scale: 1.1 }}
              >
                {technology}
              </motion.span>
            ))}
          </motion.div>
        </motion.article>
      </div>

      <div className={`hidden lg:block ${isEven ? "" : "lg:col-start-1 lg:row-start-1"}`} />
    </motion.div>
  );
}
