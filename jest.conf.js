module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,vue}',
    '!src/main.js'
  ],
  moduleFileExtensions: [
    'js',
    'jsx',
    'json',
    'vue'
  ],
  transform: {
    '^.+\\.vue$': '@vue/vue2-jest',
    '^.+\\.jsx?$': 'babel-jest'
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  testMatch: [
    '**/src/tests/**/*.spec.(js|jsx|ts|tsx)', // Ajuste para cobrir seus testes
    '**/__tests__/*.(js|jsx|ts|tsx)'
  ],
  testEnvironmentOptions: {
    url: 'http://localhost'
  },
  testEnvironment: 'jsdom'
}