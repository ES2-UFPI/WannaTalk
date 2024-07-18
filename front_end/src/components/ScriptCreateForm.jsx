import React, { useState } from 'react';
import axios from 'axios';

const ScriptForm = () => {
  const [formData, setFormData] = useState({
    summary: '',
    difficulty: '',
    languages: '',
    genre: '',
    authorNotes: '',
    references: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/criarRoteiro', formData);
      console.log(response.data);
      setFormData({
        summary: '',
        difficulty: '',
        languages: '',
        genre: '',
        authorNotes: '',
        references: ''
      });
    } catch (error) {
      console.error('Houve um erro ao enviar o formulário!', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Resumo:
          <textarea
            name="summary"
            value={formData.summary}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Dificuldade:
          <select
            name="difficulty"
            value={formData.difficulty}
            onChange={handleChange}
          >
            <option value="">Selecione...</option>
            <option value="Fácil">Fácil</option>
            <option value="Médio">Médio</option>
            <option value="Difícil">Difícil</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Idiomas:
          <select
            name="languages"
            value={formData.languages}
            onChange={handleChange}
          >
            <option value="">Selecione...</option>
            <option value="portugues">Português</option>
            <option value="ingles">Inglês</option>
            <option value="alemao">Alemão</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Gênero:
          <select
            name="genre"
            value={formData.genre}
            onChange={handleChange}
          >
            <option value="">Selecione...</option>
            <option value="genero1">Gênero 1</option>
            <option value="genero2">Gênero 2</option>
            <option value="genero3">Gênero 3</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Notas do Autor:
          <textarea
            name="authorNotes"
            value={formData.authorNotes}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Referências:
          <textarea
            name="references"
            value={formData.references}
            onChange={handleChange}
          />
        </label>
      </div>
      <button type="submit">Cadastrar Roteiro</button>
    </form>
  );
}

export default ScriptForm;
