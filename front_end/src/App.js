import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScriptCreate from './pages/ScriptCreate'
import Home from './pages/Home'

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home />}/>
        <Route path='/criarRoteiro' element={<ScriptCreate />}/>
      </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
