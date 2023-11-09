/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        'orange-brown' : '#D65F2C',
        'orange-y' : "#C64F2C",
        'grey' : '#FBFBFB',
        'zerd' :'rgba(0, 0, 0, 0.86)',
        'yellow' : '#DBFF00'

      },
      backgroundImage :{
        'picture' : "url('assets/picture.png')",
      },
      animation:{
        'fadeIn': 'fade-in 1s ease-in-out'
      }

      
    },
  },
  plugins: [],
}

