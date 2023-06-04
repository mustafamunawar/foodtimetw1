/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

const [calculateThemeColors] = require("./tw-config-utilities");

const primaryColor = colors.red;

const themeColors = calculateThemeColors(primaryColor, "#000000", "#0000ff");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  darkMode: "class",

  theme: {
    extend: {
      colors: {
        primary: primaryColor,
        secondary: colors.blue,

        lightbg: {
          DEFAULT: "#ffffff",
          cards: themeColors.lightbg,
          navbar: themeColors.lightbg,
          hero: themeColors.lightbg,
          footer: themeColors.lightbg,
        },

        lighttext: {
          DEFAULT: themeColors.lighttext,
          cards: themeColors.lighttext,
          navbar: themeColors.lighttext,
          hero: themeColors.lighttext,
          footer: themeColors.lighttext,
        },

        darkbg: {
          DEFAULT: colors.neutral["900"],
          cards: themeColors.darkbg,
          navbar: themeColors.darkbg,
          hero: themeColors.darkbg,
          footer: themeColors.darkbg,
        },

        darktext: {
          DEFAULT: "#ffffff",
          cards: themeColors.darktext,
          navbar: themeColors.darktext,
          hero: themeColors.darktext,
          footer: themeColors.darktext,
        },
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
