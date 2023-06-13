/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        vikings: ["Skranji"],
        norse: ["Norse"],
      },
    },
  },
  plugins: [],
};
