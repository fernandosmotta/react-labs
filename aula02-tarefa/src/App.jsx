// Importação Padrão
import TarefasSimples from "./pages/TarefasSimples"
import TarefasComStatus from "./pages/TarefasComStatus"
import ListaSupermercado from "./pages/ListaSupermercado";

// Importação Nomeada (Quando importo mais de uma função)
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


function App() {
  
  // Criar a estrutura de rotas de navegação
  return (
    <Router>
        <div className="container text-center pt-3">

          <nav>
            <Link to="/" className="btn btn-outline-primary fw-bold me-3">Tarefas Simples</Link>
            <Link to="/status" className="btn btn-outline-secondary fw-bold me-3">Tarefas com Status</Link>
            <Link to="/lista-supermercado" className="btn btn-outline-secondary fw-bold">Lista de Supermercado</Link>
          </nav>

          <Routes>
            <Route path="/" element={<TarefasSimples />} />
            <Route path="/status" element={<TarefasComStatus />} />
            <Route path="/lista-supermercado" element={<ListaSupermercado />} />
          </Routes>

        </div>
    </Router>
  );

}

export default App;