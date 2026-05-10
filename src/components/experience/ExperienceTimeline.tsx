import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

import { experiences } from "../../data/experience";
import { ExperienceTimelineItem } from "./ExperienceTimelineItem";
import { experienceTimelineVariants } from "./experience.motion";

interface ExperienceTimelineProps {
  isInView: boolean;
}

export function ExperienceTimeline({ isInView }: ExperienceTimelineProps) {
  const timelineRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 70%", "end 40%"]
  });
  const progressScaleY = useSpring(scrollYProgress, {
    stiffness: 130,
    damping: 28,
    mass: 0.25
  });

  return (
    <div ref={timelineRef} className="relative mt-12 lg:mt-16">
      <div className="absolute bottom-0 top-0 hidden w-px bg-border/70 lg:left-1/2 lg:block lg:-translate-x-1/2" />
      <motion.div
        className="absolute bottom-0 top-0 hidden w-px bg-gradient-to-b from-primary via-accent to-chart-2 shadow-[0_0_18px_rgba(44,211,197,0.45)] lg:left-1/2 lg:block lg:-translate-x-1/2"
        style={{ scaleY: progressScaleY, transformOrigin: "top" }}
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
