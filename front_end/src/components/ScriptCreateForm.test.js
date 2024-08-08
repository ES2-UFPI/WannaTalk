import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import ScriptForm from './ScriptCreateForm';
import fetchMock from 'jest-fetch-mock';

beforeEach(() => {
  fetchMock.resetMocks();
  fetchMock.doMock();
});

test('renders ScriptForm component and fetches options', async () => {
  // Configura os mocks das respostas da API
  fetchMock.mockIf(
    'http://localhost:5000/api/getdifficulties',
    JSON.stringify([{ id: 1, name: 'Fácil' }, { id: 2, name: 'Difícil' }])
  );

  fetchMock.mockIf(
    'http://localhost:5000/api/getlanguages',
    JSON.stringify([{ id: 1, name: 'Inglês' }, { id: 2, name: 'Espanhol' }])
  );

  fetchMock.mockIf(
    'http://localhost:5000/api/getgenders',
    JSON.stringify([{ id: 1, name: 'Ação' }, { id: 2, name: 'Comédia' }])
  );

  render(<ScriptForm />);

  // Verifica se o título "Título do Roteiro" está presente no documento
  const titleInput = screen.getByPlaceholderText(/Título do Roteiro/i);
  expect(titleInput).toBeInTheDocument();

  // Aguarda e verifica se o rótulo de dificuldade é exibido
  await waitFor(() => {
    expect(screen.getByText('Dificuldade')).toBeInTheDocument();
  });

  // Aguarda e verifica se o rótulo de idioma é exibido
  await waitFor(() => {
    expect(screen.getByText('Idioma')).toBeInTheDocument();
  });

  // Aguarda e verifica se o rótulo de gênero é exibido
  await waitFor(() => {
    expect(screen.getByText('Gênero')).toBeInTheDocument();
  });
});