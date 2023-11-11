/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {gridTemplateRows: {
      // Simple 8 row grid
      '8': 'repeat(8, minmax(0, 1fr))',

      // Complex site-specific row configuration
      'layout': '200px minmax(900px, 1fr) 100px',
    }},
  },
  plugins: [ require('flowbite/plugin')],
}

