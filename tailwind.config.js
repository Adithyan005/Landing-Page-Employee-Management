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
        
        lightpink:"#F7C59F"
      },
      fontFamily:{
        cursive:["Prociono","serif"],
        stylish:["Satisfy","cursive"]
      },
      screens: {
        'sm-1':'320px',
        'sm-2': '640px',  
        'md': '768px',  
        'lg': '1024px',  
        'xl': '1280px',  
        '2xl': '1536px',
      }
    },
  },
  plugins: [],
}