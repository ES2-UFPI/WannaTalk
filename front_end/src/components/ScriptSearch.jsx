import React, { useState } from 'react';
import '../styles/style.scriptSearch.css';

const roteiros = [
  {
    id: 1,
    nome: "Roteiro de Aventura",
    descricao: "Um emocionante roteiro de aventura pelo desconhecido.",
    dificuldade: "Médio",
    foto: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    nome: "Roteiro de Romance",
    descricao: "Um doce roteiro de romance para os apaixonados.",
    dificuldade: "Fácil",
    foto: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    nome: "Roteiro de Comédia",
    descricao: "Roteiro divertido e cheio de risadas.",
    dificuldade: "Fácil",
    foto: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    nome: "Roteiro de Drama",
    descricao: "Um roteiro emocional e impactante.",
    dificuldade: "Difícil",
    foto: "https://via.placeholder.com/150",
  },
  {
    id: 5,
    nome: "Roteiro de Ficção Científica",
    descricao: "Explorando futuros possíveis e tecnologias.",
    dificuldade: "Médio",
    foto: "https://via.placeholder.com/150",
  },
  {
    id: 6,
    nome: "Roteiro de Terror",
    descricao: "Roteiro assustador e cheio de suspense.",
    dificuldade: "Difícil",
    foto: "https://via.placeholder.com/150",
  },
  {
    id: 7,
    nome: "Roteiro de Mistério",
    descricao: "Desvende mistérios e enigmas intrigantes.",
    dificuldade: "Médio",
    foto: "https://via.placeholder.com/150",
  },
  {
    id: 8,
    nome: "Roteiro de Fantasia",
    descricao: "Uma viagem a mundos mágicos e criaturas incríveis.",
    dificuldade: "Médio",
    foto: "https://via.placeholder.com/150",
  },
  {
    id: 9,
    nome: "Roteiro Histórico",
    descricao: "Reviva eventos históricos e aprenda com o passado.",
    dificuldade: "Difícil",
    foto: "https://via.placeholder.com/150",
  },
  {
    id: 10,
    nome: "Roteiro de Ação",
    descricao: "Aventura cheia de adrenalina e emoção.",
    dificuldade: "Médio",
    foto: "https://via.placeholder.com/150",
  },
];

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showResults, setShowResults] = useState(false);

  const filteredRoteiros = roteiros.filter((roteiro) =>
    roteiro.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = () => {
    setShowResults(true);
  };

  return (
    <div className="container">
      <h1 className="header">Pesquisa de Roteiros</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Pesquise o tipo de roteiro..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <button onClick={handleSearch} className="search-button">
          Pesquisar
        </button>
      </div>
      {showResults && (
        <div className="roteiro-container">
          {filteredRoteiros.map((roteiro) => (
            <div key={roteiro.id} className="roteiro">
              <img src={roteiro.foto} alt={roteiro.nome} className="roteiro-img" />
              <h2 className="roteiro-title">{roteiro.nome}</h2>
              <p className="roteiro-description">{roteiro.descricao}</p>
              <p className="roteiro-difficulty">Dificuldade: {roteiro.dificuldade}</p>
              <button className="practice-button">Praticar</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
