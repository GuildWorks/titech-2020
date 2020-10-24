module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
  ],
  plugins: ['prettier', 'vue'],
  // add your custom rules here
  rules: {
    quotes: [2, 'single', 'avoid-escape'],
    'no-undef': 'warn',
    '@typescript-eslint/no-unused-vars': 'warn',
    'no-unused-vars': 'warn',
    'prettier/prettier': 'warn',
    // 'semi': [2, 'never'],
    // 'no-console': 'off',
    // 'vue/max-attributes-per-line': 'off',
    // 'prettier/prettier': ['error', { 'semi': false }]
  },
}
