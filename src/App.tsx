import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Kanbas from './Kanbas';
import Labs from './Labs';
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
      <HashRouter>
        <div>
          <Routes>
            <Route path="/" element={<Navigate to="Kanbas"/>}/>
            <Route path="/Kanbas/*" element={<Kanbas />}/>
            <Route path="/Labs/*" element={<Labs />}/>
          </Routes>
        </div>
      </HashRouter>
  );
}

export default App;
