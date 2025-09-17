import type { SVGProps } from "react";

export const Icons = {
  logo: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M7 3v18" />
      <path d="M12 3v18" />
      <path d="M17 3v18" />
      <path d="m5 8 2 2 2-2" />
      <path d="m10 8 2 2 2-2" />
      <path d="m15 8 2 2 2-2" />
    </svg>
  ),
};
