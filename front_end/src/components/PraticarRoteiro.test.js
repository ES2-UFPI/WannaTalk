// src/components/PraticarRoteiro.test.js
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import PraticarRoteiro from './PraticarRoteiro';

// Mock do axios
jest.mock('axios');

const mockScript = {
    title: 'Teste de Roteiro',
    description: 'Descrição do roteiro',
    dialoguesList: [
        { characterId: 1, dialogue: 'Olá, tudo bem?' },
        { characterId: 2, dialogue: 'Sim, e você?' },
    ],
};

test('renders script title', async () => {
    // Mock da resposta do axios
    axios.get.mockResolvedValue({ data: mockScript });

    render(
        <MemoryRouter initialEntries={['/scripts/1']}>
            <Routes>
                <Route path="/scripts/:scriptId" element={<PraticarRoteiro />} />
            </Routes>
        </MemoryRouter>
    );

    // Verifique se o título está sendo renderizado
    await waitFor
