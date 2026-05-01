import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#111827",
        muted: "#6f7b91",
        violet: {
          brand: "#6D28FF",
          deep: "#4F20D8",
          soft: "#F2EEFF",
          line: "#B39AFF"
        }
      },
      boxShadow: {
        soft: "0 22px 70px rgba(17, 24, 39, 0.08)",
        button: "0 18px 40px rgba(109, 40, 255, 0.24)"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-playfair)", "Georgia", "serif"]
      }
    }
  },
  plugins: []
};

export default config;
