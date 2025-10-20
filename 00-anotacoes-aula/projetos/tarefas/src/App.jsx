import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TarefasSimples from "./pages/TarefasSimples";
import ListaSupermercado from "./pages/ListaSupermercado";
import TarefasKanban from "./pages/TarefasKanban";

export default function App() {
  return (
    <Router>
      <div className="container mt-4">
        <nav className="mb-3 text-center">
          <Link to="/" className="btn btn-outline-primary btn-sm me-2">Tarefas Simples</Link>
          <Link to="/supermercado" className="btn btn-outline-success btn-sm me-2">Lista de supermercado</Link>
          <Link to="/kanban" className="btn btn-outline-success btn-sm">Tarefas estilo Kanban</Link>
        </nav>

        <Routes>
          <Route path="/" element={<TarefasSimples />} />
          <Route path="/supermercado" element={<ListaSupermercado />} />
          <Route path="/kanban" element={<TarefasKanban />} />
        </Routes>
        
      </div>
    </Router>
  );
}
