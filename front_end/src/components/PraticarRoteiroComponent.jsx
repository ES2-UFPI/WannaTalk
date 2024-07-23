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
    const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
    const [isDialogModalOpen, setIsDialogModalOpen] = useState(false);
    const [currentDialogueIndex, setCurrentDialogueIndex] = useState(0);

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

    const openInfoModal = () => {
        setIsInfoModalOpen(true);
    };

    const closeInfoModal = () => {
        setIsInfoModalOpen(false);
    };

    const openDialogModal = () => {
        setIsDialogModalOpen(true);
    };

    const closeDialogModal = () => {
        setIsDialogModalOpen(false);
    };

    const handleNextDialogue = () => { // Proximo dialogo
        if (currentDialogueIndex < script.dialoguesList.length - 1) {
            setCurrentDialogueIndex(currentDialogueIndex + 1);
        }
    }

    return (
        <div className="min-h-screen flex flex-col items-center bg-gray-100 p-6">
            <h1 className="w-full max-w-4xl py-3 mt-8 text-3xl font-bold mb-6 rounded-xl shadow-xl text-center text-white bg-[#00B2FF]">
                {script.title}
            </h1>
            <div className="w-full max-w-2xl flex justify-between mb-6 space-x-10">
                <button
                    onClick={openInfoModal}
                    className="w-1/2 py-2 px-10 border rounded-xl shadow-sm text-sm font-medium text-[#727171] bg-transparent hover:bg-[#f3f5f5] transition ease-in-out duration-150 transform hover:scale-105"
                   
                >
                    Ver Informações do Roteiro
                </button>

                <button
                    onClick={openDialogModal}
                    className="w-1/2 py-2 px-10 border rounded-xl shadow-sm text-sm font-medium text-[#727171] bg-transparent hover:bg-[#f3f5f5] transition ease-in-out duration-150 transform hover:scale-105"
                >
                    Ver Roteiro Completo
                </button>
            </div>
            <div className="w-full max-w-2xl justify-center p-8 bg-[#00B2FF] rounded-xl shadow-xl">
                <div className="w-full max-w-2xl py-3 bg-[#03A0E4] shadow-md rounded-xl p-6 mb-6">
                    <div className="block text-white text-sm font-bold mb-2">Escolha seu Personagens</div>
                    <select
                        value={selectedCharacterId || ''}
                        onChange={handleCharacterChange}
                        className="my-3 flex items-stretch space-x-2 py-2 px-10 rounded-xl text-[#727171] border leading-tight focus:outline-none focus:shadow-outline"
                    >
                        <option value="">Selecione um personagem</option>
                        {Object.keys(characterColors).map(characterId => (
                            <option key={characterId} value={characterId}>
                                Personagem {characterId}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="w-full max-w-2xl py-3 bg-white shadow-md rounded-xl p-6 mb-6 overflow-y-auto max-h-[400px]">
                    <h2 className="text-2xl font-semibold mb-4">Diálogos</h2>
                    {script.dialoguesList.length === 0 ? (
                        <p>Não há diálogos disponíveis.</p>
                    ) : (
                        <div>
                            {script.dialoguesList.slice(0, currentDialogueIndex + 1).map((dialogue, index) => (
                                <div
                                key={index}
                                className={`mb-4 p-6 rounded-2xl shadow-lg ${characterColors[dialogue.characterId] || 'bg-gradient-to-r from-blue-300 to-blue-500'} relative`}
                            >
                                <p><strong>Personagem {dialogue.characterId}:</strong></p>
                                <p className="pt-4">{dialogue.dialogue}</p>
                                {selectedCharacterId === dialogue.characterId && (
                                    <button
                                        onClick={() => console.log(`Testando diálogo ${dialogue.dialogue}`)}
                                        className="bg-green-500 text-white py-1 px-2 rounded-lg mt-2 shadow-md"
                                    >
                                        Testar
                                    </button>
                                )}
                            </div>
                            ))}
                        </div>
                    )}
                </div>
                <button 
                    onClick={handleNextDialogue}
                    disabled={currentDialogueIndex >= script.dialoguesList.length - 1}
                    className={`w-full max-w-2xl  bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 ${currentDialogueIndex >= script.dialoguesList.length - 1 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                >
                    Continuar
                </button>
            </div>

            {/* Informações Modal */}
            {isInfoModalOpen && (
                <div
                    className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center"
                    onClick={closeInfoModal}
                >
                    <div
                        className="bg-white p-6 shadow-lg w-full max-w-2xl rounded-xl relative"
                        onClick={(e) => e.stopPropagation()} // Impede o clique dentro do modal de fechar o modal
                    >
                        <span
                            onClick={closeInfoModal}
                            className="absolute top-2 right-2 text-[#727171] cursor-pointer text-2xl z-50"
                        >
                            &times;
                        </span>

                        <h2 className="text-2xl font-semibold mb-4">{script.title}</h2>
                        <p className="text-lg mb-4"><strong>Resumo:</strong> {script.summary}</p>
                        <p className="text-lg mb-4"><strong>Notas:</strong> {script.notes}</p>
                        <p className="text-lg mb-4"><strong>Referências:</strong> {script.refs}</p>
                        <p className="text-lg mb-4"><strong>Dificuldade ID:</strong> {script.difficultyId}</p>
                        <p className="text-lg mb-4"><strong>Gênero ID:</strong> {script.genderId}</p>
                        <p className="text-lg mb-4"><strong>Idioma ID:</strong> {script.languageId}</p>
                    </div>
                </div>
            )}

            {/* Diálogos Modal */}
            {isDialogModalOpen && (
                <div
                    className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center"
                    onClick={closeDialogModal}
                >
                    <div
                        className="bg-white p-6 rounded-xl shadow-lg w-full max-w-2xl relative"
                        onClick={(e) => e.stopPropagation()} // Impede o clique dentro do modal de fechar o modal
                    >
                        {/* Botão de fechar no canto superior direito */}
                        <span
                            onClick={closeDialogModal}
                            className="absolute top-2 right-2 text-[#727171] cursor-pointer text-2xl z-50"
                        >
                            &times;
                        </span>

                        <h2 className="text-2xl font-semibold mb-4">Diálogos</h2>
                        {script.dialoguesList.length === 0 ? (
                            <p>Não há diálogos disponíveis.</p>
                        ) : (
                            <div>
                                {script.dialoguesList.map((dialogue, index) => (
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
                </div>
            )}
        </div>
    );
};

export default PraticarRoteiro;
