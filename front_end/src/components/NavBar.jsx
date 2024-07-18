import React from 'react';
import '../styles/style.navbar.css';
import { Link } from 'react-router-dom';
function NavBar() {
    return(
        <nav className="navbar">
            <div className="relative flex h-16 items-center justify-between">
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                    {/* Vai direcionar para tela inicial */}
                    <Link to= '/' className="linkHome">WannaTalk?</Link>
                    </div>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-1">
                      {/* <!-- Direciona para tela de visualizar roteiros/praticar roteiro--> */}
                      <Link to="/practice-script" className="linkPratica">Praticar Roteiro</Link>
                      <Link to="/criarRoteiro" className="linkCriarRoteiro">Criar Roteiro</Link>
                      <Link to="/search" className="linkPesquisar">Pesquisar</Link>
                      <Link to="/configurarChat">Chat</Link>
                      

                  

                    </div>
                  </div>
                </div>
              </div>
        </nav>

    );
}export default NavBar;