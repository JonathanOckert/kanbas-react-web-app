import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Kanbas from './Kanbas';
import Labs from './Labs';
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import store from "./Kanbas/store";
import { Provider } from "react-redux";

function App() {
  return (
      <HashRouter>
        <Provider store={store}>
          <div>
            <Routes>
              <Route path="/" element={<Navigate to="/Labs"/>}/>
              {/*<Route path="/Kanbas/*" element={<Kanbas />}/>*/}
              <Route path="/Labs/*" element={<Labs />}/>
            </Routes>
          </div>
        </Provider>
      </HashRouter>
  );
}

export default App;
