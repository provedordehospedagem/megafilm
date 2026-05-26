import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        mega: {
          red: "#CC0000",
          ink: "#1A1A1A",
          paper: "#F8F8F8",
          steel: "#3C3C3C"
        }
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-dm-sans)", "sans-serif"]
      },
      boxShadow: {
        hard: "10px 10px 0 #1A1A1A",
        red: "8px 8px 0 #CC0000"
      }
    }
  },
  plugins: []
};

export default config;
