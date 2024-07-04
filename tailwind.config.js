/** @type {(tailwindConfig: object) => object} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    {
      pattern: /text-.*/,
      variants: ['xl'],
    },
    {
      pattern: /font-.*/,
    }
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        'primary': '#1E1E1E',
        'secondary': '#6A7668',
        'cream': '#F7E7CE',
        'darkcream': '#FCD69C',
        'gray': '#828282',
        'lightGray': '#D9D9D9',
        'error-red': '#CC4545',
        'button-hover': '#073B3A'
      },
      keyframes: {},
      animation: {},
    }
  },
  plugins: [],
})