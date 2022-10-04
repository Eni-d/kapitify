/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        customBackground:"#F8F8F8",
        customLightBlue: "#EDF0F2",
        customBlue: "#06335B42",
        customDarkBlue: "#06335B",
        customGray: "#242424",
        customLightGray: "#333333",
        // customLightGray: "#4A4A4A",
        customExtraLightGray: "#4B4B4B",
        customLocation: "#57CC99",
      }
    },
  },
  plugins: [],
}
