import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScriptCreate from './pages/ScriptCreate'
import Home from './pages/Home'
import ConfigurarChat from './pages/configurarContextoChat';
import EscolherRoteiro from './pages/EscolherRoteiro';
import AdminPage from './pages/AdminPage';
import PraticarRoteiro from './pages/PraticarRoteiro';
import ScriptSearch from './components/ScriptSearch' //coloque pra testar 
import ScriptEditor from './components/ScriptEditor';


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/criarRoteiro' element={<ScriptCreate />}/>
      <Route path='/pesquisarRoteiro' element={<ScriptSearch />}/>{/*Coloque pra testar */}
      <Route path='/configurarChat' element={<ConfigurarChat/>}/>
      <Route path='/escolherRoteiro' element={<EscolherRoteiro/>}/>
      <Route path='/admin' element={<AdminPage />}/>
      <Route path='/praticarRoteiro/:scriptId' element={<PraticarRoteiro />} />
      <Route path='/dialogo' element={<ScriptEditor/>} />
      </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;

