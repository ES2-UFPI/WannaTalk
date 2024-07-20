import React from 'react';
import ScriptForm from '../components/ScriptCreateForm';
import NavBar from '../components/NavBar';

const CadastroRoteiroPage = () => {
  return (
    <div>
      <div>
        <NavBar/>
      </div>
      <h1>Cadastro de Roteiro</h1>
      <ScriptForm />
    </div>
  );
}

export default CadastroRoteiroPage;
