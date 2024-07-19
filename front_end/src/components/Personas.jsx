import React, {useState} from 'react';
import '../styles/style.persona.css';

const Persona = () => {
    
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
        setConfirmedVoices(confirmedVoices.filter(v => v !== voice));
        setAvailableVoices([...availableVoices, voice]);
    };

    return(
        <div className='persona'>
            <div className='topo text-xl font-bold'>Personagens</div>
            <div className='personagens'>
                <input id='nome' type='text' value={selectedName} onChange={handleNameChange} placeholder='Nome do Personagem' className='text-black min-h-[60px] rounded-lg pl-2'></input>
                { selectedName && (<select id='voz' value={selectedVoice} onChange={handleSelectChange} className='text-[#727171] bg-white rounded-lg p-2'>
                    <option value="" disabled>Escolha uma voz</option>
                    {availableVoices.map((voice, index) => (
                        <option key={index} value={voice}>{voice}</option>
                    ))}
                </select>)}
                <button type='button' onClick={handleConfirm} disabled={!selectedVoice || !selectedName} className='bg-[#8CEAFF] text-[#727171] rounded-lg min-h-[60px] p-2'>Adicionar</button>
            </div>
            <div className='balao bg-white p-2 rounded-lg'></div>
        </div>
    )
};

export default Persona;