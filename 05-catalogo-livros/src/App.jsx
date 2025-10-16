import { useState } from "react";

import Menu from "./components/Menu.jsx";
import LivroForm from "./components/LivroForm.jsx";
import LivroList from "./components/LivroList.jsx";
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {


  return (
    <BrowserRouter>
      <Menu />

      <Routes>
        <Route path="/" element={<LivroList />} />
        <Route path="/novo" element={<LivroForm />} />
        <Route path="/editar/:id" element={<LivroForm />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
