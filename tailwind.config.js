/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      colors:{
        pink:"#fefae0",
        blue:"#00FFF7",
        lightpink:"#F7C59F"
      },
      fontFamily:{
        cursive:["Prociono","serif"],
        stylish:["Satisfy","cursive"]
      },
    },
  },
  plugins: [],
}