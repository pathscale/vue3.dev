'use strict'

const baseConfigs = [
  'ash-nazg/sauron',
  'plugin:vue/vue3-recommended',
  'plugin:import/errors',
  'plugin:import/warnings',
  'plugin:import/typescript',
  'plugin:prettier/recommended',
]

const baseTSConfigs = [
  ...baseConfigs,
  'plugin:import/typescript',
  'plugin:@typescript-eslint/recommended',
]

module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: baseConfigs,
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint'],
  overrides: [
    {
      files: [
        '.eslintrc.js',
        '.ncurc.js',
        'postcss.config.js',
        '.3rdparty-eslintrc.js',
        'babel.config.js',
      ],
      extends: [
        'ash-nazg/sauron-node',
        'plugin:vue/vue3-recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'plugin:prettier/recommended',
      ],
      env: {
        node: true,
      },
      globals: {
        // Have to add these back due to config inheritance
        __dirname: true,
        module: true,
        require: true,
      },
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'script',
      },
      rules: {
        strict: ['error', 'global'],
        'import/no-commonjs': 'off',

        // Disabling for now
        'require-unicode-regexp': 'off',
        'prefer-named-capture-group': 'off',
      },
    },
    {
      files: '*.ts',
      extends: baseTSConfigs,
      plugins: ['@typescript-eslint'],
      parser: '@typescript-eslint/parser',
    },
    {
      files: ['src/shims-vue.d.ts', 'src/shims-tsx.d.ts', 'src/types.d.ts'],
      extends: baseTSConfigs,
      plugins: ['@typescript-eslint'],
      parser: '@typescript-eslint/parser',
      rules: {
        // No imports/exports in plain declaration file
        'import/unambiguous': 'off',
        'no-shadow': 'off',
      },
    },
    {
      files: '*.vue',
      plugins: ['@pathscale/vue3'],
      rules: {
        'prettier/prettier': 'off',

        // Reapply to better match prettier since disabled
        'arrow-parens': ['error', 'as-needed'],
        // 'comma-dangle': ['error', 'always'], // Interferes with arrow-parens
        'comma-dangle': ['error', 'never'],
        'space-before-function-paren': ['error', 'never'],

        '@pathscale/vue3/v-directive': [
          'error',
          {
            unsafe: [
              // These just add a single operator
              // 'SpreadElement',
              // 'UnaryExpression',

              // This seems unavoidable
              // 'CallExpression',

              // To avoid these, one can use a call expression
              'AssignmentExpression',
              'BinaryExpression',
              'LogicalExpression',
              'ConditionalExpression',
              // This can have design features but preventing to avoid ugliness
              'TemplateLiteral[expressions.length <= 1]',
            ],
          },
        ],
      },
    },
  ],
  rules: {
    // Reapply from ash-nazg
    semi: ['error', 'never'],
    quotes: ['error', 'single'],
    indent: ['error', 2],
    curly: ['error'],
    'block-spacing': ['error'],
    'comma-spacing': ['error'],
    'eol-last': ['error'],
    'key-spacing': ['error'],
    'keyword-spacing': ['error'],
    'no-extra-semi': ['error'],
    'no-trailing-spaces': ['error'],
    'no-tabs': ['error'],
    'no-multi-spaces': ['error'],
    'nonblock-statement-body-position': ['error'],
    'object-curly-spacing': ['error', 'always'],
    'space-before-blocks': ['error'],
    'space-infix-ops': ['error'],

    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'export' },
    ],
    'no-restricted-syntax': [
      'error',
      {
        selector: 'ImportNamespaceSpecifier',
        message:
          'As it is wasteful to use all named imports, use only those ' +
          'which are needed (or switch to a default import).',
      },
    ],

    // Disabling for now
    'max-len': 'off', // ['warn', { code: 80 }],
    'import/extensions': 'off',
    'jsdoc/require-jsdoc': 'off',
    'require-unicode-regexp': 'off',
    'prefer-named-capture-group': 'off',

    // Keep this here so can uncomment to check inline disabling
    // "eslint-comments/no-use": "error",

    'vue/attributes-order': 'off',
    'vue/max-attributes-per-line': 'off',

    // 'vue/no-bare-strings-in-template': ['error'], // Use later i18nizing
    // 'vue/no-static-inline-styles': ['error'], // Revisit later
    // 'vue/no-unregistered-components': ['error'],
    // 'vue/html-comment-indent': ['error'],

    'vue/component-name-in-template-casing': ['error'],
    'vue/html-comment-content-newline': ['error'],
    'vue/html-comment-content-spacing': ['error'],
    'vue/match-component-file-name': ['error', { shouldMatchCase: true }],
    'vue/no-boolean-default': ['error'],
    'vue/no-duplicate-attr-inheritance': ['error'],
    'vue/no-empty-component-block': ['error'],
    'vue/no-multiple-objects-in-class': ['error'],
    'vue/no-potential-component-option-typo': ['error', { presets: ['vue', 'vue-router'] }],
    'vue/no-reserved-component-names': ['error'],
    'vue/no-template-target-blank': ['error', { allowReferrer: true }],
    'vue/no-unsupported-features': ['error', { version: '^3.0.0' }],
    'vue/no-unused-properties': [
      'error',
      {
        // 'data', 'methods'
        groups: ['props', 'computed', 'setup'],
      },
    ],
    'vue/no-useless-mustaches': ['error'],
    'vue/no-useless-v-bind': ['error'],
    'vue/padding-line-between-blocks': ['error'],
    'vue/require-name-property': ['error'],
    'vue/v-for-delimiter-style': ['error'],
    'vue/v-on-function-call': ['error'],
    'vue/html-closing-bracket-newline': [
      'error',
      {
        singleline: 'never',
        multiline: 'never',
      },
    ],
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
        },
      },
    ],
  },
}
