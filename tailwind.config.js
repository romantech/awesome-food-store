const { fontFamily } = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

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
