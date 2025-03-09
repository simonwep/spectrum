import js from '@eslint/js';
import react from 'eslint-plugin-react';
import ts from 'typescript-eslint';
import tsParser from '@typescript-eslint/parser';
import prettier from 'eslint-plugin-prettier/recommended';
import globals from 'globals';

export default [
  js.configs.recommended,
  react.configs.flat.recommended,
  ...ts.configs.recommended,
  prettier,
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.mjs', '**/*.js'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        ...globals.node
      }
    },
    settings: {
      react: {
        version: '18'
      }
    },
    rules: {
      '@typescript-eslint/no-unused-expressions': 'off',
      'react/no-unknown-property': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react/no-unescaped-entities': ['error', { forbid: ['>', '}'] }],
      'prettier/prettier': [
        'error',
        {
          jsonRecursiveSort: true,
          printWidth: 120,
          singleQuote: true,
          trailingComma: 'none'
        }
      ]
    }
  }
];
