module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
  ],
  parserOptions: {
    project: ['./tsconfig.json'],
    createDefaultProgram: true,
  },
  plugins: [
  ],
  // Checkout the typescript rules: https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#extension-rules
  rules: {
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: '*', next: 'export' },
    ],
    'import/no-relative-parent-imports': 'error',
    'import/order': 'error',
    'comma-dangle': 'off',
    'comma-spacing': 'off',
    'dot-notation': 'off',
    'lines-between-class-members': 'off',
    'func-call-spacing': 'off',
    indent: 'off',
    'no-redeclare': 'off',
    'no-unused-expressions': 'off',
    'no-unused-vars': 'off',
    'no-return-await': 'off',
    semi: 'off',
    'space-before-function-paren': 'off',
    'space-infix-ops': 'off',
    quotes: 'off',
    'object-curly-spacing': 'off',
    'no-shadow': 'off',
    'no-throw-literal': 'off',
    '@typescript-eslint/no-throw-literal': ['error'],
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/object-curly-spacing': ['error', 'always'],
    '@typescript-eslint/quotes': ['error', 'single'],
    '@typescript-eslint/space-infix-ops': ['error', { int32Hint: false }],
    '@typescript-eslint/space-before-function-paren': ['error', 'never'],
    '@typescript-eslint/member-delimiter-style': ['error'],
    '@typescript-eslint/semi': ['error', 'always'],
    '@typescript-eslint/return-await': 'error',
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/no-unused-expressions': ['error'],
    '@typescript-eslint/no-redeclare': ['error'],
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/func-call-spacing': ['error'],
    '@typescript-eslint/comma-dangle': ['error', 'always-multiline'],
    '@typescript-eslint/comma-spacing': ['error'],
    '@typescript-eslint/dot-notation': ['error'],
    '@typescript-eslint/lines-between-class-members': ['error'],
    '@typescript-eslint/array-type': ['error', { default: 'generic' }],
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    '@typescript-eslint/no-confusing-non-null-assertion': ['error'],
    '@typescript-eslint/no-parameter-properties': ['error'],
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': ['error'],
    '@typescript-eslint/no-unnecessary-condition': ['error'],
    '@typescript-eslint/type-annotation-spacing': ['error'],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    'vue/component-definition-name-casing': 'error',
    'vue/array-bracket-spacing': 'error',
    'vue/arrow-spacing': 'error',
    'vue/block-spacing': 'error',
    'vue/brace-style': 'error',
    'vue/camelcase': 'error',
    'vue/comma-dangle': ['error', 'always-multiline'],
    'vue/eqeqeq': [
      'error',
      'always',
      {
        null: 'always',
      },
    ],
    'vue/key-spacing': 'error',
    'vue/keyword-spacing': 'error',
    'vue/no-boolean-default': ['error', 'default-false'],
    'vue/no-deprecated-scope-attribute': 'error',
    'vue/no-empty-pattern': 'error',
    'vue/object-curly-spacing': ['error', 'always'],
    'vue/padding-line-between-blocks': 'error',
    'vue/space-infix-ops': 'error',
    'vue/space-unary-ops': 'error',
    'vue/v-on-function-call': 'error',
    'vue/order-in-components': 'error',
    'vue/v-slot-style': [
      'error',
      {
        atComponent: 'v-slot',
        default: 'v-slot',
        named: 'longform',
      },
    ],
    'vue/valid-v-slot': [
      'error',
      {
        allowModifiers: true,
      },
    ],
    'vue/require-default-prop': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'any',
          normal: 'always',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],
    'vue/custom-event-name-casing': ['error', 'kebab-case'],
    'vue/v-on-event-hyphenation': ['error', 'always'],
    'vue/attribute-hyphenation': ['error', 'always'],
    'vue/prop-name-casing': ['error', 'camelCase'],
    'vue/no-lone-template': 'off',
  },
  overrides: [
    {
      // enable the rule specifically for TypeScript files
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': ['error', {
          allowExpressions: false,
          allowTypedFunctionExpressions: true,
          allowHigherOrderFunctions: true,
          allowDirectConstAssertionInArrowFunctions: true,
          allowConciseArrowFunctionExpressionsStartingWithVoid: false,
        }],
        '@typescript-eslint/explicit-member-accessibility': ['error'],
      },
    },
  ],
};
