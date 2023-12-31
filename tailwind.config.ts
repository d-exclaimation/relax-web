import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cal: ["Cal Sans", "sans-serif"],
      },
      colors: {
        "surface-light": "#FFFFFF",
        "surface-dark": "#181816",
        bronze: "#A6815E",
        tan: "#F0E4D0",
        sand: "#6E6C66",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        flick: "flick 1s ease-in-out infinite",
        rise: "rise 0.5s cubic-bezier(0.5, 0, 1, 1)",
      },
      keyframes: {
        flick: {
          "50%": { opacity: "0" },
        },
        rise: {
          "0%": { height: "0" },
        },
      },
      data: {
        active: "active=true",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
