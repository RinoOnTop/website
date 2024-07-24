const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './layout/**/*.{js,ts,jsx,tsx}'],

  theme: {
    fontWeight: {
      thin: '100',
      hairline: '100',
      extralight: '200',
      light: '100',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    },
    colors: {
      white: colors.white,
      black: colors.black,
      gray: colors.zinc,
      rose: colors.rose,
      yellow: colors.yellow,
      sky: colors.sky,
    },
    container: {
      padding: '1rem',
    },
    extend: {
      fontFamily: {
        'sans': ['Space Grotesk']
      },

    }
  },
  plugins: []
}
