module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
        "indent": ["error", 4],
        "no-multiple-empty-lines": ["error", {
            "max": 1,
            "maxEOF": 0,
            "maxBOF": 0,
        }],
        "no-unexpected-multiline": 2,
        "no-multi-spaces": 2,
        "quotes": ["error", "single"],
        "@typescript-eslint/array-type": ["error", { default: "generic"}],
    }
}
