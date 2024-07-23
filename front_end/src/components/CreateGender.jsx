import React, { useState } from 'react';

const AddGenreForm = () => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/createGender', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, image }),
      });

      if (!response.ok) {
        throw new Error('Erro ao adicionar o gênero.');
      }

      setName('');
      setImage('');
      alert('Gênero adicionado com sucesso!');
    } catch (error) {
      console.error('Erro ao adicionar o gênero:', error.message);
      alert('Erro ao adicionar o gênero. Verifique o console para mais detalhes.');
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">Adicionar Gênero</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Nome do Gênero
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            URL da Imagem
          </label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            name='image'
            className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          Adicionar Gênero
        </button>
      </form>
    </div>
  );
};

export default AddGenreForm;
