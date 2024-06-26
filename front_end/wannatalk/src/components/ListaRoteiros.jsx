import Roteiro from "./Roteiro";
import roteiros from "../data/roteiros";
import "../styles/style.listaRoteiros.css"

function ListaRoteiros() {
    //console.log(roteiros); // Verifique se os dados estão sendo carregados

    return(
        <div className="listaRoteiros">
            {roteiros.length > 0 ? (
                roteiros.map(roteiro => (
                    <Roteiro
                        key = {roteiro.id}
                        roteiro = {roteiro} // Passando o objeto produto como uma propriedade chamada 'produto'
                    />
                ))
            ): (
                <div>Nenhum Roteiro disponível</div>
            )}
        </div>

    );
}

export default ListaRoteiros; 