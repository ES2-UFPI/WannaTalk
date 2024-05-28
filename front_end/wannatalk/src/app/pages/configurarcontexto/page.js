"use client";
import NavBar from "../../../components/NavBar";
//import  from "../ components/selectMenu";
import SelectMenu from "../../../components/selectMenu"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../../components/ui/card";
import React from "react";

export default function configurarChat() {
  const handleRedirect = () => {
    window.location.href = 'http://localhost:3000/pages/chatconversa'; // Redirecionar para a página desejada
  };
    return (
      <div className="bg-[#F6F6F6]">
  

          <NavBar />
        <div className="flex min-h-full flex-1 flex-col items-center justify-centerr px-6 py-1 lg:px-8 bg-white]">
           
          <Card className="h-[600px] w-[800px] justify-center bg-[#1E56A0] ">
            <CardHeader>
              <CardTitle className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">Configure o seu roteiro </CardTitle>
            </CardHeader>
              <CardContent>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label htmlFor="contexto" className="block text-sm font-medium leading-6 text-white">
                  Contexto
                </label>
                <div className="mt-2 text-gray-500">
                <SelectMenu apiEndpoint="/api/contexto" />
                
                </div>
              </div>

              <div>
                <label htmlFor="contexto" className="block text-sm font-medium leading-6 text-white">
                  Linguagem
                </label>
                <div className="mt-2 text-gray-500">
                <SelectMenu apiEndpoint="/api/linguagem" />
                </div>
              </div>

              <div>
                <label htmlFor="contexto" className="block text-sm font-medium leading-6 text-white">
                  Contexto
                </label>
                <div className="mt-2 text-gray-500">
                <SelectMenu apiEndpoint="/api/agente" />
                </div>
              </div>
  
              
  
              <div>
                <button
                  type="button"
                  className="flex w-full justify-center rounded-md bg-[#57B2FF] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  onClick={handleRedirect}
                >
                  Configurar
                </button>


                
              </div>
            </form>
  
            
          </div>
            
              <div>
              <p className="mt-10 text-center text-sm text-gray-500">
              
              <a href="http://localhost:3000" className="font-semibold leading-6 text-[#57B2FF] hover:text-indigo-500">
                  Voltar</a>
            </p>
              </div>
              
              </CardContent>
          </Card>
          
        </div>
        </div>
    )
  }
  