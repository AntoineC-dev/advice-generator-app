/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: ["./src/app.html", "./src/**/*.{html,js,svelte,ts}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      cyan: "hsl(193, 38%, 86%)",
      green: "hsl(150, 100%, 66%)",
      blue: {
        light: "hsl(217, 19%, 38%)",
        DEFAULT: "hsl(217, 19%, 24%)",
        dark: "hsl(218, 23%, 16%)",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Manrope", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          "shadow-glow": (value) => {
            return {
              boxShadow: `0px 0px 35px 0px ${value}`,
            };
          },
        },
        {
          values: theme("colors"),
        }
      );
    }),
  ],
};
