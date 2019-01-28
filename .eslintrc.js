module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "node": true
  },
  "parser": "babel-eslint",
  "extends": "airbnb",
  "parserOptions": {
    "sourceType": "module",
    "ecmaVersion": 6,
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "indent": [
      "error",
      2
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "never"
    ],
    "import/prefer-default-export": [
      "off"
    ],
    "no-return-assign": [
      "off"
    ],
    "no-useless-return": [
      "off"
    ],
    "react/forbid-prop-types": [
      "off"
    ],
    "react/require-default-props": [
      "off"
    ],
    "react/no-unused-state": [
      "off"
    ],
    "react/prefer-stateless-function": [
      "off"
    ],
    "react/jsx-filename-extension": [
      "off"
    ]
  }
};