import '../styles/style.navbar.css';
function NavBar() {
    return(
        <nav className="navbar">
            <div className="relative flex h-16 items-center justify-between">
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    {/* <!-- Vai direcionar para tela inicial --> */}
                    <a href="#" className="linkHome">WannaTalk?</a>
                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-1">
                      {/* <!-- Direciona para tela de visualizar roteiros/praticar roteiro--> */}
                      <a href="#" className="linkPratica">Praticar Roteiro</a>
                      <a href="#" className="linkCriarRoteiro">Criar Roteiro</a>
                      <a href="#" className="linkPesquisar">Pesquisar Roteiro</a>
                    </div>
                  </div>
                </div>
              </div>
        </nav>
    );
}export default NavBar;