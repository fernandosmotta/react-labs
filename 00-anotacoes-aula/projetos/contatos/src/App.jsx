// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListaContatos from './components/ListaContatos';
import AdicionarEditarContato from './components/AdicionarEditarContato';
import UserRandom from './components/UserRandom';
// import RapidApi from './components/RapidApi'

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route exact path="/" element={<ListaContatos />} />
        <Route path="/contato/:id" element={<AdicionarEditarContato />} />
        <Route path="/contato" element={<AdicionarEditarContato />} />
        <Route path="/usuario" element={<UserRandom />} />
        {/* <Route path="/rapidapi" element={<RapidApi />} /> */}
      </Routes>
    </Router>
  );
}

export default App;