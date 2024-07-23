import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const PraticarRoteiro = () => {
    const { scriptId } = useParams();
    const [script, setScript] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-3xl font-bold mb-6 text-center">Detalhes do Roteiro</h1>
            
            <div className="bg-white shadow-md rounded-lg p-6 mb-6">
                <h2 className="text-2xl font-semibold mb-4">{script.title}</h2>
                <p className="text-lg mb-4"><strong>Resumo:</strong> {script.summary}</p>
                <p className="text-lg mb-4"><strong>Notas:</strong> {script.notes}</p>
                <p className="text-lg mb-4"><strong>Referências:</strong> {script.refs}</p>
                <p className="text-lg mb-4"><strong>Dificuldade ID:</strong> {script.difficultyId}</p>
                <p className="text-lg mb-4"><strong>Gênero ID:</strong> {script.genderId}</p>
                <p className="text-lg mb-4"><strong>Idioma ID:</strong> {script.languageId}</p>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6">
                <h2 className="text-2xl font-semibold mb-4">Diálogos</h2>
                {script.dialoguesList.length === 0 ? (
                    <p>Não há diálogos disponíveis.</p>
                ) : (
                    <div>
                        {script.dialoguesList.map((dialogue, index) => (
                            <div key={index} className="mb-4">
                                <p><strong>Personagem {dialogue.characterId}:</strong> {dialogue.dialogue}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default PraticarRoteiro;
