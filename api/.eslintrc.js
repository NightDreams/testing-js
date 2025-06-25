module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'eslint quotes': ['error', 'single'],
    'import/no-extraneous-dependencies': [
      'error', { devDependencies: true, optionalDependencies: true, peerDependencies: true }],
  },
};
