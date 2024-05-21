import Link from 'next/link';

export default function Home() {
  return (
    <div>
  <div>
    <nav class="bg-gray-800">
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="relative flex h-16 items-center justify-between">
          <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div class="flex flex-shrink-0 items-center">
              {/* <!-- Vai direcionar para tela inicial --> */}
              <a href="#" class="rounded-md text-xl text-white hover:bg-gray-700">WannaTalk?</a>
            </div>
            <div class="hidden sm:ml-6 sm:block">
              <div class="flex space-x-1">
                {/* <!-- Direciona para tela de visualizar roteiros/praticar roteiro--> */}
                <a href="#" class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white" aria-current="page">Praticar Roteiro</a>
                <a href="#" class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Criar Roteiro</a>
                <a href="#" class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Pesquisar Roteiro</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <div class="flex flex-col">
      <div class="m-3 rounded-md bg-green-700 p-2">
        <div class="relative flex items-center text-white sm:items-stretch sm:justify-start">
          <div id="titulo">Título</div>
          <div id="autor" class="sm:ml-14">Feito por:</div>
          <div id="rank" class="sm:ml-1">| Rank</div>
          <div id="praticas" class="sm:ml-4">Práticas:</div>
          <div id="satisfacao" class="sm:ml-2">Satisfação: %</div>
        </div>
        <div class="relative flex items-center sm:justify-start">
          <button class="rounded-md bg-lime-400 p-1 hover:bg-lime-300">Acessar</button>
          <div class="text-white sm:ml-3">Resumo text-whitetext-whitetext-whitetext-whitetext-whitetext-whitetext-whitetext-whitetext-whitetext-whitetext-whitetext-whitetext-white</div>
        </div>
      </div>
      <div class="m-3 rounded-md bg-green-700 p-2">
        <div class="relative flex items-center text-white sm:items-stretch sm:justify-start">
          <div id="titulo">Título</div>
          <div id="autor" class="sm:ml-14">Feito por:</div>
          <div id="rank" class="sm:ml-1">| Rank</div>
          <div id="praticas" class="sm:ml-4">Práticas:</div>
          <div id="satisfacao" class="sm:ml-2">Satisfação: %</div>
        </div>
        <div class="relative flex items-center sm:justify-start">
          <button class="rounded-md bg-lime-400 p-1 hover:bg-lime-300">Acessar</button>
          <div class="text-white sm:ml-3">Resumo text-whitetext-whitetext-whitetext-whitetext-whitetext-whitetext-whitetext-whitetext-whitetext-whitetext-whitetext-whitetext-white</div>
        </div>
      </div>
      <div class="m-3 rounded-md bg-green-700 p-2">
        <div class="relative flex items-center text-white sm:items-stretch sm:justify-start">
          <div id="titulo">Título</div>
          <div id="autor" class="sm:ml-14">Feito por:</div>
          <div id="rank" class="sm:ml-1">| Rank</div>
          <div id="praticas" class="sm:ml-4">Práticas:</div>
          <div id="satisfacao" class="sm:ml-2">Satisfação: %</div>
        </div>
        <div class="relative flex items-center sm:justify-start">
          <button class="rounded-md bg-lime-400 p-1 hover:bg-lime-300">Acessar</button>
          <div class="text-white sm:ml-3">Resumo text-whitetext-whitetext-whitetext-whitetext-whitetext-whitetext-whitetext-whitetext-whitetext-whitetext-whitetext-whitetext-white</div>
        </div>
      </div>
      <div class="m-3 rounded-md bg-green-700 p-2">
        <div class="relative flex items-center text-white sm:items-stretch sm:justify-start">
          <div id="titulo">Título</div>
          <div id="autor" class="sm:ml-14">Feito por:</div>
          <div id="rank" class="sm:ml-1">| Rank</div>
          <div id="praticas" class="sm:ml-4">Práticas:</div>
          <div id="satisfacao" class="sm:ml-2">Satisfação: %</div>
        </div>
        <div class="relative flex items-center sm:justify-start">
          <button class="rounded-md bg-lime-400 p-1 hover:bg-lime-300">Acessar</button>
          <div class="text-white sm:ml-3">Resumo text-whitetext-whitetext-whitetext-whitetext-whitetext-whitetext-whitetext-whitetext-whitetext-whitetext-whitetext-whitetext-white</div>
        </div>
      </div>
    </div>
  </div>
</div>

  );
}
