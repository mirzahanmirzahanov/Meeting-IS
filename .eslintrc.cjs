/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    'prettier/prettier': ['warn', { endOfLine: 'auto' }],
    'vue/multi-word-component-names': 'off',
    'vue/no-multiple-template-root': 0,
    'no-console': ['warn', { allow: ['error'] }],
    'comma-dangle': ['error'],
    'vue/no-v-for-template-key': 'off',
    'vue/no-v-text-v-html-on-component': 'off',
    'vue/no-v-html': 'off',
    camelcase: 'off'
  }
}
