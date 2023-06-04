/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

function calculateThemeColors(primaryColor, lightTextColor, darkTextColor) {
  let themeColors = {};

  themeColors.lighttext = lightTextColor;
  themeColors.darktext = darkTextColor;

  if (
    [
      colors.red["500"],
      colors.orange["500"],
      colors.amber["500"],
      colors.yellow["500"],
      colors.slate["500"],
    ].indexOf(primaryColor["500"]) > -1
  ) {
    themeColors.lightbg = colors.stone["200"];
    themeColors.darkbg = colors.stone["800"];
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
    themeColors.lightbg = colors.slate["200"];
    themeColors.darkbg = colors.slate["800"];
  }

  if (
    [
      colors.lime["500"],
      colors.green["500"],
      colors.emerald["500"],
      colors.teal["500"],
    ].indexOf(primaryColor["500"]) > -1
  ) {
    themeColors.lightbg = colors.gray["200"];
    themeColors.darkbg = colors.gray["800"];
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
    themeColors.lightbg = colors.zinc["200"];
    themeColors.darkbg = colors.zinc["800"];
  }

  return themeColors;
}
module.exports = [calculateThemeColors];
