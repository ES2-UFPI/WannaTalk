import React from 'react';

const Rodape = () => {
  return (
    <footer className="bg-blue-500 text-blue-900 p-10">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo e Descrição */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-3xl font-extrabold mb-4">WannaTalk</h2>
            <p className="text-white mb-6 text-center md:text-left">
              Treine novas línguas com chats de Inteligência Artificial. Personalizado para suas necessidades de aprendizado.
            </p>
          </div>

          {/* Links de Navegação */}
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">Navegação</h3>
            <nav className="flex flex-col space-y-2">
              <a href="#sobre" className="text-white hover:text-blue-100 transition">Sobre</a>
              <a href="#funcionalidades" className="text-white hover:text-blue-100 transition">Funcionalidades</a>
              <a href="#contato" className="text-white hover:text-blue-100 transition">Contato</a>
            </nav>
          </div>

          {/* Redes Sociais */}
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">Siga-nos</h3>
            <div className="flex space-x-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-900">
                <img src="/icons/facebook.svg" alt="Facebook" className="w-6 h-6" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-900">
                <img src="/icons/twitter.svg" alt="Twitter" className="w-6 h-6" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-900">
                <img src="/icons/instagram.svg" alt="Instagram" className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-blue-300 pt-6 text-center">
          <p className="text-blue-700">
            &copy; 2025 WannaTalk. Todos os direitos reservados.
          </p>
          <p className="text-blue-700 mt-1">
            Contato: <a href="mailto:contato@wannatalk.com" className="underline hover:text-blue-900 transition">contato@wannatalk.com</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Rodape;
