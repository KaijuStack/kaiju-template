import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import turboPlugin from 'eslint-plugin-turbo';
import drizzlePlugin from 'eslint-plugin-drizzle';
import tseslint from 'typescript-eslint';

/**
 * A shared ESLint configuration for the repository.
 *
 * @type {import("eslint").Linter.Config}
 * */
export const config = [
  js.configs.recommended,
  eslintConfigPrettier,
  ...tseslint.configs.recommended,
  {
    plugins: {
      turbo: turboPlugin,
      drizzle: drizzlePlugin,
    },
    rules: {
      'turbo/no-undeclared-env-vars': 'off',
      'drizzle/enforce-delete-with-where': 'warn',
      'drizzle/enforce-update-with-where': 'warn',
    },
  },
  {
    ignores: ['dist/**'],
  },
];
