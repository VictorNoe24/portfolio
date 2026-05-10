import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function GitHubIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M9 18c-4 1.2-4-2-6-2" />
      <path d="M15 22v-3.2a2.8 2.8 0 0 0-.8-2.2c2.6-.3 5.3-1.3 5.3-6A4.7 4.7 0 0 0 18.2 7a4.3 4.3 0 0 0-.1-3.1S17 3.6 15 5a10.3 10.3 0 0 0-6 0C7 3.6 5.9 3.9 5.9 3.9A4.3 4.3 0 0 0 5.8 7a4.7 4.7 0 0 0-1.3 3.6c0 4.7 2.7 5.7 5.3 6a2.8 2.8 0 0 0-.8 2.2V22" />
    </svg>
  );
}

export function LinkedInIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" />
      <path d="M2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
