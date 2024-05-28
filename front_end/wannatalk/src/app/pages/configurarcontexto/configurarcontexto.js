"use client";

import SelectMenu from "../../../components/selectMenu";

//import SelectMenu from "@/components/selectMenu";

export default function configurarChat() {
    return (
      <>
      
       
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 ">
          
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
              Configure o seu roteiro
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label htmlFor="contexto" className="block text-sm font-medium leading-6 text-white">
                  Contexto
                </label>
                <div className="mt-2  text-gray-500">
                <SelectMenu apiEndpoint="/api/contexto" />
                
                </div>
              </div>

              <div>
                <label htmlFor="contexto" className="block text-sm font-medium leading-6  text-white">
                  Linguagem
                </label>
                <div className="mt-2">
                <SelectMenu apiEndpoint="/api/linguagem" />
                </div>
              </div>

              <div>
                <label htmlFor="agente" className="block text-sm font-medium leading-6  text-white">
                  Agente
                </label>
                <div className="mt-2">
                <SelectMenu apiEndpoint="/api/agente" />
                </div>
              </div>
  
              
  
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Configurar
                </button>
              </div>
            </form>
  
            <p className="mt-10 text-center text-sm text-gray-500">
  
              <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                Voltar
              </a>
            </p>
          </div>
        </div>
      </>
    )
  }
  