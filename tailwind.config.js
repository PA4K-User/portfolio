/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryTitle:"#974EC3",
        primaryContent:"#27005D",
        primarySubcontent:"#9F91CC",
        primaryBase:"#E4F1FF",
        primaryAccent:"#9400FF",
        primaryBg:"#000000",
      }
    },
  },
  plugins: [],
}

