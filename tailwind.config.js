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
        primaryLHue: '#E79797',
        primaryDHue: '#F05000',
        secondary: '#151515',
        accent: '#40C000',
        highlight: '#FF8B52',
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
