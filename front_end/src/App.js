import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScriptCreate from './pages/ScriptCreate'
import Home from './pages/Home'
import ViewData from './pages/ViewData';
import TesteForm from './pages/TestForm';

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
