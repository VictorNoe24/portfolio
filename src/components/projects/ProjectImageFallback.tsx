import type { LucideIcon } from "lucide-react";

interface ProjectImageFallbackProps {
  category: string;
  icon: LucideIcon;
  title: string;
}

export function ProjectImageFallback({
  category,
  icon: Icon,
  title
}: ProjectImageFallbackProps) {
  return (
    <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_top,_rgba(44,211,197,0.2),_transparent_45%),linear-gradient(180deg,rgba(6,10,18,0.98),rgba(10,18,28,0.98))] p-8">
      <div className="flex max-w-sm flex-col items-center text-center">
        <div className="mb-5 rounded-2xl bg-primary/10 p-4 text-primary">
          <Icon className="h-8 w-8" />
        </div>
        <span className="rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-medium text-primary">
          {category}
        </span>
        <h4 className="mt-4 text-xl font-bold text-foreground">{title}</h4>
        <p className="mt-2 text-sm text-muted-foreground">
          Agrega la imagen real en `public/images/projects` para reemplazar este preview temporal.
        </p>
      </div>
    </div>
  );
}
