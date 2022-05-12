module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        main: ["Comfortaa"],
        primary: ["Comfortaa-Bold"],
        second: ["Comfortaa-Light"],
        regular: ["Comfortaa-Regular"],
      },
      colors: {
        cream: "#FEFAE0",
        greeny: "#2D6A4F",
      },
    },
  },
  Plugin: [require("@tailwindcss/forms")],
};
