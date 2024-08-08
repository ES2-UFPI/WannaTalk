module.exports = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.[tj]sx?$": "babel-jest",
  },
  transformIgnorePatterns: [
    "/node_modules/(?!axios|some-other-module-to-transform|react-dnd|dnd-core|@react-dnd/)", // Combinação das dependências a serem transformadas
  ],
  moduleNameMapper: {
    "\\.css$": "<rootDir>/src/__mocks__/styleMock.js", // Mapeamento para mocks de estilo
    "^axios$": "<rootDir>/src/__mocks__/axios.js", // Caminho para o mock do axios
    "\\.(css|less|sass|scss)$": "identity-obj-proxy", // Mapeamento para mocks de estilo adicional
  },
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
  // outras configurações
};
