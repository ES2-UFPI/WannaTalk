import PropTypes from 'prop-types';
function Roteiro({ roteiro }) {
    if (!roteiro) {
        return <div>Nenhum roteiro disponível</div>
    }

    return(
        <div className='Roteiro'>
            <div id='titulo'>{roteiro.titulo}</div>
            <div id="autor" class="sm:ml-14">Feito por: {roteiro.autor}</div>
            <div id="rank" class="sm:ml-1">| Rank {roteiro.rank}</div>
            <div id="praticas" class="sm:ml-4">Práticas: {roteiro.praticas}</div>
            <div id="satisfacao" class="sm:ml-2">Satisfação: {roteiro.satisfacao}%</div>
        </div>
    );

}

Roteiro.PropTypes = {
    roteiro: PropTypes.object.isRequired
}

export default Roteiro;