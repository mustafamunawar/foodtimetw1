/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

const primaryColor = colors.red;

// ['red', 'orange', 'amber', 'yellow'] --> 'stone'
// ['cyan', 'sky', 'blue', 'indigo'] --> 'slate'
// ['lime', 'green', 'emerald', 'teal'] --> 'gray'
// ['violet', 'purple', 'fuchshia'] --> 'zinc'
// ['pink', 'rose'] --> 'neutral'

let sharedColors = {};

sharedColors = {
  // lightbg: colors.stone["200"],
  // lighttext: "#000000",
  // darkbg: colors.stone["800"],
  // darktext: "#ffffff",
};

sharedColors.lighttext = "#000000";
sharedColors.darktext = "#ffffff";

if (
  [
    colors.red["500"],
    colors.orange["500"],
    colors.amber["500"],
    colors.yellow["500"],
    colors.slate["500"],
  ].indexOf(primaryColor["500"]) > -1
) {
  sharedColors.lightbg = colors.stone["200"];
  sharedColors.darkbg = colors.stone["800"];
}

if (
  [
    colors.cyan["500"],
    colors.sky["500"],
    colors.blue["500"],
    colors.indigo["500"],
    colors.stone["500"],
  ].indexOf(primaryColor["500"]) > -1
) {
  sharedColors.lightbg = colors.slate["200"];
  sharedColors.darkbg = colors.slate["800"];
}

if (
  [
    colors.lime["500"],
    colors.green["500"],
    colors.emerald["500"],
    colors.teal["500"],
  ].indexOf(primaryColor["500"]) > -1
) {
  sharedColors.lightbg = colors.gray["200"];
  sharedColors.darkbg = colors.gray["800"];
}

if (
  [
    colors.violet["500"],
    colors.purple["500"],
    colors.fuchsia["500"],
    colors.pink["500"],
    colors.rose["500"],
  ].indexOf(primaryColor["500"]) > -1
) {
  sharedColors.lightbg = colors.zinc["200"];
  sharedColors.darkbg = colors.zinc["800"];
}

// if (["cyan", "sky", "blue", "indigo"].indexOf(primaryColor) > -1) {
//   sharedColors.lightbg = colors.slate["200"];
//   sharedColors.darkbg = colors.slate["800"];
// }

// if (["lime", "green", "emerald", "teal"].indexOf(primaryColor) > -1) {
//   sharedColors.lightbg = colors.gray["200"];
//   sharedColors.darkbg = colors.gray["800"];
// }

// if (["violet", "purple", "fuchshia"].indexOf(primaryColor) > -1) {
//   sharedColors.lightbg = colors.zinc["200"];
//   sharedColors.darkbg = colors.zinc["800"];
// }

// if (["pink", "rose"].indexOf(primaryColor) > -1) {
//   sharedColors.lightbg = colors.zinc["200"];
//   sharedColors.darkbg = colors.zinc["800"];
// }

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
          // cards: colors.stone["100"],
          cards: sharedColors.lightbg,
          navbar: sharedColors.lightbg,
          hero: sharedColors.lightbg,
          footer: sharedColors.lightbg,
        },

        lighttext: {
          // DEFAULT: colors.stone["900"],
          // cards: "#000000",
          DEFAULT: sharedColors.lighttext,
          cards: sharedColors.lighttext,
          navbar: sharedColors.lighttext,
          hero: sharedColors.lighttext,
          footer: sharedColors.lighttext,
        },

        darkbg: {
          // DEFAULT: colors.zinc["900"],
          // cards: colors.stone["700"],
          DEFAULT: colors.neutral["900"],
          cards: sharedColors.darkbg,
          navbar: sharedColors.darkbg,
          hero: sharedColors.darkbg,
          footer: sharedColors.darkbg,
        },

        darktext: {
          DEFAULT: "#ffffff",
          cards: sharedColors.darktext,
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
