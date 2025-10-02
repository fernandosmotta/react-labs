// Importação Padrão
import Calculadora from "./pages/Calculadora"


// Importação Nomeada (Quando importo mais de uma função)
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


function App() {
  
  // Criar a estrutura de rotas de navegação
  return (
    <Router>
        <div className="container text-center pt-3">

          <nav>
            <Link to="/" className="btn btn-outline-primary fw-bold me-3">Calculadora</Link>
          </nav>

          <Routes>
            <Route path="/" element={<Calculadora />} />
          </Routes>

        </div>
    </Router>
  );

}

export default App;