import globals from 'globals';
import pluginJs from '@eslint/js';
import daStyle from 'eslint-config-dicodingacademy';

/** @type {import('eslint').Linter.Config[]} */
export default [
  daStyle,
  {
    languageOptions: {
      // Ganti env dengan languageOptions.globals
      globals: {
        ...globals.node, // Tambahkan global Node.js
        process: 'readonly', // Secara eksplisit tambahkan process
      },
    },
  },
  { files: ['**/*.js'], languageOptions: { sourceType: 'commonjs' } },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
];
