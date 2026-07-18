import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // CIMMON brand palette (extracted from logo)
        primary: "#1830E0", // CIMMON blue — rings + wordmark
        gold: "#F0C000", // middle ring / amber-gold
        "brand-red": "#A80000", // inner ring / maroon-red
        heading: "#141B33", // deep navy-ink for headings
        body: "#4A4F63",
        cream: "#EEF1FC", // cool light-blue section background
        soft: "#F6F8FC",
        ink: "#0A0E1F", // dark sections (navy-black)
        "ink-2": "#141B33",
      },
      fontFamily: {
        // body -> Manrope, headings/display -> Sora (home-five --hfFont)
        sans: ["var(--font-manrope)", "sans-serif"],
        display: ["var(--font-sora)", "sans-serif"],
      },
      borderRadius: {
        btn: "5px",
      },
      maxWidth: {
        container: "1290px",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        // Traces the button's outline: the highlight starts at the bottom
        // (from 180deg) and sweeps a full 360° around the pill.
        "outline-trace": {
          "0%": { transform: "translate(-50%, -50%) rotate(0deg)" },
          "100%": { transform: "translate(-50%, -50%) rotate(360deg)" },
        },
      },
      animation: {
        marquee: "marquee 25s linear infinite",
        "outline-trace": "outline-trace 2.5s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
