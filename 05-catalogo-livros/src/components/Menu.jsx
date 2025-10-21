import { Link } from "react-router-dom";
import logo from "./../assets/logo.png"

export default function Menu() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img src={logo} alt="logo" className="img-fluid" style={{ width: "240px" }} />
                </Link>

                <div className="navbar-nav navbar-menu d-flex justify-content-end">
                    <Link className="nav-item text-white" to="/">Listar</Link>
                    <Link className="nav-item text-white" to="/novo">Novo Livro</Link>
                </div>
            </div>
        </nav>
    );
}