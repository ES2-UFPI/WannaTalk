import Roteiro from "./Roteiro";
import roteiros from "../data/roteiros";

function ListaRoteiros() {
    return(
        <div className="listaRoteiros">
            {roteiros.length>0 ? (
                roteiros.map(Roteiro => (
                    <Roteiro
                    key = {roteiros.id}
                    roteiros = {roteiros} // Passando o objeto produto como uma propriedade chamada 'produto'
                    />
                ))
            ): (
                <div>Nenhum Roteiro disponível</div>
            )}
        </div>

    );
}

export default ListaRoteiros; 