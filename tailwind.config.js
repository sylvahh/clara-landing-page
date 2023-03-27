/** @type {import('tailwindcss').Config} */
module.exports = {
  //  add custom typograpghy and utilities here for help visit https://tailwindcss.com/docs/installation

  // NB when you make changes to this file you might have to restart the server

  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', './node_modules/flowbite/**/*.js'],
  theme: {
    extend: {
      colors: {
        primary: '#FFA500',
        secondary: '#182C32',
        tertiary: '#007400',
        navlinks: '#DDE2FF',
      },
      fontFamily: {
        mulish: ['mulish'],
      },
    },
  },
  variants: {
    extend: {
      display: ['peer-hover'],
    },
  },

  // plugins: [require('flowbite/plugin')],
};
