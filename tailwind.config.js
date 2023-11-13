/** @type {import('tailwindcss').Config} */
/*eslint-env node*/
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#ffffff",
        secondary: "#f4f1f1e7",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        outfit: ["Outfit, sans-serif"],
        nunito: ["Nunito Sans, sans-serif"],
        roboto: ["Roboto Condensed, sans-serif"],
        manrope: ["Manrope, sans-serif"],
      },
    },
    screens: {
      xs: "426px",
      ss: "620px",
      sm: "769px",
      md: "1024px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};