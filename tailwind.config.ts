import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ---- Surfaces: true near-black base + clean, neutral charcoal steps ----
        // (no warm/brown or blue-violet cast — kept strictly neutral for a
        // corporate, premium feel rather than the previous brutalist tint)
        surface: "#0a0a0a",
        "surface-dim": "#0a0a0a",
        "surface-bright": "#3a3a3a",
        "surface-container-lowest": "#060606",
        "surface-container-low": "#121212",
        "surface-container": "#161616",
        "surface-container-high": "#1f1f1f",
        "surface-container-highest": "#2a2a2a",
        "surface-variant": "#2a2a2a",
        "on-surface": "#f5f4f3",
        "on-surface-variant": "#a8a6a5",
        "inverse-surface": "#f5f4f3",
        "inverse-on-surface": "#1a1a1a",
        outline: "#4a4a4a",
        "outline-variant": "#2a2a2a",
        "surface-tint": "#e11d2e",
        background: "#0a0a0a",
        "on-background": "#f5f4f3",

        // ---- Primary: the ONE brand accent — RABAM red. No pink/salmon tint,
        // no second accent hue anywhere in the system. ----
        primary: "#e11d2e",
        "on-primary": "#ffffff",
        "primary-container": "#e11d2e",
        "on-primary-container": "#ffffff",
        "inverse-primary": "#e11d2e",
        "primary-fixed": "#f5c6c9",
        "primary-fixed-dim": "#e11d2e",
        "on-primary-fixed": "#0a0a0a",
        "on-primary-fixed-variant": "#8c0f1a",

        // ---- Secondary: neutral grayscale for body copy, fully desaturated ----
        secondary: "#b8b6b5",
        "on-secondary": "#1a1a1a",
        "secondary-container": "#2a2a2a",
        "on-secondary-container": "#c9c7c6",
        "secondary-fixed": "#e3e2e1",
        "secondary-fixed-dim": "#b8b6b5",
        "on-secondary-fixed": "#1a1a1a",
        "on-secondary-fixed-variant": "#464544",

        // ---- Tertiary: retired as a color accent. Lime/green removed —
        // aliased to neutral white/gray so any existing status-dot usage
        // reads as a plain neutral indicator instead of a second brand hue. ----
        tertiary: "#f5f4f3",
        "on-tertiary": "#0a0a0a",
        "tertiary-container": "#3a3a3a",
        "on-tertiary-container": "#f5f4f3",
        "tertiary-fixed": "#e6e5e4",
        "tertiary-fixed-dim": "#c9c7c6",
        "on-tertiary-fixed": "#0a0a0a",
        "on-tertiary-fixed-variant": "#3a3a3a",

        // ---- Error: kept semantic, distinct enough from the brand red ----
        error: "#ff6b60",
        "on-error": "#3a0602",
        "error-container": "#7a1610",
        "on-error-container": "#ffdad4",

        // WhatsApp CTA: brand green removed to respect the "red-only accent"
        // rule — button now reads as a neutral dark action with the chat icon
        // carrying the meaning instead of a green fill.
        whatsapp: "#1e1e1e",
      },
      fontFamily: {
        "display-xl": ["var(--font-manrope)"],
        "display-lg": ["var(--font-manrope)"],
        "headline-lg": ["var(--font-manrope)"],
        "headline-md": ["var(--font-manrope)"],
        "body-lg": ["var(--font-manrope)"],
        "body-md": ["var(--font-manrope)"],
        "body-sm": ["var(--font-manrope)"],
        "label-lg": ["var(--font-manrope)"],
        "label-md": ["var(--font-manrope)"],
        "label-sm": ["var(--font-manrope)"],
      },
      fontSize: {
        // Headings: Manrope 700–800 — strong hierarchy, still legible (no
        // condensed/bodybuilding-style face).
        "display-xl": ["76px", { lineHeight: "80px", letterSpacing: "-0.02em", fontWeight: "800" }],
        "display-xl-mobile": ["42px", { lineHeight: "46px", letterSpacing: "-0.01em", fontWeight: "800" }],
        "display-lg": ["52px", { lineHeight: "56px", letterSpacing: "-0.02em", fontWeight: "800" }],
        "display-lg-mobile": ["34px", { lineHeight: "38px", letterSpacing: "-0.01em", fontWeight: "800" }],
        "headline-lg": ["30px", { lineHeight: "36px", letterSpacing: "-0.01em", fontWeight: "700" }],
        "headline-md": ["22px", { lineHeight: "28px", letterSpacing: "-0.005em", fontWeight: "700" }],
        // Body: Manrope 400
        "body-lg": ["18px", { lineHeight: "28px", fontWeight: "400" }],
        "body-md": ["15px", { lineHeight: "24px", fontWeight: "400" }],
        "body-sm": ["13px", { lineHeight: "20px", fontWeight: "400" }],
        // Labels / UI accents: Manrope 500–600, tracking eased slightly
        // (was 0.06–0.1em) for a calmer, less "shouty" uppercase feel.
        "label-lg": ["14px", { lineHeight: "18px", letterSpacing: "0.04em", fontWeight: "600" }],
        "label-md": ["12px", { lineHeight: "16px", letterSpacing: "0.06em", fontWeight: "500" }],
        "label-sm": ["10px", { lineHeight: "14px", letterSpacing: "0.08em", fontWeight: "500" }],
      },
      spacing: {
        gutter: "1.5rem",
        "gutter-mobile": "1rem",
        margin: "3rem",
        "margin-mobile": "1.25rem",
        "space-xs": "0.25rem",
        "space-sm": "0.5rem",
        "space-md": "1rem",
        "space-lg": "1.5rem",
        "space-xl": "3rem",
      },
      // Restrained, mostly-sharp scale. Not forced to 0 anymore — a "çok
      // hafif" radius is now available for future component work, but
      // nothing in the current components applies a `rounded` class, so
      // this introduces no visual change on its own.
      borderRadius: {
        none: "0px",
        DEFAULT: "2px",
        sm: "2px",
        md: "4px",
        lg: "6px",
        xl: "8px",
        full: "9999px",
      },
      // Shadows pulled way back from Tailwind's soft/glowy defaults —
      // tighter spread, darker, less blur. Premium relies on spacing and
      // contrast, not drop-shadow glow.
      boxShadow: {
        sm: "0 1px 2px 0 rgb(0 0 0 / 0.30)",
        DEFAULT: "0 1px 3px 0 rgb(0 0 0 / 0.35)",
        md: "0 4px 10px -2px rgb(0 0 0 / 0.35)",
        lg: "0 8px 20px -4px rgb(0 0 0 / 0.35)",
        xl: "0 12px 28px -6px rgb(0 0 0 / 0.35)",
        "2xl": "0 16px 32px -8px rgb(0 0 0 / 0.35)",
        none: "none",
      },
      // Global default transition feel (applies wherever a component uses
      // a bare `transition` / `transition-colors` / `transition-all` class
      // with no explicit duration-*/ease-* override). A touch slower and
      // smoother than Tailwind's snappy default — closer to an Apple-style
      // deceleration curve.
      transitionDuration: {
        DEFAULT: "200ms",
      },
      transitionTimingFunction: {
        DEFAULT: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
