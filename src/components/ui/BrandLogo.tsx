import { withBase } from "../../data/site";

interface BrandLogoProps {
  className?: string;
  size?: "footer" | "sm" | "navbar";
}

const SIZE_STYLES = {
  navbar: "h-4 sm:h-5",
  footer: "h-8 sm:h-9",
  sm: "h-6",
  md: "h-10 sm:h-11",
  lg: "h-8 sm:h-9"
} as const;

export function BrandLogo({
  className = "",
  size = "navbar"
}: BrandLogoProps) {
  return (
    <img
      src={withBase("/images/logos/logo_vf.webp")}
      alt="VF Logo"
      className={`h-auto w-auto select-none object-contain ${SIZE_STYLES[size]} ${className}`.trim()}
      loading="eager"
      decoding="async"
    />
  );
}
