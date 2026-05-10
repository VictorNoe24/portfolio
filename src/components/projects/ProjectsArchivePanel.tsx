import { ArrowRight, FolderOpenDot } from "lucide-react";
import { motion } from "framer-motion";

import { projects } from "../../data/projects";
import { PROJECTS_PAGE_PATH } from "../../data/site";
import { ButtonLink } from "../ui/Button";

export function ProjectsArchivePanel() {
  return (
    <motion.div
      className="relative overflow-hidden rounded-3xl border border-border bg-card p-6 lg:p-8"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(44,211,197,0.14),transparent_38%)]" />
      <div className="relative">
        <div className="flex items-center gap-3">
          <div className="rounded-2xl bg-primary/10 p-3 text-primary">
            <FolderOpenDot className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
              Catálogo
            </p>
            <h3 className="mt-2 text-2xl font-bold text-foreground">
              Casos reales y soluciones completas
            </h3>
          </div>
        </div>

        <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
          Explora una selección más amplia de proyectos construidos para negocio, producto y
          operaciones. Cada uno muestra enfoque técnico, decisiones de implementación y
          resultados aplicados a escenarios reales.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-border/70 bg-background/30 p-4">
            <p className="text-3xl font-bold text-foreground">{projects.length}</p>
            <p className="mt-1 text-sm text-muted-foreground">Proyectos publicados</p>
          </div>
          <div className="rounded-2xl border border-border/70 bg-background/30 p-4">
            <p className="text-3xl font-bold text-foreground">
              {new Set(projects.map((project) => project.category)).size}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">Categorías activas</p>
          </div>
          <div className="rounded-2xl border border-border/70 bg-background/30 p-4">
            <p className="text-3xl font-bold text-foreground">100%</p>
            <p className="mt-1 text-sm text-muted-foreground">Enfoque en producto real</p>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href={PROJECTS_PAGE_PATH} size="lg">
            Ver más proyectos
            <ArrowRight className="ml-2 h-4 w-4" />
          </ButtonLink>
          <ButtonLink href="#experiencia" size="lg" variant="outline">
            Ver experiencia relacionada
          </ButtonLink>
        </div>
      </div>
    </motion.div>
  );
}
