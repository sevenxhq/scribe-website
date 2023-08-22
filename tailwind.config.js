const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  // darkMode: media,
  theme: {
    extend: {
      fontSize: {
        'xxxs': '.4rem',
        'xxs': '.6rem',
      },
      colors: {
        primary: '#FF5500',
        primaryLHue: '#0099E5',
        primaryDHue: '#E4F2FF',
        secondary: '#151515',
        accent: '#40C000',
        highlight: '#FF4D4D',
      },
      fontFamily: {
        sans: ['Open Sans', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
