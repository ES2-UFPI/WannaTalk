import React, { useState } from 'react';

const Formulario = () => {
  const [titulo, setTitulo] = useState('');

  return (
    <div className="min-h-screen bg-[gray-100] flex justify-center items-center">
      <div className="w-full max-w-2xl p-8 bg-[#00B2FF] rounded-lg shadow-lg">
        <div className="text-center mb-6">
          <input
            type="text"
            className="text-4xl font-bold text-white bg-transparent border-b-2 border-white focus:outline-none focus:border-white text-center" 
            placeholder="Título do Roteiro"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
        </div>
        <form>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="resumo">
              Resumo
            </label>
            <textarea
              id="resumo"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
              rows="4"
              placeholder="Ex. Os alunos aprenderão e praticarão vocabulário e frases úteis para fazer compras em um mercado..."
            ></textarea>
            <div className="text-right text-sm text-white">120/200</div>
          </div>
          <div className="mb-4 flex space-x-4">
            <div className="w-1/3">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="dificuldade">
                Dificuldade
              </label>
              <select
                id="dificuldade"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-[#727171] leading-tight focus:outline-none focus:shadow-outline"
              >
                <option>A1</option>
                <option>A2</option>
                <option>B1</option>
                <option>B2</option>
              </select>
            </div>
            <div className="w-1/3">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="idioma">
                Idioma
              </label>
              <select
                id="idioma"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-[#727171] leading-tight focus:outline-none focus:shadow-outline"
              >
                <option>Inglês</option>
                <option>Espanhol</option>
                <option>Francês</option>
                <option>Alemão</option>
              </select>
            </div>
            <div className="w-1/3">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="genero">
                Gênero
              </label>
              <select
                id="genero"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-[#727171] leading-tight focus:outline-none focus:shadow-outline"
              >
                <option>Ficção</option>
                <option>Não-ficção</option>
                <option>Biografia</option>
                <option>Poesia</option>
              </select>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="notas-autor">
              Notas do Autor
            </label>
            <input
              id="notas-autor"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Notas do Autor"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="referencias">
              Referências
            </label>
            <input
              id="referencias"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Referências"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Salvar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Formulario;
