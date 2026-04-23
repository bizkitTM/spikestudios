import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "ui-serif", "Georgia", "serif"]
      },
      colors: {
        ink: "#111111",
        paper: "#fafaf7",
        accent: "#e85d2e"
      }
    }
  },
  plugins: []
};

export default config;
