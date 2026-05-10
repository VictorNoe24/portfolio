import { Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";

import type { EducationItem } from "../../data/education";

interface EducationTimelineCardProps {
  educationItem: EducationItem;
  index: number;
}

export function EducationTimelineCard({
  educationItem,
  index
}: EducationTimelineCardProps) {
  return (
    <motion.article
      className="relative rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      whileHover={{ y: -5, boxShadow: "0 20px 40px -20px rgba(0,0,0,0.3)" }}
    >
      <motion.div
        className="absolute -top-3 left-6 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 + index * 0.15, type: "spring" }}
      >
        {educationItem.type}
      </motion.div>

      <h4 className="mt-2 text-lg font-bold text-foreground">{educationItem.degree}</h4>
      <p className="mt-1 font-medium text-primary">{educationItem.institution}</p>

      <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
        <span className="flex items-center gap-1.5">
          <Calendar className="h-4 w-4" />
          {educationItem.period}
        </span>
        <span className="flex items-center gap-1.5">
          <MapPin className="h-4 w-4" />
          {educationItem.location}
        </span>
      </div>

      <p className="mt-4 text-sm text-muted-foreground">{educationItem.description}</p>

      {educationItem.note ? (
        <motion.div
          className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-xs text-muted-foreground"
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 + index * 0.15 }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          {educationItem.note}
        </motion.div>
      ) : null}
    </motion.article>
  );
}
