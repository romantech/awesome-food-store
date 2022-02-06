module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  plugins: [],
  extends: ['standard', 'next', 'plugin:prettier/recommended'],
  // eslint-config-next 룰셋엔 eslint-plugin-react/react-hooks/next 이 포함됨
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react/prop-types': 'off',
    'prettier/prettier': 1,
    'no-unused-vars': 1,
  },
  globals: {
    React: true,
    // Next.js 에선 React 를 import 하지 않아도 되므로 전역 변수에 추가
  },
};
