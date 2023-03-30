module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended', // 使用推荐的eslint
    'plugin:vue/vue3-recommended', // 使用插件支持vue3
    'plugin:prettier/recommended',
    'eslint-config-prettier',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
    ecmaFeatures: {
      modules: true,
      jsx: true,
    },
  },
  plugins: [
    'vue', // 引入vue的插件 eslint-plugin-vue
    'prettier', // 引入规范插件 eslint-plugin-prettier
    '@typescript-eslint',
  ],
  globals: {},
  // 这里时配置规则的,自己看情况配置
  rules: {},
}
