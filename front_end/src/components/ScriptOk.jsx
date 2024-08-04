import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa o hook useNavigate
import NavBar from './NavBar';
import 'tailwindcss/tailwind.css'; // Certifique-se de que o Tailwind CSS está importado

function ScriptOk() {
    const navigate = useNavigate(); // Hook para navegação

    useEffect(() => {
        // Configura o redirecionamento automático após 5 segundos
        const timer = setTimeout(() => {
            navigate('/'); // Altere '/menu' para o caminho do menu principal
        }, 5000);

        // Limpa o timer se o componente for desmontado antes do tempo
        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div>
            <NavBar/>
            <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50">
                <div className="bg-white p-8 rounded-lg shadow-lg text-center mt-10">
                    <svg
                        className="w-16 h-16 mx-auto text-green-500 mb-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M2 10a8 8 0 1116 0A8 8 0 012 10zm8 4a.75.75 0 01-.75-.75V7.75a.75.75 0 111.5 0v5.5a.75.75 0 01-.75.75zm-.75-4.75a.75.75 0 01.75-.75h.5a.75.75 0 010 1.5h-.5a.75.75 0 01-.75-.75z"
                            clipRule="evenodd"
                        />
                    </svg>
                    <h1 className="text-2xl font-bold text-green-600 mb-2">Parabéns!</h1>
                    <p className="text-lg text-gray-700">
                        Você criou um roteiro com sucesso. Você será redirecionado para o menu principal em breve.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ScriptOk;
