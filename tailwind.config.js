const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
     './src/**/*.html',
     './src/**/*.js',
   ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'light-blue': colors.green,
        cyan: colors.red,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}


/*
const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./index.html', './src/** /*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class' 
  theme: {
    extend: {
      colors: {
        'light-blue': colors.green,
        cyan: colors.red,
      },
    },
  },
  variants: {},
  plugins: [],
}
*/ 