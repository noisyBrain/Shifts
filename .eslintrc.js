module.exports = {
  env: {
    node: true,
    es6: true
  },
  extends: ["airbnb-base", "prettier"],
  plugins: ["@typescript-eslint", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  ignorePatterns: ["*.js", "*.d.ts", "*.json", "schema.prisma", "*.sql", "*.toml", "*.html"],
  rules: {
    "import/prefer-default-export": "off",
    "import/no-unresolved": "off",
    "import/extensions": "off",
    "no-console": ["error", { "allow": ["warn", "error"] }],
    "no-use-before-define": "off",
    "no-undef": "off",
    "no-param-reassign": "off",
    "no-useless-constructor": "off",
    "consistent-return": "off",
    "prettier/prettier": "error",
    "max-classes-per-file": "off",
    "class-methods-use-this": "off",
    "no-underscore-dangle": "off",
    "no-empty": "off",
    "no-plusplus": "off",
    "no-empty-function": "off",
    "no-unused-vars": "off",
    "no-shadow": "off",
    "prefer-destructuring": ["error", { "object": true, "array": false }],
    "no-restricted-syntax": "off",
    "no-await-in-loop": "off",
    "guard-for-in": "off",
    "no-useless-escape": "off",
    "default-case": "off",
    "dot-notation": "off",
    "@typescript-eslint/no-shadow": "error",
    "@typescript-eslint/no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
  }
};

