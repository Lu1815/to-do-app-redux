/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "btn": "#BFDBFE",
        "btn-hovered": "#BACDFF"
      }
    },
  },
  plugins: [],
}