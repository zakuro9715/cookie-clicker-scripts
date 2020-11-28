module.exports = {
  root: true,
  env: {
    browser: true,
  },
  extends: ['@zakuro9715'],
  globals: {
    Game: true,
    automation: true,
  },
  rules: {
    'no-unused-vars': 'off',
    'no-alert': 'off',
  },
}
