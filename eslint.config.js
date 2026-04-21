import js from "@eslint/js";
import pluginVue from "eslint-plugin-vue";
import globals from "globals"; 

export default [
  {
    
    ignores: ["dist/**", "node_modules/**", "playwright-report/**"],
  },
  js.configs.recommended,
  ...pluginVue.configs["flat/recommended"],
  {
    files: ["**/*.js", "**/*.vue"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser, 
      },
    },
    rules: {
      "no-unused-vars": "warn",
      "no-console": "off",
      "vue/multi-word-component-names": "off"
    },
  },
];