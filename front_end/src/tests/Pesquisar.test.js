import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Pesquisar from "../components/Pesquisar";

describe("Pesquisar Roteiro", () => {
  test("renders input element", () => {
    render(<Pesquisar />);
    const inputElement = screen.getByPlaceholderText(/pesquisar roteiros/i);
    expect(inputElement).toBeInTheDocument();
  });

  test("updates input value on change", () => {
    render(<Pesquisar />);
    const inputElement = screen.getByPlaceholderText(/pesquisar roteiros/i);
    fireEvent.change(inputElement, { target: { value: "Novo Título" } });
    expect(inputElement.value).toBe("Novo Título");
  });

  test("shows alert when form is submitted with empty title", () => {
    render(<Pesquisar />);
    window.alert = jest.fn();
    const formElement = screen.getByTestId("pesquisar-form");
    fireEvent.submit(formElement);
    expect(window.alert).toHaveBeenCalledWith(
      "É obrigatório o preenchimento do título"
    );
  });
});
