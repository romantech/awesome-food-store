module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  plugins: [],
  // extends 배열에서 아래에 위치할수록 우선순위 높음. prettier 규칙은 가장 마지막에 입력
  // eslint-[config-prettier/plugin-prettier]를 사용하면 extends 배열에 'plugin:prettier/recommended' 만 추가하면 됨
  // eslint-config-next 패키지엔 eslint-plugin-react/reacts/next 등을 모두 포함하므로 extends 배열엔 'next' 만 추가 (참고: https://bit.ly/3PMFalD)
  // airbnb 등 다른 플러그인과 함께 사용하려면 eslint-config-next 패키지 지우고 @next/eslint-plugin-next 설치/추가 (참고 : https://bit.ly/3J5j3nU)
  extends: ['next', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  settings: {
    react: { version: 'detect' },
  },
  rules: {
    'react/prop-types': 'off',
    'prettier/prettier': 1,
    'no-unused-vars': 1,
  },
  globals: { React: 'writable' }, // Next.js 에선 React 를 import 하지 않아도 되므로 전역 변수에 추가
};
