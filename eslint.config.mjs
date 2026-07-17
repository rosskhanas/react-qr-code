import { fileURLToPath } from "node:url";
import { includeIgnoreFile } from "@eslint/compat";
import js from "@eslint/js";
import importPlugin from "eslint-plugin-import";
import reactPlugin from "eslint-plugin-react";
import globals from "globals";

export default [
  includeIgnoreFile(fileURLToPath(new URL(".gitignore", import.meta.url))),
  {
    ignores: [".agents", ".claude", "**/dist/**"],
  },
  js.configs.recommended,
  {
    files: ["**/*.{js,cjs,mjs,jsx}"],
    languageOptions: {
      ...reactPlugin.configs.flat.recommended.languageOptions,
      globals: {
        ...globals.browser,
        ...globals.jest,
        ...globals.node,
      },
    },
    plugins: {
      import: importPlugin,
      react: reactPlugin,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      "import/no-extraneous-dependencies": ["error", { devDependencies: ["**/eslint.config.mjs"] }],
      "import/order": ["error", { alphabetize: { caseInsensitive: true, order: "asc" }, "newlines-between": "never" }],
      "react/jsx-sort-props": ["error", { callbacksLast: true }],
      "react/jsx-uses-react": "error",
      "react/jsx-uses-vars": "error",
      "react/sort-prop-types": ["error", { callbacksLast: true, ignoreCase: false, requiredFirst: false, sortShapeProp: true }],
    },
  },
];
