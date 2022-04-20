const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        mono: ['Inconsolata', 'monospace'],
        body: ['Arial', 'sans-serif'],
        sans: ['Arial', 'sans-serif'],
      },
      gridTemplateRows: {
        '[auto,auto,1fr]': 'auto auto 1fr',
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: {
        50: '#FFD5B8',
        100: '#FFC9A3',
        200: '#FFB17A',
        300: '#FF9952',
        400: '#FF8129',
        500: '#FF6900',
        600: '#C75200',
        700: '#8F3B00',
        800: '#572400',
        900: '#1F0D00',
      },
      yellow: colors.yellow,
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
  ],
}
