import js from ".pnpm/@eslint+js@9.15.0/node_modules/@eslint/js";
import globals from ".pnpm/globals@15.12.0/node_modules/globals";
import reactHooks from ".pnpm/eslint-plugin-react-hooks@5.0.0_eslint@9.15.0_jiti@1.21.6_/node_modules/eslint-plugin-react-hooks";
import reactRefresh from ".pnpm/eslint-plugin-react-refresh@0.4.14_eslint@9.15.0_jiti@1.21.6_/node_modules/eslint-plugin-react-refresh";
import tseslint from ".pnpm/typescript-eslint@8.15.0_eslint@9.15.0_jiti@1.21.6__typescript@5.6.3/node_modules/typescript-eslint";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
  }
);
