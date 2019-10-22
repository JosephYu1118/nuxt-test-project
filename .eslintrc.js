module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  rules: {
    'no-console': 'off',
    'arrow-parens': 'off',
    curly: ['error', 'multi-line', 'consistent']
  }
}
