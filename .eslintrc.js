module.exports = {
    root: true,
    env: {
        node: true,
        es6: true,
        es2017: true,
        es2020: true,
    },
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint"],
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier",
    ],
};
