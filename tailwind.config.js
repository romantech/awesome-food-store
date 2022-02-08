const { fontFamily } = require('tailwindcss/defaultTheme');
console.log(fontFamily);

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        ...fontFamily,
        sans: ['InfinitySans-RegularA1', ...fontFamily.sans],
        heading: ['InfinitySans-BoldA1'],
      },
      colors: {
        'primary-blue': '#464ea3',
        'primary-red': '#f2542d',
        'primary-bg': '#28231c',
        'primary-bg-footer': '#eae1df',
      },
    },
  },
  plugins: [],
};
