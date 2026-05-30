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
        "avl-teal": "#0e7c6a",
        "avl-teal-light": "#e8f5f2",
        "avl-amber": "#c96a0a",
        "avl-amber-light": "#fef3e2",
        "avl-navy": "#1b2a4a",
        "avl-navy-light": "#eef1f8",
        "avl-purple": "#6c3fc5",
        "avl-purple-light": "#f2eeff",
        ink: "#0f0e0c",
        "ink-2": "#2a2825",
        muted: "#6b6860",
        "muted-2": "#9c9890",
        surface: "#fafaf7",
        "surface-2": "#f2f1ec",
        "surface-3": "#e8e6df",
        border: "#e0ded6",
        "border-2": "#cccac0",
      },
      fontFamily: {
        fraunces: ["Fraunces", "serif"],
        "dm-sans": ["DM Sans", "sans-serif"],
        "space-mono": ["Space Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
