/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './src/**/*.{html,js}',
    './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    extend: {
      boxShadow: {
        'b-3' : '0 0 3px 3px rgba(0,0,0,0.1)',
      },
      spacing: {
        't-113' : '113%' // top : 113 % 
      }
    },
  },
  plugins: [],
}