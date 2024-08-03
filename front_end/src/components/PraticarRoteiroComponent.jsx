import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { MicrophoneIcon, SpeakerWaveIcon } from '@heroicons/react/24/solid';

const characterColors = {
    1: 'bg-blue-100',
    2: 'bg-green-100',
    3: 'bg-yellow-100',
    // Adicione mais cores conforme necessário
};

const characterVoiceMap = {
    1: 'Microsoft Daniel - Portuguese (Brazil)',
    2: 'Microsoft Maria - Portuguese (Brazil)',
    // Adicione outras vozes conforme necessário
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
    const [activeMicrophone, setActiveMicrophone] = useState(null);
    const [recognition, setRecognition] = useState(null);
    const [voices, setVoices] = useState([]);

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

    useEffect(() => {
        if ('webkitSpeechRecognition' in window) {
            const recognitionInstance = new window.webkitSpeechRecognition();
            recognitionInstance.lang = 'pt-BR';
            recognitionInstance.interimResults = false;
            recognitionInstance.onresult = (event) => {
                const transcript = event.results[0][0].transcript;
                console.log(`Transcript: ${transcript}`);
                // Aqui você pode comparar o transcript com o texto do diálogo
            };
            recognitionInstance.onend = () => setActiveMicrophone(null);
            setRecognition(recognitionInstance);
        } else {
            alert('Speech Recognition não é suportado neste navegador.');
        }
    }, []);

    useEffect(() => {
        const updateVoices = () => {
            const voicesList = speechSynthesis.getVoices();
            setVoices(voicesList);
            console.log('Vozes disponíveis:', voicesList);
        };

        updateVoices(); // Atualiza a lista de vozes imediatamente

        // Atualiza a lista de vozes quando estiver disponível
        speechSynthesis.onvoiceschanged = updateVoices;
    }, []);

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

    const handleNextDialogue = () => {
        if (currentDialogueIndex < script.dialoguesList.length - 1) {
            setCurrentDialogueIndex(currentDialogueIndex + 1);
        }
    };

    const handleMicrophoneClick = (characterId) => {
        console.log(`Microphone button clicked for dialogue ID: ${characterId}`);
        if (activeMicrophone === characterId) {
            recognition.stop();
            console.log('Stopping recognition');
            setActiveMicrophone(null);
        } else {
            recognition.start();
            console.log('Starting recognition');
            setActiveMicrophone(characterId);
        }
        console.log(`activeMicrophone state: ${activeMicrophone}`);
    };

    const handlePlayAudio = (dialogue) => {
        const utterance = new SpeechSynthesisUtterance(dialogue.dialogue);
        const voiceName = characterVoiceMap[dialogue.characterId] || 'Google Português do Brasil';
        console.log(`Character ID: ${dialogue.characterId}`)
        const selectedVoice = voices.find(v => v.name === voiceName) || voices[0];
        utterance.voice = selectedVoice;
        utterance.onend = () => {
            console.log('Audio playback finished');
            
        };
        console.log(`Usando a voz: ${selectedVoice.name}`);
        speechSynthesis.cancel(); // Parar qualquer reprodução anterior
        speechSynthesis.speak(utterance);
    };

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
                    <div className="block text-white text-sm font-bold mb-2">Escolha seu Personagem</div>
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

                                    <div className="flex justify-between mt-4">
                                        {selectedCharacterId === dialogue.characterId && (
                                            <button
                                                onClick={() => handleMicrophoneClick(dialogue.characterId)}
                                                className={`py-2 px-4 rounded-full shadow-md ${activeMicrophone === dialogue.characterId ? 'bg-red-500' : 'bg-green-500'} text-white`}
                                            >
                                                <MicrophoneIcon className="h-6 w-6 text-white" />
                                            </button>
                                        )}
                                        <button
                                            onClick={() => handlePlayAudio(dialogue)}
                                            className="py-2 px-4 rounded-full shadow-md bg-blue-500 text-white"
                                        >
                                            <SpeakerWaveIcon className="h-6 w-6 text-white" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <button 
                    onClick={handleNextDialogue}
                    disabled={currentDialogueIndex >= script.dialoguesList.length - 1}
                    className={`w-full bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 ${currentDialogueIndex >= script.dialoguesList.length - 1 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                >
                    Continuar
                </button>
            </div>

            {/* Informações Modal */}
            {isInfoModalOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                    onClick={closeInfoModal}
                >
                    <div className="bg-white p-6 rounded-lg" onClick={(e) => e.stopPropagation()}>
                        <h2 className="text-2xl font-bold mb-4">Informações do Roteiro</h2>
                        <p>{script.description}</p>
                        <button
                            onClick={closeInfoModal}
                            className="mt-4 py-2 px-4 bg-blue-500 text-white rounded-lg"
                        >
                            Fechar
                        </button>
                    </div>
                </div>
            )}

            {/* Diálogo Completo Modal */}
            {isDialogModalOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                    onClick={closeDialogModal}
                >
                    <div className="bg-white p-6 rounded-lg max-w-2xl w-full" onClick={(e) => e.stopPropagation()}>
                        <h2 className="text-2xl font-bold mb-4">Roteiro Completo</h2>
                        <div className="overflow-y-auto max-h-[400px]">
                            {script.dialoguesList.map((dialogue, index) => (
                                <div key={index} className="mb-4">
                                    <p><strong>Personagem {dialogue.characterId}:</strong> {dialogue.dialogue}</p>
                                </div>
                            ))}
                        </div>
                        <button
                            onClick={closeDialogModal}
                            className="mt-4 py-2 px-4 bg-blue-500 text-white rounded-lg"
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
