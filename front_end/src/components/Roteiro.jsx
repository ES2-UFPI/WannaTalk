import PropTypes from 'prop-types';
function Roteiro({ roteiro }) {
    //console.log('Renderizando roteiro:', roteiro); // Verifique os dados recebidos

    if (!roteiro) {
        return <div>Nenhum roteiro disponível</div>
    }

    return(
        <div id='roteiro' className="m-3 rounded-md bg-[#1E56A0] p-2 min-h-[100px] max-w-[665px]">
            <div className="relative flex items-center text-white sm:items-stretch sm:justify-start">
                <div id="titulo">{roteiro.titulo}</div>
                <div id="autor" className="sm:ml-14">Feito por: {roteiro.autor}</div>
                <div id="rank" className="sm:ml-1">| Rank {roteiro.rank}</div>
                <div id="praticas" className="sm:ml-4">Práticas: {roteiro.praticas}</div>
                <div id="satisfacao" className="sm:ml-2">Satisfação: {roteiro.satisfacao}%</div>
            </div>
            <div className="relative flex items-center sm:justify-start my-2">
                <button className="rounded-md bg-[#57B2FF] hover:bg-[#7bbffc] p-1 text-white">Acessar</button>
                <div id='resumo' className="text-white sm:ml-3">{roteiro.resumo}</div>
            </div>
        </div>
    );

}

Roteiro.propType = {
    roteiro: PropTypes.object.isRequired
}

export default Roteiro;