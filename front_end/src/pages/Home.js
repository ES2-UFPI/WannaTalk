import ListaRoteiros from "../components/ListaRoteiros";
import NavBar from "../components/NavBar";

export default function Home () {
    return (
        <main>
      <div className="bg-[#F6F6F6]">
        <div>

          <NavBar/>
          <div className="bg flex">
          <div className="flex flex-col">
              <div className="m-3 rounded-md bg-[#57B2FF] max-w-[500px] p-2">
                <div className="text-white">
                  <div className="text-3xl">O que é o WannaTalk?</div>
                  <div className="m-4 sm:mt-11">Nossa plataforma se propõe a ajudar você a treinar novas línguas em diversas situações</div>
                </div>
              </div>
              <div className="m-3 rounded-md bg-[#57B2FF] max-w-[500px] p-2">
                <div className="text-white">
                  <div className="text-3xl">Como vou aprender novas línguas?</div>
                  <div className="m-4 sm:mt-11">Por meio de chats de Inteligência Artificial treinados por usuários da nossa plataforma para outros</div>
                </div>
              </div>
              <div className="m-3 rounded-md bg-[#57B2FF] max-w-[500px] p-2">
                <div className="text-white">
                  <div className="text-3xl">Lorem ipsum</div>
                  <div className="m-4 sm:mt-11">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consequat dolor nec lectus porta mattis. Nulla facilisi. Duis sollicitudin mi.</div>
                </div>
              </div>
              <div className="m-3 rounded-md bg-[#57B2FF] max-w-[500px] p-2">
                <div className="text-white">
                  <div className="text-3xl">Lorem ipsum</div>
                  <div className="m-4 sm:mt-11">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consequat dolor nec lectus porta mattis. Nulla facilisi. Duis sollicitudin mi.</div>
                </div>
              </div>
              <div className="m-3 rounded-md bg-[#57B2FF] max-w-[500px] p-2">
                <div className="text-white">
                  <div className="text-3xl">Lorem ipsum</div>
                  <div className="m-4 sm:mt-11">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consequat dolor nec lectus porta mattis. Nulla facilisi. Duis sollicitudin mi.</div>
                </div>
              </div>
            </div>
            <div className="paginaRoteiros text-black">
              <h1>Roteiros mais populares do dia</h1>
              <ListaRoteiros/>
            </div>
          </div>
        </div>
      </div>
    </main>
    );
}