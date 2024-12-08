import globals from "globals";
import pluginJs from "@eslint/js";
import daStyle from "eslint-config-dicodingacademy";

/** @type {import('eslint').Linter.Config[]} */
export default [
  daStyle,
  {
    rules: {
      "linebreak-style": [
        "error",
        process.platform === "win32" ? "windows" : "unix",
      ],
    },
    env: { node: true },
  },
  { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
];
