import PropTypes from 'prop-types';
import '../styles/style.roteiro.css';
import { useState } from 'react';
function Roteiro({ roteiro }) {
    const [modalOpen, setModalOpen] = useState(false);

    const roteiroCores = {
         aventura: '#01D882',
         terror: '#DB4446',
         comédia: '#00B2FF'
    };

    const dificCores = {
        facil: '#24FF00',
        medio: '#FFE500',
        dificil: '#FF0000'
    }; 

    const resumo = roteiro.resumo || 'Esse roteiro não tem um resumo.';

    const bgCor = roteiroCores[roteiro.genero] || '#D9D9D9';
    const difCor = dificCores[roteiro.dificuldade] || 'black';

    const numStars = 5;
    const yellowStars = Math.round((roteiro.satisfacao / 100) * numStars);
    const greyStars = numStars - yellowStars;

    if (!roteiro) {
        return <div>Nenhum roteiro disponível</div>
    }

    return(
        <div className='roteiro' style={{backgroundColor: bgCor}}>
            <div className='imagem'></div>
            <div className='informacoes'>
                <div className='titulo'>{roteiro.titulo}</div>
                <div className='resumo'>{resumo}
                </div>
                <div className='info2'>
                    <div className='flex flex-col'>
                        <div className='font-semibold text-black text-opacity-25'>Avaliação</div>
                        <div className='flex flex-row'>
                            {Array.from({ length: yellowStars }, (_, index) => (
                                <svg key={index} className='w-6 h-6 text-yellow-500' fill='currentColor' viewBox='0 0 24 24'>
                                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                                </svg>
                            ))}
                            {Array.from({ length: greyStars }, (_, index) => (
                                <svg key={index} className='w-6 h-6 text-gray-400' fill='currentColor' viewBox='0 0 24 24'>
                                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                                </svg>
                            ))}
                        </div>
                        <div className='flex flex-row bg-black bg-opacity-25 h-[36px] pl-6 pr-6 rounded-[1.25rem] center'>
                            <div>Dificuldade: </div>
                            <div style={{ color: difCor }}>{roteiro.dificuldade}</div>
                        </div>
                    </div>
                    <button onClick={() => setModalOpen(true)} className={`text-black font-semibold`} style={{ color: bgCor }} type='button'>Saber mais</button>    
                </div>
            </div>
            {modalOpen && (
                <div id='expandido' className='fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50'>
                    <div className="relative p-4 w-full max-w-2xl max-h-full rounded-lg shadow" style={{ backgroundColor: bgCor }}>
                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-white">
                            <h3 className="text-xl font-bold text-white">
                                {roteiro.titulo}
                            </h3>
                            <button 
                                type="button" 
                                className="text-white bg-transparent hover:bg-white hover:text-red-500 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center" 
                                onClick={() => setModalOpen(false)}>
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        <div className="text-white p-4 md:p-5 space-y-4">
                            <div className='text-xl font-bold text-white'>Resumo:</div>
                            <span className='m-0'>{resumo}Durante esta viagem, você será parte de uma história fascinante onde os participantes ajudam a desvendar um antigo mistério escondido nos souks e arranha-céus da cidade.
                            </span>
                            <div className='flex flex-row justify-between'>
                                <div className='flex flex-col'>
                                    <div className='text-white p-1 space-y-4 text-xl font-bold'>Dificuldade</div>
                                    <div>{roteiro.dificuldade}</div>
                                </div>
                                <div className='flex flex-col'>
                                    <div className='text-white p-1 space-y-4 text-xl font-bold'>Idioma</div>
                                    <div>Teste</div>
                                </div>
                                <div className='flex flex-col'>
                                    <div className='text-white p-1 space-y-4 text-xl font-bold'>Gênero</div>
                                    <div>{roteiro.genero}</div>
                                </div>
                            </div>
                            <div className='text-xl font-bold text-white'>Notas do Autor:</div>
                            <span className='m-0'>Teste
                            </span><div className='text-xl font-bold text-white'>Referências:</div>
                            <span className='m-0'>Teste
                            </span>
                        </div>
                        <div className="flex items-center p-4 md:p-5 border-t rounded-b border-white">
                            <button 
                                type="button" 
                                style={{ color: bgCor }}
                                className="bg-white h-[48px] pl-6 pr-6 rounded-[1.25rem] text-[1.05rem] font-[600]" 
                                onClick={() => setModalOpen(false)}>
                                Praticar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );

}

Roteiro.propType = {
    roteiro: PropTypes.object.isRequired
}

export default Roteiro;