import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/propostas/**/*.{js,jsx,ts,tsx}",
    "./src/components/proposals/**/*.{js,jsx,ts,tsx}",
  ],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      colors: {
        proposal: {
          bg: "#FFFFFF",
          fg: "#4A525A",
          muted: "#7A828A",
          line: "#E0E0E0",
          surface: "#F5F5F5",
        },
      },
      fontFamily: {
        display: ["var(--font-outfit)", "Inter", "system-ui", "sans-serif"],
        body: ["var(--font-roboto)", "Inter", "system-ui", "sans-serif"],
      },
      maxWidth: {
        proposal: "960px",
      },
      letterSpacing: {
        lab: "-0.04em",
      },
    },
  },
  plugins: [],
};

export default config;
