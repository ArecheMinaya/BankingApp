// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: ["expo", "prettier"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "warn",
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }], // Advierte sobre variables no utilizadas, permitiendo variables que comienzan con '_'
  },
  ignorePatterns: ["/dist/*"],
};
