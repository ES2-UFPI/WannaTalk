import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SelectMenu from './SelectMenu';



const ConfiguracaoContexto = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/chatconversa');
  };

  return (
    <div className="bg-[#1E56A0] min-h-screen">
      <div className="flex items-center justify-center h-full">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">Configure o seu roteiro</h2>
          <div className="space-y-6">
            <div>
              <label htmlFor="contexto" className="block text-sm font-medium text-gray-700">
                Contexto
              </label>
              <div className="mt-1">
                <SelectMenu apiEndpoint="/api/contexto" />
              </div>
            </div>
            <div>
              <label htmlFor="linguagem" className="block text-sm font-medium text-gray-700">
                Linguagem
              </label>
              <div className="mt-1">
                <SelectMenu apiEndpoint="/api/linguagem" />
              </div>
            </div>
            <div>
              <label htmlFor="agente" className="block text-sm font-medium text-gray-700">
                Agente
              </label>
              <div className="mt-1">
                <SelectMenu apiEndpoint="/api/agente" />
              </div>
            </div>
            <div className="flex justify-center">
              <button
                type="button"
                onClick={handleRedirect}
                className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Configurar
              </button>
            </div>
          </div>
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-700">
              <Link to="/" className="font-medium text-indigo-600 hover:text-indigo-500">
                Voltar
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfiguracaoContexto;
