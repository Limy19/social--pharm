module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: 'airbnb',
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'linebreak-style': 0,
    'react/prop-types': 0,
    'comma-dangle': 0,
    'import/no-extraneous-dependencies': 0,
    'max-len': 0,
    'import/no-dynamic-require': 0,
    'global-require': 0,
    'object-curly-newline': 0,
  },
};
