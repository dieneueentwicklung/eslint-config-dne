module.exports = {
  parser: 'babel-eslint',
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  plugins: ['react-hooks', 'jest'],
  env: {
    es6: true,
    browser: true,
    node: true,
    'jest/globals': true
  },
  settings: {
    react: {
      pragma: 'React',
      version: '16.8'
    }
  },
  rules: {
    semi: 'warn',
    quotes: ['warn', 'single'],
    'no-trailing-spaces': ['warn', { skipBlankLines: true }],
    'key-spacing': 'warn',
    'no-multi-spaces': 'warn',
    'no-extra-semi': 'warn',
    'comma-dangle': 'warn',
    'max-len': ['warn', 120, 0],

    'react/jsx-max-props-per-line': ['warn', { maximum: 1, when: 'multiline' }],
    'react/jsx-indent-props': ['warn', 2],
    'react/jsx-indent': ['warn', 2, { checkAttributes: true }],
    'react/jsx-closing-tag-location': 'warn',
    'prefer-template': 'warn',
    'prefer-const': 'warn',
    'func-call-spacing': ['warn', 'never'],
    'template-curly-spacing': ['warn', 'never'],
    'quote-props': ['warn', 'as-needed'],
    'object-curly-spacing': ['warn', 'always'],
    'no-console': ['error', { allow: ['warn', 'error', 'info'] }],
    'no-template-curly-in-string': 'error',
    'react/jsx-uses-react': 'error',
    'no-param-reassign': 'error',
    'react/default-props-match-prop-types': 'error',
    'react/no-unknown-property': 'error',
    'react/no-unused-prop-types': 'error',
    'react/prop-types': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn'
  }
};
