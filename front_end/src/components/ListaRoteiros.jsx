import "../styles/style.listaRoteiros.css"
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Roteiro from './Roteiro'
import React from 'react';
function ListaRoteiros() {
    //console.log(roteiros); // Verifique se os dados estão sendo carregados

    const { scriptId } = useParams();
    const [script, setScript] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchScript = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/scripts`);
                console.log("conectado");
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

    return(
        <div className="listaRoteiros">
            {script.length > 0 ? (
                script.map(script => (
                  <Roteiro key={script.id} roteiro={script} />
                ))
            ): (
                <div>Nenhum Roteiro disponível</div>
            )}
        </div>

    );
}

export default ListaRoteiros; 