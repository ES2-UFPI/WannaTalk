import Image from "next/image";
import ListaRoteiros from "../components/ListaRoteiros";
import SearchOverlay from "../components/SearchOverlay";
import { Chat } from "../components/Chat";

export default function Home() {
  return (
    <main>
      <div className="bg-white">
        <div>
          <nav className="bg-gray-800">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    {/* <!-- Vai direcionar para tela inicial --> */}
                    <a href="#" className="rounded-md text-xl text-white hover:bg-gray-700">WannaTalk?</a>
                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-1">
                      {/* <!-- Direciona para tela de visualizar roteiros/praticar roteiro--> */}
                      <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white" aria-current="page">Praticar Roteiro</a>
                      <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Criar Roteiro</a>
                      <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                      <SearchOverlay />
                     </a>
                     <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Chat</a>
                     
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          <div className="bg flex">
          <div className="flex flex-col">
              <div className="m-3 rounded-md bg-red-700 p-2">
                <div className="text-white">
                  <div className="text-3xl">O que é o WannaTalk?</div>
                  <div className="m-4 sm:mt-11">Nossa plataforma se propõe a ajudar você a treinar novas línguas em diversas situações</div>
                </div>
              </div>
              <div className="m-3 rounded-md bg-red-700 p-2">
                <div className="text-white">
                  <div className="text-3xl">Como vou aprender novas línguas?</div>
                  <div className="m-4 sm:mt-11">Por meio de chats de Inteligência Artificial treinados por usuários da nossa plataforma para outros</div>
                </div>
              </div>
              <div className="m-3 rounded-md bg-red-700 p-2">
                <div className="text-white">
                  <div className="text-3xl">Lorem ipsum</div>
                  <div className="m-4 sm:mt-11">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consequat dolor nec lectus porta mattis. Nulla facilisi. Duis sollicitudin mi.</div>
                </div>
              </div>
              <div className="m-3 rounded-md bg-red-700 p-2">
                <div className="text-white">
                  <div className="text-3xl">Lorem ipsum</div>
                  <div className="m-4 sm:mt-11">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consequat dolor nec lectus porta mattis. Nulla facilisi. Duis sollicitudin mi.</div>
                </div>
              </div>
              <div className="m-3 rounded-md bg-red-700 p-2">
                <div className="text-white">
                  <div className="text-3xl">Lorem ipsum</div>
                  <div className="m-4 sm:mt-11">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consequat dolor nec lectus porta mattis. Nulla facilisi. Duis sollicitudin mi.</div>
                </div>
              </div>
            </div>
            <div className="paginaRoteiros text-black">
              <h1>Roteiros mais populares do dia</h1>
              <ListaRoteiros />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
