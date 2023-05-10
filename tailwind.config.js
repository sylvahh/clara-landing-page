/** @type {import('tailwindcss').Config} */
module.exports = {
  //  add custom typograpghy and utilities here for help visit https://tailwindcss.com/docs/installation

  // NB when you make changes to this file you might have to restart the server
  // #3BB77E
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', './node_modules/flowbite/**/*.js'],
  theme: {
    extend: {
      colors: {
        primary: '#FFA500',
        secondary: '#182C32',
        tertiary: '#007400',
        cards: ' #E9E9E9',
        'black-sub': 'rgba(75, 75, 75, 1)',
        'tertiary-100': '#3BB77E',
        'alt-sec': '#253D4E',
        'alt-tertiary': '#DEF9EC', 
        
      },
      fontFamily: {
        mulish: ['quicksand'],
      },
    },
  },
  variants: {
    extend: {
      display: ['peer-hover'],
    },
  },

  plugins: [require('flowbite/plugin')],
};
