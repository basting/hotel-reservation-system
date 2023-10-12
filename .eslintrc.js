module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["standard-with-typescript", "plugin:react/recommended", "plugin:react/jsx-runtime", "plugin:@typescript-eslint/recommended"],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.js"],
      parserOptions: {
        sourceType: "script",
        project: null
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: './tsconfig.json'
  },
  plugins: ["react"],
  rules: {},
  settings: {
    react: {
      version: 'detect'
    }
  },
  "ignorePatterns": [".eslintrc.js", "playwright.config.ts", "**/*.test.ts", "coverage/**"]
};
