import React, { useState, useEffect } from 'react';
import Personas from '../components/Personas';

const ScriptForm = () => {
  const [resumo, setResumo] = useState("");
  const maxCharacters = 200;
  const [dificuldade, setDificuldade] = useState('');
  const [idiomas, setIdiomas] = useState('');
  const [genero, setGenero] = useState('');
  const [notas, setNotas] = useState('');
  const [referencias, setReferencias] = useState('');
  const [dificuldades, setDificuldades] = useState([]);
  const [idiomaOptions, setIdiomaOptions] = useState([]);
  const [generoOptions, setGeneroOptions] = useState([]);
  const [title, setTitle] = useState('');

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const [dificuldadeRes, idiomaRes, generoRes] = await Promise.all([
          fetch('http://localhost:5000/api/getdifficulties'),
          fetch('http://localhost:5000/api/getlanguages'),
          fetch('http://localhost:5000/api/getgenders')
        ]);

        const [dificuldadeData, idiomaData, generoData] = await Promise.all([
          dificuldadeRes.json(),
          idiomaRes.json(),
          generoRes.json()
        ]);

        await setDificuldades(dificuldadeData);
        setIdiomaOptions(idiomaData);
        setGeneroOptions(generoData);
      } catch (error) {
        console.error('Erro ao buscar opções:', error);
      }
    };

    fetchOptions();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Construir o objeto com os dados do formulário
    const novoRoteiro = {
      resumo,
      dificuldade,
      idiomas,
      genero,
      notas,
      referencias,
      title
    };

    // Enviar os dados para o backend usando fetch
    try {
      const response = await fetch('http://localhost:5000/user/criarRoteiro', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(novoRoteiro),
      });

      if (!response.ok) {
        throw new Error('Erro ao salvar os dados.');
      }

      setResumo('');
      setDificuldade('');
      setIdiomas('');
      setGenero('');
      setNotas('');
      setReferencias('');
      setTitle('');

      alert('Roteiro cadastrado com sucesso!');
    } catch (error) {
      console.error('Erro ao salvar os dados:', error.message);
      alert('Erro ao salvar os dados. Verifique o console para mais detalhes.');
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center">
      {/* ContainerTítulo */}
      <div className="w-full max-w-2xl p-8 bg-[#00B2FF] rounded-xl shadow-xl mt-6 border rounded-xl">
      <form onSubmit={handleSubmit}>
        <div className="w-full max-w-4xl py-4 mt-8 bg-[#00B2FF] rounded-xl shadow-xl">
          <div className="max-w-2xl mx-auto">
            <input
              id="titulo" type="text"
              className="text-4xl font-bold text-white bg-transparent  focus:outline-none focus:border-white w-full text-center placeholder-white placeholder-opacity-50"
              placeholder="Título do Roteiro"
              name='title'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
        </div>

      {/* Container Formulário */}

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
                value={dificuldade}
                onChange={(e) => setDificuldade(e.target.value)}
                required
              >
                <option value="">Selecione...</option>
                {dificuldades.map(d => (
                  <option key={d.id} value={d.id}>{d.name}</option>
                ))}
              </select>
            </div>

            <div className="w-1/3">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="idioma">
                Idioma
              </label>
              <select
                id="idioma"
                className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-[#727171] leading-tight focus:outline-none focus:shadow-outline"
                value={idiomas}
                onChange={(e) => setIdiomas(e.target.value)}
                required
              >
                <option value="">Selecione...</option>
                {idiomaOptions.map(i => (
                  <option key={i.id} value={i.id}>{i.name}</option>
                ))}
              </select>
            </div>

            <div className="w-1/3">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="genero">
                Gênero
              </label>
              <select
                id="genero"
                className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-[#727171] leading-tight focus:outline-none focus:shadow-outline"
                value={genero}
                onChange={(e) => setGenero(e.target.value)}
              >
                <option value="">Selecione...</option>
                {generoOptions.map(g => (
                  <option key={g.id} value={g.id}>{g.name}</option>
                ))}
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
              value={notas}
              onChange={(e) => setNotas(e.target.value)}
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
              value={referencias}
              onChange={(e) => setReferencias(e.target.value)}
            />
          </div>
          <button type="submit">Cadastrar Roteiro</button>
        </form>
        <Personas />
      </div>
    </div>
  );
};

export default ScriptForm;
