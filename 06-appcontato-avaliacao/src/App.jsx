import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import ContatoForm from './components/ContatoForm';
import ContatoList from './components/ContatoList';
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Menu />

      <Routes>
        <Route path="/" element={<ContatoList />} />
        <Route path="/novo" element={<ContatoForm />} />
        <Route path="/editar/:id" element={<ContatoForm />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
