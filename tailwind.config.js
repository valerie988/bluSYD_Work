/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors:{
        primary:"#3260E7",
        danger:"#f5331d",
        border:"#EDF1F6",
        text:"#0B0B0B",
        gray:"#D2D5dd"
      },
      height:{
        small:"100px",
        med:"150px",
        large:"200px"
      },
      width:{
         small:"100px",
        med:"150px",
        large:"200px"
      }
    },
  },
  plugins: [],
}