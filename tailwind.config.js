const defaultTheme = require('tailwindcss/defaultTheme')
// const { colors } = require('tailwindcss/defaultTheme')
// Palette -> F3FF93 - C6CF65 - 76A21E - F6F6E9 - 560D0D

module.exports = {
  theme: {
    extend: {
      textColor: {
        primary: '#85EF47'
      },
      colors: {
        primary: '#85EF47'
      },
      fontFamily: {
        sans: [
          'Heebo',
          ...defaultTheme.fontFamily.sans
        ]
      }
    }
  },
  variants: {},
  plugins: []
}
