//jest.congif.js
module.exports = {
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.css$': '<rootDir>/src/__mocks__/styleMock.js',
    '^axios$': '<rootDir>/src/__mocks__/axios.js', // Corrigindo o caminho para o mock do axios
  },
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  transformIgnorePatterns: [
    '/node_modules/(?!axios|some-other-module-to-transform)/', // Permite a transformação do `axios` e outras dependências que usam ES6+
  ],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  // outras configurações
};

