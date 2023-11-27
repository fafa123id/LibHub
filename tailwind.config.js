/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'Jakarta': ['Plus Jakarta Sans', 'sans-serif']
      },
      colors: {
        'green-100': '#E0F2F1',
        'green-200': '#B2DFDB',
        'green-300': '#80CBC4',
        'green-400': '#4DB6AC',
        'green-500': '#26A69A',
        'green-600': '#009688',
        'green-700': '#00897B',
        'green-800': '#00796B',
        'green-900': '#00695C',
        'green-950': '#004D40',
        'red-100': '#FFEBEE',
        'red-200': '#FFCDD2',
        'red-300': '#EF9A9A',
        'red-400': '#E57373',
        'red-500': '#F44336',
        

      }
      
    },
  },
  plugins: [
   require("daisyui"),
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/aspect-ratio'),
    // require('@tailwindcss/typography'),
    // require('tailwindcss-children'),
  ],
}

