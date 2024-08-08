import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import PraticarRoteiro from './PraticarRoteiroComponent';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

// Set up axios mock
const mock = new MockAdapter(axios);
const mockScriptData = { /* mock data here */ };

describe('PraticarRoteiro Component', () => {
  beforeEach(() => {
    // Mock axios GET request
    mock.onGet('http://localhost:5000/api/scripts/1').reply(200, mockScriptData);
  });

  it('should render without crashing', async () => {
    render(<PraticarRoteiro />);
    
    // Use waitFor to handle async updates
    await waitFor(() => {
      // Add assertions as needed
      // For example, check if certain text or elements are present
      expect(screen.getByText('Expected Text')).toBeInTheDocument();
    });
  });

  // Add more tests as needed
});
