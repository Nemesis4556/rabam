import type { SVGProps } from "react";

export type IconName =
  | "person"
  | "arrow-down"
  | "arrow-up-right"
  | "arrow-right"
  | "arrow-out"
  | "location"
  | "call"
  | "schedule"
  | "share"
  | "chat"
  | "directions";

interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName;
}

/**
 * Lightweight inline SVG icon set (stroke-based, 1.5px stroke) standing in for
 * the Material Symbols glyphs used in the reference design.
 */
export default function Icon({ name, ...props }: IconProps) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    ...props,
  };

  switch (name) {
    case "person":
      return (
        <svg {...common}>
          <circle cx="12" cy="8" r="3.5" />
          <path d="M4.5 20c1.4-3.6 4.4-5.5 7.5-5.5s6.1 1.9 7.5 5.5" />
        </svg>
      );
    case "arrow-down":
      return (
        <svg {...common}>
          <path d="M12 4v16" />
          <path d="M6 14l6 6 6-6" />
        </svg>
      );
    case "arrow-up-right":
      return (
        <svg {...common}>
          <path d="M7 17L17 7" />
          <path d="M8 7h9v9" />
        </svg>
      );
    case "arrow-right":
      return (
        <svg {...common}>
          <path d="M4 12h16" />
          <path d="M14 6l6 6-6 6" />
        </svg>
      );
    case "arrow-out":
      return (
        <svg {...common}>
          <path d="M7 17L17 7" />
          <path d="M9 7h8v8" />
        </svg>
      );
    case "location":
      return (
        <svg {...common}>
          <path d="M12 21s7-7.2 7-12a7 7 0 10-14 0c0 4.8 7 12 7 12z" />
          <circle cx="12" cy="9" r="2.4" />
        </svg>
      );
    case "call":
      return (
        <svg {...common}>
          <path d="M5 4h3.2l1.3 4.3-2 1.6a12 12 0 006.6 6.6l1.6-2 4.3 1.3V19a2 2 0 01-2.1 2C10.8 20.6 3.4 13.2 3 6.1A2 2 0 015 4z" />
        </svg>
      );
    case "schedule":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8.5" />
          <path d="M12 7.5V12l3 2" />
        </svg>
      );
    case "share":
      return (
        <svg {...common}>
          <circle cx="18" cy="5" r="2.4" />
          <circle cx="6" cy="12" r="2.4" />
          <circle cx="18" cy="19" r="2.4" />
          <path d="M8.2 10.7l7.6-4.4M8.2 13.3l7.6 4.4" />
        </svg>
      );
    case "chat":
      return (
        <svg {...common}>
          <path d="M4 5h16v11H8l-4 4V5z" />
        </svg>
      );
    case "directions":
      return (
        <svg {...common}>
          <path d="M3 12l9-9 9 9-9 9-9-9z" />
          <path d="M9 12h6M12 9v6" />
        </svg>
      );
    default:
      return null;
  }
}
