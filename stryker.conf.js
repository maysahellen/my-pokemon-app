module.exports = {
  mutate: [
      'src/**/*.vue',
      'src/**/*.js'
  ],
  testRunner: 'jest',
  reporters: ['html', 'progress'],
  jest: {
      projectType: 'custom',
      config: {
          testEnvironment: 'jsdom',
          transform: {
              '^.+\\.vue$': 'vue-jest',
              '^.+\\.js$': 'babel-jest',
          }
      },
  },
};