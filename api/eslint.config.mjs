import js from '@eslint/js';
import globals from 'globals';
import json from '@eslint/json';
import css from '@eslint/css';
import { defineConfig } from 'eslint/config';
import { jest, pluginJest } from 'eslint-plugin-jest';

//plugins
import importPlugin from 'eslint-plugin-import';
const commonPlugins = { js, import: importPlugin };
const commonExtends = ['js/recommended'];
const commonLanguageOptions = {
  ecmaVersion: 2021,
  globals: { ...globals.node, ...globals.browser, ...globals.jest },
  env,
};

const commonRules = {
  quotes: ['error', 'single'],
  'import/no-extraneous-dependencies': [
    'error',
    { devDependencies: true, optionalDependencies: true, peerDependencies: true },
  ],
  // otras reglas comunes aquí
};

export default defineConfig([
  {
    files: ['**/*.{js,cjs,mjs}'],
    plugins: commonPlugins,
    extends: commonExtends,
    languageOptions: {
      ...commonLanguageOptions,
      // sourceType se definirá en bloques específicos si cambia
    },
    rules: commonRules,
  },

  {
    files: ['**/*.{js,cjs}'],
    languageOptions: {
      sourceType: 'commonjs',
      // hereda ecmaVersion y globals del bloque común porque ESLint los combina
    },
  },

  {
    files: ['**/*.mjs'],
    languageOptions: {
      sourceType: 'module',
      // hereda ecmaVersion y globals del bloque común
    },
  },
  {
    files: ['**/*.json'],
    plugins: { json },
    language: 'json/json',
    extends: ['json/recommended'],
  },
  {
    files: ['**/*.jsonc'],
    plugins: { json },
    language: 'json/jsonc',
    extends: ['json/recommended'],
  },
  {
    files: ['**/*.json5'],
    plugins: { json },
    language: 'json/json5',
    extends: ['json/recommended'],
  },
  {
    files: ['**/*.css'],
    plugins: { css },
    language: 'css/css',
    extends: ['css/recommended'],
  },
  {
    files: ['**/*.spec.js', '**/*.test.js', '**/*.e2e.{js,mjs,cjs}'],
    plugins: { jest: pluginJest },
    languageOptions: {
      globals: pluginJest.environments.globals.globals,
    },
    rules: {
      ...jest.configs.recommended.rules,
    },
  },
]);
