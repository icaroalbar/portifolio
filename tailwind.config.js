/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#302F3D',
        secondary: '#22212C',
        text: '#837E9F',
        tag: '#CB92B1'
      },
    },
  },
  plugins: [],
}