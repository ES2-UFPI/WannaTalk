import React from "react";
import { render, fireEvent, screen } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import Pesquisar from "../components/Pesquisar";

test('shows an alert if title is not filled in', () => {
    const alertMock = jest.spyOn(window, 'alert').mockImplementation();

    render(<Pesquisar />);

    //Simulando inputs dos usuários para reference, difficulty and languages
    fireEvent.change(screen.getByLabelText(/referência/i), { target: { value: 'Reference text' } });
    fireEvent.change(screen.getByLabelText(/dificuldade/i), { target: { value: '1' } });
    fireEvent.change(screen.getByLabelText(/idiomas/i), { target: { value: ['1', '2'] } });

    //Tenta enviar o form
    fireEvent.click(screen.getByText(/pesquisar/i));

    //Verifica que o alerta foi chamado
    expect(alertMock).toHaveBeenCalledWith('É obrigatório o preenchimento do título');

    alertMock.mockRestore();
});

test('does not show an alert if title is filled in', () => {
    const alertMock = jest.spyOn(window, 'alert').mockImplementation();

    render(<Pesquisar />);

    // Simulate user input for all fields
  fireEvent.change(screen.getByLabelText(/título/i), { target: { value: 'Sample Title' } });
  fireEvent.change(screen.getByLabelText(/referência/i), { target: { value: 'Reference text' } });
  fireEvent.change(screen.getByLabelText(/dificuldade/i), { target: { value: '1' } });
  fireEvent.change(screen.getByLabelText(/idiomas/i), { target: { value: ['1', '2'] } });

  // Try to submit the form
  fireEvent.click(screen.getByText(/pesquisar/i));

  // Check that the alert was not called
  expect(alertMock).not.toHaveBeenCalled();

  // Clean up the mock
  alertMock.mockRestore();
});