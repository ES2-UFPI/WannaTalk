import Link from 'next/link';

export default function Home() {
  return (
    <div>
        <nav class="bg-gray-800">
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div class="relative flex h-16 items-center justify-between">
            <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div class="flex flex-shrink-0 items-center ">
                {/* <!-- Vai direcionar para tela inicial --> */}
                <a href="#" class="text-white text-xl hover:bg-gray-700 rounded-md">WannaTalk?</a>
              </div>
              <div class="hidden sm:ml-6 sm:block">
                <div class="flex space-x-1">
                  {/* <!-- Direciona para tela de visualizar roteiros/praticar roteiro--> */}
                  <a href="#" class="text-gray-300  hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Praticar Roteiro</a>
                  {/* Direciona para tela de Criação de Roteiro */}
                  <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Criar Roteiro</a>
                  {/* Por enquanto vai ser um botão que direciona aà tela de pesquisa, mas seria interessante ser uma espécie de formulário */}
                  <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Pesquisar Roteiro</a>
                </div>
              </div>
            </div>
            
          </div>
        </div>

      </nav>

    </div>

  );
}
