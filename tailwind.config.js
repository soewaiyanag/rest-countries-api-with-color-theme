const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/**/*.js"],
  darkMode: "class",
  content: [],
  theme: {
    extend: {
      colors: {
        "dark-blue-100": "hsl(209, 23%, 22%)",
        "dark-blue-200": "hsl(207, 26%, 17%)",
        "dark-blue-300": "hsl(200, 15%, 8%)",
        "stone-450": "#858585",
      },
      fontFamily: {
        nunito: "'Nunito Sans', 'sans-serif'",
      },
    },
  },
  plugins: [],
};
