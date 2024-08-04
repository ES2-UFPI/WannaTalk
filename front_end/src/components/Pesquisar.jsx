import React, { useState } from "react";
import Select from "react-select";

const Pesquisar = () => {
    const [title, setTitle] = useState('');
    const [difficulty, setDifficulty] = useState('');
    const [reference, setReference] = useState('');
    const [selectedLanguages, setSelectedLanguages] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);

    const idiomas = [
        { value: "en", label: "English" },
        { value: "es", label: "Spanish" },
        { value: "fr", label: "French" },
        { value: "de", label: "German" },
        { value: "pt", label: "Portuguese" },
    ];

    const difs = {
        1: 'Fácil',
        2: 'Médio',
        3: 'Difícil'
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title) {
            alert('É obrigatório o preenchimento do título');
        }

        setModalOpen(false);
    };

    const handleLanguageChange = (selectedOptions) => {
        setSelectedLanguages(selectedOptions || []);
    };

    return (
        <div className="bg-white text-black rounded-xl min-h-[10px] m-2 p-2 relative flex items-center justify-between">
            <button onClick={() => setModalOpen(true)} className="text-black flex flex-row" type='button'>
                <svg class="w-6 h-6 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
                </svg>

                Pesquisar</button>

            {modalOpen && (
                <div id='pesquisa' className='fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50'>
                    <form onSubmit={handleSubmit} className="relative p-4 w-full max-w-2xl max-h-full rounded-lg shadow bg-[#163172]">
                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-white">
                            <h3 className="text-xl font-bold text-white">
                                Pesquisar
                            </h3>
                            <button
                                type="button"
                                className="text-white bg-transparent hover:bg-white hover:text-red-500 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center"
                                onClick={() => setModalOpen(false)}>
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        <div className="text-white p-4 md:p-5 space-y-4">
                            <div className='text-xl font-bold text-white'>Título:</div>
                            <input
                                className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-[#727171] leading-tight focus:outline-none focus:shadow-outline"
                                id="titulo"
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                        <div className="text-white p-4 md:p-5 space-y-4">
                            <h3 className="text-xl font-bold text-white">
                                Referência:
                            </h3>
                            <input
                                className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-[#727171] leading-tight focus:outline-none focus:shadow-outline"
                                id="referencia"
                                type="text"
                                value={reference}
                                onChange={(e) => setReference(e.target.value)}
                            />
                        </div>
                        <div className="text-white p-4 md:p-5 space-y-4">
                            <h3 className="text-xl font-bold text-white">
                                Dificuldade:
                            </h3>
                            <select
                                className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-[#727171] leading-tight focus:outline-none focus:shadow-outline"
                                id="dificuldade"
                                value={difficulty}
                                onChange={(e) => setDifficulty(e.target.value)}
                            >
                                <option value="">Select Difficulty</option>
                                {Object.entries(difs).map(([value, label]) => (
                                    <option key={value} value={value}>{label}</option>
                                ))}
                            </select>
                        </div>
                        <div className="text-white p-4 md:p-5 space-y-4">
                            <h3 className="text-xl font-bold text-white">
                                Idiomas:
                            </h3>
                            <Select
                                isMulti
                                options={idiomas}
                                value={selectedLanguages}
                                onChange={handleLanguageChange}
                                className="basic-multi-select"
                                classNamePrefix="select"
                                placeholder="Select Languages"
                            />
                            {selectedLanguages.length > 0 && (
                                <p className="mt-2 text-white">
                                    Idiomas Selecionados:
                                    {selectedLanguages.map(lang => lang.label).join(",")}
                                </p>
                            )}
                        </div>
                        <div className="flex items-center justify-center p-4 md:p-5 border-t rounded-b border-white">
                            <button
                                type="submit"
                                className="bg-white h-[48px] pl-6 pr-6 rounded-[1.25rem] text-[1.05rem] font-[600]">
                                Pesquisar
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    )
};

export default Pesquisar;