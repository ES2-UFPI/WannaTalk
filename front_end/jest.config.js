module.exports = {
    transform: {
      "^.+\\.jsx?$": "babel-jest"
    },
    moduleNameMapper: {
      "\\.(css|less|scss|sass)$": "identity-obj-proxy"
    },
    moduleFileExtensions: ["js", "jsx"],
    testMatch: ["**/__tests__/**/*.js?(x)", "**/?(*.)+(spec|test).js?(x)"],
    setupFilesAfterEnv: ["<rootDir>/jest.setup.js"]
  };
  