import './App.css';
import Header from './componentes/Header';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ListaContatos from './componentes/ListaContatos';
import AdicionarEditarContato from './componentes/AdicionarEditarContato';
import UserRandom from './componentes/UserRandom';

function App() {
  return (
    <div className="container-fluid">
      <Header />
      {/* Menu de navegação */}
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/contato">Adicionar Contato</a></li>
          <li><a href="/usuario">Usuário Aleatório</a></li>
        </ul>
      </nav>

      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route exact path="/" element={<ListaContatos />} />
          <Route path="/contato/:id" element={<AdicionarEditarContato />} />
          <Route path="/contato" element={<AdicionarEditarContato />} />
          <Route path="/usuario" element={<UserRandom />} />
          {/* Redirecionamento se a rota não existir */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

