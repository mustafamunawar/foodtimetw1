/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");
const xsharedColors = {
  lightbg: colors.stone["200"],
  lighttext: "#000000",
  darkbg: colors.stone["800"],
  darktext: "#ffffff",
};

const sharedColors = {
  lightbg: colors.stone["200"],
  lighttext: "#000000",
  darkbg: colors.stone["800"],
  darktext: "#ffffff",
};

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  darkMode: "class",

  theme: {
    extend: {
      colors: {
        primary: colors.red,

        lightbg: {
          DEFAULT: "#ffffff",
          cards: colors.stone["200"],
          navbar: sharedColors.lightbg,
          hero: sharedColors.lightbg,
          footer: sharedColors.lightbg,
        },

        lighttext: {
          DEFAULT: "#000000",
          cards: "#000000",
          navbar: sharedColors.lighttext,
          hero: sharedColors.lighttext,
          footer: sharedColors.lighttext,
        },

        darkbg: {
          DEFAULT: colors.zinc["900"],
          cards: colors.stone["500"],
          navbar: sharedColors.darkbg,
          hero: sharedColors.darkbg,
          footer: sharedColors.darkbg,
        },

        darktext: {
          DEFAULT: colors.slate["100"],
          cards: "#ffffff",
          navbar: sharedColors.darktext,
          hero: sharedColors.darktext,
          footer: sharedColors.darktext,
        },

        // lightbg1: "ffffff",
        // lighttext1: "#000000",
        // darkbg1: colors.stone["800"],
        // darktext1: "#ffffff",
        // lightbg2: colors.stone["200"],
        // lighttext2: "#000000",
        // darkbg2: colors.stone["900"],
        // darktext2: "#ffffff",
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
