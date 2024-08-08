// src/__mocks__/axiosMock.js
export default {
  get: jest.fn(() => Promise.resolve({ data: {} })),
  post: jest.fn(() => Promise.resolve({ data: {} })),
  // Adicione outros métodos do axios conforme necessário
};
