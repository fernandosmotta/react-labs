import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Categorias from './pages/Categorias';
import FormularioCategoria from './pages/FormularioCategoria';
import Veiculos from './pages/Veiculos';
import Site from './pages/Site';
import FormularioVeiculo from './pages/FormularioVeiculo';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'; // Caso queira adicionar estilos personalizados

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<App />} /> */}
        <Route path="/" element={<Categorias />} />
        <Route path="/categorias" element={<Categorias />} />
        <Route path="/categorias/nova" element={<FormularioCategoria />} />
        <Route path="/categorias/editar/:id" element={<FormularioCategoria />} />
        <Route path="/veiculos" element={<Veiculos />} />
        <Route path="/veiculos/novo" element={<FormularioVeiculo />} />
        <Route path="/veiculos/editar/:id" element={<FormularioVeiculo />} />
        <Route path="/site" element={<Site />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);