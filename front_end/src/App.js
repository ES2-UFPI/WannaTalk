import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScriptCreate from './pages/ScriptCreate'
import Home from './pages/Home'
import ConfigurarChat from './pages/configurarContextoChat';
import AdminPage from './pages/AdminPage';
import PraticarRoteiro from './pages/PraticarRoteiro';
import ScriptEditor from './components/ScriptEditor' //coloque pra testar 


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/criarRoteiro' element={<ScriptCreate />}/>
      <Route path='/editorRoteiro' element={<ScriptEditor />}/>{/*Coloque pra testar */}
      <Route path='/configurarChat' element={<ConfigurarChat/>}/>
      <Route path='/admin' element={<AdminPage />}/>
      <Route path='/praticarRoteiro/:scriptId' element={<PraticarRoteiro />} />
      </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;

