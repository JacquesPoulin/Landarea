module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  theme: {extend: {
    fontFamily: {
      main: ["Comfortaa"],
      primary: ["Comfortaa-Bold"],
      second: ["Comfortaa-Light"],
      regular: ["Comfortaa-Regular"],
    }}
},
Plugin: [require('@tailwindcss/forms')],
};


