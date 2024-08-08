import PropTypes from 'prop-types';
import '../styles/style.roteiro.css';
import { useState } from 'react';
import React from 'react';


function Roteiro({ roteiro }) {
    const [modalOpen, setModalOpen] = useState(false);

    const roteiroCores = {
         1: '#01D882',
         2: '#DB4446',
         3: '#00B2FF'
    };

    const dificCores = {
        1: '#24FF00',
        2: '#FFE500',
        3: '#FF0000'
    }; 

    const difs = {
        1: 'Fácil',
        2: 'Médio',
        3: 'Difícil'
    }

    const generos = {
        1: 'Simulação',
        2: 'Aventura',
        3: 'Romance'
    }

    const imagens = {
        1: 'https://media.contentapi.ea.com/content/dam/eacom/SIMS/franchise-homepage/240322/images/2024/03/the-sims-plumbob-png-s-xs.png.adapt.crop3x5.320w.png',
        2: 'https://www.agenciatsuru.com.br/blog/wp-content/uploads/2016/07/marketing-digital-para-turismo-de-aventura-e-ecoturismo.jpg',
        3: 'data:image/jpeg;base64,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'
        
    }

    const idiomas = {
        1: 'português-brasileiro',
        2: 'english-canadense',
        3: 'español'
        
    }

    const resumo = roteiro.resumo || 'Esse roteiro não tem um resumo.';

    const bgCor = roteiroCores[roteiro.genderId] || '#D9D9D9';
    const difCor = dificCores[roteiro.difficultyId] || 'black';

    const numStars = 5;
    const yellowStars = Math.round((roteiro.avaliation / 100) * numStars);
    const greyStars = numStars - yellowStars;

    if (!roteiro) {
        return <div>Nenhum roteiro disponível</div>
    }

    return(
        <div className='roteiro' style={{backgroundColor: bgCor}}>
         <div className='imagem' style={{ backgroundImage: `url(${imagens[roteiro.genderId]})`, width: '300px', height: '300px', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
            <div className='informacoes'>
                <div className='titulo'>{roteiro.title}</div>
                <div className='resumo'>{roteiro.summary}
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
                            <div style={{ color: difCor, 'margin-left': '10px'} }>{difs[roteiro.difficultyId]}</div>
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
                                {roteiro.title}
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
                                    <div>{difs[roteiro.difficultyId]}</div>
                                </div>
                                <div className='flex flex-col'>
                                    <div className='text-white p-1 space-y-4 text-xl font-bold'>Idioma</div>
                                    <div>{idiomas[roteiro.languageId]}</div>
                                </div>
                                <div className='flex flex-col'>
                                    <div className='text-white p-1 space-y-4 text-xl font-bold'>Gênero</div>
                                    <div>{generos[roteiro.genderId]}</div>
                                </div>
                            </div>
                            <div className='text-xl font-bold text-white'>Notas do Autor:</div>
                            <span className='m-0'>{roteiro.notes}
                            </span><div className='text-xl font-bold text-white'>Referências:</div>
                            <span className='m-0'>{roteiro.refs}
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