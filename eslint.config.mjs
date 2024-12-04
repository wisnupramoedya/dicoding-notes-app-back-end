import globals from 'globals';
import pluginJs from '@eslint/js';
import daStyle, { rules } from 'eslint-config-dicodingacademy';

/** @type {import('eslint').Linter.Config[]} */
export default [
  daStyle,
  {
    rules: {
      'linebreak-style': ['error', process.platform === 'win32' ? 'windows' : 'unix'],
  }},
  { files: ['**/*.js'], languageOptions: { sourceType: 'commonjs' } },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
];
