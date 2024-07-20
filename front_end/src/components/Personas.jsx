import React, {useState} from 'react';
import '../styles/style.persona.css';

const Persona = () => {
    const voiceColors = {
        'Voz 1': 'bg-[#FF3390]',
        'Voz 2': 'bg-[#00B2FF]',
        'Voz 3': 'bg-[#FFB800]'
    };

    const [availableVoices, setAvailableVoices] = useState(['Voz 1', 'Voz 2', 'Voz 3']);
    const [selectedVoice, setSelectedVoice] = useState('');
    const [selectedName, setSelectedName] = useState('');
    const [confirmedVoices, setConfirmedVoices] = useState([]);

    const handleSelectChange = (event) => {
        setSelectedVoice(event.target.value);
    };

    const handleNameChange = (event) => {
        setSelectedName(event.target.value);
    };

    const handleConfirm = () => {
        setAvailableVoices(availableVoices.filter(voice => voice !== selectedVoice));
        setConfirmedVoices([...confirmedVoices, { voice: selectedVoice, name: selectedName }]);
        setSelectedVoice('');
        setSelectedName('');
    };

    const handleRevert = (voice) => {
        const voiceToRevert = confirmedVoices.find(v => v.voice === voice);
        if (voiceToRevert) {
            setConfirmedVoices(confirmedVoices.filter(v => v.voice !== voice));
            setAvailableVoices([...availableVoices, voice]);
        }
    };

    return(
        <div className='persona w-full py-2 px-3  rounded-2xl'>
            <div className="block text-white text-sm font-bold mb-2">Personagens</div>
            <div className='personagens my-5 space-x-2 flex items-stretch '>
                <input id='nome' type='text' value={selectedName} onChange={handleNameChange} placeholder='Nome do Personagem' className='text-black min-h-[20px] rounded-lg pl-2 ' ></input>
                { selectedName && (<select id='voz' value={selectedVoice} onChange={handleSelectChange} className='text-[#727171] bg-white rounded-lg p-2'>
                    <option value="" disabled>Escolha uma voz</option>
                    {availableVoices.map((voice, index) => (
                        <option key={index} value={voice}>{voice}</option>
                    ))}
                </select>)}
                <button type='button' onClick={handleConfirm} disabled={!selectedVoice || !selectedName} className='bg-[#8CEAFF] text-[#727171] rounded-lg min-h-[10px] p-2'>Adicionar</button>
            </div>

            <div className='balao'>
                {confirmedVoices.length > 0 && (
                    <div className='bg-white p-2 rounded-lg flex flex-row'>
                        {confirmedVoices.map((item, index) => (
                            <div key={index} className='flex flex-row items-center justify-between mr-2 mb-2'>
                                <button onClick={() => handleRevert(item.voice)} className={`${voiceColors[item.voice]} flex flex-row min-h-[60px] py-1 px-2 pl-2 items-center rounded`}>
                                    {item.name} ({item.voice})
                                    <svg className="ml-2 w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                        <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm7.707-3.707a1 1 0 0 0-1.414 1.414L10.586 12l-2.293 2.293a1 1 0 1 0 1.414 1.414L12 13.414l2.293
                                        2.293a1 1 0 0 0 1.414-1.414L13.414 12l2.293-2.293a1 1 0 0 0-1.414-1.414L12 10.586 9.707 8.293Z" clip-rule="evenodd"/>
                                    </svg>
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
};

export default Persona;