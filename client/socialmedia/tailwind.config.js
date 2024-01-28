/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: '#7ED957',
        black: '#141713',
        yellow: '#FFBC45',
        blue: '#38B6FF',
      }
    },
  },
  plugins: [],
}