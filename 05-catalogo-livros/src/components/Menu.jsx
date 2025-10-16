import { Link } from "react-router-dom";

export default function Menu() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
            <div className="container text-white">
                <Link className="navbar-brand text-white" to="/">Catálogo de Livros</Link>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" 
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Menu">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse navbar-menu d-flex justify-content-end" id="navbarNav">
                    <ul className="navbar-nav text-end">
                        <Link className="nav-item text-white" to="/">Listar</Link>
                        <Link className="nav-item text-white" to="/novo">Novo Livro</Link>
                    </ul>
                </div>
            </div>
        </nav>
    );
}