import { defineConfig } from 'eslint/config';
import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';
import prettierRecommended from 'eslint-plugin-prettier/recommended';

export default defineConfig([
  ...nextCoreWebVitals,
  prettierRecommended,
  {
    rules: {
      'prettier/prettier': 'warn',
      'no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
      'react-hooks/set-state-in-effect': 'off',
    },
  },
]);
