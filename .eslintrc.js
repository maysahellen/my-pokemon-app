module.exports = {
  env: {
    node: true,  // Isso é útil se o seu projeto utiliza Node.js
    jest: true   // Configura o ambiente Jest
  },
  extends: [
    'plugin:vue/essential', // Estende as regras essenciais do Vue
    'eslint:recommended'    // Estende as regras recomendadas do ESLint
  ],
  parserOptions: {
    parser: '@babel/eslint-parser' // Utilizado para interpretar código moderno ECMAScript
  },
  rules: {
    // Suas regras personalizadas podem ser adicionadas aqui
  }
}