import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const characterColors = {
    1: 'bg-blue-100',   // Cor para o personagem com ID 1
    2: 'bg-green-100',  // Cor para o personagem com ID 2
    3: 'bg-yellow-100', // Cor para o personagem com ID 3
    // Adicione mais cores conforme necessário
};

const PraticarRoteiro = () => {
    const { scriptId } = useParams();
    const [script, setScript] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedCharacterId, setSelectedCharacterId] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const fetchScript = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/scripts/${scriptId}`);
                setScript(response.data);
                setLoading(false);
            } catch (err) {
                console.error('Erro ao buscar script:', err);
                setError('Erro ao buscar script');
                setLoading(false);
            }
        };

        fetchScript();
    }, [scriptId]);

    if (loading) return <div>Carregando...</div>;
    if (error) return <div>{error}</div>;
    if (!script) return <div>Script não encontrado</div>;

    const handleCharacterChange = (e) => {
        setSelectedCharacterId(parseInt(e.target.value));
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="min-h-screen flex flex-col items-center bg-gray-100 p-6">
            <h1 className="w-full max-w-4xl py-3  justify-between  mt-8 text-3xl font-bold mb-6 rounded-xl shadow-xl text-center text-white bg-[#00B2FF]">{script.title}</h1>
            
            <div className='w-full max-w-2xl py-3 flex justify-between mb-6 space-x-10'>
            <div className="w-1/2">
                {/* Botão para abrir o modal Infrmações*/}
            <button
                onClick={openModal}
                className="bg-blue-500 text-white py-2 px-4 rounded-lg"
            >
                Ver Informações
            </button>
            </div>
            <div className="w-1/2">
                {/* Botão para abrir o modal do Dialogo*/}
            <button
                onClick={openModal}
                className="bg-blue-500 text-white py-2 px-4 rounded-lg"
            >
                Ver Informações
            </button>
            </div>
            </div>

            <div className="w-full max-w-2xl py-3 bg-white shadow-md rounded-lx p-6 mb-6">
                <h2 className="text-2xl font-semibold mb-4">Escolha seu Personagem</h2>
                <select
                    value={selectedCharacterId || ''}
                    onChange={handleCharacterChange}
                    className="p-2 border border-gray-300 rounded-lg"
                >
                    <option value="">Selecione um personagem</option>
                    {Object.keys(characterColors).map(characterId => (
                        <option key={characterId} value={characterId}>
                            Personagem {characterId}
                        </option>
                    ))}
                </select>
            </div>

            <div className="w-full max-w-2xl py-3 bg-white shadow-md rounded-lg p-6 mb-6">
                <h2 className="text-2xl font-semibold mb-4">Diálogos</h2>
                {script.dialoguesList.length === 0 ? (
                    <p>Não há diálogos disponíveis.</p>
                ) : (
                    <div>
                        {script.dialoguesList
                            .filter(dialogue => !selectedCharacterId || dialogue.characterId === selectedCharacterId)
                            .map((dialogue, index) => (
                                <div
                                    key={index}
                                    className={`mb-4 p-4 rounded-lg ${characterColors[dialogue.characterId] || 'bg-gray-200'}`}
                                >
                                    <p><strong>Personagem {dialogue.characterId}:</strong></p>
                                    <p>{dialogue.dialogue}</p>
                                </div>
                            ))}
                    </div>
                )}
            </div>

            

            {/* Modal */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center"
                    onClick={closeModal}
                >
                    <div
                        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl"
                        onClick={(e) => e.stopPropagation()} // Impede o clique dentro do modal de fechar o modal
                    >
                        <h2 className="text-2xl font-semibold mb-4">{script.title}</h2>
                        <p className="text-lg mb-4"><strong>Resumo:</strong> {script.summary}</p>
                        <p className="text-lg mb-4"><strong>Notas:</strong> {script.notes}</p>
                        <p className="text-lg mb-4"><strong>Referências:</strong> {script.refs}</p>
                        <p className="text-lg mb-4"><strong>Dificuldade ID:</strong> {script.difficultyId}</p>
                        <p className="text-lg mb-4"><strong>Gênero ID:</strong> {script.genderId}</p>
                        <p className="text-lg mb-4"><strong>Idioma ID:</strong> {script.languageId}</p>
                        <button
                            onClick={closeModal}
                            className="bg-red-500 text-white py-2 px-4 rounded-lg mt-4"
                        >
                            Fechar
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PraticarRoteiro;
