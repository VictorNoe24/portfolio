import type { LucideIcon } from "lucide-react";

import { useMediaFallback } from "../../hooks/useMediaFallback";
import { ProjectImageFallback } from "./ProjectImageFallback";

interface ProjectPreviewProps {
  alt: string;
  category: string;
  className?: string;
  icon: LucideIcon;
  src: string;
  title: string;
}

export function ProjectPreview({
  alt,
  category,
  className = "",
  icon,
  src,
  title
}: ProjectPreviewProps) {
  const { hasError, onError } = useMediaFallback();

  if (hasError || !src) {
    return <ProjectImageFallback category={category} icon={icon} title={title} />;
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      onError={onError}
    />
  );
}
