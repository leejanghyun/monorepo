/* eslint-env node */
const OFF = 0
const WARN = 1
const ERROR = 2

module.exports = {
  env: {
    node: true,
    browser: true,
    'jest/globals': true,
  },
  extends: ['airbnb'],
  plugins: ['simple-import-sort', '@emotion'],
  rules: {
    semi: [ERROR, 'never'],
    quotes: [WARN, 'single'],
    'arrow-body-style': OFF,
    'no-restricted-exports': OFF,
    'max-len': [ERROR, 120, 2, {
      ignoreUrls: true,
      ignoreComments: false,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }],
    'import/prefer-default-export': OFF,
    'import/no-import-module-exports': OFF,
    'import/no-named-default': OFF,
    'no-debugger': OFF,
    'import/order': OFF,
    'no-underscore-dangle': OFF,
    'react/require-default-props': OFF,
    'react/jsx-props-no-spreading': OFF,
    'react/jsx-uses-react': OFF,
    'react/react-in-jsx-scope': OFF,
    'react/prop-types': OFF,
    'react/jsx-wrap-multilines': [WARN, {
      declaration: 'parens-new-line',
      assignment: 'parens-new-line',
      return: 'parens-new-line',
      arrow: 'parens-new-line',
      condition: 'parens-new-line',
      logical: 'parens-new-line',
      prop: 'parens-new-line',
    }],
    'react/jsx-max-props-per-line': [WARN, {
      maximum: 1,
    }],
    'react/no-array-index-key': OFF,
    'react/jsx-closing-bracket-location': WARN,
    'react/jsx-closing-tag-location': WARN,
    'react/jsx-first-prop-new-line': WARN,
    'react/self-closing-comp': [WARN, {
      component: true,
      html: true,
    }],
    'react/jsx-indent': [WARN, 2],
    'react/jsx-one-expression-per-line': OFF,
    'react/function-component-definition': OFF,
    'simple-import-sort/imports': WARN,
    'simple-import-sort/exports': WARN,
    'no-param-reassign': 0,
    'import/no-extraneous-dependencies': OFF,
    'no-global-assign': OFF,
    'no-case-declarations': OFF,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  overrides: [
    // typescript 공통 설정
    {
      files: ['packages/**/*.ts?(x)'],
      parser: '@typescript-eslint/parser',
      extends: [
        'airbnb-typescript',
      ],
      plugins: ['@typescript-eslint'],
      parserOptions: {
        project: ['./tsconfig.json', './packages/**/tsconfig.json'],
      },
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': OFF,
        '@typescript-eslint/no-empty-interface': OFF,
        '@typescript-eslint/no-var-requires': OFF,
        '@typescript-eslint/semi': [ERROR, 'never'],
        '@typescript-eslint/no-use-before-define': OFF,
        '@typescript-eslint/no-shadow': OFF,
        '@typescript-eslint/naming-convention': OFF,
        '@typescript-eslint/type-annotation-spacing': [WARN],
        '@typescript-eslint/no-useless-constructor': OFF,
        'import/export': OFF,
        'import/no-extraneous-dependencies': OFF,
        'import/extensions': [OFF],
      },
    },
    // managers 공통 설정
    {
      files: ['packages/managers/**/*.ts?(x)'],
      parser: '@typescript-eslint/parser',
      extends: ['next/core-web-vitals'],
      parserOptions: {
        project: ['./tsconfig.json', './packages/managers/tsconfig.json'],
      },
      rules: {
        '@next/next/no-img-element': OFF,
        'class-methods-use-this': OFF,
      },
      settings: {
        next: { rootDir: 'packages/managers/' },
        react: {
          version: 'detect',
        },
      },
    },
    // ui 공통 설정
    {
      files: ['packages/ui/**/*.ts?(x)'],
      parser: '@typescript-eslint/parser',
      extends: ['plugin:storybook/recommended'],
      parserOptions: {
        project: ['./tsconfig.json', './packages/ui/tsconfig.json'],
      },
      rules: {
      },
      settings: {
        react: {
          version: 'detect',
        },
      },
    },
    // Jest 한정 룰 추가
    {
      extends: [
        'plugin:jest/recommended',
      ],
      plugins: ['jest', 'jest-dom'],
      files: [
        'packages/**/*.(test|spec).(ts|tsx)',
      ],
      rules: {
        'jest/no-mocks-import': OFF,
      },
    },
  ],
}
