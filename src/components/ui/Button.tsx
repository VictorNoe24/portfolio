import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "outline";
type ButtonSize = "default" | "lg";

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  href: string;
  size?: ButtonSize;
  variant?: ButtonVariant;
}

const VARIANT_STYLES: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-primary-foreground hover:bg-primary/90 border border-transparent shadow-[0_12px_30px_-18px_var(--color-primary)]",
  outline:
    "border border-border bg-transparent text-foreground hover:bg-secondary"
};

const SIZE_STYLES: Record<ButtonSize, string> = {
  default: "px-4 py-2 text-sm",
  lg: "px-6 py-3 text-base"
};

export function ButtonLink({
  children,
  className = "",
  href,
  size = "default",
  variant = "primary",
  ...props
}: ButtonLinkProps) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ${VARIANT_STYLES[variant]} ${SIZE_STYLES[size]} ${className}`.trim()}
      {...props}
    >
      {children}
    </a>
  );
}
