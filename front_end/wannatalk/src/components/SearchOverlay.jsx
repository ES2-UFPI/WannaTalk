// components/SearchOverlay.js
"use client";
import { useState } from 'react';
import SelectMenu from './selectMenu';
import { Input } from './ui/input';
import { Button } from '@headlessui/react';

const SearchOverlay = () => {
    const [isVisible, setIsVisible] = useState(false);
  
    const toggleVisibility = () => {
      setIsVisible(!isVisible);
    };
  
    const handleClose = () => {
      setIsVisible(false);
    };
  
    return (
      <div>
        {/* Botão para abrir o menu de pesquisa */}
        <button onClick={toggleVisibility}>Pesquisar Roteiro</button>
        {/* Menu de pesquisa */}
        {isVisible && (
           <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-start  text-gray-500">
           <div className="bg-[#1E56A0] p-8 rounded shadow-md mt-4" style={{ width: '600px', height: '400px' }}>
              <button onClick={handleClose} className="text-white float-right">x</button>
              <h1 className="text-2xl mb-4  text-white">Pesquisar roteiro</h1>
              <label htmlFor="dificuldade" className="block text-sm font-medium leading-6  text-white">
                  Título
                </label>
              <div className="mb-4">
                <Input placeholder="" className="bg-[#F6F6F6]"/>
              </div>
  
              <div className="mb-4">
                <label htmlFor="linguagem" className="block text-sm font-medium leading-6 text-white">
                  Idioma
                </label>
                <div className="mt-2  text-gray-500">
                  <SelectMenu className =" text-gray-500" apiEndpoint="/api/linguagem" />
                </div>
              </div>
  
              <div className="mb-4">
                <label htmlFor="dificuldade" className="block text-sm font-medium leading-6  text-white ">
                  Dificuldade
                </label>
                <div className="mt-2">
                  <SelectMenu apiEndpoint="/api/dificulade" />
                </div>
              </div>
  
              <div className="mb-4 flex w-full justify-center rounded-md bg-[#57B2FF] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                <Button >Pesquisar</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };
  
  export default SearchOverlay;