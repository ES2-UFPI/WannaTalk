import React from 'react';
import '../styles/style.persona.css';
const Persona = () => {
    return(
        <div className='persona'>
            <div className='topo text-xl font-bold'>Personagens</div>
            <div className='personagens '>
                <input placeholder='Nome do Personagem'></input>
            </div>
        </div>
    )
}

export default Persona;