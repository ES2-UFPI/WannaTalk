import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScriptCreate from './pages/ScriptCreate'
import Home from './pages/Home'
import ConfigurarChat from './pages/configurarContextoChat';
import Teste from './pages/Teste';


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/criarRoteiro' element={<ScriptCreate />}/>
      <Route path='/configurarChat' element={<ConfigurarChat/>}/>
      <Route path='/teste' element={<Teste/>}/>
      </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;

