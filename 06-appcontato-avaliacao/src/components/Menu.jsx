import { Link } from "react-router-dom";
import "./../App.css";

export default function Menu() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <h2>Meus Contatos</h2>
                </Link>

                <div className="navbar-nav navbar-menu d-flex justify-content-end">
                    <Link className="nav-item text-white" to="/">Listar</Link>
                    <Link className="nav-item text-white" to="/novo">Novo Contato</Link>
                </div>
            </div>
        </nav>
    );
}