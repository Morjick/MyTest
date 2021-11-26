const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'raleway': ['Raleway', 'sans-serif'],
        'opensans': ['Open Sans', 'sans-serif'],
        'manrope': ['Manrope', 'sans-serif']
      },
      colors: {
        primery: '#446284',
        auxiliary: '#183355'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function({ addComponents }) {
      const buttons = {
        '.btn': {
          width: '220px',
          padding: '40px 20px',
          fontWeight: '600',
        },
        '.btn-light': {
          width: '220px',
          padding: '20px 40px',
          fontWeight: '600',
          backgroundColor: '#fff',
          color: '#446284',
        },
        '.btn-primery': {
          width: '220px',
          padding: '20px 10px',
          fontWeight: '600',
          backgroundColor: '#28C1CB',
          color: '#fff',
        },
      }

      addComponents(buttons)
    })
  ],
}


