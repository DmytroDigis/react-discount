import pluginJs from "@eslint/js";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import eslintPluginSimpleImportSort from "eslint-plugin-simple-import-sort";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "script",
    },
  },
  {
    languageOptions: {
      globals: globals.browser,
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.jsx"],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },
  pluginReactConfig,
  {
    rules: {
      "react/react-in-jsx-scope": "off",
    },
  },
  {
    plugins: {
      eslintPluginSimpleImportSort,
    },
    rules: {
      "eslintPluginSimpleImportSort/imports": "error",
      "eslintPluginSimpleImportSort/exports": "error",
    },
  },
];
