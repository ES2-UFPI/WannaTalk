import React, { useState } from 'react';

const ScriptForm = () => {
  const [resumo, setResumo] = useState("");
  const maxCharacters = 200;

  return (
    <div className="min-h-screen bg-white flex flex-col items-center">
      
      {/* ContainerTítulo */}
      <div className="w-full max-w-4xl py-4 mt-8 bg-[#00B2FF] rounded-xl shadow-xl">
      
        <div className="max-w-2xl mx-auto">
          <input
            id="titulo" type="text"
            className="text-4xl font-bold text-white bg-transparent  focus:outline-none focus:border-white w-full text-center placeholder-white placeholder-opacity-50"
            placeholder="Título do Roteiro"
          />
        </div>
      </div>

      {/* Container Formulário */}
      <div className="w-full max-w-2xl p-8 bg-[#00B2FF] rounded-xl shadow-xl mt-6">
        <form>
          <div className="mb-4 relative">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="resumo">
              Resumo
            </label>
            <textarea
              id="resumo"
              className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-[#727171] leading-tight focus:outline-none focus:shadow-outline placeholder-opacity-70"
              rows="4"
              placeholder="Ex. Os alunos aprenderão e praticarão vocabulário e frases úteis para fazer compras em um mercado, além de melhorar a fluência ao interagir em inglês...."
              value={resumo}
              onChange={(e) => setResumo(e.target.value)}
              maxLength={maxCharacters}
            ></textarea>
            <div className="absolute bottom-2 right-3 text-sm text-[#00B2FF]">
              {resumo.length}/{maxCharacters}
            </div>
          </div>

          <div className="mb-4 flex space-x-4">
            <div className="w-1/3">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="dificuldade">
                Dificuldade
              </label>
              <select
                id="dificuldade"
                className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-[#727171] leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">Selecione...</option>
                <option value="Fácil">Fácil</option>
                <option value="Médio">Médio</option>
                <option value="Difícil">Difícil</option>
              </select>
            </div>

            <div className="w-1/3">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="idioma">
                Idioma
              </label>
              <select
                id="idioma"
                className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-[#727171] leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">Selecione...</option>
                <option value="portugues">portugues</option>
                <option value="ingles">ingles</option>
                <option value="alemão">alemão</option>
              </select>
            </div>

            <div className="w-1/3">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="genero">
                Gênero
              </label>
              <select
                id="genero"
                className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-[#727171] leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">Selecione...</option>
                <option value="genero1">genero1</option>
                <option value="genero2">genero2</option>
                <option value="genero3">genero3</option>
              </select>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="notas-autor">
              Notas do Autor
            </label>
            <input
              id="notas-autor"
              className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-[#727171] leading-tight focus:outline-none focus:shadow-outline"
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
              className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-[#727171] leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Referências"
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline"
            >
              Salvar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ScriptForm;
