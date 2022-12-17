/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [    
    './pb_public/*.{html, js, jsx}',
    './src/app.jsx'
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
