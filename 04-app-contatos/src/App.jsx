import Lista from "./pages/Lista";
import Formulario from "./pages/Formulario";

// Importação Nomeada (Quando importo mais de uma função)
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>

      <nav className="navbar bg-primary">
          <div className="container d-flex justify-content-between p-2">
              <h3 className="text-light mb-0 pb-0">APP de Contatos</h3>
              <nav>
                <Link to="/" className="btn btn-outline-light fw-bold me-3">Lista de contatos</Link>
                <Link to="/novo" className="btn btn-outline-light fw-bold me-3">Novo Contato</Link>
              </nav>
          </div>
      </nav>

      <div className="container pt-4">
          <Routes>
            <Route path="/" element={<Lista />} />
            <Route path="/novo" element={<Formulario />} />
          </Routes>
      </div>
    </Router>
  )
}


export default App;
