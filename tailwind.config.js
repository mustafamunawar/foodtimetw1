/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  darkMode: "class",

  theme: {
    extend: {
      colors: {
        primary: colors.red,
        lightbg1: "ffffff",
        lighttext1: "#000000",
        darkbg1: colors.stone["800"],
        darktext1: "#ffffff",
        lightbg2: colors.stone["200"],
        lighttext2: "#000000",
        darkbg2: colors.stone["900"],
        darktext2: "#ffffff",
      },
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
        lemon: ["Lemon", "sans-serif"],
        salsa: ["Salsa", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      screens: {
        "2xl": "1320px",
      },
      keyframes: {
        techstack: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        techstack: "techstack infinite 40s linear",
      },
    },
  },

  plugins: [],
};
