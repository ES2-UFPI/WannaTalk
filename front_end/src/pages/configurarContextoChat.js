import React from 'react';
import NavBar from '../components/NavBar';
import ConfigurarChat from '../components/configuracaoContexto';


const configurarContextoChat = () => {
  return (
    <div>
      <div>
        <NavBar/>
      </div>
      <ConfigurarChat/>
    </div>
  );
}

export default configurarContextoChat;
