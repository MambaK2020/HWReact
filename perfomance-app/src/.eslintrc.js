const globals = require('globals');
const pluginReact = require('eslint-plugin-react');
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended', 
  ],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true, 
    },
  },
  plugins: [
    'react', 
  ],
  settings: {
    react: {
      version: 'detect', 
    },
  },
  rules: {
    'no-console': 'warn',
    'no-unused-vars': 'warn',
    'no-undef': 'error',
    'no-var': 'error',
    'prefer-const': 'warn',
    'react/react-in-jsx-scope': 'off', 
  },
  globals: {
    ...globals.browser, 
  },
  overrides: [
    {
      files: ['**/*.test.js', '**/*.spec.js'],
      env: {
        jest: true,
      },
    },
  ],
};
