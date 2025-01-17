module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    // 'plugin:react/recommended',
    "eslint:recommended",
  ],
  'overrides': [],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'plugins': [
    // 'react'
  ],
  "rules": {
    // "react/prop-types": 0,
    // "react/no-unknown-property": 0,
    "no-console": "off",
    "no-extra-parens": ["warn", "all"],
    "array-callback-return": "error",
    "curly": "error",
    "default-case": "warn",
    "eqeqeq": ["error", "always"],
    "guard-for-in": "warn",
    "no-caller": "error",
    "no-empty-function": "error",
    "no-eval": "error",
    "no-extra-bind": "error",
    "no-floating-decimal": "error",
    "no-lone-blocks": "error",
    "no-multi-spaces": "error",
    "no-new": "warn",
    "no-return-assign": "error",
    "no-self-compare": "error",
    "no-useless-call": "error",
    "no-undef-init": "error",
    "block-spacing": "error",
    "brace-style": "error",
    "comma-dangle": ["warn", "never"],
    "func-call-spacing": ["error", "never"],
    "max-len": ["warn", {
      "code": 200,
      "ignoreComments": true
    }],
    "new-cap": ["error", {
      "newIsCap": true
    }],
    "new-parens": "error",
    "no-nested-ternary": "error",
    "no-unneeded-ternary": "error",
    "quotes": ["warn", "single", {
      "avoidEscape": true,
      "allowTemplateLiterals": true
    }],
    "arrow-spacing": ["error", {
      "before": true,
      "after": true
    }],
    "no-useless-computed-key": "error",
    "no-useless-constructor": "error",
    "no-prototype-builtins": "off",
    "no-var": "warn",
    "no-unused-vars": ["warn", {
      "vars": "local"
    }],
    "no-magic-numbers": ["warn", {
      "ignore": [0, 1]
    }]
  }
};