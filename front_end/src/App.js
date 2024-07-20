import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScriptCreate from './pages/ScriptCreate'
import Home from './pages/Home'
import ConfigurarChat from './pages/configurarContextoChat';
import AdminPage from './pages/AdminPage';


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/criarRoteiro' element={<ScriptCreate />}/>
      <Route path='/configurarChat' element={<ConfigurarChat/>}/>
      <Route path='/admin' element={<AdminPage />}/>
      </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;

