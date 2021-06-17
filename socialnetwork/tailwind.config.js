module.exports = {
  purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      primary: "#e63946",
      secondary: "#a8dadc",
      white: "#f1faee",
      dark: "#1d3557",
      dark_ligth: "#457b9d",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
