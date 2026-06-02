import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Academic palette (design.md) */
        primary: "#16324f",
        "primary-container": "#1e3a5f",
        burgundy: "#8a1538",

        /* Surfaces */
        canvas: "#f7f8fb",
        surface: "#ffffff",
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#f3f4f7",
        "surface-container": "#eeeff3",
        "surface-container-high": "#e8eaee",
        "surface-variant": "#d7dde6",

        /* Text */
        "on-surface": "#172033",
        "on-surface-variant": "#667085",

        /* Borders */
        border: "#d7dde6",
        "outline-variant": "#d7dde6",
        outline: "#8c93a0",

        /* Domain accents */
        "accent-teal": "#0f766e",
        "accent-amber": "#b45309",
        "accent-purple": "#7c3aed",
        "accent-navy": "#16324f",
      },
      fontFamily: {
        sans: ['"Segoe UI"', "system-ui", "sans-serif"],
        mono: ["ui-monospace", '"Cascadia Code"', '"Segoe UI Mono"', "Consolas", "monospace"],
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        md: "0.375rem",
        lg: "0.5rem",
        full: "9999px",
      },
      spacing: {
        xs: "4px",
        sm: "8px",
        md: "16px",
        lg: "24px",
        xl: "48px",
        gutter: "24px",
        "margin-desktop": "64px",
        "max-width": "1280px",
      },
      maxWidth: {
        "max-width": "1280px",
      },
    },
  },
  plugins: [],
};
export default config;
