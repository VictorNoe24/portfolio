import { motion } from "framer-motion";

import { aboutContent } from "../../data/about";
import { AboutStats } from "./AboutStats";

interface AboutBioProps {
  isInView: boolean;
}

export function AboutBio({ isInView }: AboutBioProps) {
  const [firstParagraph, secondParagraph] = aboutContent.paragraphs;

  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <p className="text-lg leading-relaxed text-muted-foreground">{firstParagraph}</p>

      <p className="text-lg leading-relaxed text-muted-foreground">{secondParagraph}</p>

      <p className="text-lg leading-relaxed text-muted-foreground">
        Actualmente me enfoco en construir soluciones escalables, mantenibles y
        funcionales, con atencion a la calidad del codigo, rendimiento y experiencia de
        usuario. Me especializo en tecnologias como{" "}
        <span className="font-medium text-primary">Laravel</span>,{" "}
        <span className="font-medium text-primary">React</span>,{" "}
        <span className="font-medium text-primary">Vue</span>,{" "}
        <span className="font-medium text-primary">Angular</span> y{" "}
        <span className="font-medium text-primary">Flutter</span>.
      </p>

      <AboutStats isInView={isInView} />
    </motion.div>
  );
}
