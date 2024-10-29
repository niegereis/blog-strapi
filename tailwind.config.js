/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    // "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/*.{jsx,js}",
    "./src/hooks/*.js",
    "./src/pages/*.{jsx,js}",
    "./src/assets/*.{js}",
    "./src/*.{js,ts,jsx,tsx}",


  ],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}