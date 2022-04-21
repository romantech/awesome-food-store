const { fontFamily } = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './hooks/*.{js,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['InfinitySans-RegularA1', ...fontFamily.sans],
        heading: ['InfinitySans-BoldA1', ...fontFamily.sans],
      },
      colors: {
        'primary-blue': '#464ea3',
        'primary-red': '#f2542d',
        'primary-bg': '#28231c',
        'primary-bg-footer': '#eae1df',
      },
      keyframes: {
        blink: { '50%': { opacity: '0' } },
      },
      animation: {
        blink: 'blink 1s step-end infinite',
      },
      screens: {
        ss: '450px', // @media (min-width: 450px) {...}
      },
    },
  },
  plugins: [
    // 커스텀 클래스 정의
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        '.min-h-content': {
          minHeight: 'calc(100vh - 70px) !important',
        },
      };
      addUtilities(newUtilities);
    }),
  ],
};
