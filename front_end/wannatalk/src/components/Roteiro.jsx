import PropTypes from 'prop-types';
function Roteiro({ roteiro }) {
    //console.log('Renderizando roteiro:', roteiro); // Verifique os dados recebidos

    if (!roteiro) {
        return <div>Nenhum roteiro disponível</div>
    }

    return(
        <div id='roteiro' className="m-3 rounded-md bg-green-700 p-2">
            <div className="relative flex items-center text-white sm:items-stretch sm:justify-start">
                <div id="titulo">{roteiro.titulo}</div>
                <div id="autor" className="sm:ml-14">Feito por: {roteiro.autor}</div>
                <div id="rank" className="sm:ml-1">| Rank {roteiro.rank}</div>
                <div id="praticas" className="sm:ml-4">Práticas: {roteiro.praticas}</div>
                <div id="satisfacao" className="sm:ml-2">Satisfação: {roteiro.satisfacao}%</div>
            </div>
            <div className="relative flex items-center sm:justify-start">
                <button className="rounded-md bg-lime-400 p-1 hover:bg-lime-300">Acessar</button>
                <div id='resumo' className="text-white sm:ml-3">{roteiro.resumo}</div>
            </div>
        </div>
    );

}

Roteiro.propType = {
    roteiro: PropTypes.object.isRequired
}

export default Roteiro;
