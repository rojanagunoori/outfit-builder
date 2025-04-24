module.exports = {
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react/recommended',
      'plugin:@next/next/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
    },
    plugins: ['@typescript-eslint', 'react'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'warn', // Change 'off' to 'warn' or 'error' if you want stricter enforcement
      '@typescript-eslint/no-unused-vars': 'warn', // Change 'off' to 'warn' or 'error' if you want stricter enforcement
    },
  };
  