import { motion } from "framer-motion";

import { experiences } from "../../data/experience";
import { ExperienceTimelineItem } from "./ExperienceTimelineItem";
import { experienceTimelineVariants } from "./experience.motion";

interface ExperienceTimelineProps {
  isInView: boolean;
}

export function ExperienceTimeline({ isInView }: ExperienceTimelineProps) {
  return (
    <div className="relative mt-12 lg:mt-16">
      <motion.div
        className="absolute bottom-0 top-0 hidden w-px bg-border lg:left-1/2 lg:block lg:-translate-x-1/2"
        initial={{ scaleY: 0 }}
        animate={isInView ? { scaleY: 1 } : {}}
        transition={{ duration: 1.5, ease: "easeOut" }}
        style={{ transformOrigin: "top" }}
      />

      <motion.div
        className="space-y-12"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={experienceTimelineVariants}
      >
        {experiences.map((experience, index) => (
          <ExperienceTimelineItem
            key={`${experience.company}-${experience.period}`}
            experience={experience}
            index={index}
          />
        ))}
      </motion.div>
    </div>
  );
}
