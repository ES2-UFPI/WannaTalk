import React from 'react';
import CreateDifficulty from '../components/CreateDifficulty';
import CreateGender from '../components/CreateGender';
import CreateLanguage from '../components/CreateLanguage';

const AdminPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-lg">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">Painel de Administração</h1>
        <div className="space-y-12">
          <div className="bg-blue-50 p-6 rounded-lg shadow-md">
            <h2 className="text-3xl font-semibold text-gray-700 mb-4">Adicionar Idioma</h2>
            <CreateLanguage />
          </div>
          <div className="bg-green-50 p-6 rounded-lg shadow-md">
            <h2 className="text-3xl font-semibold text-gray-700 mb-4">Adicionar Gênero</h2>
            <CreateGender />
          </div>
          <div className="bg-yellow-50 p-6 rounded-lg shadow-md">
            <h2 className="text-3xl font-semibold text-gray-700 mb-4">Adicionar Nível de Dificuldade</h2>
            <CreateDifficulty />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
